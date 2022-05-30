import axios from 'axios';
import { Buffer } from 'buffer';
import * as bitcoin from 'bitcoinjs-lib';
import {
  IBtcRelayInfo,
  IDashboardConfig,
  IEvent,
  IHistoryIssueItem,
  IHistoryRedeemItem,
  IHistoryVaultItem,
  IIssue,
  IListContainer,
  IRedeem,
  IRelayInfo,
  IVault,
} from './interfaces';
import { getActualOutputs } from './helpers';
import { BTCNodeClient } from '../btcNode';

export enum Network {
  TESTNET = 'testnet',
  MAINNET = 'mainnet',
}

export enum HISTORY_INTERVAL {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export interface LoadHistoryParams {
  interval: HISTORY_INTERVAL;
}

export interface IDashboardApiParams {
  dashboardUrl: string;
  btcNodeUrl: string;
  networkType: 'mainnet' | 'testnet';
}

export interface IGetParams {
  page: number;
  size: number;
  vault?: string;
  id?: string;
  requester?: string;
}

interface IFreeOutput {
  id: any; // secretKey
  value: number;
  hex: string;
  hash: string;
  index: number;
  bech32Address: string;
}

enum DATA_TYPE {
  ISSUES = 'issues',
  REDEEMS = 'redeems',
  VAULTS = 'vaults',
  EVENTS = 'relay/events',
}

enum ENTITY_HISTORY_TYPE {
  VAULTS = 'vaults',
  ISSUED = 'issued',
  REDEEMS = 'redeemed',
}

export class DashboardApi {
  dashboardUrl: string;
  btcNodeUrl: string;
  btcNodeClient: BTCNodeClient;
  networkType: 'mainnet' | 'testnet';

  constructor(params: IDashboardApiParams) {
    this.dashboardUrl = params.dashboardUrl;
    this.btcNodeUrl = params.btcNodeUrl;
    this.btcNodeClient = new BTCNodeClient(this.btcNodeUrl);
    this.networkType = params.networkType;
  }

  loadDashboardConfig = async (): Promise<IDashboardConfig> => {
    const res = await axios.get(`${this.dashboardUrl}/monitor`);
    return res.data;
  };

  loadDataList = async <T>(
    dataType: DATA_TYPE,
    params: IGetParams,
  ): Promise<IListContainer<T>> => {
    const res = await axios.get(`${this.dashboardUrl}/${dataType}/data`, {
      params,
    });

    return res.data;
  };

  addEvent = async (hash: string) => {
    const res = await axios.post(`${this.dashboardUrl}/events/add-by-hash`, {
      hash,
    });
    return res.data;
  };

  loadData = async (dataType: DATA_TYPE, entityId: string) => {
    const res = await axios.get(
      `${this.dashboardUrl}/${dataType}/data/${entityId}`,
    );
    return res.data;
  };

  loadIssue = async (issueId: string): Promise<IIssue> => {
    return await this.loadData(DATA_TYPE.ISSUES, issueId);
  };

  loadRedeem = async (redeemId: string): Promise<IRedeem> => {
    return await this.loadData(DATA_TYPE.REDEEMS, redeemId);
  };

  loadVault = async (vaultId: string): Promise<IVault> => {
    return await this.loadData(DATA_TYPE.VAULTS, vaultId);
  };

  loadEvent = async (eventId: string): Promise<IEvent> => {
    return await this.loadData(DATA_TYPE.EVENTS, eventId);
  };

  loadEventList = async (params: IGetParams) => {
    return this.loadDataList<IEvent>(DATA_TYPE.EVENTS, params);
  };

  loadIssueList = (params: IGetParams) => {
    return this.loadDataList<IIssue>(DATA_TYPE.ISSUES, params);
  };

  loadRedeemList = (params: IGetParams) => {
    return this.loadDataList<IRedeem>(DATA_TYPE.REDEEMS, params);
  };

  loadVaultList = (params: IGetParams) => {
    return this.loadDataList<IVault>(DATA_TYPE.VAULTS, params);
  };

  addressToBench32(addressHex: string) {
    const prefix = this.networkType === Network.MAINNET ? 'bc' : 'tb';
    return bitcoin.address.toBech32(
      Buffer.from(addressHex.slice(2), 'hex'),
      0,
      prefix,
    );
  }

  getVaultFreeOutputs = async (vault: string): Promise<IFreeOutput[]> => {
    const issues = await this.loadIssueList({ page: 0, size: 500, vault });

    const freeOutputs: IFreeOutput[] = [];
    let totalAmount = 0;
    let i = 0;
    const amount = 0;
    const getMax = true;

    while ((getMax || totalAmount < amount) && i < issues.content.length) {
      const issue = issues.content[i];

      const bech32Address = this.addressToBench32(issue.btcAddress);
      const txs = await this.btcNodeClient.loadTxsByAddress(bech32Address);
      const outputs = getActualOutputs(txs, bech32Address);

      outputs.forEach((out) => {
        if (getMax || totalAmount < amount) {
          totalAmount += Number(out.value);
          freeOutputs.push({ ...out, id: issue.id, bech32Address });
        }
      });

      i++;
    }

    if (totalAmount < amount) {
      throw new Error('Vault BTC Balance is too low');
    }

    return freeOutputs;
  };

  loadVaultBalances = async (
    vault: string,
  ): Promise<IListContainer<{ address: string; amount: string }>> => {
    const balances = {};

    const outs = await this.getVaultFreeOutputs(vault);
    outs.forEach(
      (o) =>
        (balances[o.bech32Address] =
          (balances[o.bech32Address] || 0) + o.value),
    );

    const content = Object.keys(balances).map((key) => ({
      address: key,
      amount: balances[key],
    }));
    return {
      size: content.length,
      page: 0,
      totalPages: 1,
      content: content,
      totalElements: content.length,
    };
  };

  public loadRelayInfo = async (): Promise<IRelayInfo> => {
    const res = await axios.get(this.dashboardUrl + '/relay/info');

    return res.data;
  };

  public loadInfo = async (): Promise<IBtcRelayInfo> => {
    const res = await axios.get(this.dashboardUrl + '/relay/events/info');

    return res.data;
  };

  public loadLastEvent = async (): Promise<IEvent> => {
    const events = await this.loadEventList({
      size: 1,
      page: 0,
    });
    return events.content[0];
  };

  private _loadHistory = async <T>(
    entityHistory: ENTITY_HISTORY_TYPE,
    params?: LoadHistoryParams,
  ): Promise<IListContainer<T>> => {
    const res = await axios.get(
      `${this.dashboardUrl}/history/${entityHistory}`,
      { params },
    );
    return res.data;
  };

  public loadHistoryVault = async (params?: LoadHistoryParams) => {
    return this._loadHistory<IHistoryVaultItem>(
      ENTITY_HISTORY_TYPE.VAULTS,
      params,
    );
  };

  public loadHistoryRedeem = async (params?: LoadHistoryParams) => {
    return this._loadHistory<IHistoryRedeemItem>(
      ENTITY_HISTORY_TYPE.REDEEMS,
      params,
    );
  };

  public loadHistoryIssue = async (params?: LoadHistoryParams) => {
    return this._loadHistory<IHistoryIssueItem>(
      ENTITY_HISTORY_TYPE.ISSUED,
      params,
    );
  };
}
