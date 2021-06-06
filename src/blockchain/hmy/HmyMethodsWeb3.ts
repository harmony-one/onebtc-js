import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { getAddress } from "@harmony-js/crypto";
import ENS from "@ensdomains/ensjs";
import { OneBtc } from "../out/OneBtc";
const BN = require("bn.js");
const utils = require("web3-utils");
// const { hash } = require("eth-ens-namehash");

interface IHmyMethodsInitParams {
  web3: Web3;
  contractAddress: string;
  nodeURL: string;
  options?: { gasPrice: number; gasLimit: number };
}

export class HmyMethodsWeb3 {
  public web3: Web3;
  public ens: typeof ENS;

  public oneBTCContract: Contract;

  public contractAddress: string;
  public nodeURL: string;
  // private options = { gasPrice: 1000000000, gasLimit: 6721900 };
  public useMetamask = false;

  constructor(params: IHmyMethodsInitParams) {
    this.web3 = params.web3;
    this.contractAddress = params.contractAddress;
    this.nodeURL = params.nodeURL;

    // if (params.options) {
    //   this.options = params.options;
    // }
  }

  init = async () => {
    this.oneBTCContract = new this.web3.eth.Contract(
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

    return await this.oneBTCContract.methods
      .request_issue(utils.toBN(amount), addressHex)
      .send({
        from: account,
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
        value: utils.toBN(amount),
      });
  };

  executeIssue = async (
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

    return await this.oneBTCContract.methods
      .execute_issue(addressHex, utils.toBN(issue_id))
      .send({
        from: account,
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
      });
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

    return await this.oneBTCContract.methods
      .cancel_issue(addressHex, utils.toBN(issue_id))
      .send({
        from: account,
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
      });
  };

  getIssueId = async (requester: string) => {
    const addressHex = getAddress(requester).checksum;

    return await this.oneBTCContract.methods.get_issue_id(addressHex).call();
  };

  balanceOf = async (requester: string) => {
    const addressHex = getAddress(requester).checksum;

    return await this.oneBTCContract.methods.balanceOf(addressHex).call();
  };

  register_vault = async (
    x: string,
    y: string,
    sendTxCallback?: (hash: string) => void
  ) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    return await this.oneBTCContract.methods
      .register_vault(utils.toBN(x), utils.toBN(y))
      .send({
        from: account,
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
      });
  };
}
