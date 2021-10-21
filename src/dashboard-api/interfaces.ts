import { IssueStatus, RedeemStatus } from '../blockchain/hmy/types';
import { BTCTx } from '../btcNode/types';

export interface IssueRequest {
  id: string;
  vault: string;
  opentime: string;
  requester: string;
  btcAddress: string;
  btcPublicKey: string;
  amount: string;
  fee: string;
  griefingCollateral: string;
  period: string;
  btcHeight: string;
  status: string;
  lastUpdate: number;
  btcTx?: {
    hash: string;
    hex: string;
    fee: number;
    rate: number;
    height: number;
    inputs: any[];
    outputs: any[];
  };
}

export interface IEvent {
  _id: string;
  address: string;
  topics: string[];
  data: string;
  blockNumber: number;
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  logIndex: string;
  removed: boolean;
  name: 'StoreHeader';
  returnValues: {
    digest: string;
    height: string;
  };
}

export interface IVault {
  id: string;
  btcPublicKeyX: string;
  btcPublicKeyY: string;
  collateral: string;
  issued: string;
  lastUpdate: number;
  replaceCollateral: string;
  toBeIssued: string;
  toBeRedeemed: string;
  toBeReplaced: string;
  lastPing: number;
}

export interface IIssue {
  id: string;
  amount: string;
  btcAddress: string;
  btcHeight: string;
  btcPublicKey: null;
  fee: string;
  griefingCollateral: string;
  lastUpdate: number;
  opentime: string;
  period: string;
  requester: string;
  status: IssueStatus;
  vault: string;
  btcTx: BTCTx;
}

export interface IRedeem {
  id: string;
  amountBtc: string;
  amountOne: string;
  btcAddress: string;
  btcHeight: string;
  btcPublicKey: null;
  fee: string;
  griefingCollateral: string;
  lastUpdate: number;
  opentime: string;
  period: string;
  requester: string;
  status: RedeemStatus;
  vault: string;
  btcTx: BTCTx;
}

export interface IListContainer<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  page: number;
}

export interface IBtcRelayInfo {
  totalLogs: number;
  progress: string;
  lastBlock: number;
  lastNodeBlock: number;
  lastSuccessfulRead: number;
  blocksInterval: number;
  dbCollectionPrefix: 'relay-events';
  contractAddress: string;
  waitInterval: number;
}

export interface IHistoryItem {
  _id: string;
  date: string;
}

export interface IHistoryVaultItem extends IHistoryItem {
  activeVaults: number;
  totalCollateral: number;
  vaults: number;
}

export interface IHistoryRedeemItem extends IHistoryItem {
  amountPerDay: number;
  totalIssued: number;
  total: number;
}

export interface IHistoryIssueItem extends IHistoryItem {
  amountPerDay: number;
  totalIssued: number;
  total: number;
}
