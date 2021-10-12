import { DashboardApi } from './index';

const test = async () => {
  const dApi = new DashboardApi({
    dashboardUrl: 'https://relayer.btc.test.hmny.io',
    btcNodeUrl: 'https://btc2.test.hmny.io',
  });

  // console.log(
  //   'getIssues by Vault: ',
  //   await dApi.getIssues({
  //     page: 0,
  //     size: 10,
  //     vault: '0xAc7d2f7c00a55859A3c0041e6f613552C16c0aAb',
  //   }),
  // );

  console.log(
    'get Vault outputs: ',
    await dApi.getVaultFreeOutputs(
      '0xAc7d2f7c00a55859A3c0041e6f613552C16c0aAb',
    ),
  );

  console.log(
    'get Vault balances: ',
    await dApi.loadVaultBalances('0xAc7d2f7c00a55859A3c0041e6f613552C16c0aAb'),
  );
};

test();
