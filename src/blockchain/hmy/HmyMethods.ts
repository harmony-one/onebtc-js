import { Harmony, } from "@harmony-js/core";
import { OneBtc } from "../out/OneBtc";
import { Contract } from "@harmony-js/contract";
import IContractMethods, {IssueDetails, RedeemDetails, SendTxCallback} from "./types";
import {getAddress} from "@harmony-js/crypto";
import Web3 from "web3";
import {loadBlockByHeight, loadBtcTx, loadMerkleProof} from "./bitcoin";
import {Transaction} from "bitcoinjs-lib";
const utils = require("web3-utils");

interface IHmyMethodsInitParams {
  hmy: Harmony;
  web3: Web3,
  contractAddress: string;
  nodeURL: string;
  options?: { gasPrice: number; gasLimit: number };
}

export class HmyMethods implements IContractMethods {
  public hmy: Harmony;
  public web3: Web3;
  public contractAddress: string;

  public nodeURL: string;
  public contract: Contract

  public options = { gasPrice: 1000000000, gasLimit: 6721900 };
  private onewallet: any;

  constructor(params: IHmyMethodsInitParams) {
    this.hmy = params.hmy;
    this.web3 = params.web3;
    this.contractAddress = params.contractAddress;
    this.nodeURL = params.nodeURL;

    if (params.options) {
      this.options = {
        gasPrice: params.options.gasPrice,
        gasLimit: params.options.gasLimit,
      };
    }

    // @ts-ignore
    this.onewallet = window.onewallet;
  }

  private injectSignTransaction = async () => {

    const account = await this.onewallet.getAccount();
    const address = this.prepareAddress(account.address);
    this.contract.wallet.defaultSigner = address;
    this.contract.wallet.signTransaction = async (tx: any) => {

      tx.from = this.prepareAddress(address);
      // @ts-ignore
      return window.onewallet.signTransaction(tx);
    }
  }

  prepareAddress(address: string) {
    return getAddress(address).checksum;
  }

  getSenderAddress = async (): Promise<string> => {
    const account = await this.onewallet.getAccount();
    return this.prepareAddress(account.address);
  }

  init = async () => {
    this.contract = this.hmy.contracts.createContract(OneBtc.abi, this.contractAddress);

    // @ts-ignore
    if (this.onewallet) {
      this.injectSignTransaction();
    }
  };

  balanceOf = (requester: string): Promise<string> => {
    return this.contract.methods.balanceOf(requester).call();
  }

  cancelIssue = async (
    requester: string,
    issueId: number,
    sendTxCallback?: SendTxCallback
  ) => {
    const addressHex = this.prepareAddress(requester);

    const from = await this.getSenderAddress();
    return await this.contract.methods
      .cancelIssue(addressHex, utils.toBN(issueId))
      .send({
        from,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      }).on('transactionHash', sendTxCallback);
  };

  executeIssue = async (
    requester: string,
    issueId: string,
    btcTxHash: string,
    sendTxCallback?: SendTxCallback,
  ) => {
    const addressHex = this.prepareAddress(requester);

    const from = await this.getSenderAddress();

    const btcTx = await loadBtcTx(btcTxHash);
    const { height, index, hash, hex } = btcTx;
    const txBlock = await loadBlockByHeight(height);
    const proof = await loadMerkleProof(hash, height);

    const tx = Transaction.fromHex(hex);
    // @ts-ignore
    const hexForTxId = tx.__toBuffer().toString('hex');

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
        from,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      }).on('transactionHash', sendTxCallback);
  };

  executeRedeem = async (
    requester: string,
    redeemId: number,
    merkleProof: any,
    rawTx: any,
    heightAndIndex: any,
    header: any,
    sendTxCallback?: SendTxCallback
  ) => {
    const addressHex = this.prepareAddress(requester);

    const from = await this.getSenderAddress();
    return await this.contract.methods
      .executeRedeem(
        addressHex,
        utils.toBN(redeemId),
        merkleProof,
        rawTx,
        utils.toBN(heightAndIndex),
        header
      )
      .send({
        from,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      }).on('transactionHash', sendTxCallback);
  }

  getIssueDetails = async (txHash: string): Promise<IssueDetails | void> => {

    const receipt = await this.hmy.blockchain.getTransactionReceipt({txnHash: txHash});

    let decoded;

    receipt.result.logs.forEach(async (log: any) => {
      try {
        decoded = this.contract.abiCoder.decodeLog(
          [
            {
              indexed: true,
              internalType: "uint256",
              name: "issue_id",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "requester",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "vault_id",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "fee",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "btc_address",
              type: "address",
            },
          ],
          log.data,
          log.topics.slice(1)
        );
      } catch (e) {}
    });

    return decoded;
  };

  getRedeemDetails = async (txHash: string): Promise<RedeemDetails | void> => {
    const receipt = await this.hmy.blockchain.getTransactionReceipt({txnHash: txHash});

    let decoded: any;

    receipt.result.logs.forEach((log: any) => {
      try {
        decoded = this.contract.abiCoder.decodeLog(
          [
            {
              indexed: true,
              internalType: "uint256",
              name: "redeem_id",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "requester",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "vault_id",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "fee",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "btc_address",
              type: "address",
            },
          ],
          log.data,
          log.topics.slice(1)
        );
      } catch (e) {}
    });

    return decoded
  }

  getIssueId = async (requester: string) => {
    const addressHex = this.prepareAddress(requester)
    return await this.contract.methods.getIssueId(addressHex).call();
  };

  register_vault = async (
    x: string,
    y: string,
    sendTxCallback?: SendTxCallback
  ) => {
    return await this.contract.methods
      .registerVault(utils.toBN(x), utils.toBN(y))
      .send({
        from: this.getSenderAddress(),
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      }).on('transactionHash', sendTxCallback);
  };

  requestIssue = async (
    amount: number,
    address: string,
    sendTxCallback?: SendTxCallback
  ) => {
    const addressHex = this.prepareAddress(address);

    const from = await this.getSenderAddress();
    return await this.contract.methods
      .requestIssue(utils.toBN(amount), addressHex)
      .send({
        from,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
        value: utils.toBN(amount),
      }).on('transactionHash', sendTxCallback);
  };

  requestRedeem = async (amountOneBtc: number, btcAddress: string, vaultId: string, sendTxCallback?: SendTxCallback) => {
    const _amountOneBtcBN = utils.toBN(amountOneBtc);
    const addressHex = this.prepareAddress(vaultId);

    const from = await this.getSenderAddress();
    return this.contract.methods.requestRedeem(_amountOneBtcBN, btcAddress, addressHex).send({
      from,
      gasLimit: this.options.gasLimit,
      gasPrice: this.options.gasPrice,
    }).on('transactionHash', sendTxCallback);
  }

  setUseMathWallet(value: boolean): boolean {
    return value;
  }

  setUseMetamask(value: boolean): boolean {
    return value;
  }

  setUseOneWallet(value: boolean): boolean {
    return value;
  }

  transfer = async (recipient: string, amount: number, sendTxCallback?: (hash: string) => void) => {
    const amountBN = utils.toBN(amount);
    const address = this.prepareAddress(recipient);
    const senderAddress = await this.getSenderAddress()
    return this.contract.methods.transfer(address, amountBN).send({
      from: senderAddress,
      gasLimit: this.options.gasLimit,
      gasPrice: this.options.gasPrice,
      waitConfirm: true,
    }).on('transactionHash', sendTxCallback)
      .on('receipt', (receipt: any) => {
        console.log('### receipt', receipt);
      }).on('error', (err: any) => {
        console.log('### err', err);
      }).then((result: any) => {
      return result.transaction.receipt;
    })
  }
}
