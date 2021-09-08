require("dotenv").config();
import { getHmyClient } from "./index";
import { issue_tx_mock } from "./helpers";
const utils = require("web3-utils");
const bitcoin = require("bitcoinjs-lib");

// const sleep = (sec: number) =>
//   new Promise((resolve) => setTimeout(resolve, sec * 1000));

const testWeb3 = async () => {
  const hmyClient = await getHmyClient({
    sdk: "web3",
    nodeURL: "https://api.s0.b.hmny.io",
    chainId: 2,
    contractAddress: "0xBffa908aC951eD4fa224bd28f1291280E4220825",
    gasLimit: 6721900,
  });

  await hmyClient.addWallet(process.env.PRIVATE_KEY);

  const myAddress = hmyClient.getUserAddress();

  let res;

  res = await hmyClient.methods.web3.eth.getBalance(myAddress);

  console.log("User balance: ", Number(res) / 1e18);

  res = await hmyClient.methods.requestIssue(
    utils.toBN("100000000000"),
    myAddress
  );

  console.log("Request Issue tx: ", res.status);

  console.log(
    "1BTC Balance before: ",
    Number(await hmyClient.methods.balanceOf(myAddress)) / 1e18
  );

  ///////
  const IssueEvent = await hmyClient.methods.getIssueDetails(
    res.transactionHash
  );

  console.log("issueDetails: ", IssueEvent);

  console.log("start execute issue ----");

  /////////////////////////////////////////////
  const issue_id = IssueEvent.issue_id;
  const btc_address = IssueEvent.btc_address;
  const btc_base58 = bitcoin.address.toBase58Check(
    Buffer.from(btc_address.slice(2), "hex"),
    0
  );
  const btcTx = issue_tx_mock(
    utils.toBN(issue_id),
    btc_base58,
    Number("100000000000")
  );
  const btcBlockNumberMock = 1000;
  const btcTxIndexMock = 2;
  const heightAndIndex = (btcBlockNumberMock << 32) | btcTxIndexMock;
  const headerMock = Buffer.alloc(0);
  const proofMock = Buffer.alloc(0);

  await hmyClient.methods.executeIssue(
    myAddress,
    issue_id,
    proofMock,
    btcTx.toBuffer(),
    heightAndIndex,
    headerMock
  );
  ////////////////////////////////////////////////////////////

  console.log("Execute issue tx: ", res.status);

  console.log(
    "1BTC Balance after: ",
    Number(await hmyClient.methods.balanceOf(myAddress)) / 1e18
  );

  process.exit();
};

testWeb3();
