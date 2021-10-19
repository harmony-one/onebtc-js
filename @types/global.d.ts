interface Window {
  onewallet?: {
    isOneWallet: boolean;
    version: string;
    blockchain: string;
    chain_id: number;
    chain_url: string;
    net_version: number;
    signTransaction: (arg: unknown) => unknown;
    getAccount: () => Promise<{ name: string; address: string }>;
  };
}
