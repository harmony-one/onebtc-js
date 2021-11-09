/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const { DashboardApi, Network } = require('../../lib');
const { createClient } = require('./createClient');

const BTC_NODE_URL = 'https://btc2.test.hmny.io';
const VAULT_ADDRESS = '0x498554d79612C76d630c613cA5AD143FeE06ccF2';
const DASHBOARD_URL = 'https://relayer.btc.test.hmny.io';

async function requestIssue() {
  const onebtcClient = await createClient();

  const amount = 20000; // satoshi

  try {
    const issueDetails = await onebtcClient.requestIssue(amount, VAULT_ADDRESS);

    console.log('### issueDetails', issueDetails);

    const dashboardClient = new DashboardApi({
      btcNodeUrl: BTC_NODE_URL,
      dashboardUrl: DASHBOARD_URL,
      networkType: Network.TESTNET,
    });

    const issue = await dashboardClient.loadIssue(issueDetails.issue_id);

    // wait bitcoin transaction confirmations
    // issue.btcTx && issue.btcTx.confirmations > 10
    // and then execute issue
    onebtcClient.executeIssue(address, issue.id, issue.btcTx.hash);
  } catch (err) {
    console.log('### err', err);
  }
}
