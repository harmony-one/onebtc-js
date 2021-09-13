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

    console.log(addressHex, amount, account);

    const GAS_PRICE = 10000000000;

    return await this.oneBTCContract.methods
      .requestIssue(utils.toBN(amount), addressHex)
      .send({
        from: account,
        gasLimit: 67219000,
        gasPrice: GAS_PRICE,
        value: utils.toBN(amount),
      });
  };

  executeIssue = async (
    requester: string,
    issue_id: number,
    merkle_proof: any,
    raw_tx: any,
    heightAndIndex: any,
    header: any,
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
      .executeIssue(
        addressHex,
        utils.toBN(issue_id),
        merkle_proof,
        raw_tx,
        utils.toBN(heightAndIndex),
        header
      )
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
      .cancelIssue(addressHex, utils.toBN(issue_id))
      .send({
        from: account,
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
      });
  };

  getIssueId = async (requester: string) => {
    const addressHex = getAddress(requester).checksum;

    return await this.oneBTCContract.methods.getIssueId(addressHex).call();
  };


  transfer = async (recipient: string, amount: number) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    const amountBN = utils.toBN(amount);
    return this.oneBTCContract.methods.transfer(recipient, amountBN).send({
      from: account,
      gasLimit: 6721900,
      gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
    });
  }

  requestRedeem = async (amountOneBtc: number, btcAddress: string, vaultId: string) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const _amountOneBtcBN = utils.toBN(amountOneBtc);

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    return this.oneBTCContract.methods.requestRedeem(_amountOneBtcBN, btcAddress, vaultId).send({
      from: account,
      gasLimit: 6721900,
      gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
    })
  }

  executeRedeem = async (
    requester: string,
    redeemId: number,
    merkleProof: any,
    rawTx: any,
    heightAndIndex: any,
    header: any,
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
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
      });
  }

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
      .registerVault(utils.toBN(x), utils.toBN(y))
      .send({
        from: account,
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
      });
  };

  getIssueDetails = async (txHash: string) => {
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

  getRedeemDetails = async (txHash: string) => {
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
