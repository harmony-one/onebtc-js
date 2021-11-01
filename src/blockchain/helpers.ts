import { IssueDetails, RequestIssueReturn } from './hmy/types';
import * as bitcoinjs from 'bitcoinjs-lib/';

export function getIssueDetails(
  transactionReceipt: RequestIssueReturn,
): IssueDetails {
  return transactionReceipt.events.IssueRequest.returnValues;
}

export const btcAddressBech32ToHex = (address: string) => {
  return '0x' + bitcoinjs.address.fromBech32(address).data.toString('hex');
};
