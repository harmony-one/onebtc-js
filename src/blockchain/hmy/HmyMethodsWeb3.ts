import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { getAddress } from "@harmony-js/crypto";
import { OneBtc } from "../out/OneBtc";
import IContractMethods, {IssueDetails, RedeemDetails, SendTxCallback} from "./types";
import {loadBlockByHeight, loadBtcTx, loadMerkleProof} from "./bitcoin";
const utils = require("web3-utils");

interface IHmyMethodsInitParams {
  web3: Web3;
  contractAddress: string;
  nodeURL: string;
  options?: { gasPrice: number; gasLimit: number };
}

export class HmyMethodsWeb3 implements IContractMethods {
  public web3: Web3;

  public contract: Contract;

  public contractAddress: string;
  private options = { gasPrice: 1000000000, gasLimit: 6721900 };
  public useMetamask = false;

  constructor(params: IHmyMethodsInitParams) {
    this.web3 = params.web3;
    this.contractAddress = params.contractAddress;

    if (params.options) {
      this.options = params.options;
    }
  }

  init = async () => {
    this.contract = new this.web3.eth.Contract(
      OneBtc.abi,
      this.contractAddress
    );
  };

  setUseOneWallet = (value: boolean) => value;
  setUseMathWallet = (value: boolean) => value;

  setUseMetamask = (value: boolean) => (this.useMetamask = value);

  requestIssue = async (
    amount: number,
    address: string,
    sendTxCallback?: (hash: string) => void
  ) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const addressHex = getAddress(address).checksum;

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    return await this.contract.methods
      .requestIssue(utils.toBN(amount), addressHex)
      .send({
        from: account,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
        value: utils.toBN(amount),
      }).on('transactionHash', sendTxCallback);
  };

  executeIssue = async (
    requester: string,
    issue_id: string,
    btcTxHash: string,
    sendTxCallback?: (hash: string) => void
  ) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const addressHex = getAddress(requester).checksum;

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    const btcTx = await loadBtcTx(btcTxHash);
    const { height, index, hash, hex } = btcTx;
    const txBlock = await loadBlockByHeight(height);
    const proof = await loadMerkleProof(hash, height);

    return await this.contract.methods
      .executeIssue(
        addressHex,
        utils.toBN(issue_id),
        '0x' + proof,
        Buffer.from(hex, 'hex'),
        height,
        index,
        '0x' + txBlock.toHex(),
      )
      .send({
        from: account,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      }).on('transactionHash', sendTxCallback);
  };

  cancelIssue = async (
    requester: string,
    issue_id: number,
    sendTxCallback?: (hash: string) => void
  ) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const addressHex = getAddress(requester).checksum;

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    return await this.contract.methods
      .cancelIssue(addressHex, utils.toBN(issue_id))
      .send({
        from: account,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      }).on('transactionHash', sendTxCallback);
  };

  getIssueId = async (requester: string) => {
    const addressHex = getAddress(requester).checksum;

    return await this.contract.methods.getIssueId(addressHex).call();
  };


  transfer = async (recipient: string, amount: number, sendTxCallback?: (hash: string) => void) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    const addressHex = getAddress(recipient).checksum;

    const amountBN = utils.toBN(amount);
    return this.contract.methods.transfer(addressHex, amountBN).send({
      from: account,
      gasLimit: this.options.gasLimit,
      gasPrice: this.options.gasPrice,
    }).on('transactionHash', sendTxCallback);
  }

  requestRedeem = async (amountOneBtc: number, btcAddress: string, vaultId: string, sendTxCallback?: SendTxCallback) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const _amountOneBtcBN = utils.toBN(amountOneBtc);

    const addressHex = getAddress(vaultId).checksum;

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    return this.contract.methods.requestRedeem(_amountOneBtcBN, btcAddress, addressHex).send({
      from: account,
      gasLimit: this.options.gasLimit,
      gasPrice: this.options.gasPrice,
    }).on('transactionHash', sendTxCallback);
  }

  executeRedeem = async (
    requester: string,
    redeemId: number,
    merkleProof: any,
    rawTx: any,
    heightAndIndex: any,
    header: any,
    sendTxCallback?: SendTxCallback
  ) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const addressHex = getAddress(requester).checksum;

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

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
        from: account,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      }).on('transactionHash', sendTxCallback);
  }

  balanceOf = async (requester: string) => {
    const addressHex = getAddress(requester).checksum;

    return await this.contract.methods.balanceOf(addressHex).call();
  };

  register_vault = async (
    x: string,
    y: string,
    sendTxCallback?: SendTxCallback
  ) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    return await this.contract.methods
      .registerVault(utils.toBN(x), utils.toBN(y))
      .send({
        from: account,
        gasLimit: this.options.gasLimit,
        gasPrice: this.options.gasPrice,
      }).on('transactionHash', sendTxCallback);
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
    const receipt = await this.web3.eth.getTransactionReceipt(txHash);

    let decoded: any;

    receipt.logs.forEach(async (log: any) => {
      try {
        decoded = this.web3.eth.abi.decodeLog(
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

    return decoded;
  }
}
