import { Harmony } from '@harmony-js/core';
import { OneBtc } from '../out/OneBtc';
import { Contract } from '@harmony-js/contract';
import IContractMethods, {
  IssueDetails,
  IssueStatus,
  RedeemDetails,
  RedeemStatus,
  SendTxCallback,
} from './types';
import { getAddress } from '@harmony-js/crypto';
import Web3 from 'web3';
import { BTCNodeClient } from './btcNodeClient';
import { Transaction } from 'bitcoinjs-lib';
import utils from 'web3-utils';

interface IHmyMethodsInitParams {
  hmy: Harmony;
  web3: Web3;
  btcNodeClient: BTCNodeClient;
  contractAddress: string;
  nodeURL: string;
  options?: { gasPrice: number; gasLimit: number };
}

export class HmyMethods implements IContractMethods {
  public hmy: Harmony;
  public web3: Web3;
  public contractAddress: string;

  public btcNodeClient: BTCNodeClient;
  public nodeURL: string;
  public contract: Contract;

  public options = { gasPrice: 1000000000, gasLimit: 6721900 };
  private onewallet: any;

  constructor(params: IHmyMethodsInitParams) {
    this.hmy = params.hmy;
    this.web3 = params.web3;
    this.contractAddress = params.contractAddress;
    this.nodeURL = params.nodeURL;
    this.btcNodeClient = params.btcNodeClient;

    if (params.options) {
      this.options = {
        gasPrice: params.options.gasPrice,
        gasLimit: params.options.gasLimit,
      };
    }

    this.onewallet = window.onewallet;
  }

  getRedeemStatus(
    requesterAddress: string,
    redeemId: string,
  ): Promise<RedeemStatus> {
    const addressHex = this._prepareAddress(requesterAddress);
    return this.contract.methods.getRedeemStatus(addressHex, redeemId).call();
  }

  private _injectSignTransaction = async () => {
    const account = await this.onewallet.getAccount();
    const address = this._prepareAddress(account.address);
    this.contract.wallet.defaultSigner = address;
    this.contract.wallet.signTransaction = async (tx: any) => {
      tx.from = this._prepareAddress(address);
      return window.onewallet.signTransaction(tx);
    };
  };

  private _prepareAddress(address: string) {
    return getAddress(address).checksum;
  }

  getSenderAddress = async (): Promise<string> => {
    const account = await this.onewallet.getAccount();
    return this._prepareAddress(account.address);
  };

  init = async () => {
    this.contract = this.hmy.contracts.createContract(
      OneBtc.abi,
      this.contractAddress,
    );

    if (this.onewallet) {
      this._injectSignTransaction();
    }
  };

  balanceOf = (requesterAddress: string): Promise<string> => {
    const addressHex = this._prepareAddress(requesterAddress);
    return this.contract.methods.balanceOf(addressHex).call();
  };

  cancelIssue = async (
    requesterAddress: string,
    issueId: number,
    sendTxCallback?: SendTxCallback,
  ) => {
    const addressHex = this._prepareAddress(requesterAddress);
    const senderAddress = await this.getSenderAddress();
    return await this.contract.methods
      .cancelIssue(addressHex, utils.toBN(issueId))
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  getIssueStatus = (
    requesterAddress: string,
    issueId: string,
  ): Promise<IssueStatus> => {
    const addressHex = this._prepareAddress(requesterAddress);
    return this.contract.methods.getIssueStatus(addressHex, issueId).call();
  };

  executeIssue = async (
    requesterAddress: string,
    issueId: string,
    btcTxHash: string,
    sendTxCallback?: SendTxCallback,
  ) => {
    const btcTx = await this.btcNodeClient.loadBtcTx(btcTxHash);
    const { height, index, hash, hex } = btcTx;
    const txBlock = await this.btcNodeClient.loadBlockByHeight(height);
    const proof = await this.btcNodeClient.loadMerkleProof(hash, height);

    const tx = Transaction.fromHex(hex);
    // @ts-expect-error TS2341: Property '__toBuffer' is private and only accessible within class 'Transaction'.
    const hexForTxId = tx.__toBuffer().toString('hex');
    const senderAddress = await this.getSenderAddress();
    const addressHex = this._prepareAddress(requesterAddress);

    return await this.contract.methods
      .executeIssue(
        addressHex,
        utils.toBN(issueId),
        '0x' + proof,
        // Buffer.from(hex, 'hex'),
        '0x' + hexForTxId,
        height,
        index,
        '0x' + txBlock.toHex(),
      )
      .send({
        senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  executeRedeem = async (
    requesterAddress: string,
    redeemId: number,
    btcTxHash: any,
    header: any,
    sendTxCallback?: SendTxCallback,
  ) => {
    const addressHex = this._prepareAddress(requesterAddress);

    const btcTx = await this.btcNodeClient.loadBtcTx(btcTxHash);
    const { height, index, hash, hex } = btcTx;
    const txBlock = await this.btcNodeClient.loadBlockByHeight(height);
    const proof = await this.btcNodeClient.loadMerkleProof(hash, height);

    const tx = Transaction.fromHex(hex);
    // @ts-expect-error TS2341: Property '__toBuffer' is private and only accessible within class 'Transaction'.
    const hexForTxId = tx.__toBuffer().toString('hex');

    const senderAddress = await this.getSenderAddress();
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
        gasPrice: this.options.gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  getIssueDetails = async (txHash: string): Promise<IssueDetails | void> => {
    const receipt = await this.hmy.blockchain.getTransactionReceipt({
      txnHash: txHash,
    });

    let decoded;

    receipt.result.logs.forEach(async (log: any) => {
      try {
        decoded = this.contract.abiCoder.decodeLog(
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
        console.log('### error', error);
      }
    });

    return decoded;
  };

  getRedeemDetails = async (txHash: string): Promise<RedeemDetails | void> => {
    const receipt = await this.hmy.blockchain.getTransactionReceipt({
      txnHash: txHash,
    });

    let decoded: any;

    receipt.result.logs.forEach((log: any) => {
      try {
        decoded = this.contract.abiCoder.decodeLog(
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
        console.log('### error', error);
      }
    });

    return decoded;
  };

  getIssueId = async (requesterAddress: string) => {
    const addressHex = this._prepareAddress(requesterAddress);
    return await this.contract.methods.getIssueId(addressHex).call();
  };

  register_vault = async (
    x: string,
    y: string,
    sendTxCallback?: SendTxCallback,
  ) => {
    const senderAddress = await this.getSenderAddress();
    return await this.contract.methods
      .registerVault(utils.toBN(x), utils.toBN(y))
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  requestIssue = async (
    amount: number,
    address: string,
    sendTxCallback?: SendTxCallback,
  ) => {
    const addressHex = this._prepareAddress(address);
    const senderAddress = await this.getSenderAddress();

    return await this.contract.methods
      .requestIssue(utils.toBN(amount), addressHex)
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
        value: utils.toBN(amount),
      })
      .on('transactionHash', sendTxCallback);
  };

  requestRedeem = async (
    amountOneBtc: number,
    btcAddress: string,
    vaultId: string,
    sendTxCallback?: SendTxCallback,
  ) => {
    const _amountOneBtcBN = utils.toBN(amountOneBtc);
    const addressHex = this._prepareAddress(vaultId);

    const senderAddress = await this.getSenderAddress();
    return this.contract.methods
      .requestRedeem(_amountOneBtcBN, btcAddress, addressHex)
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  setUseMathWallet(value: boolean): boolean {
    return value;
  }

  setUseMetamask(value: boolean): boolean {
    return value;
  }

  setUseOneWallet(value: boolean): boolean {
    return value;
  }

  transfer = async (
    recipient: string,
    amount: number,
    sendTxCallback?: (hash: string) => void,
  ) => {
    const amountBN = utils.toBN(amount);
    const addressHex = this._prepareAddress(recipient);
    const senderAddress = await this.getSenderAddress();

    return this.contract.methods
      .transfer(addressHex, amountBN)
      .send({
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
        waitConfirm: true,
      })
      .on('transactionHash', sendTxCallback)
      .on('receipt', (receipt: any) => {
        console.log('### receipt', receipt);
      })
      .on('error', (err: any) => {
        console.log('### err', err);
      })
      .then((result: any) => {
        return result.transaction.receipt;
      });
  };

  lockAdditionalCollateral = async (
    amount: number,
    sendTxCallback: SendTxCallback,
  ) => {
    const senderAddress = await this.getSenderAddress();

    return this.contract.methods
      .lockAdditionalCollateral()
      .send({
        value: utils.toBN(amount),
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };

  withdrawCollateral = async (
    amount: number,
    sendTxCallback: SendTxCallback,
  ) => {
    const senderAddress = await this.getSenderAddress();

    return this.contract.methods
      .lockAdditionalCollateral()
      .send({
        value: utils.toBN(amount),
        from: senderAddress,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      })
      .on('transactionHash', sendTxCallback);
  };
}
