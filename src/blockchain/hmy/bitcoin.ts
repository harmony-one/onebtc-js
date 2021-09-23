import * as bitcoin from "bitcoinjs-lib";
import axios from "axios";
import assert from "@summa-tx/bitcoin-spv-js-clients/lib/vendor/bsert";
import merkle from "@summa-tx/bitcoin-spv-js-clients/lib/vendor/merkle";
import hash256 from "@summa-tx/bitcoin-spv-js-clients/lib/vendor/hash256";

const BTC_RPC_URL = 'https://btc.test.hmny.io';

export const reverseAndSwap = (dataP: string | number) => {
  let data = typeof dataP === 'number' ? dataP.toString(16) : dataP;

  let result = ""
  data = data.split("").reverse().join("")
  for(let i=0; i<data.length-1; i+=2){
    result+=data[i+1] + data[i]
  }
  return result
}

export const loadBlockByHeight = async (height: number) => {
  const response = await axios.get(`${BTC_RPC_URL}/header/${height}`);

  const block = new bitcoin.Block();

  block.version = response.data.version;
  block.timestamp = response.data.time;
  block.bits = response.data.bits;
  block.prevHash = Buffer.from(reverseAndSwap(response.data.prevBlock), 'hex');
  block.merkleRoot = Buffer.from(reverseAndSwap(response.data.merkleRoot), 'hex');
  block.nonce = response.data.nonce;
  // @ts-ignore
  block.height = response.data.height;
  // @ts-ignore
  block.hash = response.data.hash;
  // @ts-ignore
  block.chainwork = response.data.chainwork;

  return block;
}

export const loadBtcTx = async (txHash: string) => {
  const txResponse = await axios.get(`${BTC_RPC_URL}/tx/${txHash}`);
  return txResponse.data;
}

const _loadBlockByHeight = async (height: number) => {
  const result = await axios.get(`${BTC_RPC_URL}/block/${height}`);
  return result.data;
  // const result = await axios.post(BTC_RPC_URL, {
  //   "method": "getblockbyheight",
  //   "params": [ height, true, false ],
  // });
  // return result.data.result;
}

export const getMerkleProof = async (txid: string, height: number) => {
  const block = await _loadBlockByHeight(height);

  let index = -1;
  const txs = [];
  for (const [i, tx] of Object.entries(block.txs)) {
    // @ts-ignore
    if (tx.hash === txid) { // @ts-ignore
      index = i >>> 0; } // cast to uint from string
    // @ts-ignore
    txs.push(Buffer.from(tx.hash as string, 'hex').reverse());
  }

  assert(index >= 0, 'Transaction not in block.');

  const [root] = merkle.createRoot(hash256, txs.slice());
  assert.bufferEqual(Buffer.from(block.merkleRoot, 'hex').reverse(), root);

  const branch = merkle.createBranch(hash256, index, txs.slice());

  const proof = [];
  for (const hash of branch) { proof.push(hash.toString('hex')); }

  return [proof, index];
}

export const loadMerkleProof = async (hash: string, height: number) => {

  const merkleProofRes = await getMerkleProof(hash, height);

  // @ts-ignore
  return merkleProofRes[0].map((value) => Buffer.from(value, 'hex').toString('hex')).join("");
}