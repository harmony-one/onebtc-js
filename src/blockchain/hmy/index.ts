import Web3 from 'web3';
import { Harmony } from '@harmony-js/core';
import { ChainType } from '@harmony-js/utils';
import { OneBTCClientHmy } from './OneBTCClientHmy';
import { OneBTCClientWeb3 } from './OneBTCClientWeb3';
import { BTCNodeClient } from '../../btcNode';

export interface IClientParams {
  nodeURL: string;
  chainId: number;
  btcNodeUrl: string;
  contractAddress: string;
  gasLimit?: number;
  gasPrice?: number;
}

export interface IClientWeb3Params extends IClientParams {
  useMetamask?: boolean;
}

export interface IClientHmyParams extends IClientParams {
  useOneWallet?: boolean;
}

export const createClientWeb3 = async (params: IClientWeb3Params) => {
  let nodeURL = params.nodeURL;

  if (params.useMetamask) {
    // @ts-expect-error window.web3
    if (typeof window === 'object' && window.web3) {
      // @ts-expect-error window.web3
      nodeURL = window.web3.currentProvider;
    } else {
      throw new Error("Can't find metamask");
    }
  }

  const web3 = new Web3(nodeURL);

  const btcNodeClient = new BTCNodeClient(params.btcNodeUrl);

  const methods = new OneBTCClientWeb3({
    useMetamask: params.useMetamask,
    web3,
    contractAddress: params.contractAddress,
    nodeURL: params.nodeURL,
    btcNodeClient,
  });

  await methods.init();

  return methods;
};

export const createClientHmy = async (
  params: IClientHmyParams,
): Promise<OneBTCClientHmy> => {
  const btcNodeClient = new BTCNodeClient(params.btcNodeUrl);

  const hmy = new Harmony(
    // let's assume we deploy smart contract to this end-point URL
    params.nodeURL,
    {
      chainType: ChainType.Harmony,
      chainId: Number(params.chainId),
    },
  );

  const client = new OneBTCClientHmy({
    useOneWallet: params.useOneWallet,
    hmy,
    contractAddress: params.contractAddress,
    nodeURL: params.nodeURL,
    btcNodeClient,
  });

  await client.init();

  return client;
};
