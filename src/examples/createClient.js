/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const { createClientWeb3 } = require('../../lib');

const NODE_URL = 'https://api.s0.backup1.b.hmny.io/';
const BTC_NODE_URL = 'https://btc2.test.hmny.io';
const CONTRACT_ADDRESS = '0x2a9B7F9013E701AA71fE050eA9686BbB49E0D105';
const PRIVATE_KEY = '0x54f92e11...';

export async function createClient() {
  const onebtcClient = await createClientWeb3({
    nodeURL: NODE_URL,
    btcNodeUrl: BTC_NODE_URL,
    contractAddress: CONTRACT_ADDRESS,
    chainId: 2,
    gasLimit: 6721900,
  });

  await onebtcClient.setAccount(PRIVATE_KEY);

  return onebtcClient;
}
