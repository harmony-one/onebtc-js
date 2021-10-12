import Web3 from 'web3';
import { Harmony } from '@harmony-js/core';
import { ChainType } from '@harmony-js/utils';
import { HmyMethods } from './HmyMethods';
import { HmyMethodsWeb3 } from './HmyMethodsWeb3';
import IContractMethods from './types';
import { BTCNodeClient } from '../../btcNode';

export interface IHmyClient {
  methods: IContractMethods;
  addWallet: (pk: string) => void;
  getUserAddress: () => string;
  setUseOneWallet: (value: boolean) => void;
  setUseMathWallet: (value: boolean) => void;
}

export interface IHmyClientParams {
  sdk?: 'harmony' | 'web3';
  nodeURL: string;
  chainId: number;
  btcNodeUrl: string;
  contractAddress: string;
  gasLimit?: number;
  gasPrice?: number;
}

export const getHmyClient = async (
  params: IHmyClientParams,
): Promise<IHmyClient> => {
  const hmy = new Harmony(
    // let's assume we deploy smart contract to this end-point URL
    params.nodeURL,
    {
      chainType: ChainType.Harmony,
      chainId: Number(params.chainId),
    },
  );

  const btcNodeClient = new BTCNodeClient(params.btcNodeUrl);

  // const hmyUserAccount = params.privateKey
  //   ? hmy.wallet.addByPrivateKey(params.privateKey)
  //   : await hmy.wallet.createAccount();

  // const hmyUserAccount = await hmy.wallet.createAccount();

  let userAddress: string;
  let methods: HmyMethods | HmyMethodsWeb3;

  let nodeURL = params.nodeURL;

  // @ts-expect-error window.web3
  if (typeof window === 'object' && window.web3) {
    // @ts-expect-error window.web3
    nodeURL = window.web3.currentProvider;
  }

  const web3 = new Web3(nodeURL);

  if (params.sdk === 'web3') {
    methods = new HmyMethodsWeb3({
      web3,
      contractAddress: params.contractAddress,
      nodeURL: params.nodeURL,
      btcNodeClient,
    });

    await methods.init();
  } else {
    methods = new HmyMethods({
      hmy,
      web3,
      contractAddress: params.contractAddress,
      nodeURL: params.nodeURL,
      btcNodeClient,
    });

    await methods.init();
  }

  return {
    methods,
    addWallet: async (privateKey: string) => {
      if (params.sdk === 'web3') {
        const ethUserAccount = await web3.eth.accounts.privateKeyToAccount(
          privateKey,
        );
        web3.eth.accounts.wallet.add(ethUserAccount);
        web3.eth.defaultAccount = ethUserAccount.address;

        userAddress = ethUserAccount.address;
      } else {
        const account = await hmy.wallet.addByPrivateKey(privateKey);
        userAddress = account.address;
      }
    },
    getUserAddress: () => userAddress,
    setUseOneWallet: (value: boolean) => {
      if (params.sdk === 'web3') {
        methods.setUseMetamask(value);
      } else {
        methods.setUseOneWallet(value);
      }
    },
    setUseMathWallet: (value: boolean) => {
      if (params.sdk === 'web3') {
        methods.setUseMetamask(value);
      } else {
        methods.setUseOneWallet(value);
      }
    },
  };
};
