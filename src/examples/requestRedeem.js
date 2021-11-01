/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const { btcAddressBech32ToHex } = require('../blockchain/helpers');
const { createClient } = require('./createClient');

const BTC_NODE_URL = 'https://btc2.test.hmny.io';
const VAULT_ADDRESS = '0x498554d79612C76d630c613cA5AD143FeE06ccF2';
const DASHBOARD_URL = 'https://relayer.btc.test.hmny.io';

async function requestRedeem() {
  const onebtcClient = await createClient();

  const amount = 20000; // satoshi

  try {
    const destinationBTCAddress = btcAddressBech32ToHex(
      'tb1q8v78nqzklxs3lu56ghemc69az0ecvj9ecl3pgm',
    );
    const redeemDetails = await onebtcClient.requestRedeem(
      amount,
      destinationBTCAddress,
      VAULT_ADDRESS,
    );

    console.log('### redeemDetails', redeemDetails);

    const dashboardClient = new DashboardApi({
      btcNodeUrl: BTC_NODE_URL,
      dashboardUrl: DASHBOARD_URL,
    });

    const redeem = await dashboardClient.loadRedeem(redeemDetails.issue_id);
    // wait until vault send bitcoin
    // redeem.btcTx && redeem.btcTx.confirmations > 10
    // and then you can execute redeem
    onebtcClient.executeRedeem(address, redeem.id, redeem.btcTx.hash);
  } catch (err) {
    console.log('### err', err);
  }
}
