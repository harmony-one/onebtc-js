export interface BTCTx {
  hash: string;
  witnessHash: string;
  fee: number;
  rate: number;
  mtime: number;
  height: number;
  block: string;
  time: string;
  index: number;
  version: number;
  inputs: [];
  outputs: { value: number; script: string; address: string }[];
  locktime: number;
  hex: string;
  confirmations: number;
}

export interface BTCNodeInfo {
  chain: {
    height: number;
  };
}
