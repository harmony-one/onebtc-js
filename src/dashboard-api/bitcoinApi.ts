import axios from 'axios';

export const getTxsByAddress = async (
  btcNodeUrl: string,
  bech32Address: string,
) => {
  try {
    const response = await axios.get(
      `${btcNodeUrl}/tx/address/${bech32Address}`,
    );

    return response.data;
  } catch (e) {
    console.error('Error getTransactionByAddress', {
      error: e,
      bech32Address,
      url: btcNodeUrl,
    });
  }
};
