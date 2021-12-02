import * as bitcoin from 'bitcoinjs-lib';
import axios from 'axios';
import assert from '@summa-tx/bitcoin-spv-js-clients/lib/vendor/bsert';
import merkle from '@summa-tx/bitcoin-spv-js-clients/lib/vendor/merkle';
import hash256 from '@summa-tx/bitcoin-spv-js-clients/lib/vendor/hash256';
import { BTCNodeInfo, BTCTx } from './types';

const reverseAndSwap = (dataP: string | number) => {
  let data = typeof dataP === 'number' ? dataP.toString(16) : dataP;

  let result = '';
  data = data.split('').reverse().join('');
  for (let i = 0; i < data.length - 1; i += 2) {
    result += data[i + 1] + data[i];
  }
  return result;
};

export class BTCNodeClient {
  private host: string;

  constructor(host: string) {
    this.host = host;
  }

  public loadMerkleProof = async (hash: string, height: number) => {
    const merkleProofRes = await this._loadMerkleProof(hash, height);

    return (
      merkleProofRes[0]
        // @ts-expect-error Property 'map' does not exist on type 'number'.
        .map((value: string) => Buffer.from(value, 'hex').toString('hex'))
        .join('')
    );
  };

  private _loadMerkleProof = async (txid: string, height: number) => {
    const block = await this._loadBlockByHeight(height);

    let index = -1;
    const txs = [];
    for (const [i, tx] of Object.entries(block.txs)) {
      // @ts-expect-error TS2339: Property 'hash' does not exist on type 'unknown'.
      if (tx.hash === txid) {
        // @ts-expect-error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
        index = i >>> 0;
      } // cast to uint from string
      // @ts-expect-error TS2339: Property 'hash' does not exist on type 'unknown'.
      txs.push(Buffer.from(tx.hash as string, 'hex').reverse());
    }

    assert(index >= 0, 'Transaction not in block.');

    const [root] = merkle.createRoot(hash256, txs.slice());
    assert.bufferEqual(Buffer.from(block.merkleRoot, 'hex').reverse(), root);

    const branch = merkle.createBranch(hash256, index, txs.slice());

    const proof = [];
    for (const hash of branch) {
      proof.push(hash.toString('hex'));
    }

    return [proof, index];
  };

  public loadBlockByHeight = async (height: number) => {
    const response = await axios.get(`${this.host}/header/${height}`);

    const block = new bitcoin.Block();

    block.version = response.data.version;
    block.timestamp = response.data.time;
    block.bits = response.data.bits;
    block.prevHash = Buffer.from(
      reverseAndSwap(response.data.prevBlock),
      'hex',
    );
    block.merkleRoot = Buffer.from(
      reverseAndSwap(response.data.merkleRoot),
      'hex',
    );
    block.nonce = response.data.nonce;
    // @ts-expect-error TS2339: Property 'height' does not exist on type 'Block'.
    block.height = response.data.height;
    // @ts-expect-error TS2339: Property 'hash' does not exist on type 'Block'.
    block.hash = response.data.hash;
    // @ts-expect-error TS2339: Property 'chainwork' does not exist on type 'Block'.
    block.chainwork = response.data.chainwork;

    return block;
  };

  public loadBtcTx = async (txHash: string): Promise<BTCTx> => {
    const txResponse = await axios.get(`${this.host}/tx/${txHash}`);
    return txResponse.data;
  };

  private _loadBlockByHeight = async (height: number) => {
    const result = await axios.get(`${this.host}/block/${height}`);
    return result.data;
  };

  public loadTxsByAddress = async (bech32Address: string) => {
    try {
      const response = await axios.get(
        `${this.host}/tx/address/${bech32Address}`,
      );

      return response.data;
    } catch (e) {
      console.error('Error getTransactionByAddress', {
        error: e,
        bech32Address,
        url: this.host,
      });
    }
  };

  public loadWalletTxList = async (bech32Address: string): Promise<BTCTx[]> => {
    const response = await axios.get(
      `${this.host}/tx/address/${bech32Address}`,
    );

    return response.data;
  };

  public loadBasicInfo = async (): Promise<BTCNodeInfo> => {
    const response = await axios.get(`${this.host}`);
    return response.data;
  };

  public loadFee = async (): Promise<number> => {
    const response = await axios.get(`${this.host}/fee`);
    return response.data.rate;
  };
}
