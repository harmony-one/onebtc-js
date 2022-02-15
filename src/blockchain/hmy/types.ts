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
  CANCELED = '3',
}

export enum RedeemStatus {
  PENDING = '1',
  COMPLETED = '2',
  CANCELED = '3',
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

interface Event<T> {
  returnValues: T;
  address: string;
  blockHash: string;
  blockNumber: number;
  logIndex: number;
  removed: boolean;
  transactionHash: string;
  transactionIndex: number;
  id: string;
  raw: {
    data: string;
    topics: string[];
  };
  event: string;
  signature: string;
}

interface IssueRequestEvent extends Event<IssueDetails> {
  event: 'IssueRequest';
}
interface LockCollateralEvent
  extends Event<{
    sender: string;
    amount: string;
  }> {
  event: 'LockCollateral';
}

interface IncreaseToBeIssuedTokensEvent
  extends Event<{
    vaultId: string;
    amount: string;
  }> {
  event: 'IncreaseToBeIssuedTokens';
}

export interface RequestIssueReturn extends TransactionReceipt {
  events: {
    IssueRequest: IssueRequestEvent;
    LockCollateral: LockCollateralEvent;
    IncreaseToBeIssuedTokens: IncreaseToBeIssuedTokensEvent;
  };
}

export default interface IOneBTCClient {
  btcNodeClient: BTCNodeClient;
  init(): Promise<void>;
  setUseOneWallet(value: boolean): boolean;
  setUseMathWallet(value: boolean): boolean;
  setUseMetamask(value: boolean): boolean;
  requestIssue(
    amount: number,
    vaultAddress: string,
    oneAmount: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<IssueDetails>;
  getRedeemStatus(requester: string, redeemId: string): Promise<RedeemStatus>;
  getIssueStatus(requester: string, issueId: string): Promise<IssueStatus>;
  executeIssue(
    requester: string,
    issueId: string,
    btcTxHash: string,
    vaultBtcAddress: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt>;

  cancelIssue(
    requester: string,
    issueId: string,
    sendTxCallback?: SendTxCallback,
  ): Promise<TransactionReceipt>;

  cancelRedeem(
    requester: string,
    issueId: string,
    reimburse: boolean,
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
  ): Promise<RedeemDetails>;

  executeRedeem(
    requester: string,
    redeemId: string,
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
    amount: number | string,
    sendTxCallback: SendTxCallback,
  ): Promise<any>;
  withdrawCollateral(
    amount: number | string,
    sendTxCallback: SendTxCallback,
  ): Promise<any>;

  getIssueDetails(txHash: string): Promise<IssueDetails | void>;
  getRedeemDetails(txHash: string): Promise<RedeemDetails | void>;
}
