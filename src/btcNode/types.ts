export interface BTCTx {
  hash: string;
  confirmations: number;
  outputs: { value: number; script: string; address: string }[];
}

export interface BTCNodeInfo {
  chain: {
    height: number;
  };
}
