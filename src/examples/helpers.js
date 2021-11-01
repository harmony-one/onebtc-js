/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const { Harmony } = require('@harmony-js/core');
const { ChainType } = require('@harmony-js/utils');

export async function createAccount(nodeUrl) {
  const hmy = new Harmony(nodeUrl, {
    chainType: ChainType.Harmony,
    chainId: 2,
  });

  const account = await hmy.wallet.createAccount();
  return account;
}
