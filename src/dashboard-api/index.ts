import axios from 'axios';
import { Buffer } from 'buffer';
import * as bitcoin from 'bitcoinjs-lib';
import { IssueRequest } from './interfaces';
import { getActualOutputs } from './helpers';
import { getTxsByAddress } from './bitcoinApi';

export interface IDashboardApi {
  dashboardUrl: string;
  btcNodeUrl: string;
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

interface IResponse<T> {
  content: T[];
  size: number;
  page: number;
  total: number;
}

enum DATA_TYPE {
  ISSUES = 'issues',
  REDEEMS = 'redeems',
  VAULTS = 'vaults',
}

export class DashboardApi {
  dashboardUrl: string;
  btcNodeUrl: string;

  constructor(params: IDashboardApi) {
    this.dashboardUrl = params.dashboardUrl;
    this.btcNodeUrl = params.btcNodeUrl;
  }

  getData = async (
    dataType: DATA_TYPE,
    params: IGetParams,
  ): Promise<IResponse<any>> => {
    const res = await axios.get(`${this.dashboardUrl}/${dataType}/data`, {
      params,
    });

    return res.data;
  };

  getIssues = (params: IGetParams) => {
    return this.getData(DATA_TYPE.ISSUES, params);
  };

  getVaultFreeOutputs = async (vault: string): Promise<IFreeOutput[]> => {
    const issues = await this.getIssues({ page: 0, size: 500, vault });

    const freeOutputs: IFreeOutput[] = [];
    let totalAmount = 0;
    let i = 0;
    const amount = 0;
    const getMax = true;

    while ((getMax || totalAmount < amount) && i < issues.content.length) {
      const issue: IssueRequest = issues.content[i];

      const bech32Address = bitcoin.address.toBech32(
        Buffer.from(issue.btcAddress.slice(2), 'hex'),
        0,
        'tb',
      );
      const txs = await getTxsByAddress(this.btcNodeUrl, bech32Address);
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

  getVaultBalances = async (vault: string) => {
    const balances = {};

    const outs = await this.getVaultFreeOutputs(vault);
    outs.forEach(
      (o) =>
        (balances[o.bech32Address] =
          (balances[o.bech32Address] || 0) + o.value),
    );

    return balances;
  };
}
