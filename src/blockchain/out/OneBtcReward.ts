export const OneBtcReward: any = {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'vaultId',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'claimAt',
          type: 'uint256',
        },
      ],
      name: 'ClaimRewards',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'vaultId',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'claimAt',
          type: 'uint256',
        },
      ],
      name: 'ClaimRewardsAndLock',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'vaultId',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldLockPeriod',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newLockPeriod',
          type: 'uint256',
        },
      ],
      name: 'ExtendVaultLockPeriod',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'vaultId',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldAccClaimableRewards',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newAccClaimableRewards',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'updatedAt',
          type: 'uint256',
        },
      ],
      name: 'UpdateVaultAccClaimableRewards',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_vaultId',
          type: 'address',
        },
      ],
      name: 'claimRewards',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_vaultId',
          type: 'address',
        },
      ],
      name: 'claimRewardsAndLock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vaultId',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_lockPeriod',
          type: 'uint256',
        },
      ],
      name: 'extendVaultLockPeriod',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vaultId',
          type: 'address',
        },
      ],
      name: 'getClaimableRewards',
      outputs: [
        {
          internalType: 'uint256',
          name: 'claimableRewards',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'rewardClaimAt',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vaultId',
          type: 'address',
        },
      ],
      name: 'getVaultLockExpireAt',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_oneBtc',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_vaultReserve',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'lockedVaults',
      outputs: [
        {
          internalType: 'uint256',
          name: 'lockStartAt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lockPeriod',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lockExpireAt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'rewardClaimAt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'accClaimableRewards',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'accRewardPerShare',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'accRewardPerShareUpdatedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'collateralDebt',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'oneBtc',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vaultId',
          type: 'address',
        },
      ],
      name: 'updateVaultAccClaimableRewards',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'userStakedVaultList',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'vaultReserve',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'vaultStakers',
      outputs: [
        {
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'accClaimableRewards',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'rewardDebt',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
  ],
};
