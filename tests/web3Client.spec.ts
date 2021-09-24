import {getHmyClient, IHmyClient} from "../src";
import dovenv from 'dotenv';
import utils from "web3-utils";
import * as bitcoin from "bitcoinjs-lib";

dovenv.config();

describe('web3Client', function() {
  let web3Client: IHmyClient;

  beforeEach(async () => {
    web3Client = await getHmyClient({
      sdk: "web3",
      nodeURL: "https://api.s0.b.hmny.io",
      chainId: 2,
      contractAddress: "0x4A96FdAeA8Fd6064B1efC56753d01B866Ff14883",
      gasLimit: 6721900,
    });

    await web3Client.addWallet(process.env.PRIVATE_KEY);
  })

  it('should return user address', async () => {
    const myAddress = web3Client.getUserAddress();
    expect(myAddress).toBe('0xFbE0741bC1B52dD723A6bfA145E0a15803AC9581');
  });

  it('should return user balance', async () => {
    const myAddress = web3Client.getUserAddress();
    const balance = await web3Client.methods.balanceOf(myAddress);

    expect(typeof balance).toEqual("string");
    expect(utils.toBN(balance).gte(utils.toBN(0))).toStrictEqual(true);
  });

  it('should request issue', async () => {
    const myAddress = web3Client.getUserAddress();
    const amount = 1000000;
    const res = await web3Client.methods.requestIssue(
      amount,
      myAddress
    );
    expect(res).not.toBe(undefined);
    expect(res.transactionHash).not.toBe(undefined);
    // console.log('### res', res);

    const issueEvent = await web3Client.methods.getIssueDetails(
      res.transactionHash
    );

    if (!issueEvent) {
      expect(true).toBe(false);
      return;
    }

    expect(issueEvent.requester).toStrictEqual(myAddress);
    expect(typeof issueEvent.fee).toBe('string')
    expect(typeof issueEvent.issue_id).toBe('string')
    expect(typeof issueEvent.vault_id).toBe('string')
    expect(typeof issueEvent.amount).toBe('string')
    const _amount = utils.toBN(issueEvent.amount);
    const _fee = utils.toBN(issueEvent.fee);
    const issueAmount = _amount.add(_fee);
    expect(issueAmount.toString()).toStrictEqual(utils.toBN(amount).toString());
  });

  it.skip('should request redeem', async () => {
    const myAddress = web3Client.getUserAddress();
    const amount = 1000000;

    const btcAddress = bitcoin.address.fromBech32('tb1q3d4v4gtr3g7pjywp2ym263yqpqr9pe8dzrgkeu').data.toString('hex');
    const res = await web3Client.methods.requestRedeem(
      amount,
      '0x' + btcAddress,
      '0xFbE0741bC1B52dD723A6bfA145E0a15803AC9581',
    );
    expect(res).not.toBe(undefined);
    expect(res.transactionHash).not.toBe(undefined);

    const redeemEvent = await web3Client.methods.getRedeemDetails(
      res.transactionHash
    );

    if (!redeemEvent) {
      expect(true).toBe(false);
      return;
    }

    expect(redeemEvent.requester).toStrictEqual(myAddress);
    expect(typeof redeemEvent.fee).toBe('string');
    expect(typeof redeemEvent.redeem_id).toBe('string');
    expect(typeof redeemEvent.vault_id).toBe('string');
    expect(typeof redeemEvent.amount).toBe('string');
    const _amount = utils.toBN(redeemEvent.amount);
    const _fee = utils.toBN(redeemEvent.fee);
    const issueAmount = _amount.add(_fee);
    expect(issueAmount.toString()).toStrictEqual(utils.toBN(amount).toString());
  });
})