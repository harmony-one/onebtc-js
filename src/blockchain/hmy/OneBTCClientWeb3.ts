import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { getAddress } from '@harmony-js/crypto';
import { OneBtc } from '../out/OneBtc';
import IOneBTCClient, {
  IssueDetails,
  RedeemDetails,
  RedeemStatus,
  SendTxCallback,
  TransactionReceipt,
} from './types';
import { BTCNodeClient } from '../../btcNode';
import { Transaction } from 'bitcoinjs-lib';
import utils from 'web3-utils';
import BN from 'bn.js';
import { getUint32Binary } from './helpers';

interface OneBTCClientWeb3Params {
  web3: Web3;
  useMetamask?: boolean;

  contractAddress: string;
  nodeURL: string;
  btcNodeClient: BTCNodeClient;
  options?: { gasPrice: number; gasLimit: number };
}

const emptyFunction = () => {};

export class OneBTCClientWeb3 implements IOneBTCClient {
  public web3: Web3;

  public contract: Contract;
  public btcNodeClient: BTCNodeClient;

  public contractAddress: string;
  private options = { gasPrice: 1000000000, gasLimit: 6721900 };
  private _useMetamask = false;
  private _accountAddress: string = null;

  constructor(params: OneBTCClientWeb3Params) {
    this.web3 = params.web3;
    this.contractAddress = params.contractAddress;

    this.btcNodeClient = params.btcNodeClient;

    this._useMetamask = params.useMetamask || false;

    if (params.options) {
      this.options = params.options;
    }
  }

  init = async () => {
    this.contract = new this.web3.eth.Contract(
      OneBtc.abi,
      this.contractAddress,
    );
  };

  async setAccount(privateKey: string) {
    const ethUserAccount = await this.web3.eth.accounts.privateKeyToAccount(
      privateKey,
    );

    this.web3.eth.accounts.wallet.add(ethUserAccount);
    this.web3.eth.defaultAccount = ethUserAccount.address;

    this._accountAddress = ethUserAccount.address;
  }

  getUserAddress(): string {
    return this._accountAddress;
  }

  getGasPrice = async () => {
    return new BN(await this.web3.eth.getGasPrice()).mul(new BN(1));
  };

  setUseOneWallet = (value: boolean) => value;
  setUseMathWallet = (value: boolean) => value;

  setUseMetamask = (value: boolean) => (this._useMetamask = value);

  getSenderAddress = async (): Promise<string> => {
    if (this._useMetamask) {
      // @ts-expect-error TS2304: Cannot find name 'ethereum'.
      const accounts = await ethereum.enable();
      return accounts[0];
    }

    return this.web3.eth.defaultAccount;
  };

  private _prepareAddress(address: string): string {
    return getAddress(address).checksum;
  }

  requestIssue = async (
    amount: number,
    requesterAddress: string,
    oneAmount: string,
    sendTxCallback?: (hash: string) => void,
  ): Promise<IssueDetails> => {
    const addressHex = this._prepareAddress(requesterAddress);
    const senderAddress = await this.getSenderAddress();

    const gasPrice = await this.getGasPrice();

    return await this.contract.methods
      .requestIssue(utils.toBN(amount), addressHex)
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
        value: utils.toBN(oneAmount),
      })
      .on('transactionHash', sendTxCallback || emptyFunction)
      .then((txReceipt: TransactionReceipt) => {
        return this.getIssueDetails(txReceipt.transactionHash);
      });
  };

  executeIssue = async (
    requesterAddress: string,
    issueId: string,
    btcTxHash: string,
    vaultBtcAddress: string,
    sendTxCallback?: (hash: string) => void,
  ): Promise<TransactionReceipt> => {
    const addressHex = this._prepareAddress(requesterAddress);

    const btcTx = await this.btcNodeClient.loadBtcTx(btcTxHash);
    const { height, index, hash, hex } = btcTx;
    const txBlock = await this.btcNodeClient.loadBlockByHeight(height);
    const proof = await this.btcNodeClient.loadMerkleProof(hash, height);

    const tx = Transaction.fromHex(hex);
    // @ts-expect-error TS2341: Property '__toBuffer' is private and only accessible within class 'Transaction'.
    const hexForTxId = tx.__toBuffer().toString('hex');
    const outputIndex = btcTx.outputs.findIndex(
      (output) => output.address === vaultBtcAddress,
    );

    if (outputIndex === -1) {
      throw Error('BTC tx has no valid output');
    }

    const senderAddress = await this.getSenderAddress();

    const gasPrice = await this.getGasPrice();

    const heightAndIndex = parseInt(
      getUint32Binary(height) + getUint32Binary(index),
      2,
    );

    return await this.contract.methods
      .executeIssue(
        addressHex,
        utils.toBN(issueId),
        '0x' + proof,
        '0x' + hexForTxId,
        heightAndIndex,
        '0x' + txBlock.toHex(),
        outputIndex,
      )
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  cancelIssue = async (
    requesterAddress: string,
    issueId: number | string,
    sendTxCallback?: (hash: string) => void,
  ): Promise<TransactionReceipt> => {
    const addressHex = this._prepareAddress(requesterAddress);
    const senderAddress = await this.getSenderAddress();

    const gasPrice = await this.getGasPrice();

    return await this.contract.methods
      .cancelIssue(addressHex, utils.toBN(issueId))
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback || emptyFunction);
  };

  cancelRedeem = async (
    requesterAddress: string,
    redeemId: number | string,
    reimburse = true,
    sendTxCallback?: (hash: string) => void,
  ): Promise<TransactionReceipt> => {
    const addressHex = this._prepareAddress(requesterAddress);
    const senderAddress = await this.getSenderAddress();

    const gasPrice = await this.getGasPrice();

    return await this.contract.methods
      .cancelRedeem(addressHex, utils.toBN(redeemId), reimburse)
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback || emptyFunction);
  };

  getIssueId = async (requesterAddress: string) => {
    const addressHex = this._prepareAddress(requesterAddress);

    return await this.contract.methods.getIssueId(addressHex).call();
  };

  transfer = async (
    recipient: string,
    amount: number,
    sendTxCallback?: (hash: string) => void,
  ): Promise<TransactionReceipt> => {
    const addressHex = this._prepareAddress(recipient);
    const amountBN = utils.toBN(amount);
    const senderAddress = await this.getSenderAddress();
    const gasPrice = await this.getGasPrice();
    return this.contract.methods
      .transfer(addressHex, amountBN)
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback || emptyFunction);
  };

  requestRedeem = async (
    amountOneBtc: number,
    btcAddress: string,
    vaultId: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<RedeemDetails> => {
    const amountBN = utils.toBN(amountOneBtc);
    const addressHex = this._prepareAddress(vaultId);
    const senderAddress = await this.getSenderAddress();
    const gasPrice = await this.getGasPrice();

    return this.contract.methods
      .requestRedeem(amountBN, btcAddress, addressHex)
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback || emptyFunction)
      .then((txReceipt: TransactionReceipt) => {
        return this.getRedeemDetails(txReceipt.transactionHash);
      });
  };

  executeRedeem = async (
    requesterAddress: string,
    redeemId: string,
    btcTxHash: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt> => {
    const btcTx = await this.btcNodeClient.loadBtcTx(btcTxHash);
    const { height, index, hash, hex } = btcTx;
    const txBlock = await this.btcNodeClient.loadBlockByHeight(height);
    const proof = await this.btcNodeClient.loadMerkleProof(hash, height);

    const tx = Transaction.fromHex(hex);
    // @ts-expect-error Property '__toBuffer' is private and only accessible within class 'Transaction'.
    const hexForTxId = tx.__toBuffer().toString('hex');

    const addressHex = this._prepareAddress(requesterAddress);
    const senderAddress = await this.getSenderAddress();

    const gasPrice = await this.getGasPrice();

    return await this.contract.methods
      .executeRedeem(
        addressHex,
        utils.toBN(redeemId),
        '0x' + proof,
        '0x' + hexForTxId,
        height,
        index,
        '0x' + txBlock.toHex(),
      )
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  getRedeemStatus(
    requesterAddress: string,
    redeemId: string,
  ): Promise<RedeemStatus> {
    const addressHex = this._prepareAddress(requesterAddress);
    return this.contract.methods.getRedeemStatus(addressHex, redeemId).call();
  }

  balanceOf = (requesterAddress: string) => {
    const addressHex = this._prepareAddress(requesterAddress);
    return this.contract.methods.balanceOf(addressHex).call();
  };

  register_vault = async (
    x: string,
    y: string,
    sendTxCallback?: SendTxCallback,
  ) => {
    const senderAddress = await this.getSenderAddress();

    const gasPrice = await this.getGasPrice();
    return await this.contract.methods
      .registerVault(utils.toBN(x), utils.toBN(y))
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  getIssueDetails = async (txHash: string): Promise<IssueDetails | void> => {
    const receipt = await this.web3.eth.getTransactionReceipt(txHash);

    let decoded: any;

    receipt.logs.forEach(async (log: any) => {
      try {
        decoded = this.web3.eth.abi.decodeLog(
          [
            {
              indexed: true,
              internalType: 'uint256',
              name: 'issue_id',
              type: 'uint256',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'requester',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'vault_id',
              type: 'address',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'fee',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'address',
              name: 'btc_address',
              type: 'address',
            },
          ],
          log.data,
          log.topics.slice(1),
        );
      } catch (error) {
        console.log('### decode issue error', error);
      }
    });

    return decoded;
  };

  getIssueStatus = (requesterAddress: string, issueId: string) => {
    const addressHex = this._prepareAddress(requesterAddress);
    return this.contract.methods.getIssueStatus(addressHex, issueId).call();
  };

  lockAdditionalCollateral = async (
    amount: number | string,
    sendTxCallback: SendTxCallback,
  ): Promise<TransactionReceipt> => {
    const senderAddress = await this.getSenderAddress();

    const gasPrice = await this.getGasPrice();

    return this.contract.methods
      .lockAdditionalCollateral()
      .send({
        value: utils.toBN(amount),
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  withdrawCollateral = async (
    amount: number | string,
    sendTxCallback: SendTxCallback,
  ): Promise<TransactionReceipt> => {
    const senderAddress = await this.getSenderAddress();

    const gasPrice = await this.getGasPrice();

    return this.contract.methods
      .withdrawCollateral(utils.toBN(amount))
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  getRedeemDetails = async (txHash: string): Promise<RedeemDetails | void> => {
    const receipt = await this.web3.eth.getTransactionReceipt(txHash);

    let decoded: any;

    receipt.logs.forEach(async (log: any) => {
      try {
        decoded = this.web3.eth.abi.decodeLog(
          [
            {
              indexed: true,
              internalType: 'uint256',
              name: 'redeem_id',
              type: 'uint256',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'requester',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'vault_id',
              type: 'address',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'fee',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'address',
              name: 'btc_address',
              type: 'address',
            },
          ],
          log.data,
          log.topics.slice(1),
        );
      } catch (error) {
        console.log('### decode redeem error', error);
      }
    });

    return decoded;
  };
}
