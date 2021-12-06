import { Wallet } from '@harmony-js/account';
import { Harmony } from '@harmony-js/core';

export type TConnectToOneWallet = (
  walletExtension: any,
  hmy: Harmony,
  wallet: Wallet | any,
  addr: string,
  reject: (reason: string) => void,
) => Promise<any>;

export const connectToBrowserWallet: TConnectToOneWallet = async (
  walletExtension,
  hmy,
  wallet,
  addrHex,
  reject,
) => {
  let userAddress = addrHex;

  if (!userAddress) {
    const { address } = await walletExtension.getAccount();

    userAddress = hmy.crypto.getAddress(address).checksum;
  }

  wallet.defaultSigner = userAddress;

  wallet.signTransaction = async (tx: any) => {
    try {
      tx.from = userAddress;

      const signTx = await walletExtension.signTransaction(tx);

      return signTx;
    } catch (e) {
      reject(e);
    }

    return null;
  };
};

export const getUint32Binary = (num: number): string => {
  const numBinaryString = Number(num).toString(2);
  const zeroArray = [...new Array(32 - numBinaryString.length)].fill(0);
  return zeroArray.join('') + numBinaryString;
};
