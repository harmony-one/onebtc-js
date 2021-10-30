import { createClientWeb3 } from '../src';
import dovenv from 'dotenv';
import utils from 'web3-utils';
import * as bitcoin from 'bitcoinjs-lib';
import { OneBTCClientWeb3 } from '../src/blockchain/hmy/OneBTCClientWeb3';

dovenv.config();

describe.only('web3Client', function () {
  let web3Client: OneBTCClientWeb3;

  beforeEach(async () => {
    web3Client = await createClientWeb3({
      nodeURL: 'https://api.s0.b.hmny.io',
      btcNodeUrl: 'https://btc2.test.hmny.io',
      chainId: 2,
      contractAddress: '0x4A96FdAeA8Fd6064B1efC56753d01B866Ff14883',
      gasLimit: 6721900,
    });

    await web3Client.setAccount(process.env.PRIVATE_KEY);
  });

  it('should return user address', async () => {
    const myAddress = web3Client.getUserAddress();
    expect(myAddress).toBe('0xFbE0741bC1B52dD723A6bfA145E0a15803AC9581');
  });

  it('should return user balance', async () => {
    const myAddress = web3Client.getUserAddress();
    const balance = await web3Client.balanceOf(myAddress);

    expect(typeof balance).toEqual('string');
    expect(utils.toBN(balance).gte(utils.toBN(0))).toStrictEqual(true);
  });

  it('should request issue', async () => {
    const myAddress = web3Client.getUserAddress();
    const amount = 1000000;
    const issue = await web3Client.requestIssue(amount, myAddress);
    expect(issue).not.toBe(undefined);

    expect(issue.requester).toStrictEqual(myAddress);
    expect(typeof issue.fee).toBe('string');
    expect(typeof issue.issue_id).toBe('string');
    expect(typeof issue.vault_id).toBe('string');
    expect(typeof issue.amount).toBe('string');
    const _amount = utils.toBN(issue.amount);
    const _fee = utils.toBN(issue.fee);
    const issueAmount = _amount.add(_fee);
    expect(issueAmount.toString()).toStrictEqual(utils.toBN(amount).toString());
  });

  it.skip('should request redeem', async () => {
    const myAddress = web3Client.getUserAddress();
    const amount = 1000000;

    const btcAddress = bitcoin.address
      .fromBech32('tb1q3d4v4gtr3g7pjywp2ym263yqpqr9pe8dzrgkeu')
      .data.toString('hex');
    const redeem = await web3Client.requestRedeem(
      amount,
      '0x' + btcAddress,
      '0xFbE0741bC1B52dD723A6bfA145E0a15803AC9581',
    );
    expect(redeem).not.toBe(undefined);

    expect(redeem.requester).toStrictEqual(myAddress);
    expect(typeof redeem.fee).toBe('string');
    expect(typeof redeem.redeem_id).toBe('string');
    expect(typeof redeem.vault_id).toBe('string');
    expect(typeof redeem.amount).toBe('string');
    const _amount = utils.toBN(redeem.amount);
    const _fee = utils.toBN(redeem.fee);
    const issueAmount = _amount.add(_fee);
    expect(issueAmount.toString()).toStrictEqual(utils.toBN(amount).toString());
  });
});
