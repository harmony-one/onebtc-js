# one-btc sdk

### Install instructions

NPM:
```
npm i onebtc.sdk --save
```

Yarn
```
yarn add onebtc.sdk
```

## How to use

### 1. Init SDK instance

```js
import * as onebtcSdk from 'onebtc.sdk';

const onebtcClient = await onebtcSdk.createClientWeb3({
  nodeURL: 'https://api.s0.b.hmny.io',
  btcNodeUrl: 'https://btc2.test.hmny.io',
  contractAddress: '0x2a9B7F9013E701AA71fE050eA9686BbB49E0D105',
  chainId: 2,
  gasLimit: 6721900,
});

```

### 1.1 Add account

```js
const PRIVATE_KEY = 'some_private_key';
await onebtcClient.setAccount(PRIVATE_KEY);
```


### 2. Request issue

```js

const VAULT_ADDRESS = '0x498554d79612C76d630c613cA5AD143FeE06ccF2';
onebtcClient.requestIssue(10000, VAULT_ADDRESS);
```

### 3. Request redeem

```js

const VAULT_ADDRESS = '0x498554d79612C76d630c613cA5AD143FeE06ccF2';
onebtcClient.requestRedeem(10000, VAULT_ADDRESS);
```


## Dashboard API


### Init dashboard client
```js
import { DashboardApi, Network } from 'onebtc.sdk/lib/dashboard-api';

export const dashboardClient = new DashboardApi({
  dashboardUrl: 'https://dashboard.btc.test.hmny.io',
  btcNodeUrl: config.bitcoin.btcNodeUrl.testnet,
  network: Network.TESTNET,
});
```

### Load issue

```js
const issueId = '60223755045874313250033704538578944141691614323714641306215289094834832886161'
dashboardClient.loadIssue(issueId).then((issue) => {
  console.log('### issue', issue);
});
```

### Load redeem

```js
const redeemId = '60223755045874313250033704538578944141691614323714641306215289094834832886161'
dashboardClient.loadRedeem(issueId).then((issue) => {
  console.log('### issue', issue);
});
```