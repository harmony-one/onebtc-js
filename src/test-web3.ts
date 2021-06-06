require("dotenv").config();
import { getHmyClient } from "./index";
const utils = require('web3-utils');

// const sleep = (sec: number) =>
//   new Promise((resolve) => setTimeout(resolve, sec * 1000));

const testWeb3 = async () => {
  const hmyClient = await getHmyClient({
    sdk: "web3",
    nodeURL: "https://api.s0.b.hmny.io",
    chainId: 2,
    contractAddress: "0x4501f806c8a8f063A07A4Ad585ec275b14cd77cc",
    gasLimit: 6721900,
  });

  await hmyClient.addWallet(process.env.PRIVATE_KEY);

  const myAddress = hmyClient.getUserAddress();

  let res;

  res = await hmyClient.methods.web3.eth.getBalance(myAddress);

  console.log('User balance: ', Number(res) / 1e18);

  res = await hmyClient.methods.requestIssue(utils.toBN("100000000000"), myAddress);

  console.log('Request Issue tx: ', res.status);

  const issue_id = await hmyClient.methods.getIssueId(myAddress);

  console.log('1BTC Balance before: ', Number(await hmyClient.methods.balanceOf(myAddress)) / 1e18);

  res = await hmyClient.methods.executeIssue(myAddress, issue_id);

  console.log('Execute issue tx: ', res.status);

  console.log('1BTC Balance after: ', Number(await hmyClient.methods.balanceOf(myAddress)) / 1e18);

  process.exit();
};

testWeb3();
