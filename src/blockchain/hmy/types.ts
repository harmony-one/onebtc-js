import { BTCNodeClient } from '../../btcNode';

export type SendTxCallback = (txHash: string) => void;

export interface RedeemDetails {
  redeem_id: string;
  amount: string;
  fee: string;
  requester: string;
  vault_id: string;
  btc_address: string;
}

export enum IssueStatus {
  PENDING = '1',
  COMPLETED = '2',
}

export enum RedeemStatus {
  PENDING = '1',
  COMPLETED = '2',
}

export interface IssueDetails {
  issue_id: string;
  amount: string;
  fee: string;
  requester: string;
  vault_id: string;
  btc_address: string;
}

export interface TransactionReceipt {
  blockHash: string;
  blockNumber: number;
  contractAddress: null;
  cumulativeGasUsed: number;
  events: Record<string, unknown>;
  gasUsed: number;
  logsBloom: string;
  status: boolean;
  to: string;
  from: string;
  transactionHash: string;
}

export default interface IContractMethods {
  // web3: Web3;
  btcNodeClient: BTCNodeClient;
  init(): Promise<void>;
  setUseOneWallet(value: boolean): boolean;
  setUseMathWallet(value: boolean): boolean;
  setUseMetamask(value: boolean): boolean;
  requestIssue(
    amount: number,
    address: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt>;
  getRedeemStatus(requester: string, redeemId: string): Promise<RedeemStatus>;
  getIssueStatus(requester: string, issueId: string): Promise<IssueStatus>;
  executeIssue(
    requester: string,
    issueId: string,
    btcTxHash: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt>;

  cancelIssue(
    requester: string,
    issueId: number,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt>;

  getIssueId(requester: string): Promise<any>;

  transfer(
    recipient: string,
    amount: number,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt>;
  requestRedeem(
    amountOneBtc: number,
    btcAddress: string,
    vaultId: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt>;

  executeRedeem(
    requester: string,
    redeemId: number,
    rawTx: any,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt>;
  balanceOf(requester: string): Promise<any>;

  register_vault(
    x: string,
    y: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<any>;

  lockAdditionalCollateral(
    amount: number,
    sendTxCallback: SendTxCallback,
  ): Promise<any>;
  withdrawCollateral(
    amount: number,
    sendTxCallback: SendTxCallback,
  ): Promise<any>;

  getIssueDetails(txHash: string): Promise<IssueDetails | void>;
  getRedeemDetails(txHash: string): Promise<RedeemDetails | void>;
}
