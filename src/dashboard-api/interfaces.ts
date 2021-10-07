export interface IssueRequest {
  id: string;
  vault: string;
  opentime: string;
  requester: string;
  btcAddress: string;
  btcPublicKey: string;
  amount: string;
  fee: string;
  griefingCollateral: string;
  period: string;
  btcHeight: string;
  status: string;
  lastUpdate: number;
  btcTx?: {
    hash: string;
    hex: string;
    fee: number;
    rate: number;
    height: number;
    inputs: any[];
    outputs: any[];
  };
}
