export type SendTxCallback = (txHash: string) => void;


export interface RedeemDetails {
  redeem_id: string;
  amount: string;
  fee: string;
  requester: string;
  vault_id: string;
  btc_address: string;
}

export interface IssueDetails {
  issue_id: string
  amount: string;
  fee: string;
  requester: string
  vault_id: string,
  btc_address: string;
}

export interface TransactionReceipt {
  blockHash: string;
  blockNumber: number;
  contractAddress: null;
  cumulativeGasUsed: number;
  events: {};
  gasUsed: number;
  logsBloom: string;
  status: boolean;
  to: string;
  from: string;
  transactionHash: string;
}

export default interface IContractMethods {
  // web3: Web3;
  init(): Promise<void>
  setUseOneWallet(value: boolean): boolean
  setUseMathWallet(value: boolean): boolean
  setUseMetamask(value: boolean): boolean;
  requestIssue(amount: number, address: string, sendTxCallback?: SendTxCallback): Promise<TransactionReceipt>;
  executeIssue(
    requester: string,
    issueId: string,
    btcTxHash: string,
    sendTxCallback?: SendTxCallback
  ): Promise<TransactionReceipt>

  cancelIssue(
    requester: string,
    issueId: number,
    sendTxCallback?: SendTxCallback
  ): Promise<TransactionReceipt>

  getIssueId(requester: string): Promise<any>;

  transfer(recipient: string, amount: number, sendTxCallback?: SendTxCallback): Promise<TransactionReceipt>;
  requestRedeem(amountOneBtc: number, btcAddress: string, vaultId: string, sendTxCallback?: SendTxCallback): Promise<TransactionReceipt>;

  executeRedeem(
    requester: string,
    redeemId: number,
    merkleProof: any,
    rawTx: any,
    heightAndIndex: any,
    header: any,
    sendTxCallback?: SendTxCallback
  ): Promise<TransactionReceipt>
  balanceOf(requester: string): Promise<any>;

  register_vault(
    x: string,
    y: string,
    sendTxCallback?: SendTxCallback
  ): Promise<any>

  getIssueDetails(txHash: string): Promise<IssueDetails | void>;
  getRedeemDetails(txHash: string): Promise<RedeemDetails | void>;
}