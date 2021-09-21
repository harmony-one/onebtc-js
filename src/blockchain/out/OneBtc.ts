export const OneBtc: any = {
  "contractName": "OneBtc",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IRelay",
          "name": "_relay",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "replaceId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldVault",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newVault",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "btcAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        }
      ],
      "name": "AcceptReplace",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "replaceId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldVault",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newVault",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "slashedCollateral",
          "type": "uint256"
        }
      ],
      "name": "CancelReplace",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DecreaseToBeIssuedTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DecreaseToBeReplacedTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "replaceId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldVault",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newVault",
          "type": "address"
        }
      ],
      "name": "ExecuteReplace",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IncreaseToBeIssuedTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IncreaseToBeRedeemedTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IncreaseToBeReplacedTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "issuedId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "confiscatedGriefingCollateral",
          "type": "uint256"
        }
      ],
      "name": "IssueAmountChange",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "issuedId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        }
      ],
      "name": "IssueCancel",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "issuedId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        }
      ],
      "name": "IssueComplete",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "issueId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        }
      ],
      "name": "IssueRequest",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IssueTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "LockCollateral",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "redeemId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        }
      ],
      "name": "RedeemCancel",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "redeemId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        }
      ],
      "name": "RedeemComplete",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "redeemId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        }
      ],
      "name": "RedeemRequest",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RedeemTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "btcPublicKeyX",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "btcPublicKeyY",
          "type": "uint256"
        }
      ],
      "name": "RegisterVault",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ReleaseCollateral",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldVaultId",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newVaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        }
      ],
      "name": "ReplaceTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldVault",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "btcAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "griefingCollateral",
          "type": "uint256"
        }
      ],
      "name": "RequestReplace",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "SlashCollateral",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        }
      ],
      "name": "VaultPublicKeyUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldVault",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawnTokens",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawnGriefingCollateral",
          "type": "uint256"
        }
      ],
      "name": "WithdrawReplace",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "CollateralBalances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "CollateralUsed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "TotalCollateral",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "threshold",
          "type": "uint256"
        }
      ],
      "name": "calculateMaxWrappedFromCollateralForThreshold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        }
      ],
      "name": "issuableTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "issueRequests",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "vault",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "opentime",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "btcPublicKey",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "griefingCollateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "period",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "btcHeight",
          "type": "uint256"
        },
        {
          "internalType": "enum RequestStatus",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        }
      ],
      "name": "issued",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "lockAdditionalCollateral",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "realy",
      "outputs": [
        {
          "internalType": "contract IRelay",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "redeemRequests",
      "outputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "opentime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "period",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBtc",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "transferFeeBtc",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOne",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "premiumOne",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "btcHeight",
          "type": "uint256"
        },
        {
          "internalType": "enum RequestStatus",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "btcPublicKeyX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "btcPublicKeyY",
          "type": "uint256"
        }
      ],
      "name": "registerVault",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "replaceRequests",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "oldVault",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "newVault",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "acceptTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "griefingCollateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "period",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "btcHeight",
          "type": "uint256"
        },
        {
          "internalType": "enum RequestStatus",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "secureCollateralThreshold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        }
      ],
      "name": "toBeRedeemed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "btcPublicKeyX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "btcPublicKeyY",
          "type": "uint256"
        }
      ],
      "name": "updatePublicKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "vaults",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "btcPublicKeyX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "btcPublicKeyY",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "issued",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "toBeIssued",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "toBeRedeemed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "replaceCollateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "toBeReplaced",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawCollateral",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountRequested",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        }
      ],
      "name": "requestIssue",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "issueId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "merkleProof",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "rawTx",
          "type": "bytes"
        },
        {
          "internalType": "uint32",
          "name": "height",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "header",
          "type": "bytes"
        }
      ],
      "name": "executeIssue",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "issueId",
          "type": "uint256"
        }
      ],
      "name": "cancelIssue",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOneBtc",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "btcAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "vaultId",
          "type": "address"
        }
      ],
      "name": "requestRedeem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "merkleProof",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "rawTx",
          "type": "bytes"
        },
        {
          "internalType": "uint32",
          "name": "height",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "header",
          "type": "bytes"
        }
      ],
      "name": "executeRedeem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemId",
          "type": "uint256"
        }
      ],
      "name": "cancelRedeem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "oldVaultId",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "btcAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "griefingCollateral",
          "type": "uint256"
        }
      ],
      "name": "requestReplace",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "oldVaultId",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "newVaultId",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "btcAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "btcPublicKeyX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "btcPublicKeyY",
          "type": "uint256"
        }
      ],
      "name": "acceptReplace",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "replaceId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "merkleProof",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "rawTx",
          "type": "bytes"
        },
        {
          "internalType": "uint32",
          "name": "height",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "header",
          "type": "bytes"
        }
      ],
      "name": "executeReplace",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IRelay\",\"name\":\"_relay\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"replaceId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"btcAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"AcceptReplace\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"replaceId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slashedCollateral\",\"type\":\"uint256\"}],\"name\":\"CancelReplace\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"DecreaseToBeIssuedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"DecreaseToBeReplacedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"replaceId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newVault\",\"type\":\"address\"}],\"name\":\"ExecuteReplace\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"IncreaseToBeIssuedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"IncreaseToBeRedeemedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"IncreaseToBeReplacedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"issuedId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"confiscatedGriefingCollateral\",\"type\":\"uint256\"}],\"name\":\"IssueAmountChange\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"issuedId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"IssueCancel\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"issuedId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"IssueComplete\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"IssueRequest\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"IssueTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"LockCollateral\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"RedeemCancel\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"RedeemComplete\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"RedeemRequest\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"RedeemTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"}],\"name\":\"RegisterVault\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ReleaseCollateral\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVaultId\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newVaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"}],\"name\":\"ReplaceTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"btcAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"griefingCollateral\",\"type\":\"uint256\"}],\"name\":\"RequestReplace\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"SlashCollateral\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"VaultPublicKeyUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawnTokens\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawnGriefingCollateral\",\"type\":\"uint256\"}],\"name\":\"WithdrawReplace\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"CollateralBalances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"CollateralUsed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"TotalCollateral\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"oldVaultId\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"newVaultId\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"btcAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"}],\"name\":\"acceptReplace\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"threshold\",\"type\":\"uint256\"}],\"name\":\"calculateMaxWrappedFromCollateralForThreshold\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"}],\"name\":\"cancelIssue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"}],\"name\":\"cancelRedeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"merkleProof\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"},{\"internalType\":\"uint32\",\"name\":\"height\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"header\",\"type\":\"bytes\"}],\"name\":\"executeIssue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"merkleProof\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"},{\"internalType\":\"uint32\",\"name\":\"height\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"header\",\"type\":\"bytes\"}],\"name\":\"executeRedeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"replaceId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"merkleProof\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"},{\"internalType\":\"uint32\",\"name\":\"height\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"header\",\"type\":\"bytes\"}],\"name\":\"executeReplace\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"issuableTokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"issueRequests\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"opentime\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"btcPublicKey\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"griefingCollateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcHeight\",\"type\":\"uint256\"},{\"internalType\":\"enum RequestStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"issued\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lockAdditionalCollateral\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"realy\",\"outputs\":[{\"internalType\":\"contract IRelay\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"redeemRequests\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"opentime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountBtc\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"transferFeeBtc\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountOne\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"premiumOne\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"btcHeight\",\"type\":\"uint256\"},{\"internalType\":\"enum RequestStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"}],\"name\":\"registerVault\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"replaceRequests\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"oldVault\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"newVault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"acceptTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"griefingCollateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcHeight\",\"type\":\"uint256\"},{\"internalType\":\"enum RequestStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountRequested\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"requestIssue\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOneBtc\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"requestRedeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"oldVaultId\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"btcAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"griefingCollateral\",\"type\":\"uint256\"}],\"name\":\"requestReplace\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"secureCollateralThreshold\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"toBeRedeemed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"}],\"name\":\"updatePublicKey\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"vaults\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"issued\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"toBeIssued\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"toBeRedeemed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"replaceCollateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"toBeReplaced\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdrawCollateral\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}; Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol\":\"OneBtc\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Collateral.sol\":{\"keccak256\":\"0x768ef9314a318c81f63d1dbea13219e81270979c10b82c3b092495f545fed4c4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://baf7f07d176b48ec0f103030febff157382a0330ab001f5c2cafcf7bd0d86518\",\"dweb:/ipfs/QmUaH47tmaDuB4MBuAJZn3FX2JhwNa8md49eYgTSd3txnX\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/ExchangeRateOracle.sol\":{\"keccak256\":\"0xed1f0c823671b907ff41c76f09c47952c356a1a584ceec8a2ada375e69574f3a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2f49464819f8dbf0d6ee8c540f5e59c171faa9319192c483be9f335beba14a83\",\"dweb:/ipfs/QmTocKkgzofvMfqobUUoD2drmbgGTvhoURTDBtjDvTP8hr\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/IRelay.sol\":{\"keccak256\":\"0x9b9d6cb8b35ba9b87d3c80ac65c3a4ab148e58eba8d7daf71ffdb1719e977e4e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7acaca7f4573b1e3e72a67d2c1749898fc131af2b76ae2f60a955979a39f3441\",\"dweb:/ipfs/QmckP2gyAtVha5YoLTq9cD1WCjWkcZrQoSJpNtymoSwNzq\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Issue.sol\":{\"keccak256\":\"0x812b122551944bc2ead5f71f3d5b1e1ab478bb36d0c6f1966e0083e4ce065580\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://86406e1f8065ad05256ff520d53aeeb83bbcea555ab6e9e0ffebdc47e0a60d9b\",\"dweb:/ipfs/Qmbg4pLedYbBFjyTLz2Ew38BcZt31admphVAV9Ta2UpzPs\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol\":{\"keccak256\":\"0xf7fb9ac39cb626039e17b430406703e9c6964aad14c07b82cf8ca9de4fa3f26e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://42e2982de30fadd8373a171c717b1d0c8818a775650b288216c387e77ad2cf6e\",\"dweb:/ipfs/QmcV2e8Cwo1tTneG7r6NVEH7iWgRFRgodHDexuDvUNXH2R\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Redeem.sol\":{\"keccak256\":\"0x0576f409573ae300b06e0593a3da06f12f665f9b7815aab4fbc0474e72ffce2a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://45168a5ddf55e5168a6616031c7068466414b1a4ca77422a82cfb395c2a2a5c1\",\"dweb:/ipfs/QmTiFwwoZchLWgwNDHWvXgqjt1bVJzvFiHt49YvJUYJTsf\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Replace.sol\":{\"keccak256\":\"0x7d0bd81c96d0845d1144eda560ebc928d932c8e20b23963aa70b5dd8bc771423\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d79da7682f713e44d60b0708e5f77b685933633ab3294460b8d827c3f5b3b8e5\",\"dweb:/ipfs/QmX8rSvMtfLaadgQSXAGXZciGcULFDKrDSSBhhpzF6rtee\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Request.sol\":{\"keccak256\":\"0x650fd2d595ecd87b9798659098a01961bccced4bb40e82b8255d364e8d9d3a93\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9be893f742c7ab33aaca436a06657552e11b4f0f159d03f88e8a8e33284547f2\",\"dweb:/ipfs/QmeqqdWt7zntGSRqjGXGewRDPzbrX3VKqHhdMZ8qGdAFhB\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/TransactionUtils.sol\":{\"keccak256\":\"0xf62776682adfe3616f6840aee2f3e8cf5ab3e54541813792ee2a3a0d79c9265c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ecf8eb0bfdedc24dc0b77e11e24651653dcaf32132ed7de20b8fffea1b5807dd\",\"dweb:/ipfs/QmeL2HzZxp5TmvyZcLyQ3njQN9nF9szDhva7MyU72GbY8V\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/TxValidate.sol\":{\"keccak256\":\"0x5be10efb794b80a3445c4812a742218ba78dc37e270bd49a17e92ab6f73009c6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://62519a5552c150c540ad0b85fa58a92b70b78b33c77fb7c4baf760d7d80bbb40\",\"dweb:/ipfs/QmeipfR2nEXiQ9Kt6WKcANbv5RpkmoFEqG8fjavh7se94f\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/VaultRegistry.sol\":{\"keccak256\":\"0x147997299f835e007b194c7bcb45bcaca92429b24367b8a29a221d98f8fe15d0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c82b2d7a512e4caf49efe2b053e554d5586b55cacc30781eab8fd031ecddc3da\",\"dweb:/ipfs/QmQox6Wy7ZTTNTaygsR2TqL9qsuZrjCSGMbGA1dnnKxuBk\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/crypto/BitcoinKeyDerivation.sol\":{\"keccak256\":\"0xfa0ae3fcc5955015556293c3de02bd5dbfa456923a0eda6b5371fd9ed69a8bcd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e1255da4127cd133171fc24cabded3092b77552a3b77d972798e00a22a859be3\",\"dweb:/ipfs/QmcDVp7R2yJ7F12VoKFKs6GbgEeNmmZsKk4ndwdoUpJzPU\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/crypto/EllipticCurve.sol\":{\"keccak256\":\"0x4ed07e057e2636e1929dcba30d4ab1a6661c5bf4ad1109f5055b5591a8cc5317\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9a3de0c3c95b0c9fac7a48244a8b54ce82312942c0286c1394225bee2bae9e6d\",\"dweb:/ipfs/QmRuVjx2m2kHJiPDrqsqKEZS7M5uvAYL5Z1Gvsu5zW1Wib\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/crypto/Secp256k1.sol\":{\"keccak256\":\"0xafa60dd4f85b23db1534483a3cf4ce384f4c5b353d1a8ba84b1c314b0ecb74f7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c30a928f24e00f9a18a329066163a2c98e74194c790396fc0ed9c6baad2c5349\",\"dweb:/ipfs/QmaNZodNXimZE6FHcVAmJ1P8W9peEMubqJw9aDaFzdgY3Z\"]},\"@interlay/bitcoin-spv-sol/contracts/BTCUtils.sol\":{\"keccak256\":\"0xd7eee94c52175b8624f9673864a402ebb97e0f79d0eabbe1caaa83a12e48fbf4\",\"license\":\"LGPL-3.0-only\",\"urls\":[\"bzz-raw://1b6370e92ad1f73ef163e5d56f2c0105473fe8d7ad3833e53b177406f8c77be0\",\"dweb:/ipfs/QmNsZsNAufKFMZVzKgF1zB8gWYHkcqdcxSzuftfP9U6NfY\"]},\"@interlay/bitcoin-spv-sol/contracts/BytesLib.sol\":{\"keccak256\":\"0x303aced280e63a47a8fb1cce36f6c869c158dd49d4dee52b7e278419586fc10a\",\"license\":\"LGPL-3.0-only\",\"urls\":[\"bzz-raw://e70a490446911a1f77189259b9e95d0077d30e6770794960f92b0a88145dd973\",\"dweb:/ipfs/QmYCNsZHqyR1VoZqdAX7skJdyJt4XTFcJcGvcajExf3JQr\"]},\"@interlay/bitcoin-spv-sol/contracts/SafeMath.sol\":{\"keccak256\":\"0x81f2c4caf58215707c77cbb6607ffa46e61cbe1b12637a831ba3cf81c6b05fe6\",\"license\":\"LGPL-3.0-only\",\"urls\":[\"bzz-raw://6880cf52ff472f606d0584487740acc7fc520289119993dc23c3d5f76082b1e2\",\"dweb:/ipfs/QmcPzVZPd7faxQyzd4BnL3W4PmUxHWaqL9DeoizjrPCGBw\"]},\"@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol\":{\"keccak256\":\"0x0b0515de20f8c4020a6a31bfed3e3eb76f9a51061650703c7900648355998199\",\"license\":\"LGPL-3.0-only\",\"urls\":[\"bzz-raw://9b577f55ca3703ef863b99a196dc3f38572515f93a3a4c6bfda2df2bc507ec51\",\"dweb:/ipfs/QmUN52TmsRBkbpU7FCSKLt5Mk9YrajB5Hxg6XuEkvP9tLS\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/math/Math.sol\":{\"keccak256\":\"0x6c234834003dfb86e2c23d12dfdde7cc01e78013d71b52162cb308b4873562cb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f0e3f39b2ec26694a42c89a5d9e489d5228f1880fcf5e375c5c975ba816e5ffe\",\"dweb:/ipfs/QmUErheHopnbBUSLDQAtWsmw6HsEvqTNp1QiBEuSJhmhHn\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xf204d98eef08edacf5a02a2af1516ea4febdb6aba7a1ae5ac8deb6e568fd3dbb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c4dea62bffbd180772a6cfe7cb90e3a045c52d6b502bdb2fdff83193da42d8d0\",\"dweb:/ipfs/QmW8qGZ5nngajmv5Aamdrpkeuq7S5YCVaR7rtcqNekKHtK\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162005a9338038062005a93833981810160405260208110156200003757600080fd5b50516040805180820182526006808252654f6e6542746360d01b6020838101828152855180870190965292855284015281519192916200007a91600391620000e8565b50805162000090906004906020840190620000e8565b50506005805460ff1916601217905550620000ac6008620000d2565b600d80546001600160a01b0319166001600160a01b039290921691909117905562000184565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b6158ff80620001946000396000f3fe60806040526004361061021a5760003560e01c806377d6b7ca11610123578063a457c2d7116100ab578063c8c7fa001161006f578063c8c7fa0014610cc7578063d4bcb1e914610d0f578063dd62ed3e14610d48578063f02d7ef014610d83578063f4ffee5a14610db65761021a565b8063a457c2d71461095d578063a622ee7c14610996578063a9059cbb14610a0a578063c50c821414610a43578063c5387e8f14610b855761021a565b80639446a5b4116100f25780639446a5b41461073757806395d89b4114610767578063978f28dd1461077c5780639908cd7d146108b057806399891792146109555761021a565b806377d6b7ca1461065e5780637d41c86e1461068a57806390336df2146106cb57806393c9abfb146107045761021a565b806334e2624b116101a65780634d01f27b116101755780634d01f27b146104dc578063500e9d511461050c57806355061bb8146105ce5780636112fe2e1461060157806370a082311461062b5761021a565b806334e2624b14610446578063395093511461045b578063489a1759146104945780634b26a78d146104c75761021a565b806318160ddd116101ed57806318160ddd1461036f5780631bee398f1461038457806323b872dd146103a75780632db99b14146103ea578063313ce5671461041b5761021a565b806306fdde031461021f578063095ea7b3146102a957806316e139bb146102f65780631704b9a61461033b575b600080fd5b34801561022b57600080fd5b50610234610ed3565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026e578181015183820152602001610256565b50505050905090810190601f16801561029b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102b557600080fd5b506102e2600480360360408110156102cc57600080fd5b506001600160a01b038135169060200135610f69565b604080519115158252519081900360200190f35b34801561030257600080fd5b506103296004803603602081101561031957600080fd5b50356001600160a01b0316610f87565b60408051918252519081900360200190f35b61036d6004803603606081101561035157600080fd5b506001600160a01b038135169060208101359060400135610fa9565b005b34801561037b57600080fd5b50610329610fb9565b61036d6004803603604081101561039a57600080fd5b5080359060200135610fbf565b3480156103b357600080fd5b506102e2600480360360608110156103ca57600080fd5b506001600160a01b038135811691602081013590911690604001356110c2565b3480156103f657600080fd5b506103ff61114a565b604080516001600160a01b039092168252519081900360200190f35b34801561042757600080fd5b50610430611159565b6040805160ff9092168252519081900360200190f35b34801561045257600080fd5b50610329611162565b34801561046757600080fd5b506102e26004803603604081101561047e57600080fd5b506001600160a01b038135169060200135611166565b3480156104a057600080fd5b50610329600480360360208110156104b757600080fd5b50356001600160a01b03166111b4565b3480156104d357600080fd5b506103296111c6565b3480156104e857600080fd5b5061036d600480360360408110156104ff57600080fd5b50803590602001356111cb565b34801561051857600080fd5b506105456004803603604081101561052f57600080fd5b506001600160a01b038135169060200135611270565b604051808d6001600160a01b031681526020018c81526020018b81526020018a8152602001898152602001888152602001878152602001868152602001856001600160a01b03168152602001846001600160a01b031681526020018381526020018260038111156105b257fe5b81526020019c5050505050505050505050505060405180910390f35b3480156105da57600080fd5b50610329600480360360208110156105f157600080fd5b50356001600160a01b03166112ea565b34801561060d57600080fd5b5061036d6004803603602081101561062457600080fd5b50356112fc565b34801561063757600080fd5b506103296004803603602081101561064e57600080fd5b50356001600160a01b0316611370565b61036d6004803603604081101561067457600080fd5b50803590602001356001600160a01b031661138b565b34801561069657600080fd5b5061036d600480360360608110156106ad57600080fd5b508035906001600160a01b0360208201358116916040013516611397565b3480156106d757600080fd5b5061036d600480360360408110156106ee57600080fd5b506001600160a01b0381351690602001356113a3565b34801561071057600080fd5b506103296004803603602081101561072757600080fd5b50356001600160a01b03166113ad565b34801561074357600080fd5b506103296004803603604081101561075a57600080fd5b50803590602001356113c2565b34801561077357600080fd5b506102346113d9565b34801561078857600080fd5b5061036d600480360360c081101561079f57600080fd5b81359190810190604081016020820135600160201b8111156107c057600080fd5b8201836020820111156107d257600080fd5b803590602001918460018302840111600160201b831117156107f357600080fd5b919390929091602081019035600160201b81111561081057600080fd5b82018360208201111561082257600080fd5b803590602001918460018302840111600160201b8311171561084357600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b81111561087257600080fd5b82018360208201111561088457600080fd5b803590602001918460018302840111600160201b831117156108a557600080fd5b50909250905061143a565b3480156108bc57600080fd5b506108da600480360360208110156108d357600080fd5b5035611464565b604051808b6001600160a01b031681526020018a6001600160a01b03168152602001898152602001888152602001878152602001866001600160a01b0316815260200185815260200184815260200183815260200182600381111561093b57fe5b81526020019a505050505050505050505060405180910390f35b61036d6114c7565b34801561096957600080fd5b506102e26004803603604081101561098057600080fd5b506001600160a01b038135169060200135611537565b3480156109a257600080fd5b506109c9600480360360208110156109b957600080fd5b50356001600160a01b031661159f565b604080519889526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b348015610a1657600080fd5b506102e260048036036040811015610a2d57600080fd5b506001600160a01b0381351690602001356115e2565b348015610a4f57600080fd5b5061036d600480360360e0811015610a6657600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b811115610a9557600080fd5b820183602082011115610aa757600080fd5b803590602001918460018302840111600160201b83111715610ac857600080fd5b919390929091602081019035600160201b811115610ae557600080fd5b820183602082011115610af757600080fd5b803590602001918460018302840111600160201b83111715610b1857600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b811115610b4757600080fd5b820183602082011115610b5957600080fd5b803590602001918460018302840111600160201b83111715610b7a57600080fd5b5090925090506115f6565b348015610b9157600080fd5b5061036d600480360360e0811015610ba857600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b811115610bd757600080fd5b820183602082011115610be957600080fd5b803590602001918460018302840111600160201b83111715610c0a57600080fd5b919390929091602081019035600160201b811115610c2757600080fd5b820183602082011115610c3957600080fd5b803590602001918460018302840111600160201b83111715610c5a57600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b811115610c8957600080fd5b820183602082011115610c9b57600080fd5b803590602001918460018302840111600160201b83111715610cbc57600080fd5b509092509050611622565b61036d600480360360c0811015610cdd57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a00135611641565b348015610d1b57600080fd5b5061036d60048036036040811015610d3257600080fd5b506001600160a01b038135169060200135611657565b348015610d5457600080fd5b5061032960048036036040811015610d6b57600080fd5b506001600160a01b0381358116916020013516611661565b348015610d8f57600080fd5b5061032960048036036020811015610da657600080fd5b50356001600160a01b031661168c565b348015610dc257600080fd5b50610def60048036036040811015610dd957600080fd5b506001600160a01b0381351690602001356116aa565b604051808c6001600160a01b031681526020018b81526020018a6001600160a01b03168152602001896001600160a01b0316815260200180602001888152602001878152602001868152602001858152602001848152602001836003811115610e5457fe5b8152602001828103825289818151815260200191508051906020019080838360005b83811015610e8e578181015183820152602001610e76565b50505050905090810190601f168015610ebb5780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610f5f5780601f10610f3457610100808354040283529160200191610f5f565b820191906000526020600020905b815481529060010190602001808311610f4257829003601f168201915b5050505050905090565b6000610f7d610f766117a2565b84846117a6565b5060015b92915050565b6001600160a01b0381166000908152600860205260409020600501545b919050565b610fb4838383611892565b505050565b60025490565b33600081815260086020526040902080541561100f576040805162461bcd60e51b815260206004820152600a6024820152691d985d5b1d115e1a5cdd60b21b604482015290519081900360640190fd5b831580159061101d57508215155b61105e576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c69645075626b657960981b604482015290519081900360640190fd5b838155600181018390556110706114c7565b604080513481526020810186905280820185905290516001600160a01b038416917f49fd9cc8f07d8a3a7cf7160535b6b0ce95d90fe87662605e19d90028ceb3aa3b919081900360600190a250505050565b60006110cf848484611a22565b61113f846110db6117a2565b61113a856040518060600160405280602881526020016157a1602891396001600160a01b038a166000908152600160205260408120906111196117a2565b6001600160a01b031681526020810191909152604001600020549190611b7d565b6117a6565b5060015b9392505050565b600d546001600160a01b031681565b60055460ff1690565b4790565b6000610f7d6111736117a2565b8461113a85600160006111846117a2565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611c14565b60066020526000908152604090205481565b609681565b336000818152600860205260409020805461121d576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b83815560018101839055604080518581526020810185905281516001600160a01b038516927fd4fbb16c279424bdd5e637a14cae7b00e68dd1529d7fa5ea6e8a1018af2f3fed928290030190a250505050565b600b602081815260009384526040808520909152918352912080546001820154600283015460038401546004850154600586015460068701546007880154600889015460098a0154600a8b01549a909b01546001600160a01b03998a169b989a979996989597949693959294918416939092169160ff168c565b60076020526000908152604090205481565b336000908152600860205260409020805461134e576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600281015461135d9083611c6e565b600282015561136c3383611cb0565b5050565b6001600160a01b031660009081526020819052604090205490565b61136c33838334611d03565b610fb433848484611eef565b61136c8282612105565b6000806113b9836122b0565b90506111438160965b6000611143826113d38560646122dd565b90612336565b60048054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610f5f5780601f10610f3457610100808354040283529160200191610f5f565b606061144c8585898987878f8f612378565b90506114588a8261257d565b50505050505050505050565b600c6020526000908152604090208054600182015460028301546003840154600485015460058601546006870154600788015460088901546009909901546001600160a01b03988916999789169896979596949593909416939192909160ff168a565b3360008181526008602052604090208054611519576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60028101546115289034611c14565b600282015561136c82346126d4565b6000610f7d6115446117a2565b8461113a856040518060600160405280602581526020016158a5602591396001600061156e6117a2565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611b7d565b6008602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460079097015495969495939492939192909188565b6000610f7d6115ef6117a2565b8484611a22565b60606116088585898987878f8f612378565b90506116158b8b8361279c565b5050505050505050505050565b60606116348585898987878f8f612378565b90506116158b8b83612a8b565b61164f868686868686612c07565b505050505050565b61136c8282612fd3565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b031660009081526008602052604090206003015490565b600a6020908152600092835260408084208252918352918190208054600180830154600280850154600386015460048701805489516101009782161597909702600019011693909304601f81018a90048a0286018a019098528785526001600160a01b0395861698939791861696951694939283018282801561176e5780601f106117435761010080835404028352916020019161176e565b820191906000526020600020905b81548152906001019060200180831161175157829003601f168201915b50505060058401546006850154600786015460088701546009880154600a9098015496979396929550909350919060ff168b565b3390565b6001600160a01b0383166117eb5760405162461bcd60e51b81526004018080602001828103825260248152602001806158816024913960400191505060405180910390fd5b6001600160a01b0382166118305760405162461bcd60e51b81526004018080602001828103825260228152602001806156ab6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b336001600160a01b038416146118d95760405162461bcd60e51b81526004018080602001828103825260248152602001806156cd6024913960400191505060405180910390fd5b60006118e484613167565b905060006118f282856131f5565b90508284156119095761190684838761320b565b90505b600080611917888585613233565b915091506000611925613317565b905080831015611974576040805162461bcd60e51b8152602060048201526015602482015274105b5bdd5b9d10995b1bddd11d5cdd105b5bdd5b9d605a1b604482015290519081900360640190fd5b8161197e8461331c565b11156119ca576040805162461bcd60e51b8152602060048201526016602482015275125b9cdd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6119d489856126d4565b604080518681526020810186905281516001600160a01b038c16927f8913ea7a41c7a2e297c14b401089285065174a3e4c4bb03671fc5b4f27591ddc928290030190a2505050505050505050565b6001600160a01b038316611a675760405162461bcd60e51b815260040180806020018281038252602581526020018061585c6025913960400191505060405180910390fd5b6001600160a01b038216611aac5760405162461bcd60e51b81526004018080602001828103825260238152602001806156666023913960400191505060405180910390fd5b611ab7838383610fb4565b611af481604051806060016040528060268152602001615712602691396001600160a01b0386166000908152602081905260409020549190611b7d565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611b239082611c14565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115611c0c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611bd1578181015183820152602001611bb9565b50505050905090810190601f168015611bfe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611143576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061114383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b7d565b611cbb82838361331f565b604080516001600160a01b03841681526020810183905281517f943defbd695c6a58b5dbd0fcccb150d25f2fd14a5ebba6cb6b0d9e33651191d4929181900390910190a15050565b80611d0d8461331c565b1115611d59576040805162461bcd60e51b8152602060048201526016602482015275125b9cdd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6000611d6485613474565b90506000611d7284836134bf565b90506000611d7f866135d1565b90506000611d8d8783611c6e565b6001600160a01b0389166000908152600a602090815260408083208884529091528120919250600a82015460ff166003811115611dc657fe5b14611e0a576040805162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c995c5d595cdd608a1b604482015290519081900360640190fd5b80546001600160a01b03199081166001600160a01b038981169190911783554260018085019190915560028401805484168d84161790819055600385018054909416888416179093556005840185905560068401869055600784018990556202a300600885015560006009850155600a8401805460ff19169091179055611e929116876126d4565b60408051838152602081018590526001600160a01b03868116828401529151828a16928c169188917f0279f22d36b78c19957d9d6d792e3625dfb99d644e30be9a850aab76b63b25949181900360600190a4505050505050505050565b611ef984846135de565b6000611f04846135e9565b90506000611f10613317565b90508185038181036000611f2389613474565b9050611f2f86846135ef565b611f80576040805162461bcd60e51b815260206004820152601b60248201527f496e73756666696369656e74546f6b656e73436f6d6d69747465640000000000604482015290519081900360640190fd5b6001600160a01b0389166000908152600b60209081526040808320848452909152812090600b82015460ff166003811115611fb757fe5b14611ffb576040805162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c995c5d595cdd608a1b604482015290519081900360640190fd5b80546001600160a01b0319166001600160a01b0388161781554260018201556202a30060028201556003810186905560058101859055600481018390556120418361331c565b600682018190556008820180546001600160a01b038d81166001600160a01b031992831617909255600984018054928c1692909116919091179055600b8201805460ff19166001179055612096908890613685565b6004810154600382015460098301546040805193845260208401929092526001600160a01b03908116838301529051818a1692918d169185917fde2047174185f9a5da05491e50e701207a1e4622bd87cca82c1a866d4382a9a79181900360600190a450505050505050505050565b6001600160a01b0382166000908152600b6020908152604080832084845290915290206001600b82015460ff16600381111561213d57fe5b14612186576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b806002015481600101540142116121d5576040805162461bcd60e51b815260206004820152600e60248201526d151a5b59539bdd115e1c1a5c995960921b604482015290519081900360640190fd5b600b8101805460ff191660039081179091556008820154908201546004830154612209926001600160a01b0316910161371a565b80546006820154612223916001600160a01b031690613725565b805460088201546006830154612246926001600160a01b039081169216906137ce565b80546004820154600383015460098401546040805193845260208401929092526001600160a01b03908116838301529051928116929086169185917f1fa2e68649c87d957477ccbe3c5a6af2bfde7f94bcdc6dc5b8944ef329ba25f49181900360600190a4505050565b6001600160a01b0381166000908152600760209081526040808320546006909252822054610f8191611c6e565b6000826122ec57506000610f81565b828202828482816122f957fe5b04146111435760405162461bcd60e51b81526004018080602001828103825260218152602001806157806021913960400191505060405180910390fd5b600061114383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613828565b606060006123bb88888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061388d92505050565b9050600d60009054906101000a90046001600160a01b03166001600160a01b031663acf974348b8b848a8a8a8a600660016040518a63ffffffff1660e01b8152600401808a63ffffffff168152602001898152602001888152602001806020018060200185815260200184151581526020018381038352898982818152602001925080828437600083820152601f01601f191690910184810383528781526020019050878780828437600081840152601f19601f8201169050808301925050509b50505050505050505050505060206040518083038186803b1580156124a057600080fd5b505afa1580156124b4573d6000803e3d6000fd5b505050506040513d60208110156124ca57600080fd5b506124d59050615613565b61251489898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506139be92505050565b9050806060015163ffffffff1660001461256b576040805162461bcd60e51b81526020600482015260136024820152726c6f636b74696d65206d757374207a65726f2160681b604482015290519081900360640190fd5b604001519a9950505050505050505050565b6000828152600c602052604090206001600982015460ff1660038111156125a057fe5b146125e9576040805162461bcd60e51b815260206004820152601460248201527357726f6e6720726571756573742073746174757360601b604482015290519081900360640190fd5b8054600182015460058301546001600160a01b03928316929182169160009161261791879184911689613b18565b9050836004015481101561265c5760405162461bcd60e51b81526004018080602001828103825260248152602001806158386024913960400191505060405180910390fd5b612670838386600401548760020154613bc4565b61267e838560060154611cb0565b816001600160a01b0316836001600160a01b0316877f6e3e61fdf80541be797785f48ed6cf400134a61292f2f58f56efb3ab0a5cfa6c60405160405180910390a4505050600901805460ff191660021790555050565b8034101561271d576040805162461bcd60e51b8152602060048201526011602482015270125b9d985b1a5910dbdb1b185d195c985b607a1b604482015290519081900360640190fd5b6001600160a01b0382166000908152600660205260409020546127409082611c14565b6001600160a01b03831660008181526006602090815260409182902093909355805191825291810183905281517fa26b43a600355250ae61523a4d3a1269abbbbf462b22c633d629920603d05e45929181900390910190a15050565b6001600160a01b0383166000908152600a6020908152604080832085845290915290206001600a82015460ff1660038111156127d457fe5b1461281d576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b600381015460009061283c90849083906001600160a01b031687613b18565b9050600061285b83600601548460050154611c1490919063ffffffff16565b9050808210156129445760028301546001600160a01b031633146128b8576040805162461bcd60e51b815260206004820152600f60248201526e24b73b30b634b222bc32b1baba37b960891b604482015290519081900360640190fd5b8254828203906128d1906001600160a01b031682613ce8565b60006128e28560070154858561320b565b60028601549091506128fd906001600160a01b031682611cb0565b600785015460009061290f9083611c6e565b60028701548754919250612930916001600160a01b039182169116836137ce565b61293c88878784613d58565b5050506129a1565b60028301546007840154612961916001600160a01b031690611cb0565b808211156129a15760006129758383611c6e565b845490915061298d906001600160a01b031682613dc8565b1561299f5761299f8685856000613d58565b505b60006129be84600601548560050154611c1490919063ffffffff16565b84549091506129d6906001600160a01b031682613e5e565b835460068501546129f0916001600160a01b031690613ee2565b60028401546005850154612a0d916001600160a01b031690613ee2565b600a8401805460ff1916600217905583546005850154600686015460038701546040805193845260208401929092526001600160a01b0390811683830152905192811692908a169189917f41ac549524df546b670900f16155b1ab138c8a69cb83091710e4824cf216c04e916060908290030190a450505050505050565b6001600160a01b0383166000908152600b6020908152604080832085845290915290206001600b82015460ff166003811115612ac357fe5b14612b0c576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b60048101546009820154612b2b9184916001600160a01b031686613b18565b50612b398160040154613eec565b80546003820154612b53916001600160a01b03169061371a565b600b8101805460ff1916600217905580546006820154612b7c916001600160a01b031690613725565b805460058201546004830154612b9c926001600160a01b03169101613ef9565b80546004820154600383015460098401546040805193845260208401929092526001600160a01b03908116838301529051928116929087169186917f3114b251c2a5058491738f973e62ec694147154211b993a430d788a72ca6d1949181900360600190a450505050565b336001600160a01b03861614612c64576040805162461bcd60e51b815260206004820181905260248201527f53656e6465722073686f756c64206265206e6577205661756c74206f776e6572604482015290519081900360640190fd5b846001600160a01b0316866001600160a01b03161415612cb55760405162461bcd60e51b815260040180806020018281038252602681526020018061575a6026913960400191505060405180910390fd5b6001600160a01b03808716600090815260086020526040808220928816825290208154612d19576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b8054612d5c576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600080612d698a89613f7d565b915091506000612d77613317565b905080831015612dc6576040805162461bcd60e51b8152602060048201526015602482015274105b5bdd5b9d10995b1bddd11d5cdd105b5bdd5b9d605a1b604482015290519081900360640190fd5b6000612dd389858c61320b565b9050612ddf8b8261408c565b612de98c856135ef565b50612df48b85613dc8565b506000612e008d613474565b90506000612e108d8b8b856140f1565b6000838152600c60205260408120919250600982015460ff166003811115612e3457fe5b14612e86576040805162461bcd60e51b815260206004820152601c60248201527f54686973207265706c61636520616c7265616479206372656174656400000000604482015290519081900360640190fd5b8e8160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508d8160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550868160040181905550818160050160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508381600201819055508581600601819055506202a30081600701819055506000816008018190555060018160090160006101000a81548160ff02191690836003811115612f5357fe5b0217905550600181015481546004830154600284015460058501546040805193845260208401929092526001600160a01b039081168383015290519381169392169186917f26899953ce5ec4fdd27150e3d625e33f84d65e89ccf4a2d960abc648b1b4df2a919081900360600190a4505050505050505050505050505050565b6001600160a01b0382166000908152600a6020908152604080832084845290915290206001600a82015460ff16600381111561300b57fe5b14613054576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b6008810154600182015461306791611c14565b42116130ab576040805162461bcd60e51b815260206004820152600e60248201526d151a5b59539bdd115e1c1a5c995960921b604482015290519081900360640190fd5b600a8101805460ff191660031790556002810154815460078301546130dd926001600160a01b039081169216906137ce565b8054600682015460058301546130fd926001600160a01b03169101613ce8565b80546005820154600683015460038401546040805193845260208401929092526001600160a01b03908116838301529051928116929086169185917f45c7f0162772dc14d848f7fc10d09f8a007bba89c372e47f17d0c6b4a2e67f869181900360600190a4505050565b6001600160a01b038116600090815260086020526040812080546131c2576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60006131ed82600701546131e784600501548560030154611c6e90919063ffffffff16565b90611c6e565b949350505050565b60008183106132045781611143565b5090919050565b600082158015613219575081155b15613225575082611143565b6131ed826113d386866122dd565b6001600160a01b038316600090815260086020526040812081908161325787613167565b9050808611156132985760405162461bcd60e51b815260040180806020018281038252604e8152602001806157c9604e913960600191505060405180910390fd5b60078201546132a79087611c14565b600783015560068201546132bb9086611c14565b60068301556040805187815290516001600160a01b038916917ff052e4720689a6c9761eb963b628676705aa972a0ba9571c32440b9dcb785481919081900360200190a281600701548260060154935093505050935093915050565b600090565b90565b6001600160a01b03831660009081526007602090815260408083205460069092529091205482916133509190611c6e565b101561339c576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6001600160a01b0383166000908152600660205260409020546133bf9082611c6e565b6001600160a01b0380851660009081526006602052604080822093909355915184929183169084908381818185875af1925050503d806000811461341f576040519150601f19603f3d011682016040523d82523d6000602084013e613424565b606091505b505090508061346d576040805162461bcd60e51b815260206004820152601060248201526f2a3930b739b332b9103330b4b632b21760811b604482015290519081900360640190fd5b5050505050565b600081600143034060405160200180836001600160a01b031660601b8152601401828152602001925050506040516020818303038152906040528051906020012060001c9050919050565b6001600160a01b0382166000908152600860205260408120805461351a576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600061352f82600001548360010154866141fd565b6001600160a01b038116600090815260088401602052604090205490915060ff16156135a2576040805162461bcd60e51b815260206004820152601d60248201527f5468697320627463206164647265737320616c72656164792075736564000000604482015290519081900360640190fd5b6001600160a01b038116600090815260089092016020526040909120805460ff19166001179055905092915050565b6103e86002919091020490565b61136c333083611a22565b50600090565b6000806135fb8461425c565b90508083111561360f576000915050610f81565b6001600160a01b038416600090815260086020526040902060058101546136369085611c14565b60058201556040805185815290516001600160a01b038716917fa40b2e156dca6a5cc9204c1172c822104aa5957e50a2e4785fe281a0460e01df919081900360200190a2506001949350505050565b6001600160a01b0382166000908152600760205260409020546136a89082611c14565b6001600160a01b03831660009081526007602090815260408083208490556006909152902054101561136c576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b61136c308383611a22565b6001600160a01b03821660009081526007602052604090205481111561378b576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6001600160a01b0382166000908152600760205260409020546137ae9082611c6e565b6001600160a01b0390921660009081526007602052604090209190915550565b6137d983838361331f565b604080516001600160a01b0380861682528416602082015280820183905290517f1f62766d3b94993a001005cb9b5296a3959ccda7944a7033caf75e04a0e7b33c9181900360600190a1505050565b600081836138775760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611bd1578181015183820152602001611bb9565b50600083858161388357fe5b0495945050505050565b6000600280836040518082805190602001908083835b602083106138c25780518252601f1990920191602091820191016138a3565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015613901573d6000803e3d6000fd5b5050506040513d602081101561391657600080fd5b50516040805160208181019390935281518082038401815290820191829052805190928291908401908083835b602083106139625780518252601f199092019160209182019101613943565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156139a1573d6000803e3d6000fd5b5050506040513d60208110156139b657600080fd5b505192915050565b6139c6615613565b8151600460606139d885836002614287565b9050806000815181106139e757fe5b01602001516001600160f81b031916158015613a22575080600181518110613a0b57fe5b6020910101516001600160f81b031916600160f81b145b15613a2e578160020191505b81600080613a47613a428985808a03614287565b614341565b91509150816001018501945060005b81811015613a9457602486019550600080613a81613a42898a8c038e6142879092919063ffffffff16565b0197909701600501965050600101613a56565b506040805160808101909152859080613ab8613ab38c60006004614287565b6143c7565b63ffffffff168152602001613ada868785038d6142879092919063ffffffff16565b8152602001613af08b84808c0360031901614287565b8152602001613b03613ab38c600461440c565b63ffffffff1690529998505050505050505050565b6000806000613b278786614431565b91509150838114613b71576040805162461bcd60e51b815260206004820152600f60248201526e24b73b30b634b227b82932ba3ab93760891b604482015290519081900360640190fd5b85821015613bba576040805162461bcd60e51b8152602060048201526011602482015270496e73756666696369656e7456616c756560781b604482015290519081900360640190fd5b5095945050505050565b6001600160a01b03808516600090815260086020526040808220928616825290208154613c28576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b8054613c6b576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6003820154613c7a9085611c6e565b600380840191909155810154613c909085611c14565b6003820155604080518581526020810185905281516001600160a01b0380891693908a16927f5b2260440eaa72a266c31b81fcf06107588de293792678adc73df44ace679b0f929081900390910190a3505050505050565b6001600160a01b03821660009081526008602052604090206004810154613d0f9083611c6e565b60048201556040805183815290516001600160a01b038516917f602ceb96b9001fc15cee84bae42af52eebda91a7e70da69fd29563f5d42ca5f1919081900360200190a2505050565b613d61826135d1565b60068401819055613d73908390611c6e565b6005840181905560068401546040805192835260208301919091528181018390525185917f6db487de54f8294da3728759b0a0d5eb1ea2177a28902ba11abc9e3e989dc99c919081900360600190a250505050565b600080613dd4846113ad565b905082811015613de8576000915050610f81565b6001600160a01b03841660009081526008602052604090206004810154613e0f9085611c14565b60048201556040805185815290516001600160a01b038716917f2a0e25b59dbe8659199b9249e7e3897b753e8483dcbe40a7403b48242c6f4d34919081900360200190a2506001949350505050565b6001600160a01b03821660009081526008602052604090206003810154613e859083611c14565b60038201556004810154613e999083611c6e565b60048201556040805183815290516001600160a01b038516917fda0c72f67f0b71f8afdd41fe90a21ca4d9e2a768778ed664031c7cae3998f32a919081900360200190a2505050565b61136c82826145bf565b613ef630826146af565b50565b6001600160a01b03821660009081526008602052604090206005810154613f209083611c6e565b60058201556003810154613f349083611c6e565b60038201556040805183815290516001600160a01b038516917f60213c45c34d8b94e495fd5871fdea7a7511f659e884ea25a0c8843b7f98bfad919081900360200190a2505050565b6001600160a01b03821660009081526008602052604081208054829190613fdb576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6000613feb8260070154866131f5565b90506000614002836006015483856007015461320b565b905060006140148460060154836131f5565b60078501549091506140269084611c6e565b6007850155600684015461403a9082611c6e565b60068501556040805184815290516001600160a01b038a16917f4317750fb47a4dc685a826d40caf1dbf81881e792d205275e711b9054871f7aa919081900360200190a2919791965090945050505050565b6001600160a01b038216600090815260086020526040902080546140e7576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b610fb483836126d4565b6001600160a01b0384166000908152600860205260408120805461414c576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60006141598686866141fd565b6001600160a01b038116600090815260088401602052604090205490915060ff16156141cc576040805162461bcd60e51b815260206004820152601d60248201527f5468697320627463206164647265737320616c72656164792075736564000000604482015290519081900360640190fd5b6001600160a01b038116600090815260089092016020526040909120805460ff191660011790559050949350505050565b6040805160208082018690528183018590526060808301859052835180840390910181526080909201909252805191012060009061423c8186866147ab565b909550935061425361424e8686614824565b614860565b95945050505050565b6001600160a01b03811660009081526008602052604081206005810154600382015461114391611c6e565b6060816142a35750604080516020810190915260008152611143565b82820183811180156142b6575080855110155b6142fd576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b604051915082604083010160405282825283850182038460208701018481015b808210156143365781518383015260208201915061431d565b505050509392505050565b600080600061434f8461498b565b905060ff811661437c5760008460008151811061436857fe5b016020015190935060f81c91506143c29050565b8060010160ff168451101561439a57600019600092509250506143c2565b60006143b6613ab36143b187600160ff8716614287565b614a07565b60ff9092169350909150505b915091565b60008060005b8351811015614405578060010184510360080260020a8482815181106143ef57fe5b016020015160f81c0291909101906001016143cd565b5092915050565b60606000614424838551614aa490919063ffffffff16565b90506131ed848285614287565b600080600061443f85614341565b915050600061444f8260036131f5565b905060606000805b8381101561450c57606061446b8a83614b01565b90508351600014156144905761448081614ccb565b8051909450156144905750614504565b886001600160a01b0316836001600160a01b0316146145025760606144b482614d3c565b9050805160141480156144e257506001600160a01b038a166144d7826000614f69565b6001600160a01b0316145b15614500576144f082614fcb565b67ffffffffffffffff1698508993505b505b505b600101614457565b50866001600160a01b0316816001600160a01b031614614566576040805162461bcd60e51b815260206004820152601060248201526f125b9d985b1a59149958da5c1a595b9d60821b604482015290519081900360640190fd5b60008251116145a9576040805162461bcd60e51b815260206004820152600a6024820152692737a7b82932ba393ab760b11b604482015290519081900360640190fd5b6145b2826143c7565b9450505050509250929050565b6001600160a01b03821661461a576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61462660008383610fb4565b6002546146339082611c14565b6002556001600160a01b0382166000908152602081905260409020546146599082611c14565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0382166146f45760405162461bcd60e51b81526004018080602001828103825260218152602001806158176021913960400191505060405180910390fd5b61470082600083610fb4565b61473d81604051806060016040528060228152602001615689602291396001600160a01b0385166000908152602081905260409020549190611b7d565b6001600160a01b0383166000908152602081905260409020556002546147639082611c6e565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60008070014551231950b75fc4402da1732fc9bebe198506614804576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c6964207363616c6560981b604482015290519081900360640190fd5b61481885858560006401000003d019614ff0565b91509150935093915050565b6040805160019290921660020160f81b6001600160f81b0319166020830152602180830193909352805180830390930183526041909101905290565b600060036002836040518082805190602001908083835b602083106148965780518252601f199092019160209182019101614877565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156148d5573d6000803e3d6000fd5b5050506040513d60208110156148ea57600080fd5b50516040805160208181019390935281518082038401815290820191829052805190928291908401908083835b602083106149365780518252601f199092019160209182019101614917565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015614975573d6000803e3d6000fd5b5050604051516001600160a01b03169392505050565b60008160008151811061499a57fe5b60209101015160f81c60ff14156149b357506008610fa4565b816000815181106149c057fe5b60209101015160f81c60fe14156149d957506004610fa4565b816000815181106149e657fe5b60209101015160f81c60fd14156149ff57506002610fa4565b506000919050565b606080825167ffffffffffffffff81118015614a2257600080fd5b506040519080825280601f01601f191660200182016040528015614a4d576020820181803683370190505b50905060005b835181101561440557838181518110614a6857fe5b602001015160f81c60f81b826001838751030381518110614a8557fe5b60200101906001600160f81b031916908160001a905350600101614a53565b600082821115614afb576040805162461bcd60e51b815260206004820152601d60248201527f556e646572666c6f7720647572696e67207375627472616374696f6e2e000000604482015290519081900360640190fd5b50900390565b6060600080614b0f85614341565b9092509050600019821415614b555760405162461bcd60e51b81526004018080602001828103825260228152602001806157386022913960400191505060405180910390fd5b808410614b9d576040805162461bcd60e51b81526020600482015260116024820152702b37baba103932b0b21037bb32b9393ab760791b604482015290519081900360640190fd5b6060600060018401815b87811015614c3757614bc782838b51038b6142879092919063ffffffff16565b9350614bd28461502a565b9250600019831415614c2b576040805162461bcd60e51b815260206004820152601a60248201527f42616420566172496e7420696e207363726970745075626b6579000000000000604482015290519081900360640190fd5b90820190600101614ba7565b50614c5081828a51038a6142879092919063ffffffff16565b9250614c5b8361502a565b9150600019821415614cb4576040805162461bcd60e51b815260206004820152601a60248201527f42616420566172496e7420696e207363726970745075626b6579000000000000604482015290519081900360640190fd5b614cbf888284614287565b98975050505050505050565b60607fb31d742db54d6961c6b346af2c9c4c495eb8aff2ebf6b3699e052d1cef5cf50b614cfb8360096001615090565b14614d155750604080516020810190915260008152610fa4565b6060614d2483600a6001614287565b9050611143600b614d34836143c7565b859190614287565b6060600082600881518110614d4d57fe5b0160200151835160f89190911c91506009820160ff1614614d7e575050604080516020810190915260008152610fa4565b82600981518110614d8b57fe5b016020015160f81c614e285760028160ff161015614db9575050604080516020810190915260008152610fa4565b600083600a81518110614dc857fe5b016020015160f81c9050600119820160ff1681141580614df5575080602014158015614df5575080601414155b15614e13576040518060200160405280600081525092505050610fa4565b614e1f84600b83614287565b92505050610fa4565b6000614e378460086003615090565b90507fe1683aec1a10d43657f3f2c82e683d8e19e8a3f320ce9d3bf22c6ca6ab4cbce6811415614ee45783600b81518110614e6e57fe5b60209101015160f81c6014141580614eb9575083517f3b50b2715f5a28d2a7eeb517f17ec797e8536bd425bf31fc4f6bf7ce1e34b77d90614eb6908690600119016002615090565b14155b15614ed7576040518060200160405280600081525092505050610fa4565b614e1f84600c6014614287565b7fa0916ee0b243ee20fb4ce56170744d86b54d7ae03a418a7a12156f40dedcf7d7811415614f525783600185510381518110614f1c57fe5b60209101015160f81c608714614f45576040518060200160405280600081525092505050610fa4565b614e1f84600b6014614287565b505050604080516020810190915260008152919050565b6000601482018281118015614f7f575080845110155b614fba5760405162461bcd60e51b81526004018080602001828103825260218152602001806156f16021913960400191505060405180910390fd5b50500160200151600160601b900490565b60006060614fd8836150f7565b90506060614fe582614a07565b90506131ed816143c7565b60008060008060006150078a8a8a60018b8b615106565b9250925092506150198383838961517d565b945094505050509550959350505050565b600060098251101561503f5750600019610fa4565b606061505a600880855103856142879092919063ffffffff16565b905060008061506883614341565b9092509050600019821415615084576000199350505050610fa4565b01600901915050919050565b600082820183811180156150a5575080855110155b6150ec576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b505091016020012090565b6060610f818260006008614287565b600080808861511c575086915085905084615171565b8860008060015b8315615168576001841615615149576151418383838f8f8f8e6151d4565b919450925090505b60028404935061515c8c8c8c8c8c615451565b919d509b509950615123565b91955093509150505b96509650969350505050565b600080600061518c8585615567565b90506000848061519857fe5b8283099050600085806151a757fe5b828a099050600086806151b657fe5b87806151be57fe5b8486098a09919a91995090975050505050505050565b60008080891580156151e4575088155b156151f6575085915084905083615444565b86158015615202575085155b15615214575088915087905086615444565b61521c615647565b848061522457fe5b898a098152848061523157fe5b81518a096020820152848061524257fe5b8687096040820152848061525257fe5b604082015187096060820152604080516080810190915280868061527257fe5b60408401518e098152602001868061528657fe5b60608401518d098152602001868061529a57fe5b83518b09815260200186806152ab57fe5b60208401518a099052604081015181519192501415806152d357506060810151602082015114155b615324576040805162461bcd60e51b815260206004820152601e60248201527f557365206a6163446f75626c652066756e6374696f6e20696e73746561640000604482015290519081900360640190fd5b61532c615647565b858061533457fe5b8251604084015190880390088152858061534a57fe5b6020830151606084015190880390086020820152858061536657fe5b815180096040820152858061537757fe5b815160408301510960608201526000868061538e57fe5b60608301518803888061539d57fe5b6020850151800908905086806153af57fe5b87806153b757fe5b88806153bf57fe5b6040850151865109600209880382089050600087806153da57fe5b88806153e257fe5b838a038a806153ed57fe5b6040870151885109086020850151099050878061540657fe5b888061540e57fe5b60608501516020870151098903820890506000888061542957fe5b898061543157fe5b8b8f098551099297509095509093505050505b9750975097945050505050565b600080808561546757508691508590508461555c565b6000848061547157fe5b898a0990506000858061548057fe5b898a0990506000868061548f57fe5b898a0990506000878061549e57fe5b88806154a657fe5b848e096004099050600088806154b857fe5b89806154c057fe5b8a806154c857fe5b8586098c098a806154d557fe5b8760030908905088806154e457fe5b89806154ec57fe5b8384088a038a806154f957fe5b838409089450888061550757fe5b898061550f57fe5b8a8061551757fe5b8687096008098a038a8061552757fe5b8b8061552f57fe5b888d0386088409089350888061554157fe5b898061554957fe5b8c8e096002099497509295509293505050505b955095509592505050565b600082158015906155785750818314155b801561558357508115155b6155c5576040805162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b210373ab6b132b960911b604482015290519081900360640190fd5b6000600183825b8615615608578682816155db57fe5b0490508286806155e757fe5b87806155ef57fe5b85840988038608828902909303979094509192506155cc565b509195945050505050565b6040518060800160405280600063ffffffff1681526020016060815260200160608152602001600063ffffffff1681525090565b6040518060800160405280600490602082028036833750919291505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737353656e6465722073686f756c64206265206f776e6572206f662074686973205661756c744164647265737320636f6e76657273696f6e206f7574206f6620626f756e64732e45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636552656164206f76657272756e20647572696e6720566172496e742070617273696e676f6c645661756c74204d555354204e4f5420626520657175616c20746f206e65775661756c74536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f756c64206e6f7420696e63726561736520746f2d62652d7265706c6163656420746f6b656e732062656361757365206974206973206d6f7265207468616e2069737375656420616d6f756e7445524332303a206275726e2066726f6d20746865207a65726f20616464726573735472616e73616374696f6e20636f6e7461696e2077726f6e672062746320616d6f756e7445524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212204d85184267f534f03c8b2ab6be874636898a05d33236e30a7132b17c90766ac364736f6c634300060c0033",
  "deployedBytecode": "0x60806040526004361061021a5760003560e01c806377d6b7ca11610123578063a457c2d7116100ab578063c8c7fa001161006f578063c8c7fa0014610cc7578063d4bcb1e914610d0f578063dd62ed3e14610d48578063f02d7ef014610d83578063f4ffee5a14610db65761021a565b8063a457c2d71461095d578063a622ee7c14610996578063a9059cbb14610a0a578063c50c821414610a43578063c5387e8f14610b855761021a565b80639446a5b4116100f25780639446a5b41461073757806395d89b4114610767578063978f28dd1461077c5780639908cd7d146108b057806399891792146109555761021a565b806377d6b7ca1461065e5780637d41c86e1461068a57806390336df2146106cb57806393c9abfb146107045761021a565b806334e2624b116101a65780634d01f27b116101755780634d01f27b146104dc578063500e9d511461050c57806355061bb8146105ce5780636112fe2e1461060157806370a082311461062b5761021a565b806334e2624b14610446578063395093511461045b578063489a1759146104945780634b26a78d146104c75761021a565b806318160ddd116101ed57806318160ddd1461036f5780631bee398f1461038457806323b872dd146103a75780632db99b14146103ea578063313ce5671461041b5761021a565b806306fdde031461021f578063095ea7b3146102a957806316e139bb146102f65780631704b9a61461033b575b600080fd5b34801561022b57600080fd5b50610234610ed3565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026e578181015183820152602001610256565b50505050905090810190601f16801561029b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102b557600080fd5b506102e2600480360360408110156102cc57600080fd5b506001600160a01b038135169060200135610f69565b604080519115158252519081900360200190f35b34801561030257600080fd5b506103296004803603602081101561031957600080fd5b50356001600160a01b0316610f87565b60408051918252519081900360200190f35b61036d6004803603606081101561035157600080fd5b506001600160a01b038135169060208101359060400135610fa9565b005b34801561037b57600080fd5b50610329610fb9565b61036d6004803603604081101561039a57600080fd5b5080359060200135610fbf565b3480156103b357600080fd5b506102e2600480360360608110156103ca57600080fd5b506001600160a01b038135811691602081013590911690604001356110c2565b3480156103f657600080fd5b506103ff61114a565b604080516001600160a01b039092168252519081900360200190f35b34801561042757600080fd5b50610430611159565b6040805160ff9092168252519081900360200190f35b34801561045257600080fd5b50610329611162565b34801561046757600080fd5b506102e26004803603604081101561047e57600080fd5b506001600160a01b038135169060200135611166565b3480156104a057600080fd5b50610329600480360360208110156104b757600080fd5b50356001600160a01b03166111b4565b3480156104d357600080fd5b506103296111c6565b3480156104e857600080fd5b5061036d600480360360408110156104ff57600080fd5b50803590602001356111cb565b34801561051857600080fd5b506105456004803603604081101561052f57600080fd5b506001600160a01b038135169060200135611270565b604051808d6001600160a01b031681526020018c81526020018b81526020018a8152602001898152602001888152602001878152602001868152602001856001600160a01b03168152602001846001600160a01b031681526020018381526020018260038111156105b257fe5b81526020019c5050505050505050505050505060405180910390f35b3480156105da57600080fd5b50610329600480360360208110156105f157600080fd5b50356001600160a01b03166112ea565b34801561060d57600080fd5b5061036d6004803603602081101561062457600080fd5b50356112fc565b34801561063757600080fd5b506103296004803603602081101561064e57600080fd5b50356001600160a01b0316611370565b61036d6004803603604081101561067457600080fd5b50803590602001356001600160a01b031661138b565b34801561069657600080fd5b5061036d600480360360608110156106ad57600080fd5b508035906001600160a01b0360208201358116916040013516611397565b3480156106d757600080fd5b5061036d600480360360408110156106ee57600080fd5b506001600160a01b0381351690602001356113a3565b34801561071057600080fd5b506103296004803603602081101561072757600080fd5b50356001600160a01b03166113ad565b34801561074357600080fd5b506103296004803603604081101561075a57600080fd5b50803590602001356113c2565b34801561077357600080fd5b506102346113d9565b34801561078857600080fd5b5061036d600480360360c081101561079f57600080fd5b81359190810190604081016020820135600160201b8111156107c057600080fd5b8201836020820111156107d257600080fd5b803590602001918460018302840111600160201b831117156107f357600080fd5b919390929091602081019035600160201b81111561081057600080fd5b82018360208201111561082257600080fd5b803590602001918460018302840111600160201b8311171561084357600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b81111561087257600080fd5b82018360208201111561088457600080fd5b803590602001918460018302840111600160201b831117156108a557600080fd5b50909250905061143a565b3480156108bc57600080fd5b506108da600480360360208110156108d357600080fd5b5035611464565b604051808b6001600160a01b031681526020018a6001600160a01b03168152602001898152602001888152602001878152602001866001600160a01b0316815260200185815260200184815260200183815260200182600381111561093b57fe5b81526020019a505050505050505050505060405180910390f35b61036d6114c7565b34801561096957600080fd5b506102e26004803603604081101561098057600080fd5b506001600160a01b038135169060200135611537565b3480156109a257600080fd5b506109c9600480360360208110156109b957600080fd5b50356001600160a01b031661159f565b604080519889526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b348015610a1657600080fd5b506102e260048036036040811015610a2d57600080fd5b506001600160a01b0381351690602001356115e2565b348015610a4f57600080fd5b5061036d600480360360e0811015610a6657600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b811115610a9557600080fd5b820183602082011115610aa757600080fd5b803590602001918460018302840111600160201b83111715610ac857600080fd5b919390929091602081019035600160201b811115610ae557600080fd5b820183602082011115610af757600080fd5b803590602001918460018302840111600160201b83111715610b1857600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b811115610b4757600080fd5b820183602082011115610b5957600080fd5b803590602001918460018302840111600160201b83111715610b7a57600080fd5b5090925090506115f6565b348015610b9157600080fd5b5061036d600480360360e0811015610ba857600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b811115610bd757600080fd5b820183602082011115610be957600080fd5b803590602001918460018302840111600160201b83111715610c0a57600080fd5b919390929091602081019035600160201b811115610c2757600080fd5b820183602082011115610c3957600080fd5b803590602001918460018302840111600160201b83111715610c5a57600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b811115610c8957600080fd5b820183602082011115610c9b57600080fd5b803590602001918460018302840111600160201b83111715610cbc57600080fd5b509092509050611622565b61036d600480360360c0811015610cdd57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a00135611641565b348015610d1b57600080fd5b5061036d60048036036040811015610d3257600080fd5b506001600160a01b038135169060200135611657565b348015610d5457600080fd5b5061032960048036036040811015610d6b57600080fd5b506001600160a01b0381358116916020013516611661565b348015610d8f57600080fd5b5061032960048036036020811015610da657600080fd5b50356001600160a01b031661168c565b348015610dc257600080fd5b50610def60048036036040811015610dd957600080fd5b506001600160a01b0381351690602001356116aa565b604051808c6001600160a01b031681526020018b81526020018a6001600160a01b03168152602001896001600160a01b0316815260200180602001888152602001878152602001868152602001858152602001848152602001836003811115610e5457fe5b8152602001828103825289818151815260200191508051906020019080838360005b83811015610e8e578181015183820152602001610e76565b50505050905090810190601f168015610ebb5780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610f5f5780601f10610f3457610100808354040283529160200191610f5f565b820191906000526020600020905b815481529060010190602001808311610f4257829003601f168201915b5050505050905090565b6000610f7d610f766117a2565b84846117a6565b5060015b92915050565b6001600160a01b0381166000908152600860205260409020600501545b919050565b610fb4838383611892565b505050565b60025490565b33600081815260086020526040902080541561100f576040805162461bcd60e51b815260206004820152600a6024820152691d985d5b1d115e1a5cdd60b21b604482015290519081900360640190fd5b831580159061101d57508215155b61105e576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c69645075626b657960981b604482015290519081900360640190fd5b838155600181018390556110706114c7565b604080513481526020810186905280820185905290516001600160a01b038416917f49fd9cc8f07d8a3a7cf7160535b6b0ce95d90fe87662605e19d90028ceb3aa3b919081900360600190a250505050565b60006110cf848484611a22565b61113f846110db6117a2565b61113a856040518060600160405280602881526020016157a1602891396001600160a01b038a166000908152600160205260408120906111196117a2565b6001600160a01b031681526020810191909152604001600020549190611b7d565b6117a6565b5060015b9392505050565b600d546001600160a01b031681565b60055460ff1690565b4790565b6000610f7d6111736117a2565b8461113a85600160006111846117a2565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611c14565b60066020526000908152604090205481565b609681565b336000818152600860205260409020805461121d576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b83815560018101839055604080518581526020810185905281516001600160a01b038516927fd4fbb16c279424bdd5e637a14cae7b00e68dd1529d7fa5ea6e8a1018af2f3fed928290030190a250505050565b600b602081815260009384526040808520909152918352912080546001820154600283015460038401546004850154600586015460068701546007880154600889015460098a0154600a8b01549a909b01546001600160a01b03998a169b989a979996989597949693959294918416939092169160ff168c565b60076020526000908152604090205481565b336000908152600860205260409020805461134e576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600281015461135d9083611c6e565b600282015561136c3383611cb0565b5050565b6001600160a01b031660009081526020819052604090205490565b61136c33838334611d03565b610fb433848484611eef565b61136c8282612105565b6000806113b9836122b0565b90506111438160965b6000611143826113d38560646122dd565b90612336565b60048054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610f5f5780601f10610f3457610100808354040283529160200191610f5f565b606061144c8585898987878f8f612378565b90506114588a8261257d565b50505050505050505050565b600c6020526000908152604090208054600182015460028301546003840154600485015460058601546006870154600788015460088901546009909901546001600160a01b03988916999789169896979596949593909416939192909160ff168a565b3360008181526008602052604090208054611519576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60028101546115289034611c14565b600282015561136c82346126d4565b6000610f7d6115446117a2565b8461113a856040518060600160405280602581526020016158a5602591396001600061156e6117a2565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611b7d565b6008602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460079097015495969495939492939192909188565b6000610f7d6115ef6117a2565b8484611a22565b60606116088585898987878f8f612378565b90506116158b8b8361279c565b5050505050505050505050565b60606116348585898987878f8f612378565b90506116158b8b83612a8b565b61164f868686868686612c07565b505050505050565b61136c8282612fd3565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b031660009081526008602052604090206003015490565b600a6020908152600092835260408084208252918352918190208054600180830154600280850154600386015460048701805489516101009782161597909702600019011693909304601f81018a90048a0286018a019098528785526001600160a01b0395861698939791861696951694939283018282801561176e5780601f106117435761010080835404028352916020019161176e565b820191906000526020600020905b81548152906001019060200180831161175157829003601f168201915b50505060058401546006850154600786015460088701546009880154600a9098015496979396929550909350919060ff168b565b3390565b6001600160a01b0383166117eb5760405162461bcd60e51b81526004018080602001828103825260248152602001806158816024913960400191505060405180910390fd5b6001600160a01b0382166118305760405162461bcd60e51b81526004018080602001828103825260228152602001806156ab6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b336001600160a01b038416146118d95760405162461bcd60e51b81526004018080602001828103825260248152602001806156cd6024913960400191505060405180910390fd5b60006118e484613167565b905060006118f282856131f5565b90508284156119095761190684838761320b565b90505b600080611917888585613233565b915091506000611925613317565b905080831015611974576040805162461bcd60e51b8152602060048201526015602482015274105b5bdd5b9d10995b1bddd11d5cdd105b5bdd5b9d605a1b604482015290519081900360640190fd5b8161197e8461331c565b11156119ca576040805162461bcd60e51b8152602060048201526016602482015275125b9cdd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6119d489856126d4565b604080518681526020810186905281516001600160a01b038c16927f8913ea7a41c7a2e297c14b401089285065174a3e4c4bb03671fc5b4f27591ddc928290030190a2505050505050505050565b6001600160a01b038316611a675760405162461bcd60e51b815260040180806020018281038252602581526020018061585c6025913960400191505060405180910390fd5b6001600160a01b038216611aac5760405162461bcd60e51b81526004018080602001828103825260238152602001806156666023913960400191505060405180910390fd5b611ab7838383610fb4565b611af481604051806060016040528060268152602001615712602691396001600160a01b0386166000908152602081905260409020549190611b7d565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611b239082611c14565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115611c0c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611bd1578181015183820152602001611bb9565b50505050905090810190601f168015611bfe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611143576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061114383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b7d565b611cbb82838361331f565b604080516001600160a01b03841681526020810183905281517f943defbd695c6a58b5dbd0fcccb150d25f2fd14a5ebba6cb6b0d9e33651191d4929181900390910190a15050565b80611d0d8461331c565b1115611d59576040805162461bcd60e51b8152602060048201526016602482015275125b9cdd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6000611d6485613474565b90506000611d7284836134bf565b90506000611d7f866135d1565b90506000611d8d8783611c6e565b6001600160a01b0389166000908152600a602090815260408083208884529091528120919250600a82015460ff166003811115611dc657fe5b14611e0a576040805162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c995c5d595cdd608a1b604482015290519081900360640190fd5b80546001600160a01b03199081166001600160a01b038981169190911783554260018085019190915560028401805484168d84161790819055600385018054909416888416179093556005840185905560068401869055600784018990556202a300600885015560006009850155600a8401805460ff19169091179055611e929116876126d4565b60408051838152602081018590526001600160a01b03868116828401529151828a16928c169188917f0279f22d36b78c19957d9d6d792e3625dfb99d644e30be9a850aab76b63b25949181900360600190a4505050505050505050565b611ef984846135de565b6000611f04846135e9565b90506000611f10613317565b90508185038181036000611f2389613474565b9050611f2f86846135ef565b611f80576040805162461bcd60e51b815260206004820152601b60248201527f496e73756666696369656e74546f6b656e73436f6d6d69747465640000000000604482015290519081900360640190fd5b6001600160a01b0389166000908152600b60209081526040808320848452909152812090600b82015460ff166003811115611fb757fe5b14611ffb576040805162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c995c5d595cdd608a1b604482015290519081900360640190fd5b80546001600160a01b0319166001600160a01b0388161781554260018201556202a30060028201556003810186905560058101859055600481018390556120418361331c565b600682018190556008820180546001600160a01b038d81166001600160a01b031992831617909255600984018054928c1692909116919091179055600b8201805460ff19166001179055612096908890613685565b6004810154600382015460098301546040805193845260208401929092526001600160a01b03908116838301529051818a1692918d169185917fde2047174185f9a5da05491e50e701207a1e4622bd87cca82c1a866d4382a9a79181900360600190a450505050505050505050565b6001600160a01b0382166000908152600b6020908152604080832084845290915290206001600b82015460ff16600381111561213d57fe5b14612186576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b806002015481600101540142116121d5576040805162461bcd60e51b815260206004820152600e60248201526d151a5b59539bdd115e1c1a5c995960921b604482015290519081900360640190fd5b600b8101805460ff191660039081179091556008820154908201546004830154612209926001600160a01b0316910161371a565b80546006820154612223916001600160a01b031690613725565b805460088201546006830154612246926001600160a01b039081169216906137ce565b80546004820154600383015460098401546040805193845260208401929092526001600160a01b03908116838301529051928116929086169185917f1fa2e68649c87d957477ccbe3c5a6af2bfde7f94bcdc6dc5b8944ef329ba25f49181900360600190a4505050565b6001600160a01b0381166000908152600760209081526040808320546006909252822054610f8191611c6e565b6000826122ec57506000610f81565b828202828482816122f957fe5b04146111435760405162461bcd60e51b81526004018080602001828103825260218152602001806157806021913960400191505060405180910390fd5b600061114383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613828565b606060006123bb88888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061388d92505050565b9050600d60009054906101000a90046001600160a01b03166001600160a01b031663acf974348b8b848a8a8a8a600660016040518a63ffffffff1660e01b8152600401808a63ffffffff168152602001898152602001888152602001806020018060200185815260200184151581526020018381038352898982818152602001925080828437600083820152601f01601f191690910184810383528781526020019050878780828437600081840152601f19601f8201169050808301925050509b50505050505050505050505060206040518083038186803b1580156124a057600080fd5b505afa1580156124b4573d6000803e3d6000fd5b505050506040513d60208110156124ca57600080fd5b506124d59050615613565b61251489898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506139be92505050565b9050806060015163ffffffff1660001461256b576040805162461bcd60e51b81526020600482015260136024820152726c6f636b74696d65206d757374207a65726f2160681b604482015290519081900360640190fd5b604001519a9950505050505050505050565b6000828152600c602052604090206001600982015460ff1660038111156125a057fe5b146125e9576040805162461bcd60e51b815260206004820152601460248201527357726f6e6720726571756573742073746174757360601b604482015290519081900360640190fd5b8054600182015460058301546001600160a01b03928316929182169160009161261791879184911689613b18565b9050836004015481101561265c5760405162461bcd60e51b81526004018080602001828103825260248152602001806158386024913960400191505060405180910390fd5b612670838386600401548760020154613bc4565b61267e838560060154611cb0565b816001600160a01b0316836001600160a01b0316877f6e3e61fdf80541be797785f48ed6cf400134a61292f2f58f56efb3ab0a5cfa6c60405160405180910390a4505050600901805460ff191660021790555050565b8034101561271d576040805162461bcd60e51b8152602060048201526011602482015270125b9d985b1a5910dbdb1b185d195c985b607a1b604482015290519081900360640190fd5b6001600160a01b0382166000908152600660205260409020546127409082611c14565b6001600160a01b03831660008181526006602090815260409182902093909355805191825291810183905281517fa26b43a600355250ae61523a4d3a1269abbbbf462b22c633d629920603d05e45929181900390910190a15050565b6001600160a01b0383166000908152600a6020908152604080832085845290915290206001600a82015460ff1660038111156127d457fe5b1461281d576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b600381015460009061283c90849083906001600160a01b031687613b18565b9050600061285b83600601548460050154611c1490919063ffffffff16565b9050808210156129445760028301546001600160a01b031633146128b8576040805162461bcd60e51b815260206004820152600f60248201526e24b73b30b634b222bc32b1baba37b960891b604482015290519081900360640190fd5b8254828203906128d1906001600160a01b031682613ce8565b60006128e28560070154858561320b565b60028601549091506128fd906001600160a01b031682611cb0565b600785015460009061290f9083611c6e565b60028701548754919250612930916001600160a01b039182169116836137ce565b61293c88878784613d58565b5050506129a1565b60028301546007840154612961916001600160a01b031690611cb0565b808211156129a15760006129758383611c6e565b845490915061298d906001600160a01b031682613dc8565b1561299f5761299f8685856000613d58565b505b60006129be84600601548560050154611c1490919063ffffffff16565b84549091506129d6906001600160a01b031682613e5e565b835460068501546129f0916001600160a01b031690613ee2565b60028401546005850154612a0d916001600160a01b031690613ee2565b600a8401805460ff1916600217905583546005850154600686015460038701546040805193845260208401929092526001600160a01b0390811683830152905192811692908a169189917f41ac549524df546b670900f16155b1ab138c8a69cb83091710e4824cf216c04e916060908290030190a450505050505050565b6001600160a01b0383166000908152600b6020908152604080832085845290915290206001600b82015460ff166003811115612ac357fe5b14612b0c576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b60048101546009820154612b2b9184916001600160a01b031686613b18565b50612b398160040154613eec565b80546003820154612b53916001600160a01b03169061371a565b600b8101805460ff1916600217905580546006820154612b7c916001600160a01b031690613725565b805460058201546004830154612b9c926001600160a01b03169101613ef9565b80546004820154600383015460098401546040805193845260208401929092526001600160a01b03908116838301529051928116929087169186917f3114b251c2a5058491738f973e62ec694147154211b993a430d788a72ca6d1949181900360600190a450505050565b336001600160a01b03861614612c64576040805162461bcd60e51b815260206004820181905260248201527f53656e6465722073686f756c64206265206e6577205661756c74206f776e6572604482015290519081900360640190fd5b846001600160a01b0316866001600160a01b03161415612cb55760405162461bcd60e51b815260040180806020018281038252602681526020018061575a6026913960400191505060405180910390fd5b6001600160a01b03808716600090815260086020526040808220928816825290208154612d19576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b8054612d5c576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600080612d698a89613f7d565b915091506000612d77613317565b905080831015612dc6576040805162461bcd60e51b8152602060048201526015602482015274105b5bdd5b9d10995b1bddd11d5cdd105b5bdd5b9d605a1b604482015290519081900360640190fd5b6000612dd389858c61320b565b9050612ddf8b8261408c565b612de98c856135ef565b50612df48b85613dc8565b506000612e008d613474565b90506000612e108d8b8b856140f1565b6000838152600c60205260408120919250600982015460ff166003811115612e3457fe5b14612e86576040805162461bcd60e51b815260206004820152601c60248201527f54686973207265706c61636520616c7265616479206372656174656400000000604482015290519081900360640190fd5b8e8160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508d8160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550868160040181905550818160050160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508381600201819055508581600601819055506202a30081600701819055506000816008018190555060018160090160006101000a81548160ff02191690836003811115612f5357fe5b0217905550600181015481546004830154600284015460058501546040805193845260208401929092526001600160a01b039081168383015290519381169392169186917f26899953ce5ec4fdd27150e3d625e33f84d65e89ccf4a2d960abc648b1b4df2a919081900360600190a4505050505050505050505050505050565b6001600160a01b0382166000908152600a6020908152604080832084845290915290206001600a82015460ff16600381111561300b57fe5b14613054576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b6008810154600182015461306791611c14565b42116130ab576040805162461bcd60e51b815260206004820152600e60248201526d151a5b59539bdd115e1c1a5c995960921b604482015290519081900360640190fd5b600a8101805460ff191660031790556002810154815460078301546130dd926001600160a01b039081169216906137ce565b8054600682015460058301546130fd926001600160a01b03169101613ce8565b80546005820154600683015460038401546040805193845260208401929092526001600160a01b03908116838301529051928116929086169185917f45c7f0162772dc14d848f7fc10d09f8a007bba89c372e47f17d0c6b4a2e67f869181900360600190a4505050565b6001600160a01b038116600090815260086020526040812080546131c2576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60006131ed82600701546131e784600501548560030154611c6e90919063ffffffff16565b90611c6e565b949350505050565b60008183106132045781611143565b5090919050565b600082158015613219575081155b15613225575082611143565b6131ed826113d386866122dd565b6001600160a01b038316600090815260086020526040812081908161325787613167565b9050808611156132985760405162461bcd60e51b815260040180806020018281038252604e8152602001806157c9604e913960600191505060405180910390fd5b60078201546132a79087611c14565b600783015560068201546132bb9086611c14565b60068301556040805187815290516001600160a01b038916917ff052e4720689a6c9761eb963b628676705aa972a0ba9571c32440b9dcb785481919081900360200190a281600701548260060154935093505050935093915050565b600090565b90565b6001600160a01b03831660009081526007602090815260408083205460069092529091205482916133509190611c6e565b101561339c576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6001600160a01b0383166000908152600660205260409020546133bf9082611c6e565b6001600160a01b0380851660009081526006602052604080822093909355915184929183169084908381818185875af1925050503d806000811461341f576040519150601f19603f3d011682016040523d82523d6000602084013e613424565b606091505b505090508061346d576040805162461bcd60e51b815260206004820152601060248201526f2a3930b739b332b9103330b4b632b21760811b604482015290519081900360640190fd5b5050505050565b600081600143034060405160200180836001600160a01b031660601b8152601401828152602001925050506040516020818303038152906040528051906020012060001c9050919050565b6001600160a01b0382166000908152600860205260408120805461351a576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600061352f82600001548360010154866141fd565b6001600160a01b038116600090815260088401602052604090205490915060ff16156135a2576040805162461bcd60e51b815260206004820152601d60248201527f5468697320627463206164647265737320616c72656164792075736564000000604482015290519081900360640190fd5b6001600160a01b038116600090815260089092016020526040909120805460ff19166001179055905092915050565b6103e86002919091020490565b61136c333083611a22565b50600090565b6000806135fb8461425c565b90508083111561360f576000915050610f81565b6001600160a01b038416600090815260086020526040902060058101546136369085611c14565b60058201556040805185815290516001600160a01b038716917fa40b2e156dca6a5cc9204c1172c822104aa5957e50a2e4785fe281a0460e01df919081900360200190a2506001949350505050565b6001600160a01b0382166000908152600760205260409020546136a89082611c14565b6001600160a01b03831660009081526007602090815260408083208490556006909152902054101561136c576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b61136c308383611a22565b6001600160a01b03821660009081526007602052604090205481111561378b576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6001600160a01b0382166000908152600760205260409020546137ae9082611c6e565b6001600160a01b0390921660009081526007602052604090209190915550565b6137d983838361331f565b604080516001600160a01b0380861682528416602082015280820183905290517f1f62766d3b94993a001005cb9b5296a3959ccda7944a7033caf75e04a0e7b33c9181900360600190a1505050565b600081836138775760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611bd1578181015183820152602001611bb9565b50600083858161388357fe5b0495945050505050565b6000600280836040518082805190602001908083835b602083106138c25780518252601f1990920191602091820191016138a3565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015613901573d6000803e3d6000fd5b5050506040513d602081101561391657600080fd5b50516040805160208181019390935281518082038401815290820191829052805190928291908401908083835b602083106139625780518252601f199092019160209182019101613943565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156139a1573d6000803e3d6000fd5b5050506040513d60208110156139b657600080fd5b505192915050565b6139c6615613565b8151600460606139d885836002614287565b9050806000815181106139e757fe5b01602001516001600160f81b031916158015613a22575080600181518110613a0b57fe5b6020910101516001600160f81b031916600160f81b145b15613a2e578160020191505b81600080613a47613a428985808a03614287565b614341565b91509150816001018501945060005b81811015613a9457602486019550600080613a81613a42898a8c038e6142879092919063ffffffff16565b0197909701600501965050600101613a56565b506040805160808101909152859080613ab8613ab38c60006004614287565b6143c7565b63ffffffff168152602001613ada868785038d6142879092919063ffffffff16565b8152602001613af08b84808c0360031901614287565b8152602001613b03613ab38c600461440c565b63ffffffff1690529998505050505050505050565b6000806000613b278786614431565b91509150838114613b71576040805162461bcd60e51b815260206004820152600f60248201526e24b73b30b634b227b82932ba3ab93760891b604482015290519081900360640190fd5b85821015613bba576040805162461bcd60e51b8152602060048201526011602482015270496e73756666696369656e7456616c756560781b604482015290519081900360640190fd5b5095945050505050565b6001600160a01b03808516600090815260086020526040808220928616825290208154613c28576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b8054613c6b576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6003820154613c7a9085611c6e565b600380840191909155810154613c909085611c14565b6003820155604080518581526020810185905281516001600160a01b0380891693908a16927f5b2260440eaa72a266c31b81fcf06107588de293792678adc73df44ace679b0f929081900390910190a3505050505050565b6001600160a01b03821660009081526008602052604090206004810154613d0f9083611c6e565b60048201556040805183815290516001600160a01b038516917f602ceb96b9001fc15cee84bae42af52eebda91a7e70da69fd29563f5d42ca5f1919081900360200190a2505050565b613d61826135d1565b60068401819055613d73908390611c6e565b6005840181905560068401546040805192835260208301919091528181018390525185917f6db487de54f8294da3728759b0a0d5eb1ea2177a28902ba11abc9e3e989dc99c919081900360600190a250505050565b600080613dd4846113ad565b905082811015613de8576000915050610f81565b6001600160a01b03841660009081526008602052604090206004810154613e0f9085611c14565b60048201556040805185815290516001600160a01b038716917f2a0e25b59dbe8659199b9249e7e3897b753e8483dcbe40a7403b48242c6f4d34919081900360200190a2506001949350505050565b6001600160a01b03821660009081526008602052604090206003810154613e859083611c14565b60038201556004810154613e999083611c6e565b60048201556040805183815290516001600160a01b038516917fda0c72f67f0b71f8afdd41fe90a21ca4d9e2a768778ed664031c7cae3998f32a919081900360200190a2505050565b61136c82826145bf565b613ef630826146af565b50565b6001600160a01b03821660009081526008602052604090206005810154613f209083611c6e565b60058201556003810154613f349083611c6e565b60038201556040805183815290516001600160a01b038516917f60213c45c34d8b94e495fd5871fdea7a7511f659e884ea25a0c8843b7f98bfad919081900360200190a2505050565b6001600160a01b03821660009081526008602052604081208054829190613fdb576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6000613feb8260070154866131f5565b90506000614002836006015483856007015461320b565b905060006140148460060154836131f5565b60078501549091506140269084611c6e565b6007850155600684015461403a9082611c6e565b60068501556040805184815290516001600160a01b038a16917f4317750fb47a4dc685a826d40caf1dbf81881e792d205275e711b9054871f7aa919081900360200190a2919791965090945050505050565b6001600160a01b038216600090815260086020526040902080546140e7576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b610fb483836126d4565b6001600160a01b0384166000908152600860205260408120805461414c576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60006141598686866141fd565b6001600160a01b038116600090815260088401602052604090205490915060ff16156141cc576040805162461bcd60e51b815260206004820152601d60248201527f5468697320627463206164647265737320616c72656164792075736564000000604482015290519081900360640190fd5b6001600160a01b038116600090815260089092016020526040909120805460ff191660011790559050949350505050565b6040805160208082018690528183018590526060808301859052835180840390910181526080909201909252805191012060009061423c8186866147ab565b909550935061425361424e8686614824565b614860565b95945050505050565b6001600160a01b03811660009081526008602052604081206005810154600382015461114391611c6e565b6060816142a35750604080516020810190915260008152611143565b82820183811180156142b6575080855110155b6142fd576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b604051915082604083010160405282825283850182038460208701018481015b808210156143365781518383015260208201915061431d565b505050509392505050565b600080600061434f8461498b565b905060ff811661437c5760008460008151811061436857fe5b016020015190935060f81c91506143c29050565b8060010160ff168451101561439a57600019600092509250506143c2565b60006143b6613ab36143b187600160ff8716614287565b614a07565b60ff9092169350909150505b915091565b60008060005b8351811015614405578060010184510360080260020a8482815181106143ef57fe5b016020015160f81c0291909101906001016143cd565b5092915050565b60606000614424838551614aa490919063ffffffff16565b90506131ed848285614287565b600080600061443f85614341565b915050600061444f8260036131f5565b905060606000805b8381101561450c57606061446b8a83614b01565b90508351600014156144905761448081614ccb565b8051909450156144905750614504565b886001600160a01b0316836001600160a01b0316146145025760606144b482614d3c565b9050805160141480156144e257506001600160a01b038a166144d7826000614f69565b6001600160a01b0316145b15614500576144f082614fcb565b67ffffffffffffffff1698508993505b505b505b600101614457565b50866001600160a01b0316816001600160a01b031614614566576040805162461bcd60e51b815260206004820152601060248201526f125b9d985b1a59149958da5c1a595b9d60821b604482015290519081900360640190fd5b60008251116145a9576040805162461bcd60e51b815260206004820152600a6024820152692737a7b82932ba393ab760b11b604482015290519081900360640190fd5b6145b2826143c7565b9450505050509250929050565b6001600160a01b03821661461a576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61462660008383610fb4565b6002546146339082611c14565b6002556001600160a01b0382166000908152602081905260409020546146599082611c14565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0382166146f45760405162461bcd60e51b81526004018080602001828103825260218152602001806158176021913960400191505060405180910390fd5b61470082600083610fb4565b61473d81604051806060016040528060228152602001615689602291396001600160a01b0385166000908152602081905260409020549190611b7d565b6001600160a01b0383166000908152602081905260409020556002546147639082611c6e565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60008070014551231950b75fc4402da1732fc9bebe198506614804576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c6964207363616c6560981b604482015290519081900360640190fd5b61481885858560006401000003d019614ff0565b91509150935093915050565b6040805160019290921660020160f81b6001600160f81b0319166020830152602180830193909352805180830390930183526041909101905290565b600060036002836040518082805190602001908083835b602083106148965780518252601f199092019160209182019101614877565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156148d5573d6000803e3d6000fd5b5050506040513d60208110156148ea57600080fd5b50516040805160208181019390935281518082038401815290820191829052805190928291908401908083835b602083106149365780518252601f199092019160209182019101614917565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015614975573d6000803e3d6000fd5b5050604051516001600160a01b03169392505050565b60008160008151811061499a57fe5b60209101015160f81c60ff14156149b357506008610fa4565b816000815181106149c057fe5b60209101015160f81c60fe14156149d957506004610fa4565b816000815181106149e657fe5b60209101015160f81c60fd14156149ff57506002610fa4565b506000919050565b606080825167ffffffffffffffff81118015614a2257600080fd5b506040519080825280601f01601f191660200182016040528015614a4d576020820181803683370190505b50905060005b835181101561440557838181518110614a6857fe5b602001015160f81c60f81b826001838751030381518110614a8557fe5b60200101906001600160f81b031916908160001a905350600101614a53565b600082821115614afb576040805162461bcd60e51b815260206004820152601d60248201527f556e646572666c6f7720647572696e67207375627472616374696f6e2e000000604482015290519081900360640190fd5b50900390565b6060600080614b0f85614341565b9092509050600019821415614b555760405162461bcd60e51b81526004018080602001828103825260228152602001806157386022913960400191505060405180910390fd5b808410614b9d576040805162461bcd60e51b81526020600482015260116024820152702b37baba103932b0b21037bb32b9393ab760791b604482015290519081900360640190fd5b6060600060018401815b87811015614c3757614bc782838b51038b6142879092919063ffffffff16565b9350614bd28461502a565b9250600019831415614c2b576040805162461bcd60e51b815260206004820152601a60248201527f42616420566172496e7420696e207363726970745075626b6579000000000000604482015290519081900360640190fd5b90820190600101614ba7565b50614c5081828a51038a6142879092919063ffffffff16565b9250614c5b8361502a565b9150600019821415614cb4576040805162461bcd60e51b815260206004820152601a60248201527f42616420566172496e7420696e207363726970745075626b6579000000000000604482015290519081900360640190fd5b614cbf888284614287565b98975050505050505050565b60607fb31d742db54d6961c6b346af2c9c4c495eb8aff2ebf6b3699e052d1cef5cf50b614cfb8360096001615090565b14614d155750604080516020810190915260008152610fa4565b6060614d2483600a6001614287565b9050611143600b614d34836143c7565b859190614287565b6060600082600881518110614d4d57fe5b0160200151835160f89190911c91506009820160ff1614614d7e575050604080516020810190915260008152610fa4565b82600981518110614d8b57fe5b016020015160f81c614e285760028160ff161015614db9575050604080516020810190915260008152610fa4565b600083600a81518110614dc857fe5b016020015160f81c9050600119820160ff1681141580614df5575080602014158015614df5575080601414155b15614e13576040518060200160405280600081525092505050610fa4565b614e1f84600b83614287565b92505050610fa4565b6000614e378460086003615090565b90507fe1683aec1a10d43657f3f2c82e683d8e19e8a3f320ce9d3bf22c6ca6ab4cbce6811415614ee45783600b81518110614e6e57fe5b60209101015160f81c6014141580614eb9575083517f3b50b2715f5a28d2a7eeb517f17ec797e8536bd425bf31fc4f6bf7ce1e34b77d90614eb6908690600119016002615090565b14155b15614ed7576040518060200160405280600081525092505050610fa4565b614e1f84600c6014614287565b7fa0916ee0b243ee20fb4ce56170744d86b54d7ae03a418a7a12156f40dedcf7d7811415614f525783600185510381518110614f1c57fe5b60209101015160f81c608714614f45576040518060200160405280600081525092505050610fa4565b614e1f84600b6014614287565b505050604080516020810190915260008152919050565b6000601482018281118015614f7f575080845110155b614fba5760405162461bcd60e51b81526004018080602001828103825260218152602001806156f16021913960400191505060405180910390fd5b50500160200151600160601b900490565b60006060614fd8836150f7565b90506060614fe582614a07565b90506131ed816143c7565b60008060008060006150078a8a8a60018b8b615106565b9250925092506150198383838961517d565b945094505050509550959350505050565b600060098251101561503f5750600019610fa4565b606061505a600880855103856142879092919063ffffffff16565b905060008061506883614341565b9092509050600019821415615084576000199350505050610fa4565b01600901915050919050565b600082820183811180156150a5575080855110155b6150ec576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b505091016020012090565b6060610f818260006008614287565b600080808861511c575086915085905084615171565b8860008060015b8315615168576001841615615149576151418383838f8f8f8e6151d4565b919450925090505b60028404935061515c8c8c8c8c8c615451565b919d509b509950615123565b91955093509150505b96509650969350505050565b600080600061518c8585615567565b90506000848061519857fe5b8283099050600085806151a757fe5b828a099050600086806151b657fe5b87806151be57fe5b8486098a09919a91995090975050505050505050565b60008080891580156151e4575088155b156151f6575085915084905083615444565b86158015615202575085155b15615214575088915087905086615444565b61521c615647565b848061522457fe5b898a098152848061523157fe5b81518a096020820152848061524257fe5b8687096040820152848061525257fe5b604082015187096060820152604080516080810190915280868061527257fe5b60408401518e098152602001868061528657fe5b60608401518d098152602001868061529a57fe5b83518b09815260200186806152ab57fe5b60208401518a099052604081015181519192501415806152d357506060810151602082015114155b615324576040805162461bcd60e51b815260206004820152601e60248201527f557365206a6163446f75626c652066756e6374696f6e20696e73746561640000604482015290519081900360640190fd5b61532c615647565b858061533457fe5b8251604084015190880390088152858061534a57fe5b6020830151606084015190880390086020820152858061536657fe5b815180096040820152858061537757fe5b815160408301510960608201526000868061538e57fe5b60608301518803888061539d57fe5b6020850151800908905086806153af57fe5b87806153b757fe5b88806153bf57fe5b6040850151865109600209880382089050600087806153da57fe5b88806153e257fe5b838a038a806153ed57fe5b6040870151885109086020850151099050878061540657fe5b888061540e57fe5b60608501516020870151098903820890506000888061542957fe5b898061543157fe5b8b8f098551099297509095509093505050505b9750975097945050505050565b600080808561546757508691508590508461555c565b6000848061547157fe5b898a0990506000858061548057fe5b898a0990506000868061548f57fe5b898a0990506000878061549e57fe5b88806154a657fe5b848e096004099050600088806154b857fe5b89806154c057fe5b8a806154c857fe5b8586098c098a806154d557fe5b8760030908905088806154e457fe5b89806154ec57fe5b8384088a038a806154f957fe5b838409089450888061550757fe5b898061550f57fe5b8a8061551757fe5b8687096008098a038a8061552757fe5b8b8061552f57fe5b888d0386088409089350888061554157fe5b898061554957fe5b8c8e096002099497509295509293505050505b955095509592505050565b600082158015906155785750818314155b801561558357508115155b6155c5576040805162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b210373ab6b132b960911b604482015290519081900360640190fd5b6000600183825b8615615608578682816155db57fe5b0490508286806155e757fe5b87806155ef57fe5b85840988038608828902909303979094509192506155cc565b509195945050505050565b6040518060800160405280600063ffffffff1681526020016060815260200160608152602001600063ffffffff1681525090565b6040518060800160405280600490602082028036833750919291505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737353656e6465722073686f756c64206265206f776e6572206f662074686973205661756c744164647265737320636f6e76657273696f6e206f7574206f6620626f756e64732e45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636552656164206f76657272756e20647572696e6720566172496e742070617273696e676f6c645661756c74204d555354204e4f5420626520657175616c20746f206e65775661756c74536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f756c64206e6f7420696e63726561736520746f2d62652d7265706c6163656420746f6b656e732062656361757365206974206973206d6f7265207468616e2069737375656420616d6f756e7445524332303a206275726e2066726f6d20746865207a65726f20616464726573735472616e73616374696f6e20636f6e7461696e2077726f6e672062746320616d6f756e7445524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212204d85184267f534f03c8b2ab6be874636898a05d33236e30a7132b17c90766ac364736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "415:4366:4:-:0;;;496:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;496:118:4;2013:141:21;;;;;;;;;;;;-1:-1:-1;;;496:118:4;2013:141:21;;;;;;;;;;;;;;;;;;;;2085:12;;2013:141;;;2085:12;;:5;;:12;:::i;:::-;-1:-1:-1;2107:16:21;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;;2133:9:21;:14;;-1:-1:-1;;2133:14:21;2145:2;2133:14;;;-1:-1:-1;566:17:4::1;581:1;566:14;:17::i;:::-;593:5;:14:::0;;-1:-1:-1;;;;;;593:14:4::1;-1:-1:-1::0;;;;;593:14:4;;;::::1;::::0;;;::::1;::::0;;415:4366;;10022:88:21;10082:9;:21;;-1:-1:-1;;10082:21:21;;;;;;;;;;;;10022:88::o;415:4366:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;415:4366:4;;;-1:-1:-1;415:4366:4;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "415:4366:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81:21;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4255:166;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4255:166:21;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;2417:158:10;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2417:158:10;-1:-1:-1;;;;;2417:158:10;;:::i;:::-;;;;;;;;;;;;;;;;3632:229:4;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3632:229:4;;;;;;;;;;;;;:::i;:::-;;3262:98:21;;;;;;;;;;;;;:::i;1784:627:10:-;;;;;;;;;;;;;;;;-1:-1:-1;1784:627:10;;;;;;;:::i;4881:317:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4881:317:21;;;;;;;;;;;;;;;;;:::i;470:19:4:-;;;;;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;470:19:4;;;;;;;;;;;;;;3121:81:21;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;522:104:0;;;;;;;;;;;;;:::i;5593:215:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;5593:215:21;;;;;;;;:::i;393:53:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;393:53:0;-1:-1:-1;;;;;393:53:0;;:::i;811:55:10:-;;;;;;;;;;;;;:::i;3934:418::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3934:418:10;;;;;;;:::i;535:85:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;535:85:5;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;535:85:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;535:85:5;;;;;;-1:-1:-1;;;;;535:85:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;452:49:0;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;452:49:0;-1:-1:-1;;;;;452:49:0;;:::i;4683:286:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4683:286:10;;:::i;3418:117:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3418:117:21;-1:-1:-1;;;;;3418:117:21;;:::i;1279:186:4:-;;;;;;;;;;;;;;;;-1:-1:-1;1279:186:4;;;;;;-1:-1:-1;;;;;1279:186:4;;:::i;2138:264::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2138:264:4;;;-1:-1:-1;;;;;2138:264:4;;;;;;;;;;;;:::i;2809:126::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2809:126:4;;;;;;;;:::i;6839:255:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;6839:255:10;-1:-1:-1;;;;;6839:255:10;;:::i;6522:311::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;6522:311:10;;;;;;;:::i;2413:85:21:-;;;;;;;;;;;;;:::i;4290:489:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4290:489:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4290:489:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4290:489:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4290:489:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4290:489:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4290:489:4;;;;;;;;;;-1:-1:-1;4290:489:4;;-1:-1:-1;4290:489:4;-1:-1:-1;4290:489:4;:::i;1401:59:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1401:59:6;;:::i;:::-;;;;;-1:-1:-1;;;;;1401:59:6;;;;;;-1:-1:-1;;;;;1401:59:6;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1401:59:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4358:319:10;;;:::i;6295:266:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;6295:266:21;;;;;;;;:::i;766:39:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;766:39:10;-1:-1:-1;;;;;766:39:10;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3738:172:21;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3738:172:21;;;;;;;;:::i;1471:534:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1471:534:4;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1471:534:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1471:534:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1471:534:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1471:534:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1471:534:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1471:534:4;;;;;;;;;;-1:-1:-1;1471:534:4;;-1:-1:-1;1471:534:4;-1:-1:-1;1471:534:4;:::i;2408:395::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2408:395:4;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2408:395:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2408:395:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2408:395:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2408:395:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2408:395:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2408:395:4;;;;;;;;;;-1:-1:-1;2408:395:4;;-1:-1:-1;2408:395:4;-1:-1:-1;2408:395:4;:::i;3867:417::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3867:417:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;2011:121::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2011:121:4;;;;;;;;:::i;3968:149:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3968:149:21;;;;;;;;;;:::i;2581:146:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2581:146:10;-1:-1:-1;;;;;2581:146:10;;:::i;1408:75:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1408:75:3;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;1408:75:3;;;;;;;;;;;-1:-1:-1;;;;;1408:75:3;;;;;;-1:-1:-1;;;;;1408:75:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81:21;2288:5;2281:12;;;;;;;;-1:-1:-1;;2281:12:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2256:13;;2281:12;;2288:5;;2281:12;;2288:5;2281:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81;:::o;4255:166::-;4338:4;4354:39;4363:12;:10;:12::i;:::-;4377:7;4386:6;4354:8;:39::i;:::-;-1:-1:-1;4410:4:21;4255:166;;;;;:::o;2417:158:10:-;-1:-1:-1;;;;;2518:15:10;;2477:7;2518:15;;;:6;:15;;;;;2550:18;;;2417:158;;;;:::o;3632:229:4:-;3788:66;3812:10;3824:9;3835:18;3788:23;:66::i;:::-;3632:229;;;:::o;3262:98:21:-;3341:12;;3262:98;:::o;1784:627:10:-;1918:10;1900:15;1960;;;:6;:15;;;;;1993:19;;:24;1985:47;;;;;-1:-1:-1;;;1985:47:10;;;;;;;;;;;;-1:-1:-1;;;1985:47:10;;;;;;;;;;;;;;;2063:18;;;;;:40;;-1:-1:-1;2085:18:10;;;2063:40;2042:100;;;;;-1:-1:-1;;;2042:100:10;;;;;;;;;;;;-1:-1:-1;;;2042:100:10;;;;;;;;;;;;;;;2152:35;;;2197:19;;;:35;;;2242:26;:24;:26::i;:::-;2283:121;;;2331:9;2283:121;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2283:121:10;;;;;;;;;;;;;1784:627;;;;:::o;4881:317:21:-;4987:4;5003:36;5013:6;5021:9;5032:6;5003:9;:36::i;:::-;5049:121;5058:6;5066:12;:10;:12::i;:::-;5080:89;5118:6;5080:89;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5080:19:21;;;;;;:11;:19;;;;;;5100:12;:10;:12::i;:::-;-1:-1:-1;;;;;5080:33:21;;;;;;;;;;;;-1:-1:-1;5080:33:21;;;:89;:37;:89::i;:::-;5049:8;:121::i;:::-;-1:-1:-1;5187:4:21;4881:317;;;;;;:::o;470:19:4:-;;;-1:-1:-1;;;;;470:19:4;;:::o;3121:81:21:-;3186:9;;;;3121:81;:::o;522:104:0:-;598:21;522:104;:::o;5593:215:21:-;5681:4;5697:83;5706:12;:10;:12::i;:::-;5720:7;5729:50;5768:10;5729:11;:25;5741:12;:10;:12::i;:::-;-1:-1:-1;;;;;5729:25:21;;;;;;;;;;;;;;;;;-1:-1:-1;5729:25:21;;;:34;;;;;;;;;;;:38;:50::i;393:53:0:-;;;;;;;;;;;;;:::o;811:55:10:-;863:3;811:55;:::o;3934:418::-;4064:10;4046:15;4106;;;:6;:15;;;;;4139:19;;4131:50;;;;;-1:-1:-1;;;4131:50:10;;;;;;;;;;;;-1:-1:-1;;;4131:50:10;;;;;;;;;;;;;;;4191:35;;;4236:19;;;:35;;;4286:59;;;;;;;;;;;;;;-1:-1:-1;;;;;4286:59:10;;;;;;;;;;;3934:418;;;;:::o;535:85:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;535:85:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;452:49:0:-;;;;;;;;;;;;;:::o;4683:286:10:-;4775:10;4746:19;4768:18;;;:6;:18;;;;;4804:19;;4796:50;;;;;-1:-1:-1;;;4796:50:10;;;;;;;;;;;;-1:-1:-1;;;4796:50:10;;;;;;;;;;;;;;;4875:16;;;;:28;;4896:6;4875:20;:28::i;:::-;4856:16;;;:47;4913:49;4943:10;4955:6;4913:29;:49::i;:::-;4683:286;;:::o;3418:117:21:-;-1:-1:-1;;;;;3510:18:21;3484:7;3510:18;;;;;;;;;;;;3418:117::o;1279:186:4:-;1390:68;1410:10;1422:15;1439:7;1448:9;1390:19;:68::i;2138:264::-;2269:126;2304:10;2328:12;2354:10;2378:7;2269:21;:126::i;2809:::-;2887:41;2908:9;2919:8;2887:20;:41::i;6839:255:10:-;6900:7;6919:22;6944:38;6974:7;6944:29;:38::i;:::-;6919:63;;6999:88;7045:14;863:3;6522:311;6636:7;6792:34;6816:9;6792:19;:10;6807:3;6792:14;:19::i;:::-;:23;;:34::i;2413:85:21:-;2484:7;2477:14;;;;;;;;-1:-1:-1;;2477:14:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2452:13;;2477:14;;2484:7;;2477:14;;2484:7;2477:14;;;;;;;;;;;;;;;;;;;;;;;;4290:489:4;4649:18;4670:51;4679:6;4687:5;4694;;4701:6;;4709:11;;4670:8;:51::i;:::-;4649:72;;4731:41;4755:9;4766:5;4731:23;:41::i;:::-;4290:489;;;;;;;;;;:::o;1401:59:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1401:59:6;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4358:319:10:-;4437:10;4419:15;4479;;;:6;:15;;;;;4512:19;;4504:50;;;;;-1:-1:-1;;;4504:50:10;;;;;;;;;;;;-1:-1:-1;;;4504:50:10;;;;;;;;;;;;;;;4583:16;;;;:31;;4604:9;4583:20;:31::i;:::-;4564:16;;;:50;4624:46;4651:7;4660:9;4624:26;:46::i;6295:266:21:-;6388:4;6404:129;6413:12;:10;:12::i;:::-;6427:7;6436:96;6475:15;6436:96;;;;;;;;;;;;;;;;;:11;:25;6448:12;:10;:12::i;:::-;-1:-1:-1;;;;;6436:25:21;;;;;;;;;;;;;;;;;-1:-1:-1;6436:25:21;;;:34;;;;;;;;;;;:96;:38;:96::i;766:39:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3738:172:21:-;3824:4;3840:42;3850:12;:10;:12::i;:::-;3864:9;3875:6;3840:9;:42::i;1471:534:4:-;1857:18;1890:51;1899:6;1907:5;1914;;1921:6;;1929:11;;1890:8;:51::i;:::-;1857:84;;1952:46;1972:9;1983:7;1992:5;1952:19;:46::i;:::-;1471:534;;;;;;;;;;;:::o;2408:395::-;2652:18;2685:51;2694:6;2702:5;2709;;2716:6;;2724:11;;2685:8;:51::i;:::-;2652:84;;2747:49;2769:9;2780:8;2790:5;2747:21;:49::i;3867:417::-;4096:181;4132:10;4156;4180:9;4203:10;4227:13;4254;4096:22;:181::i;:::-;3867:417;;;;;;:::o;2011:121::-;2087:38;2106:9;2117:7;2087:18;:38::i;3968:149:21:-;-1:-1:-1;;;;;4083:18:21;;;4057:7;4083:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3968:149::o;2581:146:10:-;-1:-1:-1;;;;;2676:15:10;2635:7;2676:15;;;:6;:15;;;;;2708:12;;;;2581:146::o;1408:75:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1408:75:3;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1408:75:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1408:75:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1408:75:3;;-1:-1:-1;1408:75:3;;;;;:::o;590:104:18:-;677:10;590:104;:::o;9359:340:21:-;-1:-1:-1;;;;;9460:19:21;;9452:68;;;;-1:-1:-1;;;9452:68:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9538:21:21;;9530:68;;;;-1:-1:-1;;;9530:68:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9609:18:21;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;9660:32;;;;;;;;;;;;;;;;;9359:340;;;:::o;1943:1827:6:-;2100:10;-1:-1:-1;;;;;2100:24:6;;;2092:73;;;;-1:-1:-1;;;2092:73:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2243:25;2271:55;2315:10;2271:43;:55::i;:::-;2243:83;;2336:28;2367:38;2376:17;2395:9;2367:8;:38::i;:::-;2336:69;-1:-1:-1;2452:18:6;2484:13;;2481:157;;2541:86;2575:18;2595:20;2617:9;2541:33;:86::i;:::-;2513:114;;2481:157;2649:25;2676:31;2711:104;2755:10;2767:20;2789:25;2711:43;:104::i;:::-;2648:167;;;;3106:17;3126:24;:22;:24::i;:::-;3106:44;;3189:9;3168:17;:30;;3160:64;;;;;-1:-1:-1;;;3160:64:6;;;;;;;;;;;;-1:-1:-1;;;3160:64:6;;;;;;;;;;;;;;;3430:23;3367:47;3396:17;3367:28;:47::i;:::-;:86;;3346:155;;;;;-1:-1:-1;;;3346:155:6;;;;;;;;;;;;-1:-1:-1;;;3346:155:6;;;;;;;;;;;;;;;3607:65;3634:10;3646:25;3607:26;:65::i;:::-;3688:75;;;;;;;;;;;;;;-1:-1:-1;;;;;3688:75:6;;;;;;;;;;;1943:1827;;;;;;;;;:::o;7035:530:21:-;-1:-1:-1;;;;;7140:20:21;;7132:70;;;;-1:-1:-1;;;7132:70:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7220:23:21;;7212:71;;;;-1:-1:-1;;;7212:71:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7294:47;7315:6;7323:9;7334:6;7294:20;:47::i;:::-;7372:71;7394:6;7372:71;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7372:17:21;;:9;:17;;;;;;;;;;;;:71;:21;:71::i;:::-;-1:-1:-1;;;;;7352:17:21;;;:9;:17;;;;;;;;;;;:91;;;;7476:20;;;;;;;:32;;7501:6;7476:24;:32::i;:::-;-1:-1:-1;;;;;7453:20:21;;;:9;:20;;;;;;;;;;;;:55;;;;7523:35;;;;;;;7453:20;;7523:35;;;;;;;;;;;;;7035:530;;;:::o;1746:187:20:-;1832:7;1867:12;1859:6;;;;1851:29;;;;-1:-1:-1;;;1851:29:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1902:5:20;;;1746:187::o;874:176::-;932:7;963:5;;;986:6;;;;978:46;;;;;-1:-1:-1;;;978:46:20;;;;;;;;;;;;;;;;;;;;;;;;;;;1321:134;1379:7;1405:43;1409:1;1412;1405:43;;;;;;;;;;;;;;;;;:3;:43::i;1370:164:0:-;1448:31;1456:6;1464;1472;1448:7;:31::i;:::-;1494:33;;;-1:-1:-1;;;;;1494:33:0;;;;;;;;;;;;;;;;;;;;;;;1370:164;;:::o;2536:1697:3:-;2797:18;2734:43;2761:15;2734:26;:43::i;:::-;:81;;2713:150;;;;;-1:-1:-1;;;2713:150:3;;;;;;;;;;;;-1:-1:-1;;;2713:150:3;;;;;;;;;;;;;;;3076:15;3094:21;3105:9;3094:10;:21::i;:::-;3076:39;;3125:18;3146:54;3183:7;3192;3146:36;:54::i;:::-;3125:75;;3210:11;3224:28;3236:15;3224:11;:28::i;:::-;3210:42;-1:-1:-1;3262:18:3;3283:24;:15;3210:42;3283:19;:24::i;:::-;-1:-1:-1;;;;;3350:24:3;;3317:30;3350:24;;;:13;:24;;;;;;;;:33;;;;;;;;3262:45;;-1:-1:-1;3401:14:3;;;;;;:36;;;;;;;;;3393:64;;;;;-1:-1:-1;;;3393:64:3;;;;;;;;;;;;-1:-1:-1;;;3393:64:3;;;;;;;;;;;;;;;3481:41;;-1:-1:-1;;;;;;3481:41:3;;;-1:-1:-1;;;;;3481:41:3;;;;;;;;;3555:15;-1:-1:-1;3536:16:3;;;:34;;;;3584:17;;;:29;;;;;;;;;;;;3627:18;;;:31;;;;;;;;;;;;3672:14;;;:27;;;3713:11;;;:17;;;3744:26;;;:47;;;3822:6;3805:14;;;:23;-1:-1:-1;3842:17:3;;;:21;3877:14;;;:38;;-1:-1:-1;;3877:38:3;;;;;;3935:107;;3975:17;3744:47;3935:26;:107::i;:::-;4074:152;;;;;;;;;;;;-1:-1:-1;;;;;4074:152:3;;;;;;;;;;;;;;;;4100:7;;4074:152;;;;;;;;;2536:1697;;;;;;;;;:::o;2068:1696:5:-;2227:35;2238:9;2249:12;2227:10;:35::i;:::-;2272:17;2292:26;2305:12;2292;:26::i;:::-;2272:46;;2328:20;2351:24;:22;:24::i;:::-;2328:47;-1:-1:-1;2409:24:5;;;2472:28;;;2385:21;2529:22;2541:9;2529:11;:22::i;:::-;2510:41;;2583:113;2644:7;2669:13;2583:43;:113::i;:::-;2562:187;;;;;-1:-1:-1;;;2562:187:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2830:25:5;;2796:31;2830:25;;;:14;:25;;;;;;;;:35;;;;;;;;;2883:14;;;;;;:36;;;;;;;;;2875:64;;;;;-1:-1:-1;;;2875:64:5;;;;;;;;;;;;-1:-1:-1;;;2875:64:5;;;;;;;;;;;;;;;2963:23;;-1:-1:-1;;;;;;2963:23:5;-1:-1:-1;;;;;2963:23:5;;;;;3019:15;-1:-1:-1;3000:16:5;;:34;3065:6;3048:14;;;:23;3085:11;;;:23;;;3122:22;;;:37;;;3173:17;;;:38;;;3278:39;3173:38;3278:19;:39::i;:::-;3258:17;;;:59;;;3331:17;;;:29;;-1:-1:-1;;;;;3331:29:5;;;-1:-1:-1;;;;;;3331:29:5;;;;;;;3374:18;;;:31;;;;;;;;;;;;;;;3451:14;;;:38;;-1:-1:-1;;3451:38:5;-1:-1:-1;3451:38:5;;;3509:56;;3538:7;;3509:28;:56::i;:::-;3673:17;;;;3704:11;;;;3729:18;;;;3580:177;;;;;;;;;;;;;-1:-1:-1;;;;;3729:18:5;;;3580:177;;;;;;;;;;;;;;3607:8;;3580:177;;;;;;;;;2068:1696;;;;;;;;;;:::o;4770:964::-;-1:-1:-1;;;;;4883:25:5;;4849:31;4883:25;;;:14;:25;;;;;;;;:35;;;;;;;;4967:21;4949:14;;;;;;:39;;;;;;;;;4928:106;;;;;-1:-1:-1;;;4928:106:5;;;;;;;;;;;;-1:-1:-1;;;4928:106:5;;;;;;;;;;;;;;;5102:7;:14;;;5083:7;:16;;;:33;5065:15;:51;5044:112;;;;;-1:-1:-1;;;5044:112:5;;;;;;;;;;;;-1:-1:-1;;;5044:112:5;;;;;;;;;;;;;;;5166:14;;;:40;;-1:-1:-1;;5166:40:5;5183:23;5166:40;;;;;;5249:17;;;;5300:11;;;;5280:17;;;;5216:105;;-1:-1:-1;;;;;5249:17:5;;5280:31;5216:19;:105::i;:::-;5361:13;;5376:17;;;;5332:62;;-1:-1:-1;;;;;5361:13:5;;5332:28;:62::i;:::-;5445:13;;5472:17;;;;5503;;;;5404:126;;-1:-1:-1;;;;;5445:13:5;;;;5472:17;;5404:27;:126::i;:::-;5616:13;;5643:17;;;;5674:11;;;;5699:18;;;;5545:182;;;;;;;;;;;;;-1:-1:-1;;;;;5699:18:5;;;5545:182;;;;;;5616:13;;;;5545:182;;;;5571:8;;5545:182;;;;;;;;;4770:964;;;:::o;1742:155:0:-;-1:-1:-1;;;;;1866:23:0;;1808:7;1866:23;;;:14;:23;;;;;;;;;1834:18;:27;;;;;;:56;;:31;:56::i;2180:459:20:-;2238:7;2479:6;2475:45;;-1:-1:-1;2508:1:20;2501:8;;2475:45;2542:5;;;2546:1;2542;:5;:1;2565:5;;;;;:10;2557:56;;;;-1:-1:-1;;;2557:56:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3101:130;3159:7;3185:39;3189:1;3192;3185:39;;;;;;;;;;;;;;;;;:3;:39::i;620:653:4:-;804:12;828;843:15;:5;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;843:13:4;;-1:-1:-1;;;843:15:4:i;:::-;828:30;;868:5;;;;;;;;;-1:-1:-1;;;;;868:5:4;-1:-1:-1;;;;;868:14:4;;896:6;916:5;935:4;953:6;;973:11;;998:1;1013:4;868:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;868:159:4;;;;;;;;;;;;;;;-1:-1:-1;868:159:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1037:41:4;;-1:-1:-1;1037:41:4;:::i;:::-;1093:33;1120:5;;1093:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1093:26:4;;-1:-1:-1;;;1093:33:4:i;:::-;1037:89;;1144:5;:14;;;:19;;1162:1;1144:19;1136:51;;;;;-1:-1:-1;;;1136:51:4;;;;;;;;;;;;-1:-1:-1;;;1136:51:4;;;;;;;;;;;;;;;1255:11;;;;620:653;-1:-1:-1;;;;;;;;;;620:653:4:o;7194:1417:6:-;7380:32;7415:26;;;:15;:26;;;;;7477:21;7459:14;;;;;;:39;;;;;;;;;7451:72;;;;;-1:-1:-1;;;7451:72:6;;;;;;;;;;;;-1:-1:-1;;;7451:72:6;;;;;;;;;;;;;;;7630:16;;;7677;;;7834:18;;;;-1:-1:-1;;;;;7630:16:6;;;;7677;;;;7609:18;;7744:149;;7792:5;;7609:18;;7834;7870:9;7744:30;:149::i;:::-;7704:189;;7934:7;:14;;;7913:17;:35;;7904:85;;;;-1:-1:-1;;;7904:85:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8135:87;8163:10;8175;8187:7;:14;;;8203:7;:18;;;8135:27;:87::i;:::-;8323:69;8353:10;8365:7;:26;;;8323:29;:69::i;:::-;8484:10;-1:-1:-1;;;;;8446:49:6;8472:10;-1:-1:-1;;;;;8446:49:6;8461:9;8446:49;;;;;;;;;;-1:-1:-1;;;8554:14:6;;:40;;-1:-1:-1;;8554:40:6;8571:23;8554:40;;;-1:-1:-1;;7194:1417:6:o;632:253:0:-;728:6;715:9;:19;;707:49;;;;;-1:-1:-1;;;707:49:0;;;;;;;;;;;;-1:-1:-1;;;707:49:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;795:26:0;;;;;;:18;:26;;;;;;:38;;826:6;795:30;:38::i;:::-;-1:-1:-1;;;;;766:26:0;;;;;;:18;:26;;;;;;;;;:67;;;;848:30;;;;;;;;;;;;;;;;;;;;;;;;632:253;;:::o;4239:3341:3:-;-1:-1:-1;;;;;4400:24:3;;4367:30;4400:24;;;:13;:24;;;;;;;;:33;;;;;;;;4482:21;4464:14;;;;;;:39;;;;;;;;;4443:106;;;;;-1:-1:-1;;;4443:106:3;;;;;;;;;;;;-1:-1:-1;;;4443:106:3;;;;;;;;;;;;;;;4689:18;;;;4559:25;;4599:147;;4647:5;;4559:25;;-1:-1:-1;;;;;4689:18:3;4725:7;4599:30;:147::i;:::-;4559:187;;4756:27;4786:31;4805:7;:11;;;4786:7;:14;;;:18;;:31;;;;:::i;:::-;4756:61;;4851:19;4831:17;:39;4827:2198;;;4999:17;;;;-1:-1:-1;;;;;4999:17:3;4985:10;:31;4977:59;;;;;-1:-1:-1;;;4977:59:3;;;;;;;;;;;;-1:-1:-1;;;4977:59:3;;;;;;;;;;;;;;;5160:13;;5068:39;;;;5121:62;;-1:-1:-1;;;;;5160:13:3;5068:39;5121:38;:62::i;:::-;5197:26;5242:179;5297:7;:26;;;5345:17;5384:19;5242:33;:179::i;:::-;5482:17;;;;5197:224;;-1:-1:-1;5435:114:3;;-1:-1:-1;;;;;5482:17:3;5197:224;5435:29;:114::i;:::-;5607:26;;;;5563:25;;5607:50;;5638:18;5607:30;:50::i;:::-;5716:17;;;;5751:13;;5563:94;;-1:-1:-1;5671:142:3;;-1:-1:-1;;;;;5716:17:3;;;;5751:13;5563:94;5671:27;:142::i;:::-;5844:151;5879:7;5904;5929:17;5964;5844;:151::i;:::-;4827:2198;;;;;;6073:17;;;;6108:26;;;;6026:122;;-1:-1:-1;;;;;6073:17:3;;6026:29;:122::i;:::-;6203:19;6183:17;:39;6179:836;;;6242:18;6283:42;:17;6305:19;6283:21;:42::i;:::-;6435:13;;6242:83;;-1:-1:-1;6368:138:3;;-1:-1:-1;;;;;6435:13:3;6242:83;6368:41;:138::i;:::-;6343:658;;;6547:175;6590:7;6623;6656:17;6699:1;6547:17;:175::i;:::-;6179:836;;7034:13;7050:31;7069:7;:11;;;7050:7;:14;;;:18;;:31;;;;:::i;:::-;7117:13;;7034:47;;-1:-1:-1;7091:47:3;;-1:-1:-1;;;;;7117:13:3;7034:47;7091:25;:47::i;:::-;7160:13;;7175:11;;;;7148:39;;-1:-1:-1;;;;;7160:13:3;;7148:11;:39::i;:::-;7209:17;;;;7228:14;;;;7197:46;;-1:-1:-1;;;;;7209:17:3;;7197:11;:46::i;:::-;7253:14;;;:40;;-1:-1:-1;;7253:40:3;7270:23;7253:40;;;7465:13;;7492:14;;;;7520:11;;;;7545:18;;;;7394:179;;;;;;;;;;;;;-1:-1:-1;;;;;7545:18:3;;;7394:179;;;;;;7465:13;;;;7394:179;;;;7421:7;;7394:179;;;;;;;;;;4239:3341;;;;;;;:::o;3770:994:5:-;-1:-1:-1;;;;;3934:25:5;;3900:31;3934:25;;;:14;:25;;;;;;;;:35;;;;;;;;4018:21;4000:14;;;;;;:39;;;;;;;;;3979:106;;;;;-1:-1:-1;;;3979:106:5;;;;;;;;;;;;-1:-1:-1;;;3979:106:5;;;;;;;;;;;;;;;4158:17;;;;4189:18;;;;4095:144;;4139:5;;-1:-1:-1;;;;;4189:18:5;4221:8;4095:30;:144::i;:::-;;4249:35;4266:7;:17;;;4249:16;:35::i;:::-;4314:13;;4329:11;;;;4294:47;;-1:-1:-1;;;;;4314:13:5;;4294:19;:47::i;:::-;4351:14;;;:40;;-1:-1:-1;;4351:40:5;4368:23;4351:40;;;4430:13;;4445:17;;;;4401:62;;-1:-1:-1;;;;;4430:13:5;;4401:28;:62::i;:::-;4500:13;;4535:22;;;;4515:17;;;;4473:85;;-1:-1:-1;;;;;4500:13:5;;4515:42;4473:26;:85::i;:::-;4646:13;;4673:17;;;;4704:11;;;;4729:18;;;;4573:184;;;;;;;;;;;;;-1:-1:-1;;;;;4729:18:5;;;4573:184;;;;;;4646:13;;;;4573:184;;;;4601:8;;4573:184;;;;;;;;;3770:994;;;;:::o;4363:2825:6:-;4593:10;-1:-1:-1;;;;;4593:24:6;;;4585:69;;;;;-1:-1:-1;;;4585:69:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4686:10;-1:-1:-1;;;;;4672:24:6;:10;-1:-1:-1;;;;;4672:24:6;;;4664:75;;;;-1:-1:-1;;;4664:75:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4934:32:6;;;4909:22;4934:32;;;:20;:32;;;;;;5001;;;;;;;5052:22;;5044:53;;;;;-1:-1:-1;;;5044:53:6;;;;;;;;;;;;-1:-1:-1;;;5044:53:6;;;;;;;;;;;;;;;5115:22;;5107:53;;;;;-1:-1:-1;;;5107:53:6;;;;;;;;;;;;-1:-1:-1;;;5107:53:6;;;;;;;;;;;;;;;5226:24;5252:26;5282:63;5323:10;5335:9;5282:40;:63::i;:::-;5225:120;;;;5411:17;5431:24;:22;:24::i;:::-;5411:44;;5493:9;5473:16;:29;;5465:63;;;;;-1:-1:-1;;;5465:63:6;;;;;;;;;;;;-1:-1:-1;;;5465:63:6;;;;;;;;;;;;;;;5607:32;5642:74;5676:10;5688:16;5706:9;5642:33;:74::i;:::-;5607:109;;5727:72;5762:10;5774:24;5727:34;:72::i;:::-;5889:73;5933:10;5945:16;5889:43;:73::i;:::-;;6078:71;6120:10;6132:16;6078:41;:71::i;:::-;;6160:17;6180:24;6193:10;6180:12;:24::i;:::-;6160:44;;6215:18;6236:92;6276:10;6288:13;6303;6318:9;6236:39;:92::i;:::-;6339:32;6374:26;;;:15;:26;;;;;6215:113;;-1:-1:-1;6419:14:6;;;;;;:36;;;;;;;;;6411:77;;;;;-1:-1:-1;;;6411:77:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;6548:10;6513:7;:16;;;:47;;;;;-1:-1:-1;;;;;6513:47:6;;;;;-1:-1:-1;;;;;6513:47:6;;;;;;6609:10;6574:7;:16;;;:47;;;;;-1:-1:-1;;;;;6574:47:6;;;;;-1:-1:-1;;;;;6574:47:6;;;;;;6652:16;6635:7;:14;;:33;;;;6703:10;6682:7;:18;;;:31;;;;;-1:-1:-1;;;;;6682:31:6;;;;;-1:-1:-1;;;;;6682:31:6;;;;;;6748:24;6727:7;:18;;:45;;;;6815:18;6786:7;:26;;:47;;;;6864:6;6847:7;:14;;:23;;;;6904:1;6884:7;:17;;:21;;;;6936;6919:7;:14;;;:38;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7063:16:6;;;;7033;;7093:14;;;;7121:18;;;;7153;;;;6983:198;;;;;;;;;;;;;-1:-1:-1;;;;;7153:18:6;;;6983:198;;;;;;7063:16;;;;7033;;;7010:9;;6983:198;;;;;;;;;;4363:2825;;;;;;;;;;;;;;;:::o;7586:922:3:-;-1:-1:-1;;;;;7696:24:3;;7663:30;7696:24;;;:13;:24;;;;;;;;:33;;;;;;;;7778:21;7760:14;;;;;;:39;;;;;;;;;7739:106;;;;;-1:-1:-1;;;7739:106:3;;;;;;;;;;;;-1:-1:-1;;;7739:106:3;;;;;;;;;;;;;;;7915:14;;;;7894:16;;;;:36;;:20;:36::i;:::-;7876:15;:54;7855:115;;;;;-1:-1:-1;;;7855:115:3;;;;;;;;;;;;-1:-1:-1;;;7855:115:3;;;;;;;;;;;;;;;7980:14;;;:40;;-1:-1:-1;;7980:40:3;7997:23;7980:40;;;8071:17;;;;8102:13;;8129:26;;;;8030:135;;-1:-1:-1;;;;;8071:17:3;;;;8102:13;;8030:27;:135::i;:::-;8244:13;;8288:11;;;;8271:14;;;;8192:117;;-1:-1:-1;;;;;8244:13:3;;8271:28;8192:38;:117::i;:::-;8393:13;;8420:14;;;;8448:11;;;;8473:18;;;;8324:177;;;;;;;;;;;;;-1:-1:-1;;;;;8473:18:3;;;8324:177;;;;;;8393:13;;;;8324:177;;;;8349:7;;8324:177;;;;;;;;;7586:922;;;:::o;7658:342:10:-;-1:-1:-1;;;;;7780:15:10;;7732:14;7780:15;;;:6;:15;;;;;7813:19;;7805:50;;;;;-1:-1:-1;;;7805:50:10;;;;;;;;;;;;-1:-1:-1;;;7805:50:10;;;;;;;;;;;;;;;7866:27;7896:60;7937:5;:18;;;7896:36;7913:5;:18;;;7896:5;:12;;;:16;;:36;;;;:::i;:::-;:40;;:60::i;:::-;7866:90;7658:342;-1:-1:-1;;;;7658:342:10:o;391:104:19:-;449:7;479:1;475;:5;:13;;487:1;475:13;;;-1:-1:-1;483:1:19;;391:104;-1:-1:-1;391:104:19:o;7372:280:10:-;7479:14;7508;;:34;;;;-1:-1:-1;7526:16:10;;7508:34;7505:81;;;-1:-1:-1;7565:10:10;7558:17;;7505:81;7603:42;7633:11;7603:25;:10;7618:9;7603:14;:25::i;8006:651::-;-1:-1:-1;;;;;8166:15:10;;8116:7;8166:15;;;:6;:15;;;;;8116:7;;;8222:38;8173:7;8222:29;:38::i;:::-;8192:68;;8289:19;8279:6;:29;;8271:120;;;;-1:-1:-1;;;8271:120:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8423:18;;;;:30;;8446:6;8423:22;:30::i;:::-;8402:18;;;:51;8489:23;;;;:39;;8517:10;8489:27;:39::i;:::-;8463:23;;;:65;8544:43;;;;;;;;-1:-1:-1;;;;;8544:43:10;;;;;;;;;;;;;8606:5;:18;;;8626:5;:23;;;8598:52;;;;;;8006:651;;;;;;:::o;1687:100:6:-;1737:7;1687:100;:::o;1793:144::-;1921:9;1793:144::o;891:473:0:-;-1:-1:-1;;;;;1052:22:0;;;;;;:14;:22;;;;;;;;;1021:18;:26;;;;;;;1079:6;;1021:54;;:26;:30;:54::i;:::-;:64;;1000:133;;;;;-1:-1:-1;;;1000:133:0;;;;;;;;;;;;-1:-1:-1;;;1000:133:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;1172:26:0;;;;;;:18;:26;;;;;;:38;;1203:6;1172:30;:38::i;:::-;-1:-1:-1;;;;;1143:26:0;;;;;;;:18;:26;;;;;;:67;;;;1288:26;;1258:2;;1143:26;1288:8;;;1303:6;;1143:26;1288;1143;1288;1303:6;1288:8;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1272:42;;;1332:4;1324:33;;;;;-1:-1:-1;;;1324:33:0;;;;;;;;;;;;-1:-1:-1;;;1324:33:0;;;;;;;;;;;;;;;891:473;;;;;:::o;1711:224:3:-;1767:7;1879:4;1910:1;1895:12;:16;1885:27;1862:51;;;;;;-1:-1:-1;;;;;1862:51:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;1852:62;;;;;;1827:101;;1808:120;;1711:224;;;:::o;2733:579:10:-;-1:-1:-1;;;;;2878:15:10;;2833:7;2878:15;;;:6;:15;;;;;2911:19;;2903:50;;;;;-1:-1:-1;;;2903:50:10;;;;;;;;;;;;-1:-1:-1;;;2903:50:10;;;;;;;;;;;;;;;2963:18;2996:142;3043:5;:19;;;3080:5;:19;;;3117:7;2996:29;:142::i;:::-;-1:-1:-1;;;;;3158:34:10;;;;;;:22;;;:34;;;;;;2963:175;;-1:-1:-1;3158:34:10;;3157:35;3149:77;;;;;-1:-1:-1;;;3149:77:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3236:34:10;;;;;;:22;;;;:34;;;;;;:41;;-1:-1:-1;;3236:41:10;3273:4;3236:41;;;3259:10;-1:-1:-1;2733:579:10;;;;:::o;1568:137:3:-;1694:4;1692:1;1676:17;;;;:22;;1568:137::o;2941:228:4:-;3112:50;3128:10;3148:4;3155:6;3112:15;:50::i;1486:121:5:-;-1:-1:-1;1573:7:5;;1486:121::o;5642:414:10:-;5731:4;5747:18;5768:25;5785:7;5768:16;:25::i;:::-;5747:46;;5815:10;5806:6;:19;5803:36;;;5834:5;5827:12;;;;;5803:36;-1:-1:-1;;;;;5894:15:10;;5872:19;5894:15;;;:6;:15;;;;;5940:18;;;;:30;;5963:6;5940:22;:30::i;:::-;5919:18;;;:51;5985:43;;;;;;;;-1:-1:-1;;;;;5985:43:10;;;;;;;;;;;;;-1:-1:-1;6045:4:10;;5642:414;-1:-1:-1;;;;5642:414:10:o;1903:279:0:-;-1:-1:-1;;;;;2007:23:0;;;;;;:14;:23;;;;;;:35;;2035:6;2007:27;:35::i;:::-;-1:-1:-1;;;;;1981:23:0;;;;;;:14;:23;;;;;;;;:61;;;2073:18;:27;;;;;;:54;;2052:123;;;;;-1:-1:-1;;;2052:123:0;;;;;;;;;;;;-1:-1:-1;;;2052:123:0;;;;;;;;;;;;;;3300:174:4;3419:48;3443:4;3450:8;3460:6;3419:15;:48::i;2188:224:0:-;-1:-1:-1;;;;;2274:23:0;;;;;;:14;:23;;;;;;:33;-1:-1:-1;2274:33:0;2266:68;;;;;-1:-1:-1;;;2266:68:0;;;;;;;;;;;;-1:-1:-1;;;2266:68:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;2370:23:0;;;;;;:14;:23;;;;;;:35;;2398:6;2370:27;:35::i;:::-;-1:-1:-1;;;;;2344:23:0;;;;;;;:14;:23;;;;;:61;;;;-1:-1:-1;2188:224:0:o;1540:196::-;1656:25;1664:4;1670:2;1674:6;1656:7;:25::i;:::-;1696:33;;;-1:-1:-1;;;;;1696:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;1540:196;;;:::o;3713:272:20:-;3799:7;3833:12;3826:5;3818:28;;;;-1:-1:-1;;;3818:28:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3856:9;3872:1;3868;:5;;;;;;;3713:272;-1:-1:-1;;;;;3713:272:20:o;5745:126:14:-;5802:7;5828:36;5852:10;5859:2;5852:10;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5852:10:14;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5852:10:14;;;;;;;;;;;;;;;;;;-1:-1:-1;5852:10:14;;-1:-1:-1;;5852:10:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5852:10:14;5835:28;;;5852:10;5835:28;;;;;;;;;;;;;;;;;;;;;;;5828:36;;5835:28;;;;5828:36;;;;;5835:28;5828:36;;;;;;;;;;;-1:-1:-1;;5828:36:14;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5828:36:14;;;;;;;;;;;;;;;;;;-1:-1:-1;5828:36:14;;-1:-1:-1;;5828:36:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5828:36:14;;5745:126;-1:-1:-1;;5745:126:14:o;575:1303:8:-;661:18;;:::i;:::-;712:12;;748:1;776:19;798;712:5;748:1;815;798:11;:19::i;:::-;776:41;;831:6;838:1;831:9;;;;;;;;;;;;-1:-1:-1;;;;;;831:9:8;:17;:38;;;;;852:6;859:1;852:9;;;;;;;;;;;;;-1:-1:-1;;;;;;852:9:8;-1:-1:-1;;;852:17:8;831:38;827:82;;;891:3;897:1;891:7;885:13;;827:82;937:3;919:15;;1004:44;:30;:5;937:3;1021:12;;;1004:11;:30::i;:::-;:42;:44::i;:::-;951:97;;;;1065:9;1077:1;1065:13;1058:20;;;;1094:9;1089:428;1113:9;1109:1;:13;1089:428;;;1150:2;1143:9;;;;1226:26;1254:20;1294:44;:30;1306:3;1320;1311:6;:12;1294:5;:11;;:30;;;;;:::i;:44::-;1361:84;1353:136;;;;1361:127;1353:136;;-1:-1:-1;;1398:1:8;1124:3;1089:428;;;-1:-1:-1;1577:294:8;;;;;;;;;1545:3;;1577:294;1623:31;:17;:5;1526:16;1638:1;1623:11;:17::i;:::-;:29;:31::i;:::-;1577:294;;;;;;1679:40;1691:7;1711;1700:8;:18;1679:5;:11;;:40;;;;;:::i;:::-;1577:294;;;;1744:44;:5;1756:8;1766:21;;;-1:-1:-1;;1766:21:8;1744:11;:44::i;:::-;1577:294;;;;1823:32;:18;:5;1839:1;1823:15;:18::i;:32::-;1577:294;;;;1558:313;575:1303;-1:-1:-1;;;;;;;;;575:1303:8:o;1683:495:9:-;1863:7;1883:24;1909:20;1945:59;1976:6;1984:19;1945:30;:59::i;:::-;1882:122;;;;2038:10;2022:12;:26;2014:54;;;;;-1:-1:-1;;;2014:54:9;;;;;;;;;;;;-1:-1:-1;;;2014:54:9;;;;;;;;;;;;;;;2106:10;2086:16;:30;;2078:60;;;;;-1:-1:-1;;;2078:60:9;;;;;;;;;;;;-1:-1:-1;;;2078:60:9;;;;;;;;;;;;;;;-1:-1:-1;2155:16:9;1683:495;-1:-1:-1;;;;;1683:495:9:o;9417:625:10:-;-1:-1:-1;;;;;9560:18:10;;;9535:22;9560:18;;;:6;:18;;;;;;9613;;;;;;;9650:22;;9642:53;;;;;-1:-1:-1;;;9642:53:10;;;;;;;;;;;;-1:-1:-1;;;9642:53:10;;;;;;;;;;;;;;;9713:22;;9705:53;;;;;-1:-1:-1;;;9705:53:10;;;;;;;;;;;;-1:-1:-1;;;9705:53:10;;;;;;;;;;;;;;;9880:15;;;;:27;;9900:6;9880:19;:27::i;:::-;9862:15;;;;:45;;;;9935:15;;;:27;;9955:6;9935:19;:27::i;:::-;9917:15;;;:45;9978:57;;;;;;;;;;;;;;-1:-1:-1;;;;;9978:57:10;;;;;;;;;;;;;;;;;;;9417:625;;;;;;:::o;4975:243::-;-1:-1:-1;;;;;5083:15:10;;5061:19;5083:15;;;:6;:15;;;;;5127:16;;;;:28;;5148:6;5127:20;:28::i;:::-;5108:16;;;:47;5170:41;;;;;;;;-1:-1:-1;;;;;5170:41:10;;;;;;;;;;;;;4975:243;;;:::o;2081:449:3:-;2287:27;2299:14;2287:11;:27::i;:::-;2275:9;;;:39;;;2339:29;;:14;;:18;:29::i;:::-;2324:12;;;:44;;;2461:9;;;;2383:140;;;;;;;;;;;;;;;;;;;;2414:7;;2383:140;;;;;;;;;;2081:449;;;;:::o;5224:412:10:-;5311:4;5327:22;5352:23;5367:7;5352:14;:23::i;:::-;5327:48;;5405:6;5388:14;:23;5385:40;;;5420:5;5413:12;;;;;5385:40;-1:-1:-1;;;;;5480:15:10;;5458:19;5480:15;;;:6;:15;;;;;5524:16;;;;:28;;5545:6;5524:20;:28::i;:::-;5505:16;;;:47;5567:41;;;;;;;;-1:-1:-1;;;;;5567:41:10;;;;;;;;;;;;;-1:-1:-1;5625:4:10;;5224:412;-1:-1:-1;;;;5224:412:10:o;7100:266::-;-1:-1:-1;;;;;7195:15:10;;7173:19;7195:15;;;:6;:15;;;;;7235:12;;;;:24;;7252:6;7235:16;:24::i;:::-;7220:12;;;:39;7288:16;;;;:28;;7309:6;7288:20;:28::i;:::-;7269:16;;;:47;7331:28;;;;;;;;-1:-1:-1;;;;;7331:28:10;;;;;;;;;;;;;7100:266;;;:::o;3480:146:4:-;3590:29;3602:8;3612:6;3590:11;:29::i;3175:119::-;3253:34;3273:4;3280:6;3253:11;:34::i;:::-;3175:119;:::o;6244:272:10:-;-1:-1:-1;;;;;6340:15:10;;6318:19;6340:15;;;:6;:15;;;;;6386:18;;;;:30;;6409:6;6386:22;:30::i;:::-;6365:18;;;:51;6441:12;;;;:24;;6458:6;6441:16;:24::i;:::-;6426:12;;;:39;6480:29;;;;;;;;-1:-1:-1;;;;;6480:29:10;;;;;;;;;;;;;6244:272;;;:::o;8663:748::-;-1:-1:-1;;;;;8800:15:10;;8750:7;8800:15;;;:6;:15;;;;;8833:19;;8750:7;;8800:15;8825:50;;;;;-1:-1:-1;;;8825:50:10;;;;;;;;;;;;-1:-1:-1;;;8825:50:10;;;;;;;;;;;;;;;8886:18;8907:36;8916:5;:18;;;8936:6;8907:8;:36::i;:::-;8886:57;;8954:28;8985:76;9005:5;:23;;;9030:10;9042:5;:18;;;8985:19;:76::i;:::-;8954:107;;9071:22;9096:55;9105:5;:23;;;9130:20;9096:8;:55::i;:::-;9183:18;;;;9071:80;;-1:-1:-1;9183:34:10;;9206:10;9183:22;:34::i;:::-;9162:18;;;:55;9253:23;;;;:43;;9281:14;9253:27;:43::i;:::-;9227:23;;;:69;9312:47;;;;;;;;-1:-1:-1;;;;;9312:47:10;;;;;;;;;;;;;9377:10;;;;-1:-1:-1;8663:748:10;;-1:-1:-1;;;;;8663:748:10:o;10048:464::-;-1:-1:-1;;;;;10152:15:10;;10130:19;10152:15;;;:6;:15;;;;;10185:19;;10177:50;;;;;-1:-1:-1;;;10177:50:10;;;;;;;;;;;;-1:-1:-1;;;10177:50:10;;;;;;;;;;;;;;;10238:43;10265:7;10274:6;10238:26;:43::i;3318:610::-;-1:-1:-1;;;;;3531:15:10;;3490:7;3531:15;;;:6;:15;;;;;3564:19;;3556:50;;;;;-1:-1:-1;;;3556:50:10;;;;;;;;;;;;-1:-1:-1;;;3556:50:10;;;;;;;;;;;;;;;3617:18;3638:116;3681:13;3708;3735:9;3638:29;:116::i;:::-;-1:-1:-1;;;;;3774:34:10;;;;;;:22;;;:34;;;;;;3617:137;;-1:-1:-1;3774:34:10;;3773:35;3765:77;;;;;-1:-1:-1;;;3765:77:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3852:34:10;;;;;;:22;;;;:34;;;;;;:41;;-1:-1:-1;;3852:41:10;3889:4;3852:41;;;3875:10;-1:-1:-1;3318:610:10;;;;;;:::o;269:481:11:-;419:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;392:151;;;;;349:7;;580:101;392:151;457:4;483;580:15;:101::i;:::-;553:128;;-1:-1:-1;553:128:11;-1:-1:-1;698:45:11;709:33;553:128;;709:21;:33::i;:::-;698:10;:45::i;:::-;691:52;269:481;-1:-1:-1;;;;;269:481:11:o;6062:176:10:-;-1:-1:-1;;;;;6163:15:10;;6122:7;6163:15;;;:6;:15;;;;;6212:18;;;;6195:12;;;;:36;;:16;:36::i;10387:924:15:-;10474:16;10506:12;10502:55;;-1:-1:-1;10534:12:15;;;;;;;;;-1:-1:-1;10534:12:15;;;;10502:55;10578:16;;;10612:13;;;:38;;;;;10646:4;10629:6;:13;:21;;10612:38;10604:70;;;;;-1:-1:-1;;;10604:70:15;;;;;;;;;;;;-1:-1:-1;;;10604:70:15;;;;;;;;;;;;;;;10811:4;10805:11;10798:18;;10860:7;10855:2;10850:3;10846:12;10842:26;10836:4;10829:40;10894:7;10889:3;10882:20;11021:6;11013;11009:19;11004:3;11000:29;11097:6;11092:2;11084:6;11080:15;11076:28;11141:7;11136:3;11132:17;11043:252;11172:3;11167;11164:12;11043:252;;;11276:3;11270:10;11263:4;11258:3;11254:14;11247:34;11211:2;11206:3;11202:12;11195:19;;11043:252;;;11047:116;;;10694:611;;;;;;:::o;1949:424:14:-;2010:7;2019;2038:14;2055:29;2081:2;2055:25;:29::i;:::-;2038:46;-1:-1:-1;2099:13:14;;;2095:68;;2136:1;2145:2;2148:1;2145:5;;;;;;;;;;;;2128:24;;-1:-1:-1;2145:5:14;;;-1:-1:-1;2128:24:14;;-1:-1:-1;2128:24:14;2095:68;2192:8;2188:1;:12;2176:24;;:2;:9;:24;2172:78;;;-1:-1:-1;;2237:1:14;2216:23;;;;;;;2172:78;2259:15;2277:53;2289:40;2307:21;:2;2316:1;2307:21;;;:8;:21::i;:::-;2289:17;:40::i;2277:53::-;2340:26;;;;;-1:-1:-1;2259:71:14;;-1:-1:-1;;1949:424:14;;;;:::o;4424:268::-;4485:7;4504:15;4535:6;4530:131;4551:2;:9;4547:1;:13;4530:131;;;4641:1;4645;4641:5;4628:2;:9;:19;4623:1;:25;4617:1;:32;4607:2;4610:1;4607:5;;;;;;;;;;;;;;4601:49;4591:59;;;;;4562:3;;4530:131;;;-1:-1:-1;4678:7:14;4424:268;-1:-1:-1;;4424:268:14:o;4934:180::-;5007:12;5031:14;5048:19;5062:4;5048:2;:9;:13;;:19;;;;:::i;:::-;5031:36;-1:-1:-1;5085:22:14;:2;5031:36;5102:4;5085:8;:22::i;436:1241:9:-;570:17;589:16;620:15;639:20;:6;:18;:20::i;:::-;617:42;;;669:17;689:20;698:7;707:1;689:8;:20::i;:::-;669:40;-1:-1:-1;719:27:9;756:18;;784:708;808:9;804:1;:13;784:708;;;838:17;858:30;:6;886:1;858:27;:30::i;:::-;838:50;;906:14;:21;931:1;906:26;902:165;;;969:26;:4;:24;:26::i;:::-;1017:21;;952:43;;-1:-1:-1;1017:25:9;1013:39;;1044:8;;;1013:39;1098:19;-1:-1:-1;;;;;1084:33:9;:10;-1:-1:-1;;;;;1084:33:9;;1080:402;;1137:25;1165:18;:4;:16;:18::i;:::-;1137:46;;1226:12;:19;1249:2;1226:25;:97;;;;-1:-1:-1;;;;;;1275:48:9;;:25;:12;1298:1;1275:22;:25::i;:::-;-1:-1:-1;;;;;1275:48:9;;1226:97;1201:267;;;1376:19;:4;:17;:19::i;:::-;1364:31;;;;1430:19;1417:32;;1201:267;1080:402;;784:708;;819:3;;784:708;;;;1523:19;-1:-1:-1;;;;;1509:33:9;:10;-1:-1:-1;;;;;1509:33:9;;1501:62;;;;;-1:-1:-1;;;1501:62:9;;;;;;;;;;;;-1:-1:-1;;;1501:62:9;;;;;;;;;;;;;;;1605:1;1581:14;:21;:25;1573:48;;;;;-1:-1:-1;;;1573:48:9;;;;;;;;;;;;-1:-1:-1;;;1573:48:9;;;;;;;;;;;;;;;1642:28;:14;:26;:28::i;:::-;1631:39;;436:1241;;;;;;;;;:::o;7835:370:21:-;-1:-1:-1;;;;;7918:21:21;;7910:65;;;;;-1:-1:-1;;;7910:65:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;7986:49;8015:1;8019:7;8028:6;7986:20;:49::i;:::-;8061:12;;:24;;8078:6;8061:16;:24::i;:::-;8046:12;:39;-1:-1:-1;;;;;8116:18:21;;:9;:18;;;;;;;;;;;:30;;8139:6;8116:22;:30::i;:::-;-1:-1:-1;;;;;8095:18:21;;:9;:18;;;;;;;;;;;:51;;;;8161:37;;;;;;;8095:18;;:9;;8161:37;;;;;;;;;;7835:370;;:::o;8524:410::-;-1:-1:-1;;;;;8607:21:21;;8599:67;;;;-1:-1:-1;;;8599:67:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8677:49;8698:7;8715:1;8719:6;8677:20;:49::i;:::-;8758:68;8781:6;8758:68;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;8758:18:21;;:9;:18;;;;;;;;;;;;:68;:22;:68::i;:::-;-1:-1:-1;;;;;8737:18:21;;:9;:18;;;;;;;;;;:89;8851:12;;:24;;8868:6;8851:16;:24::i;:::-;8836:12;:39;8890:37;;;;;;;;8916:1;;-1:-1:-1;;;;;8890:37:21;;;;;;;;;;;;8524:410;;:::o;722:242:13:-;829:7;;-1:-1:-1;;865:5:13;:10;857:41;;;;;-1:-1:-1;;;857:41:13;;;;;;;;;;;;-1:-1:-1;;;857:41:13;;;;;;;;;;;;;;;915:42;935:5;942:2;946;489:1;-1:-1:-1;;915:19:13;:42::i;:::-;908:49;;;;722:242;;;;;;:::o;1249:200::-;1415:27;;;1396:1;1392:5;;;;1382:1;:16;1415:27;;-1:-1:-1;;;;;;1415:27:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1249:200::o;755:158:11:-;819:7;861:43;888:14;895:6;888:14;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;888:14:11;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;888:14:11;;;;;;;;;;;;;;;;;;-1:-1:-1;888:14:11;;-1:-1:-1;;888:14:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;888:14:11;871:32;;;888:14;871:32;;;;;;;;;;;;;;;;;;;;;;;861:43;;871:32;;;;861:43;;;;;871:32;861:43;;;;;;;;;;;-1:-1:-1;;861:43:11;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;861:43:11;;;;;;;;;;;;;;;;;;-1:-1:-1;861:43:11;;-1:-1:-1;;861:43:11;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;861:43:11;;;-1:-1:-1;;;;;853:52:11;;755:158;-1:-1:-1;;;755:158:11:o;1094:437:14:-;1172:5;1199;1205:1;1199:8;;;;;;;;;;;;;;;1193:15;:23;1189:94;;;-1:-1:-1;1239:1:14;1232:8;;1189:94;1302:5;1308:1;1302:8;;;;;;;;;;;;;;;1315:4;1296:23;1292:94;;;-1:-1:-1;1342:1:14;1335:8;;1292:94;1405:5;1411:1;1405:8;;;;;;;;;;;;;;;1418:4;1399:23;1395:94;;;-1:-1:-1;1445:1:14;1438:8;;1395:94;-1:-1:-1;1506:1:14;1094:437;;;:::o;2590:278::-;2657:12;2681:22;2716:2;:9;2706:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2706:20:14;;2681:45;;2742:6;2737:98;2758:2;:9;2754:1;:13;2737:98;;;2819:2;2822:1;2819:5;;;;;;;;;;;;;;;;2788:9;2814:1;2810;2798:2;:9;:13;:17;2788:28;;;;;;;;;;;:36;-1:-1:-1;;;;;2788:36:14;;;;;;;;-1:-1:-1;2769:3:14;;2737:98;;2330:160:16;2390:7;2423:2;2417;:8;;2409:50;;;;;-1:-1:-1;;;2409:50:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2476:7:16;;;2330:160::o;14039:987:14:-;14128:12;14152:22;14184:14;14236:18;14248:5;14236:11;:18::i;:::-;14209:45;;-1:-1:-1;14209:45:14;-1:-1:-1;;;14272:29:14;;;14264:76;;;;-1:-1:-1;;;14264:76:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14367:6;14358;:15;14350:45;;;;;-1:-1:-1;;;14350:45:14;;;;;;;;;;;;-1:-1:-1;;;14350:45:14;;;;;;;;;;;;;;;14406:23;14440:12;14484:1;:18;;14440:12;14513:278;14539:6;14534:2;:11;14513:278;;;14581:44;14593:7;14617;14602:5;:12;:22;14581:5;:11;;:44;;;;;:::i;:::-;14568:57;;14646:33;14668:10;14646:21;:33::i;:::-;14639:40;;-1:-1:-1;;14701:4:14;:19;;14693:58;;;;;-1:-1:-1;;;14693:58:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;14765:15;;;;14547:5;;14513:278;;;;14814:44;14826:7;14850;14835:5;:12;:22;14814:5;:11;;:44;;;;;:::i;:::-;14801:57;;14875:33;14897:10;14875:21;:33::i;:::-;14868:40;;-1:-1:-1;;14926:4:14;:19;;14918:58;;;;;-1:-1:-1;;;14918:58:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;14993:26;:5;15005:7;15014:4;14993:11;:26::i;:::-;14986:33;14039:987;-1:-1:-1;;;;;;;;14039:987:14:o;16123:308::-;16197:12;16257:18;16225:28;:7;16248:1;16251;16225:22;:28::i;:::-;:50;16221:93;;-1:-1:-1;16291:12:14;;;;;;;;;-1:-1:-1;16291:12:14;;;;16221:93;16323:21;16347:20;:7;16361:2;16365:1;16347:13;:20::i;:::-;16323:44;;16384:40;16398:2;16402:21;16414:8;16402:11;:21::i;:::-;16384:7;;:40;:13;:40::i;16706:1974::-;16772:12;16796:16;16821:7;16829:1;16821:10;;;;;;;;;;;;17098:14;;16821:10;;;;;;-1:-1:-1;17093:1:14;17080:14;;16815:17;17080:32;;17076:75;;-1:-1:-1;;17128:12:14;;;;;;;;;-1:-1:-1;17128:12:14;;;;17076:75;17171:7;17179:1;17171:10;;;;;;;;;;;;;;17161:1413;;17220:1;17207:10;:14;;;17203:65;;;-1:-1:-1;;17241:12:14;;;;;;;;;-1:-1:-1;17241:12:14;;;;17203:65;17281:19;17309:7;17317:2;17309:11;;;;;;;;;;;;;;;-1:-1:-1;;;17497:14:14;;17303:18;17482:29;;;;;:77;;;17516:11;17531:4;17516:19;;:42;;;;;17539:11;17554:4;17539:19;;17516:42;17478:128;;;17579:12;;;;;;;;;;;;;;;;;;17478:128;17626:30;:7;17640:2;17644:11;17626:13;:30::i;:::-;17619:37;;;;;;17161:1413;17687:12;17702:28;:7;17725:1;17728;17702:22;:28::i;:::-;17687:43;;17777:22;17769:4;:30;17765:799;;;17963:7;17971:2;17963:11;;;;;;;;;;;;;;;17979:4;17957:26;;;:119;;-1:-1:-1;18030:14:14;;18056:20;;18007:45;;18030:7;;-1:-1:-1;;18030:18:14;18047:1;18007:22;:45::i;:::-;:69;;17957:119;17953:178;;;18100:12;;;;;;;;;;;;;;;;;;17953:178;18155:21;:7;18169:2;18173;18155:13;:21::i;17765:799::-;18228:22;18220:4;:30;18216:348;;;18413:7;18438:1;18421:7;:14;:18;18413:27;;;;;;;;;;;;;;;18445:4;18407:42;18403:101;;18473:12;;;;;;;;;;;;;;;;;;18403:101;18528:21;:7;18542:2;18546;18528:13;:21::i;18216:348::-;17161:1413;-1:-1:-1;;18583:12:14;;;;;;;;;-1:-1:-1;18583:12:14;;16706:1974;;;:::o;11317:422:15:-;11394:7;11439:2;11430:11;;11459:18;;;:48;;;;;11498:9;11481:6;:13;:26;;11459:48;11451:94;;;;-1:-1:-1;;;11451:94:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;11633:30:15;11649:4;11633:30;11627:37;-1:-1:-1;;;11623:71:15;;;11317:422::o;15604:246:14:-;15671:6;15689:21;15713:23;15728:7;15713:14;:23::i;:::-;15689:47;;15746:21;15770:27;15788:8;15770:17;:27::i;:::-;15746:51;;15821:21;15833:8;15821:11;:21::i;7756:358:12:-;7902:7;7911;7966:10;7978;7990;8004:31;8011:2;8015;8019;8023:1;8026:3;8031;8004:6;:31::i;:::-;7965:70;;;;;;8082:25;8091:2;8095;8099;8103:3;8082:8;:25::i;:::-;8075:32;;;;;;;7756:358;;;;;;;;:::o;13092:582:14:-;13168:7;13208:1;13191:7;:14;:18;13187:67;;;-1:-1:-1;;;13225:18:14;;13187:67;13263:24;13290:36;13304:1;13324;13307:7;:14;:18;13290:7;:13;;:36;;;;;:::i;:::-;13263:63;;13337:22;13369:27;13446:24;13458:11;13446;:24::i;:::-;13406:64;;-1:-1:-1;13406:64:14;-1:-1:-1;;;13485:29:14;;13481:78;;;-1:-1:-1;;13530:18:14;;;;;;;13481:78;13623:44;:5;:44;;-1:-1:-1;;13092:582:14;;;:::o;16452:337:15:-;16547:14;16585:16;;;16619:13;;;:38;;;;;16653:4;16636:6;:13;:21;;16619:38;16611:70;;;;;-1:-1:-1;;;16611:70:15;;;;;;;;;;;;-1:-1:-1;;;16611:70:15;;;;;;;;;;;;;;;-1:-1:-1;;16735:28:15;;16751:2;16735:28;16725:48;;16701:82::o;15261:126:14:-;15330:12;15361:19;:7;15375:1;15378;15361:13;:19::i;12601:823:12:-;12805:7;;;12930;12926:57;;-1:-1:-1;12961:2:12;;-1:-1:-1;12965:2:12;;-1:-1:-1;12969:2:12;12953:19;;12926:57;13013:2;12993:17;;13086:1;13134:255;13141:14;;13134:255;;13188:1;13176:13;;13175:20;13171:109;;13230:35;13237:2;13241;13245;13249;13253;13257;13261:3;13230:6;:35::i;:::-;13215:50;;-1:-1:-1;13215:50:12;-1:-1:-1;13215:50:12;-1:-1:-1;13171:109:12;13317:1;13305:9;:13;13293:25;;13347:31;13357:2;13361;13365;13369:3;13374;13347:9;:31::i;:::-;13332:46;;-1:-1:-1;13332:46:12;-1:-1:-1;13332:46:12;-1:-1:-1;13134:255:12;;;13406:2;;-1:-1:-1;13410:2:12;-1:-1:-1;13414:2:12;-1:-1:-1;;12601:823:12;;;;;;;;;;;:::o;2944:377::-;3072:7;3081;3100:12;3115:15;3122:2;3126:3;3115:6;:15::i;:::-;3100:30;;3140:13;3175:3;3156:23;;;;;3169:4;3163;3156:23;3140:39;;3189:10;3220:3;3202:22;;;;;3213:5;3209:2;3202:22;3189:35;;3234:10;3284:3;3247:41;;;;;3278:3;3258:24;;;;;3271:5;3265:4;3258:24;3254:2;3247:41;3307:2;;;;-1:-1:-1;2944:377:12;;-1:-1:-1;;;;;;;;2944:377:12:o;8501:2019::-;8730:7;;;8808:8;;:20;;;;-1:-1:-1;8820:8:12;;8808:20;8804:48;;;-1:-1:-1;8838:3:12;;-1:-1:-1;8843:3:12;;-1:-1:-1;8848:3:12;8830:22;;8804:48;8866:8;;:20;;;;-1:-1:-1;8878:8:12;;8866:20;8862:48;;;-1:-1:-1;8896:3:12;;-1:-1:-1;8901:3:12;;-1:-1:-1;8906:3:12;8888:22;;8862:48;9058:20;;:::i;:::-;9139:3;9122:21;;;;;9134:3;9129;9122:21;9114:29;;9180:3;;9161:23;;;;9173:5;;9168:3;9161:23;9153:5;;;:31;9219:3;;9202:21;;;;9214:3;9209;9202:21;9194:5;;;:29;9260:3;;9241:23;;;;9253:5;;;;9248:3;9241:23;9233:5;;;:31;9301:163;;;;;;;;;;9339:3;;9320:23;;;;9332:5;;;;9327:3;9320:23;9301:163;;;;9376:3;9357:23;;;;;9369:5;;;;9364:3;9357:23;9301:163;;;;9413:3;9394:23;;;;;9406:5;;9401:3;9394:23;9301:163;;;;9450:3;9431:23;;;;;9443:5;;;;9438:3;9431:23;9301:163;;9592:5;;;;9583;;9301:163;;-1:-1:-1;9583:14:12;;;:32;;-1:-1:-1;9610:5:12;;;;;9601;;;:14;;9583:32;9562:109;;;;;-1:-1:-1;;;9562:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;9682:20;;:::i;:::-;9759:3;9732:31;;;;;9752:5;;9739;;;;9746:11;;;;9732:31;9724:39;;9820:3;;9793:31;;;;9813:5;;;;9800;;;;9807:11;;;;9793:31;9785:5;;;:39;9877:3;;9856:25;;;;9870:5;;;9856:25;9848:5;;;:33;9935:3;;9914:25;;;;9928:5;;9921;;;;9914:25;9906:5;;;:33;9983:10;10043:3;;9996:51;;;;10036:5;;;;10030:11;;:3;;10003:25;;;;10017:5;;;;;10003:25;9996:51;9983:64;;10122:3;10062:64;;;;;10116:3;10079:41;;;;;10110:3;10089:25;;;;;10103:5;;;;10096;;10089:25;10086:1;10079:41;10073:3;:47;10069:2;10062:64;10057:69;;10178:10;10316:3;10203:130;;;;;10294:3;10250:48;;;;;10290:2;10284:3;:8;10278:3;10257:25;;;;;10271:5;;;;10264;;10257:25;10250:48;10227:5;;;;10203:130;10178:155;;10392:3;10348:48;;;;;10386:3;10365:25;;;;;10379:5;;;;;10372;;;10365:25;10359:3;:31;10355:2;10348:48;10343:53;;10430:10;10480:3;10443:41;;;;;10474:3;10457:21;;;;;10469:3;10464;10457:21;10450:5;;10443:41;10502:2;;-1:-1:-1;10506:2:12;;-1:-1:-1;10430:54:12;;-1:-1:-1;;;;8501:2019:12;;;;;;;;;;;;:::o;10807:1479::-;10994:7;;;11072;11068:32;;-1:-1:-1;11089:2:12;;-1:-1:-1;11093:2:12;;-1:-1:-1;11097:2:12;11081:19;;11068:32;11409:9;11436:3;11421:19;;;;;11432:2;11428;11421:19;11409:31;;11457:9;11484:3;11469:19;;;;;11480:2;11476;11469:19;11457:31;;11505:9;11532:3;11517:19;;;;;11528:2;11524;11517:19;11505:31;;11567:9;11609:3;11579:34;;;;;11603:3;11589:18;;;;;11600:1;11596:2;11589:18;11586:1;11579:34;11567:46;;11636:9;11723:3;11660:67;;;;;11717:3;11686:35;;;;;11711:3;11698:17;;;;;11708:1;11705;11698:17;11693:3;11686:35;11680:3;11667:17;;;;;11677:1;11674;11667:17;11660:67;11636:91;;11989:3;11938:55;;;;;11983:3;11970:17;;;;;11980:1;11977;11970:17;11964:3;:23;11958:3;11945:17;;;;;11955:1;11952;11945:17;11938:55;11934:59;;12166:3;12040:139;;;;;12148:3;12119:33;;;;;12142:3;12129:17;;;;;12139:1;12136;12129:17;12126:1;12119:33;12113:3;:39;12095:3;12060:39;;;;;12089:3;12070:23;;;;;12086:1;12080:3;:7;12077:1;12070:23;12067:1;12060:39;12040:139;12036:143;;12248:3;12217:35;;;;;12242:3;12227:19;;;;;12238:2;12234;12227:19;12224:1;12217:35;12271:1;;-1:-1:-1;12274:1:12;;-1:-1:-1;12213:39:12;;-1:-1:-1;;;;10807:1479:12;;;;;;;;;;:::o;747:439::-;811:7;838;;;;;:20;;;855:3;849:2;:9;;838:20;:32;;;;-1:-1:-1;862:8:12;;;838:32;830:59;;;;;-1:-1:-1;;;830:59:12;;;;;;;;;;;;-1:-1:-1;;;830:59:12;;;;;;;;;;;;;;;899:9;937:1;960:3;899:9;992:169;999:7;;992:169;;1030:2;1026:1;:6;;;;;;1022:10;;1059:4;1105:3;1065:44;;;;;1098:3;1082:20;;;;;1092:4;1089:1;1082:20;1076:3;:26;1072:1;1065:44;1143:6;;;1139:10;;;;1046:64;;-1:-1:-1;1046:64:12;;-1:-1:-1;992:169:12;;;-1:-1:-1;1178:1:12;;747:439;-1:-1:-1;;;;;747:439:12:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.6.12;\n\nimport {ERC20} from \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport {ValidateSPV} from \"@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol\";\nimport {TransactionUtils} from \"./TransactionUtils.sol\";\nimport {Issue} from \"./Issue.sol\";\nimport {Redeem} from \"./Redeem.sol\";\nimport {Replace} from \"./Replace.sol\";\nimport {IRelay} from \"./IRelay.sol\";\n\ncontract OneBtc is ERC20, Issue, Redeem, Replace {\n    IRelay public realy;\n\n    constructor(IRelay _relay) public ERC20(\"OneBtc\", \"OneBtc\") {\n        _setupDecimals(8);\n        realy = _relay;\n    }\n\n    function verifyTx(\n        uint32 height,\n        uint256 index,\n        bytes calldata rawTx,\n        bytes calldata header,\n        bytes calldata merkleProof\n    ) private returns (bytes memory) {\n        bytes32 txId = rawTx.hash256();\n        realy.verifyTx(\n            height,\n            index,\n            txId,\n            header,\n            merkleProof,\n            6,\n            true\n        );\n        TransactionUtils.Transaction memory btcTx =\n            TransactionUtils.extractTx(rawTx);\n        require(btcTx.locktime == 0, \"locktime must zero!\");\n        // check version?\n        // btcTx.version\n        return btcTx.vouts;\n    }\n\n    function requestIssue(uint256 amountRequested, address vaultId)\n        external\n        payable\n    {\n        Issue._requestIssue(msg.sender, amountRequested, vaultId, msg.value);\n    }\n\n    function executeIssue(\n        address requester,\n        uint256 issueId,\n        bytes calldata merkleProof,\n        bytes calldata rawTx, // avoid compiler error: stack too deep\n        //bytes calldata _version, bytes calldata _vin, bytes calldata _vout, bytes calldata _locktime,\n        uint32 height,\n        uint256 index,\n        bytes calldata header\n    ) external {\n        bytes memory _vout =\n            verifyTx(height, index, rawTx, header, merkleProof);\n\n        Issue._executeIssue(requester, issueId, _vout);\n    }\n\n    function cancelIssue(address requester, uint256 issueId) external {\n        Issue._cancelIssue(requester, issueId);\n    }\n\n    function requestRedeem(\n        uint256 amountOneBtc,\n        address btcAddress,\n        address vaultId\n    ) external {\n        Redeem._requestRedeem(\n            msg.sender,\n            amountOneBtc,\n            btcAddress,\n            vaultId\n        );\n    }\n\n    function executeRedeem(\n        address requester,\n        uint256 redeemId,\n        bytes calldata merkleProof,\n        bytes calldata rawTx,\n        uint32 height,\n        uint256 index,\n        bytes calldata header\n    ) external {\n        bytes memory _vout =\n            verifyTx(height, index, rawTx, header, merkleProof);\n\n        Redeem._executeRedeem(requester, redeemId, _vout);\n    }\n\n    function cancelRedeem(address requester, uint256 redeemId) external {\n        Redeem._cancelRedeem(requester, redeemId);\n    }\n\n    function lockOneBTC(address from, uint256 amount)\n        internal\n        override(Redeem)\n    {\n        //ERC20(this).transferFrom(from, address(this), amount);\n        ERC20._transfer(msg.sender, address(this), amount);\n    }\n\n    function burnLockedOneBTC(uint256 amount) internal override(Redeem) {\n        ERC20._burn(address(this), amount);\n    }\n\n    function releaseLockedOneBTC(address receiver, uint256 amount)\n        internal\n        override(Redeem)\n    {\n        ERC20._transfer(address(this), receiver, amount);\n    }\n\n    function issueOneBTC(address receiver, uint256 amount)\n        internal\n        override(Issue)\n    {\n        ERC20._mint(receiver, amount);\n    }\n\n    function requestReplace(\n        address payable oldVaultId,\n        uint256 btcAmount,\n        uint256 griefingCollateral\n    ) external payable {\n        Replace._requestReplace(oldVaultId, btcAmount, griefingCollateral);\n    }\n\n    function acceptReplace(\n        address oldVaultId,\n        address newVaultId,\n        uint256 btcAmount,\n        uint256 collateral,\n        uint256 btcPublicKeyX,\n        uint256 btcPublicKeyY\n    ) external payable {\n        Replace._acceptReplace(\n            oldVaultId,\n            newVaultId,\n            btcAmount,\n            collateral,\n            btcPublicKeyX,\n            btcPublicKeyY\n        );\n    }\n\n    function executeReplace(\n        uint256 replaceId,\n        bytes calldata merkleProof,\n        bytes calldata rawTx, // avoid compiler error: stack too deep\n    //bytes calldata _version, bytes calldata _vin, bytes calldata _vout, bytes calldata _locktime,\n        uint32 height,\n        uint256 index,\n        bytes calldata header\n    ) external {\n        bytes memory _vout = verifyTx(height, index, rawTx, header, merkleProof);\n        Replace._executeReplace(replaceId, _vout);\n    }\n}\n",
  "sourcePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol",
  "ast": {
    "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol",
    "exportedSymbols": {
      "OneBtc": [
        1521
      ]
    },
    "id": 1522,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1127,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".12"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:24:4"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 1129,
        "nodeType": "ImportDirective",
        "scope": 1522,
        "sourceUnit": 8507,
        "src": "59:68:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1128,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "67:5:4",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol",
        "file": "@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol",
        "id": 1131,
        "nodeType": "ImportDirective",
        "scope": 1522,
        "sourceUnit": 7708,
        "src": "128:80:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1130,
              "name": "ValidateSPV",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "136:11:4",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/TransactionUtils.sol",
        "file": "./TransactionUtils.sol",
        "id": 1133,
        "nodeType": "ImportDirective",
        "scope": 1522,
        "sourceUnit": 2822,
        "src": "209:56:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1132,
              "name": "TransactionUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "217:16:4",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Issue.sol",
        "file": "./Issue.sol",
        "id": 1135,
        "nodeType": "ImportDirective",
        "scope": 1522,
        "sourceUnit": 1126,
        "src": "266:34:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1134,
              "name": "Issue",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "274:5:4",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Redeem.sol",
        "file": "./Redeem.sol",
        "id": 1137,
        "nodeType": "ImportDirective",
        "scope": 1522,
        "sourceUnit": 2002,
        "src": "301:36:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1136,
              "name": "Redeem",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "309:6:4",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Replace.sol",
        "file": "./Replace.sol",
        "id": 1139,
        "nodeType": "ImportDirective",
        "scope": 1522,
        "sourceUnit": 2571,
        "src": "338:38:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1138,
              "name": "Replace",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "346:7:4",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/IRelay.sol",
        "file": "./IRelay.sol",
        "id": 1141,
        "nodeType": "ImportDirective",
        "scope": 1522,
        "sourceUnit": 503,
        "src": "377:36:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1140,
              "name": "IRelay",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": null,
              "src": "385:6:4",
              "typeDescriptions": {
                "typeIdentifier": null,
                "typeString": null
              }
            },
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1142,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8506,
              "src": "434:5:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$8506",
                "typeString": "contract ERC20"
              }
            },
            "id": 1143,
            "nodeType": "InheritanceSpecifier",
            "src": "434:5:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1144,
              "name": "Issue",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1125,
              "src": "441:5:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Issue_$1125",
                "typeString": "contract Issue"
              }
            },
            "id": 1145,
            "nodeType": "InheritanceSpecifier",
            "src": "441:5:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1146,
              "name": "Redeem",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2001,
              "src": "448:6:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Redeem_$2001",
                "typeString": "contract Redeem"
              }
            },
            "id": 1147,
            "nodeType": "InheritanceSpecifier",
            "src": "448:6:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1148,
              "name": "Replace",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2570,
              "src": "456:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Replace_$2570",
                "typeString": "contract Replace"
              }
            },
            "id": 1149,
            "nodeType": "InheritanceSpecifier",
            "src": "456:7:4"
          }
        ],
        "contractDependencies": [
          255,
          1125,
          2001,
          2570,
          4017,
          7730,
          8506,
          8584
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1521,
        "linearizedBaseContracts": [
          1521,
          2570,
          2001,
          1125,
          4017,
          255,
          8506,
          8584,
          7730
        ],
        "name": "OneBtc",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "2db99b14",
            "id": 1151,
            "mutability": "mutable",
            "name": "realy",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1521,
            "src": "470:19:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IRelay_$502",
              "typeString": "contract IRelay"
            },
            "typeName": {
              "contractScope": null,
              "id": 1150,
              "name": "IRelay",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 502,
              "src": "470:6:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IRelay_$502",
                "typeString": "contract IRelay"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1168,
              "nodeType": "Block",
              "src": "556:58:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "38",
                        "id": 1161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "581:1:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_8_by_1",
                          "typeString": "int_const 8"
                        },
                        "value": "8"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_8_by_1",
                          "typeString": "int_const 8"
                        }
                      ],
                      "id": 1160,
                      "name": "_setupDecimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8494,
                      "src": "566:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint8_$returns$__$",
                        "typeString": "function (uint8)"
                      }
                    },
                    "id": 1162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "566:17:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1163,
                  "nodeType": "ExpressionStatement",
                  "src": "566:17:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1164,
                      "name": "realy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1151,
                      "src": "593:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IRelay_$502",
                        "typeString": "contract IRelay"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1165,
                      "name": "_relay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1153,
                      "src": "601:6:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IRelay_$502",
                        "typeString": "contract IRelay"
                      }
                    },
                    "src": "593:14:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IRelay_$502",
                      "typeString": "contract IRelay"
                    }
                  },
                  "id": 1167,
                  "nodeType": "ExpressionStatement",
                  "src": "593:14:4"
                }
              ]
            },
            "documentation": null,
            "id": 1169,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "4f6e65427463",
                    "id": 1156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "536:8:4",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_1fd20719fd4876338dc1b58e23112af0a156cb9301cea517689d11eee5ace294",
                      "typeString": "literal_string \"OneBtc\""
                    },
                    "value": "OneBtc"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4f6e65427463",
                    "id": 1157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "546:8:4",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_1fd20719fd4876338dc1b58e23112af0a156cb9301cea517689d11eee5ace294",
                      "typeString": "literal_string \"OneBtc\""
                    },
                    "value": "OneBtc"
                  }
                ],
                "id": 1158,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1155,
                  "name": "ERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 8506,
                  "src": "530:5:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20_$8506_$",
                    "typeString": "type(contract ERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "530:25:4"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1153,
                  "mutability": "mutable",
                  "name": "_relay",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1169,
                  "src": "508:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IRelay_$502",
                    "typeString": "contract IRelay"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1152,
                    "name": "IRelay",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 502,
                    "src": "508:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IRelay_$502",
                      "typeString": "contract IRelay"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "507:15:4"
            },
            "returnParameters": {
              "id": 1159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "556:0:4"
            },
            "scope": 1521,
            "src": "496:118:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1222,
              "nodeType": "Block",
              "src": "818:455:4",
              "statements": [
                {
                  "assignments": [
                    1185
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1185,
                      "mutability": "mutable",
                      "name": "txId",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1222,
                      "src": "828:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1184,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "828:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1189,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1186,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1175,
                        "src": "843:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      "id": 1187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hash256",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5699,
                      "src": "843:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 1188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "843:15:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "828:30:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1193,
                        "name": "height",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1171,
                        "src": "896:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1194,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1173,
                        "src": "916:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1195,
                        "name": "txId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1185,
                        "src": "935:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1196,
                        "name": "header",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1177,
                        "src": "953:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1197,
                        "name": "merkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1179,
                        "src": "973:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "36",
                        "id": 1198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "998:1:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_6_by_1",
                          "typeString": "int_const 6"
                        },
                        "value": "6"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 1199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1013:4:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_rational_6_by_1",
                          "typeString": "int_const 6"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1190,
                        "name": "realy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1151,
                        "src": "868:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IRelay_$502",
                          "typeString": "contract IRelay"
                        }
                      },
                      "id": 1192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "verifyTx",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 501,
                      "src": "868:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint32_$_t_uint256_$_t_bytes32_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_uint256_$_t_bool_$returns$_t_bool_$",
                        "typeString": "function (uint32,uint256,bytes32,bytes memory,bytes memory,uint256,bool) view external returns (bool)"
                      }
                    },
                    "id": 1200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "868:159:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1201,
                  "nodeType": "ExpressionStatement",
                  "src": "868:159:4"
                },
                {
                  "assignments": [
                    1205
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1205,
                      "mutability": "mutable",
                      "name": "btcTx",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1222,
                      "src": "1037:41:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Transaction_$2669_memory_ptr",
                        "typeString": "struct TransactionUtils.Transaction"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1204,
                        "name": "TransactionUtils.Transaction",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 2669,
                        "src": "1037:28:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Transaction_$2669_storage_ptr",
                          "typeString": "struct TransactionUtils.Transaction"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1210,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1208,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1175,
                        "src": "1120:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1206,
                        "name": "TransactionUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2821,
                        "src": "1093:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TransactionUtils_$2821_$",
                          "typeString": "type(library TransactionUtils)"
                        }
                      },
                      "id": 1207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "extractTx",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2820,
                      "src": "1093:26:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_struct$_Transaction_$2669_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (struct TransactionUtils.Transaction memory)"
                      }
                    },
                    "id": 1209,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1093:33:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Transaction_$2669_memory_ptr",
                      "typeString": "struct TransactionUtils.Transaction memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1037:89:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "id": 1215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1212,
                            "name": "btcTx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1205,
                            "src": "1144:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Transaction_$2669_memory_ptr",
                              "typeString": "struct TransactionUtils.Transaction memory"
                            }
                          },
                          "id": 1213,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "locktime",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 2668,
                          "src": "1144:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1162:1:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1144:19:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6c6f636b74696d65206d757374207a65726f21",
                        "id": 1216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1165:21:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_10ff5dba225d1e6edbc271fcc680cd8fe21dbff8b21d9ab4700c1fabe6f5c9ba",
                          "typeString": "literal_string \"locktime must zero!\""
                        },
                        "value": "locktime must zero!"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_10ff5dba225d1e6edbc271fcc680cd8fe21dbff8b21d9ab4700c1fabe6f5c9ba",
                          "typeString": "literal_string \"locktime must zero!\""
                        }
                      ],
                      "id": 1211,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1136:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1136:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1218,
                  "nodeType": "ExpressionStatement",
                  "src": "1136:51:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 1219,
                      "name": "btcTx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1205,
                      "src": "1255:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Transaction_$2669_memory_ptr",
                        "typeString": "struct TransactionUtils.Transaction memory"
                      }
                    },
                    "id": 1220,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "vouts",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 2666,
                    "src": "1255:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1183,
                  "id": 1221,
                  "nodeType": "Return",
                  "src": "1248:18:4"
                }
              ]
            },
            "documentation": null,
            "id": 1223,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyTx",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1171,
                  "mutability": "mutable",
                  "name": "height",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1223,
                  "src": "647:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 1170,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "647:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1173,
                  "mutability": "mutable",
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1223,
                  "src": "670:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1172,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "670:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1175,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1223,
                  "src": "693:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1174,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1177,
                  "mutability": "mutable",
                  "name": "header",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1223,
                  "src": "723:21:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1176,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "723:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1179,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1223,
                  "src": "754:26:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1178,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "754:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "637:149:4"
            },
            "returnParameters": {
              "id": 1183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1182,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1223,
                  "src": "804:12:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1181,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "803:14:4"
            },
            "scope": 1521,
            "src": "620:653:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1241,
              "nodeType": "Block",
              "src": "1380:85:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1233,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1410:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1234,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1410:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1235,
                        "name": "amountRequested",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1225,
                        "src": "1422:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1236,
                        "name": "vaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1227,
                        "src": "1439:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1237,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1448:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1238,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1448:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1230,
                        "name": "Issue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1125,
                        "src": "1390:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Issue_$1125_$",
                          "typeString": "type(contract Issue)"
                        }
                      },
                      "id": 1232,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_requestIssue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 836,
                      "src": "1390:19:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_payable_$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address payable,uint256,address,uint256)"
                      }
                    },
                    "id": 1239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1390:68:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1240,
                  "nodeType": "ExpressionStatement",
                  "src": "1390:68:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "77d6b7ca",
            "id": 1242,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestIssue",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1225,
                  "mutability": "mutable",
                  "name": "amountRequested",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1242,
                  "src": "1301:23:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1224,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1301:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1227,
                  "mutability": "mutable",
                  "name": "vaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1242,
                  "src": "1326:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1226,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1326:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1300:42:4"
            },
            "returnParameters": {
              "id": 1229,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1380:0:4"
            },
            "scope": 1521,
            "src": "1279:186:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1277,
              "nodeType": "Block",
              "src": "1847:158:4",
              "statements": [
                {
                  "assignments": [
                    1260
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1260,
                      "mutability": "mutable",
                      "name": "_vout",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1277,
                      "src": "1857:18:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1259,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1857:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1268,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1262,
                        "name": "height",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1252,
                        "src": "1899:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1263,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1254,
                        "src": "1907:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1264,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1250,
                        "src": "1914:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1265,
                        "name": "header",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1256,
                        "src": "1921:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1266,
                        "name": "merkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1248,
                        "src": "1929:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 1261,
                      "name": "verifyTx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1223,
                      "src": "1890:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint32_$_t_uint256_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)"
                      }
                    },
                    "id": 1267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1890:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1857:84:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1272,
                        "name": "requester",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1244,
                        "src": "1972:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1273,
                        "name": "issueId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1246,
                        "src": "1983:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1274,
                        "name": "_vout",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1260,
                        "src": "1992:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1269,
                        "name": "Issue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1125,
                        "src": "1952:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Issue_$1125_$",
                          "typeString": "type(contract Issue)"
                        }
                      },
                      "id": 1271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_executeIssue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1043,
                      "src": "1952:19:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 1275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1952:46:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1276,
                  "nodeType": "ExpressionStatement",
                  "src": "1952:46:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "c50c8214",
            "id": 1278,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "executeIssue",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1244,
                  "mutability": "mutable",
                  "name": "requester",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1278,
                  "src": "1502:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1243,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1502:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1246,
                  "mutability": "mutable",
                  "name": "issueId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1278,
                  "src": "1529:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1245,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1529:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1248,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1278,
                  "src": "1554:26:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1247,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1554:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1250,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1278,
                  "src": "1590:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1249,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1590:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1252,
                  "mutability": "mutable",
                  "name": "height",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1278,
                  "src": "1764:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 1251,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1764:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1254,
                  "mutability": "mutable",
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1278,
                  "src": "1787:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1253,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1787:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1256,
                  "mutability": "mutable",
                  "name": "header",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1278,
                  "src": "1810:21:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1255,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1810:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1492:345:4"
            },
            "returnParameters": {
              "id": 1258,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1847:0:4"
            },
            "scope": 1521,
            "src": "1471:534:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1292,
              "nodeType": "Block",
              "src": "2077:55:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1288,
                        "name": "requester",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1280,
                        "src": "2106:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1289,
                        "name": "issueId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1282,
                        "src": "2117:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1285,
                        "name": "Issue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1125,
                        "src": "2087:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Issue_$1125_$",
                          "typeString": "type(contract Issue)"
                        }
                      },
                      "id": 1287,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_cancelIssue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1124,
                      "src": "2087:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2087:38:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1291,
                  "nodeType": "ExpressionStatement",
                  "src": "2087:38:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d4bcb1e9",
            "id": 1293,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cancelIssue",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1280,
                  "mutability": "mutable",
                  "name": "requester",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1293,
                  "src": "2032:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1279,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2032:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1282,
                  "mutability": "mutable",
                  "name": "issueId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1293,
                  "src": "2051:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1281,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2051:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2031:36:4"
            },
            "returnParameters": {
              "id": 1284,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2077:0:4"
            },
            "scope": 1521,
            "src": "2011:121:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1312,
              "nodeType": "Block",
              "src": "2259:143:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1305,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2304:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2304:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1307,
                        "name": "amountOneBtc",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1295,
                        "src": "2328:12:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1308,
                        "name": "btcAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1297,
                        "src": "2354:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1309,
                        "name": "vaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1299,
                        "src": "2378:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1302,
                        "name": "Redeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2001,
                        "src": "2269:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Redeem_$2001_$",
                          "typeString": "type(contract Redeem)"
                        }
                      },
                      "id": 1304,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_requestRedeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1822,
                      "src": "2269:21:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,uint256,address,address)"
                      }
                    },
                    "id": 1310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2269:126:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1311,
                  "nodeType": "ExpressionStatement",
                  "src": "2269:126:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7d41c86e",
            "id": 1313,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestRedeem",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1295,
                  "mutability": "mutable",
                  "name": "amountOneBtc",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1313,
                  "src": "2170:20:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1294,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2170:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1297,
                  "mutability": "mutable",
                  "name": "btcAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1313,
                  "src": "2200:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1296,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2200:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1299,
                  "mutability": "mutable",
                  "name": "vaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1313,
                  "src": "2228:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1298,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2228:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2160:89:4"
            },
            "returnParameters": {
              "id": 1301,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2259:0:4"
            },
            "scope": 1521,
            "src": "2138:264:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1348,
              "nodeType": "Block",
              "src": "2642:161:4",
              "statements": [
                {
                  "assignments": [
                    1331
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1331,
                      "mutability": "mutable",
                      "name": "_vout",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1348,
                      "src": "2652:18:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1330,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2652:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1339,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1333,
                        "name": "height",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1323,
                        "src": "2694:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1334,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1325,
                        "src": "2702:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1335,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1321,
                        "src": "2709:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1336,
                        "name": "header",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1327,
                        "src": "2716:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1337,
                        "name": "merkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1319,
                        "src": "2724:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 1332,
                      "name": "verifyTx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1223,
                      "src": "2685:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint32_$_t_uint256_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)"
                      }
                    },
                    "id": 1338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2685:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2652:84:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1343,
                        "name": "requester",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1315,
                        "src": "2769:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1344,
                        "name": "redeemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1317,
                        "src": "2780:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1345,
                        "name": "_vout",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1331,
                        "src": "2790:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1340,
                        "name": "Redeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2001,
                        "src": "2747:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Redeem_$2001_$",
                          "typeString": "type(contract Redeem)"
                        }
                      },
                      "id": 1342,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_executeRedeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1913,
                      "src": "2747:21:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 1346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2747:49:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1347,
                  "nodeType": "ExpressionStatement",
                  "src": "2747:49:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "c5387e8f",
            "id": 1349,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "executeRedeem",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1315,
                  "mutability": "mutable",
                  "name": "requester",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1349,
                  "src": "2440:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1314,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2440:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1317,
                  "mutability": "mutable",
                  "name": "redeemId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1349,
                  "src": "2467:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1316,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2467:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1319,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1349,
                  "src": "2493:26:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1318,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2493:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1321,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1349,
                  "src": "2529:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1320,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2529:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1323,
                  "mutability": "mutable",
                  "name": "height",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1349,
                  "src": "2559:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 1322,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2559:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1325,
                  "mutability": "mutable",
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1349,
                  "src": "2582:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1324,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2582:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1327,
                  "mutability": "mutable",
                  "name": "header",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1349,
                  "src": "2605:21:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1326,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2430:202:4"
            },
            "returnParameters": {
              "id": 1329,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2642:0:4"
            },
            "scope": 1521,
            "src": "2408:395:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1363,
              "nodeType": "Block",
              "src": "2877:58:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1359,
                        "name": "requester",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1351,
                        "src": "2908:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1360,
                        "name": "redeemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1353,
                        "src": "2919:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1356,
                        "name": "Redeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2001,
                        "src": "2887:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Redeem_$2001_$",
                          "typeString": "type(contract Redeem)"
                        }
                      },
                      "id": 1358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_cancelRedeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2000,
                      "src": "2887:20:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2887:41:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1362,
                  "nodeType": "ExpressionStatement",
                  "src": "2887:41:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "90336df2",
            "id": 1364,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cancelRedeem",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1351,
                  "mutability": "mutable",
                  "name": "requester",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1364,
                  "src": "2831:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1350,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2831:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1353,
                  "mutability": "mutable",
                  "name": "redeemId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1364,
                  "src": "2850:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1352,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2850:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2830:37:4"
            },
            "returnParameters": {
              "id": 1355,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2877:0:4"
            },
            "scope": 1521,
            "src": "2809:126:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              1601
            ],
            "body": {
              "id": 1385,
              "nodeType": "Block",
              "src": "3037:132:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1376,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3128:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1377,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3128:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1380,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3148:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_OneBtc_$1521",
                              "typeString": "contract OneBtc"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_OneBtc_$1521",
                              "typeString": "contract OneBtc"
                            }
                          ],
                          "id": 1379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3140:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1378,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3140:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 1381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3140:13:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1382,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1368,
                        "src": "3155:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1373,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8506,
                        "src": "3112:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$8506_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 1375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8327,
                      "src": "3112:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 1383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3112:50:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1384,
                  "nodeType": "ExpressionStatement",
                  "src": "3112:50:4"
                }
              ]
            },
            "documentation": null,
            "id": 1386,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "lockOneBTC",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 1371,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 1370,
                  "name": "Redeem",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 2001,
                  "src": "3025:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Redeem_$2001",
                    "typeString": "contract Redeem"
                  }
                }
              ],
              "src": "3016:16:4"
            },
            "parameters": {
              "id": 1369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1366,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1386,
                  "src": "2961:12:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1365,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2961:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1368,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1386,
                  "src": "2975:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1367,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2975:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2960:30:4"
            },
            "returnParameters": {
              "id": 1372,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3037:0:4"
            },
            "scope": 1521,
            "src": "2941:228:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1606
            ],
            "body": {
              "id": 1403,
              "nodeType": "Block",
              "src": "3243:51:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1398,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3273:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_OneBtc_$1521",
                              "typeString": "contract OneBtc"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_OneBtc_$1521",
                              "typeString": "contract OneBtc"
                            }
                          ],
                          "id": 1397,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3265:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1396,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3265:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 1399,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3265:13:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1400,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1388,
                        "src": "3280:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1393,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8506,
                        "src": "3253:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$8506_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 1395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8438,
                      "src": "3253:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1401,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3253:34:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1402,
                  "nodeType": "ExpressionStatement",
                  "src": "3253:34:4"
                }
              ]
            },
            "documentation": null,
            "id": 1404,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burnLockedOneBTC",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 1391,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 1390,
                  "name": "Redeem",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 2001,
                  "src": "3235:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Redeem_$2001",
                    "typeString": "contract Redeem"
                  }
                }
              ],
              "src": "3226:16:4"
            },
            "parameters": {
              "id": 1389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1388,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1404,
                  "src": "3201:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1387,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3201:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3200:16:4"
            },
            "returnParameters": {
              "id": 1392,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3243:0:4"
            },
            "scope": 1521,
            "src": "3175:119:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1613
            ],
            "body": {
              "id": 1424,
              "nodeType": "Block",
              "src": "3409:65:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1418,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3443:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_OneBtc_$1521",
                              "typeString": "contract OneBtc"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_OneBtc_$1521",
                              "typeString": "contract OneBtc"
                            }
                          ],
                          "id": 1417,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3435:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1416,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3435:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 1419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3435:13:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1420,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1406,
                        "src": "3450:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1421,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1408,
                        "src": "3460:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1413,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8506,
                        "src": "3419:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$8506_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 1415,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8327,
                      "src": "3419:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 1422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3419:48:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1423,
                  "nodeType": "ExpressionStatement",
                  "src": "3419:48:4"
                }
              ]
            },
            "documentation": null,
            "id": 1425,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "releaseLockedOneBTC",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 1411,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 1410,
                  "name": "Redeem",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 2001,
                  "src": "3397:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Redeem_$2001",
                    "typeString": "contract Redeem"
                  }
                }
              ],
              "src": "3388:16:4"
            },
            "parameters": {
              "id": 1409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1406,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1425,
                  "src": "3329:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1405,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3329:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1408,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1425,
                  "src": "3347:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1407,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3347:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3328:34:4"
            },
            "returnParameters": {
              "id": 1412,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3409:0:4"
            },
            "scope": 1521,
            "src": "3300:174:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              597
            ],
            "body": {
              "id": 1441,
              "nodeType": "Block",
              "src": "3580:46:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1437,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1427,
                        "src": "3602:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1438,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1429,
                        "src": "3612:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1434,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8506,
                        "src": "3590:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$8506_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 1436,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8382,
                      "src": "3590:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3590:29:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1440,
                  "nodeType": "ExpressionStatement",
                  "src": "3590:29:4"
                }
              ]
            },
            "documentation": null,
            "id": 1442,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "issueOneBTC",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 1432,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 1431,
                  "name": "Issue",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1125,
                  "src": "3569:5:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Issue_$1125",
                    "typeString": "contract Issue"
                  }
                }
              ],
              "src": "3560:15:4"
            },
            "parameters": {
              "id": 1430,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1427,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1442,
                  "src": "3501:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1426,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3501:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1429,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1442,
                  "src": "3519:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1428,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3519:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3500:34:4"
            },
            "returnParameters": {
              "id": 1433,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3580:0:4"
            },
            "scope": 1521,
            "src": "3480:146:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1459,
              "nodeType": "Block",
              "src": "3778:83:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1454,
                        "name": "oldVaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1444,
                        "src": "3812:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1455,
                        "name": "btcAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1446,
                        "src": "3824:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1456,
                        "name": "griefingCollateral",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1448,
                        "src": "3835:18:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1451,
                        "name": "Replace",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2570,
                        "src": "3788:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Replace_$2570_$",
                          "typeString": "type(contract Replace)"
                        }
                      },
                      "id": 1453,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_requestReplace",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2212,
                      "src": "3788:23:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_payable_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address payable,uint256,uint256)"
                      }
                    },
                    "id": 1457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3788:66:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1458,
                  "nodeType": "ExpressionStatement",
                  "src": "3788:66:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "1704b9a6",
            "id": 1460,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestReplace",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1444,
                  "mutability": "mutable",
                  "name": "oldVaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1460,
                  "src": "3665:26:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 1443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3665:15:4",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1446,
                  "mutability": "mutable",
                  "name": "btcAmount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1460,
                  "src": "3701:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1445,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3701:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1448,
                  "mutability": "mutable",
                  "name": "griefingCollateral",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1460,
                  "src": "3728:26:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1447,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3728:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3655:105:4"
            },
            "returnParameters": {
              "id": 1450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3778:0:4"
            },
            "scope": 1521,
            "src": "3632:229:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1486,
              "nodeType": "Block",
              "src": "4086:198:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1478,
                        "name": "oldVaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1462,
                        "src": "4132:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1479,
                        "name": "newVaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1464,
                        "src": "4156:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1480,
                        "name": "btcAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1466,
                        "src": "4180:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1481,
                        "name": "collateral",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1468,
                        "src": "4203:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1482,
                        "name": "btcPublicKeyX",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1470,
                        "src": "4227:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1483,
                        "name": "btcPublicKeyY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1472,
                        "src": "4254:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1475,
                        "name": "Replace",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2570,
                        "src": "4096:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Replace_$2570_$",
                          "typeString": "type(contract Replace)"
                        }
                      },
                      "id": 1477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_acceptReplace",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2484,
                      "src": "4096:22:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 1484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4096:181:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1485,
                  "nodeType": "ExpressionStatement",
                  "src": "4096:181:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "c8c7fa00",
            "id": 1487,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "acceptReplace",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1462,
                  "mutability": "mutable",
                  "name": "oldVaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1487,
                  "src": "3899:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1461,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3899:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1464,
                  "mutability": "mutable",
                  "name": "newVaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1487,
                  "src": "3927:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1463,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3927:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1466,
                  "mutability": "mutable",
                  "name": "btcAmount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1487,
                  "src": "3955:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1465,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3955:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1468,
                  "mutability": "mutable",
                  "name": "collateral",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1487,
                  "src": "3982:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1467,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3982:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1470,
                  "mutability": "mutable",
                  "name": "btcPublicKeyX",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1487,
                  "src": "4010:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1469,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4010:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1472,
                  "mutability": "mutable",
                  "name": "btcPublicKeyY",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1487,
                  "src": "4041:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1471,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4041:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3889:179:4"
            },
            "returnParameters": {
              "id": 1474,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4086:0:4"
            },
            "scope": 1521,
            "src": "3867:417:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1519,
              "nodeType": "Block",
              "src": "4639:140:4",
              "statements": [
                {
                  "assignments": [
                    1503
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1503,
                      "mutability": "mutable",
                      "name": "_vout",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1519,
                      "src": "4649:18:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1502,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4649:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1511,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1505,
                        "name": "height",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1495,
                        "src": "4679:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1506,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1497,
                        "src": "4687:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1507,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1493,
                        "src": "4694:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1508,
                        "name": "header",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1499,
                        "src": "4701:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1509,
                        "name": "merkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1491,
                        "src": "4709:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 1504,
                      "name": "verifyTx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1223,
                      "src": "4670:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint32_$_t_uint256_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)"
                      }
                    },
                    "id": 1510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4670:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4649:72:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1515,
                        "name": "replaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1489,
                        "src": "4755:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1516,
                        "name": "_vout",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1503,
                        "src": "4766:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1512,
                        "name": "Replace",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2570,
                        "src": "4731:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Replace_$2570_$",
                          "typeString": "type(contract Replace)"
                        }
                      },
                      "id": 1514,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_executeReplace",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2569,
                      "src": "4731:23:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,bytes memory)"
                      }
                    },
                    "id": 1517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4731:41:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1518,
                  "nodeType": "ExpressionStatement",
                  "src": "4731:41:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "978f28dd",
            "id": 1520,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "executeReplace",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1500,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1489,
                  "mutability": "mutable",
                  "name": "replaceId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1520,
                  "src": "4323:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1488,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4323:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1491,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1520,
                  "src": "4350:26:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1490,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4350:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1493,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1520,
                  "src": "4386:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1492,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4386:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1495,
                  "mutability": "mutable",
                  "name": "height",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1520,
                  "src": "4556:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 1494,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4556:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1497,
                  "mutability": "mutable",
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1520,
                  "src": "4579:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1496,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4579:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1499,
                  "mutability": "mutable",
                  "name": "header",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1520,
                  "src": "4602:21:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1498,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4602:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4313:316:4"
            },
            "returnParameters": {
              "id": 1501,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4639:0:4"
            },
            "scope": 1521,
            "src": "4290:489:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1522,
        "src": "415:4366:4"
      }
    ],
    "src": "33:4749:4"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol",
      "exportedSymbols": {
        "OneBtc": [
          1521
        ]
      },
      "license": "MIT"
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".12"
          ]
        },
        "id": 1127,
        "name": "PragmaDirective",
        "src": "33:24:4"
      },
      {
        "attributes": {
          "SourceUnit": 8507,
          "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "scope": 1522,
          "symbolAliases": [
            {
              "foreign": {
                "attributes": {
                  "argumentTypes": null,
                  "overloadedDeclarations": [
                    null
                  ],
                  "referencedDeclaration": null,
                  "type": null,
                  "value": "ERC20"
                },
                "id": 1128,
                "name": "Identifier",
                "src": "67:5:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1129,
        "name": "ImportDirective",
        "src": "59:68:4"
      },
      {
        "attributes": {
          "SourceUnit": 7708,
          "absolutePath": "@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol",
          "file": "@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol",
          "scope": 1522,
          "symbolAliases": [
            {
              "foreign": {
                "attributes": {
                  "argumentTypes": null,
                  "overloadedDeclarations": [
                    null
                  ],
                  "referencedDeclaration": null,
                  "type": null,
                  "value": "ValidateSPV"
                },
                "id": 1130,
                "name": "Identifier",
                "src": "136:11:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1131,
        "name": "ImportDirective",
        "src": "128:80:4"
      },
      {
        "attributes": {
          "SourceUnit": 2822,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/TransactionUtils.sol",
          "file": "./TransactionUtils.sol",
          "scope": 1522,
          "symbolAliases": [
            {
              "foreign": {
                "attributes": {
                  "argumentTypes": null,
                  "overloadedDeclarations": [
                    null
                  ],
                  "referencedDeclaration": null,
                  "type": null,
                  "value": "TransactionUtils"
                },
                "id": 1132,
                "name": "Identifier",
                "src": "217:16:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1133,
        "name": "ImportDirective",
        "src": "209:56:4"
      },
      {
        "attributes": {
          "SourceUnit": 1126,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Issue.sol",
          "file": "./Issue.sol",
          "scope": 1522,
          "symbolAliases": [
            {
              "foreign": {
                "attributes": {
                  "argumentTypes": null,
                  "overloadedDeclarations": [
                    null
                  ],
                  "referencedDeclaration": null,
                  "type": null,
                  "value": "Issue"
                },
                "id": 1134,
                "name": "Identifier",
                "src": "274:5:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1135,
        "name": "ImportDirective",
        "src": "266:34:4"
      },
      {
        "attributes": {
          "SourceUnit": 2002,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Redeem.sol",
          "file": "./Redeem.sol",
          "scope": 1522,
          "symbolAliases": [
            {
              "foreign": {
                "attributes": {
                  "argumentTypes": null,
                  "overloadedDeclarations": [
                    null
                  ],
                  "referencedDeclaration": null,
                  "type": null,
                  "value": "Redeem"
                },
                "id": 1136,
                "name": "Identifier",
                "src": "309:6:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1137,
        "name": "ImportDirective",
        "src": "301:36:4"
      },
      {
        "attributes": {
          "SourceUnit": 2571,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Replace.sol",
          "file": "./Replace.sol",
          "scope": 1522,
          "symbolAliases": [
            {
              "foreign": {
                "attributes": {
                  "argumentTypes": null,
                  "overloadedDeclarations": [
                    null
                  ],
                  "referencedDeclaration": null,
                  "type": null,
                  "value": "Replace"
                },
                "id": 1138,
                "name": "Identifier",
                "src": "346:7:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1139,
        "name": "ImportDirective",
        "src": "338:38:4"
      },
      {
        "attributes": {
          "SourceUnit": 503,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/IRelay.sol",
          "file": "./IRelay.sol",
          "scope": 1522,
          "symbolAliases": [
            {
              "foreign": {
                "attributes": {
                  "argumentTypes": null,
                  "overloadedDeclarations": [
                    null
                  ],
                  "referencedDeclaration": null,
                  "type": null,
                  "value": "IRelay"
                },
                "id": 1140,
                "name": "Identifier",
                "src": "385:6:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1141,
        "name": "ImportDirective",
        "src": "377:36:4"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            255,
            1125,
            2001,
            2570,
            4017,
            7730,
            8506,
            8584
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1521,
            2570,
            2001,
            1125,
            4017,
            255,
            8506,
            8584,
            7730
          ],
          "name": "OneBtc",
          "scope": 1522
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20",
                  "referencedDeclaration": 8506,
                  "type": "contract ERC20"
                },
                "id": 1142,
                "name": "UserDefinedTypeName",
                "src": "434:5:4"
              }
            ],
            "id": 1143,
            "name": "InheritanceSpecifier",
            "src": "434:5:4"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Issue",
                  "referencedDeclaration": 1125,
                  "type": "contract Issue"
                },
                "id": 1144,
                "name": "UserDefinedTypeName",
                "src": "441:5:4"
              }
            ],
            "id": 1145,
            "name": "InheritanceSpecifier",
            "src": "441:5:4"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Redeem",
                  "referencedDeclaration": 2001,
                  "type": "contract Redeem"
                },
                "id": 1146,
                "name": "UserDefinedTypeName",
                "src": "448:6:4"
              }
            ],
            "id": 1147,
            "name": "InheritanceSpecifier",
            "src": "448:6:4"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Replace",
                  "referencedDeclaration": 2570,
                  "type": "contract Replace"
                },
                "id": 1148,
                "name": "UserDefinedTypeName",
                "src": "456:7:4"
              }
            ],
            "id": 1149,
            "name": "InheritanceSpecifier",
            "src": "456:7:4"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "2db99b14",
              "mutability": "mutable",
              "name": "realy",
              "overrides": null,
              "scope": 1521,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract IRelay",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "IRelay",
                  "referencedDeclaration": 502,
                  "type": "contract IRelay"
                },
                "id": 1150,
                "name": "UserDefinedTypeName",
                "src": "470:6:4"
              }
            ],
            "id": 1151,
            "name": "VariableDeclaration",
            "src": "470:19:4"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_relay",
                      "overrides": null,
                      "scope": 1169,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "contract IRelay",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "IRelay",
                          "referencedDeclaration": 502,
                          "type": "contract IRelay"
                        },
                        "id": 1152,
                        "name": "UserDefinedTypeName",
                        "src": "508:6:4"
                      }
                    ],
                    "id": 1153,
                    "name": "VariableDeclaration",
                    "src": "508:13:4"
                  }
                ],
                "id": 1154,
                "name": "ParameterList",
                "src": "507:15:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1159,
                "name": "ParameterList",
                "src": "556:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 8506,
                      "type": "type(contract ERC20)",
                      "value": "ERC20"
                    },
                    "id": 1155,
                    "name": "Identifier",
                    "src": "530:5:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "4f6e65427463",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"OneBtc\"",
                      "value": "OneBtc"
                    },
                    "id": 1156,
                    "name": "Literal",
                    "src": "536:8:4"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "4f6e65427463",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"OneBtc\"",
                      "value": "OneBtc"
                    },
                    "id": 1157,
                    "name": "Literal",
                    "src": "546:8:4"
                  }
                ],
                "id": 1158,
                "name": "ModifierInvocation",
                "src": "530:25:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8494,
                              "type": "function (uint8)",
                              "value": "_setupDecimals"
                            },
                            "id": 1160,
                            "name": "Identifier",
                            "src": "566:14:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "38",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 8",
                              "value": "8"
                            },
                            "id": 1161,
                            "name": "Literal",
                            "src": "581:1:4"
                          }
                        ],
                        "id": 1162,
                        "name": "FunctionCall",
                        "src": "566:17:4"
                      }
                    ],
                    "id": 1163,
                    "name": "ExpressionStatement",
                    "src": "566:17:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract IRelay"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1151,
                              "type": "contract IRelay",
                              "value": "realy"
                            },
                            "id": 1164,
                            "name": "Identifier",
                            "src": "593:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1153,
                              "type": "contract IRelay",
                              "value": "_relay"
                            },
                            "id": 1165,
                            "name": "Identifier",
                            "src": "601:6:4"
                          }
                        ],
                        "id": 1166,
                        "name": "Assignment",
                        "src": "593:14:4"
                      }
                    ],
                    "id": 1167,
                    "name": "ExpressionStatement",
                    "src": "593:14:4"
                  }
                ],
                "id": 1168,
                "name": "Block",
                "src": "556:58:4"
              }
            ],
            "id": 1169,
            "name": "FunctionDefinition",
            "src": "496:118:4"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "verifyTx",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "private"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "height",
                      "overrides": null,
                      "scope": 1223,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint32",
                          "type": "uint32"
                        },
                        "id": 1170,
                        "name": "ElementaryTypeName",
                        "src": "647:6:4"
                      }
                    ],
                    "id": 1171,
                    "name": "VariableDeclaration",
                    "src": "647:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "index",
                      "overrides": null,
                      "scope": 1223,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1172,
                        "name": "ElementaryTypeName",
                        "src": "670:7:4"
                      }
                    ],
                    "id": 1173,
                    "name": "VariableDeclaration",
                    "src": "670:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1223,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1174,
                        "name": "ElementaryTypeName",
                        "src": "693:5:4"
                      }
                    ],
                    "id": 1175,
                    "name": "VariableDeclaration",
                    "src": "693:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "header",
                      "overrides": null,
                      "scope": 1223,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1176,
                        "name": "ElementaryTypeName",
                        "src": "723:5:4"
                      }
                    ],
                    "id": 1177,
                    "name": "VariableDeclaration",
                    "src": "723:21:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "merkleProof",
                      "overrides": null,
                      "scope": 1223,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1178,
                        "name": "ElementaryTypeName",
                        "src": "754:5:4"
                      }
                    ],
                    "id": 1179,
                    "name": "VariableDeclaration",
                    "src": "754:26:4"
                  }
                ],
                "id": 1180,
                "name": "ParameterList",
                "src": "637:149:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 1223,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1181,
                        "name": "ElementaryTypeName",
                        "src": "804:5:4"
                      }
                    ],
                    "id": 1182,
                    "name": "VariableDeclaration",
                    "src": "804:12:4"
                  }
                ],
                "id": 1183,
                "name": "ParameterList",
                "src": "803:14:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1185
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "txId",
                          "overrides": null,
                          "scope": 1222,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 1184,
                            "name": "ElementaryTypeName",
                            "src": "828:7:4"
                          }
                        ],
                        "id": 1185,
                        "name": "VariableDeclaration",
                        "src": "828:12:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "hash256",
                              "referencedDeclaration": 5699,
                              "type": "function (bytes memory) pure returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1175,
                                  "type": "bytes calldata",
                                  "value": "rawTx"
                                },
                                "id": 1186,
                                "name": "Identifier",
                                "src": "843:5:4"
                              }
                            ],
                            "id": 1187,
                            "name": "MemberAccess",
                            "src": "843:13:4"
                          }
                        ],
                        "id": 1188,
                        "name": "FunctionCall",
                        "src": "843:15:4"
                      }
                    ],
                    "id": 1189,
                    "name": "VariableDeclarationStatement",
                    "src": "828:30:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                },
                                {
                                  "typeIdentifier": "t_rational_6_by_1",
                                  "typeString": "int_const 6"
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "verifyTx",
                              "referencedDeclaration": 501,
                              "type": "function (uint32,uint256,bytes32,bytes memory,bytes memory,uint256,bool) view external returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1151,
                                  "type": "contract IRelay",
                                  "value": "realy"
                                },
                                "id": 1190,
                                "name": "Identifier",
                                "src": "868:5:4"
                              }
                            ],
                            "id": 1192,
                            "name": "MemberAccess",
                            "src": "868:14:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1171,
                              "type": "uint32",
                              "value": "height"
                            },
                            "id": 1193,
                            "name": "Identifier",
                            "src": "896:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1173,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 1194,
                            "name": "Identifier",
                            "src": "916:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1185,
                              "type": "bytes32",
                              "value": "txId"
                            },
                            "id": 1195,
                            "name": "Identifier",
                            "src": "935:4:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1177,
                              "type": "bytes calldata",
                              "value": "header"
                            },
                            "id": 1196,
                            "name": "Identifier",
                            "src": "953:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1179,
                              "type": "bytes calldata",
                              "value": "merkleProof"
                            },
                            "id": 1197,
                            "name": "Identifier",
                            "src": "973:11:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "36",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 6",
                              "value": "6"
                            },
                            "id": 1198,
                            "name": "Literal",
                            "src": "998:1:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 1199,
                            "name": "Literal",
                            "src": "1013:4:4"
                          }
                        ],
                        "id": 1200,
                        "name": "FunctionCall",
                        "src": "868:159:4"
                      }
                    ],
                    "id": 1201,
                    "name": "ExpressionStatement",
                    "src": "868:159:4"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1205
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "btcTx",
                          "overrides": null,
                          "scope": 1222,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct TransactionUtils.Transaction",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "TransactionUtils.Transaction",
                              "referencedDeclaration": 2669,
                              "type": "struct TransactionUtils.Transaction"
                            },
                            "id": 1204,
                            "name": "UserDefinedTypeName",
                            "src": "1037:28:4"
                          }
                        ],
                        "id": 1205,
                        "name": "VariableDeclaration",
                        "src": "1037:41:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "struct TransactionUtils.Transaction memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "extractTx",
                              "referencedDeclaration": 2820,
                              "type": "function (bytes memory) pure returns (struct TransactionUtils.Transaction memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2821,
                                  "type": "type(library TransactionUtils)",
                                  "value": "TransactionUtils"
                                },
                                "id": 1206,
                                "name": "Identifier",
                                "src": "1093:16:4"
                              }
                            ],
                            "id": 1207,
                            "name": "MemberAccess",
                            "src": "1093:26:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1175,
                              "type": "bytes calldata",
                              "value": "rawTx"
                            },
                            "id": 1208,
                            "name": "Identifier",
                            "src": "1120:5:4"
                          }
                        ],
                        "id": 1209,
                        "name": "FunctionCall",
                        "src": "1093:33:4"
                      }
                    ],
                    "id": 1210,
                    "name": "VariableDeclarationStatement",
                    "src": "1037:89:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_10ff5dba225d1e6edbc271fcc680cd8fe21dbff8b21d9ab4700c1fabe6f5c9ba",
                                  "typeString": "literal_string \"locktime must zero!\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 1211,
                            "name": "Identifier",
                            "src": "1136:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "locktime",
                                  "referencedDeclaration": 2668,
                                  "type": "uint32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1205,
                                      "type": "struct TransactionUtils.Transaction memory",
                                      "value": "btcTx"
                                    },
                                    "id": 1212,
                                    "name": "Identifier",
                                    "src": "1144:5:4"
                                  }
                                ],
                                "id": 1213,
                                "name": "MemberAccess",
                                "src": "1144:14:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 1214,
                                "name": "Literal",
                                "src": "1162:1:4"
                              }
                            ],
                            "id": 1215,
                            "name": "BinaryOperation",
                            "src": "1144:19:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "6c6f636b74696d65206d757374207a65726f21",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"locktime must zero!\"",
                              "value": "locktime must zero!"
                            },
                            "id": 1216,
                            "name": "Literal",
                            "src": "1165:21:4"
                          }
                        ],
                        "id": 1217,
                        "name": "FunctionCall",
                        "src": "1136:51:4"
                      }
                    ],
                    "id": 1218,
                    "name": "ExpressionStatement",
                    "src": "1136:51:4"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1183
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "vouts",
                          "referencedDeclaration": 2666,
                          "type": "bytes memory"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1205,
                              "type": "struct TransactionUtils.Transaction memory",
                              "value": "btcTx"
                            },
                            "id": 1219,
                            "name": "Identifier",
                            "src": "1255:5:4"
                          }
                        ],
                        "id": 1220,
                        "name": "MemberAccess",
                        "src": "1255:11:4"
                      }
                    ],
                    "id": 1221,
                    "name": "Return",
                    "src": "1248:18:4"
                  }
                ],
                "id": 1222,
                "name": "Block",
                "src": "818:455:4"
              }
            ],
            "id": 1223,
            "name": "FunctionDefinition",
            "src": "620:653:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "77d6b7ca",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "requestIssue",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amountRequested",
                      "overrides": null,
                      "scope": 1242,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1224,
                        "name": "ElementaryTypeName",
                        "src": "1301:7:4"
                      }
                    ],
                    "id": 1225,
                    "name": "VariableDeclaration",
                    "src": "1301:23:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "vaultId",
                      "overrides": null,
                      "scope": 1242,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1226,
                        "name": "ElementaryTypeName",
                        "src": "1326:7:4"
                      }
                    ],
                    "id": 1227,
                    "name": "VariableDeclaration",
                    "src": "1326:15:4"
                  }
                ],
                "id": 1228,
                "name": "ParameterList",
                "src": "1300:42:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1229,
                "name": "ParameterList",
                "src": "1380:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_requestIssue",
                              "referencedDeclaration": 836,
                              "type": "function (address payable,uint256,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1125,
                                  "type": "type(contract Issue)",
                                  "value": "Issue"
                                },
                                "id": 1230,
                                "name": "Identifier",
                                "src": "1390:5:4"
                              }
                            ],
                            "id": 1232,
                            "name": "MemberAccess",
                            "src": "1390:19:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1233,
                                "name": "Identifier",
                                "src": "1410:3:4"
                              }
                            ],
                            "id": 1234,
                            "name": "MemberAccess",
                            "src": "1410:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1225,
                              "type": "uint256",
                              "value": "amountRequested"
                            },
                            "id": 1235,
                            "name": "Identifier",
                            "src": "1422:15:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1227,
                              "type": "address",
                              "value": "vaultId"
                            },
                            "id": 1236,
                            "name": "Identifier",
                            "src": "1439:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "value",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1237,
                                "name": "Identifier",
                                "src": "1448:3:4"
                              }
                            ],
                            "id": 1238,
                            "name": "MemberAccess",
                            "src": "1448:9:4"
                          }
                        ],
                        "id": 1239,
                        "name": "FunctionCall",
                        "src": "1390:68:4"
                      }
                    ],
                    "id": 1240,
                    "name": "ExpressionStatement",
                    "src": "1390:68:4"
                  }
                ],
                "id": 1241,
                "name": "Block",
                "src": "1380:85:4"
              }
            ],
            "id": 1242,
            "name": "FunctionDefinition",
            "src": "1279:186:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "c50c8214",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "executeIssue",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "requester",
                      "overrides": null,
                      "scope": 1278,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1243,
                        "name": "ElementaryTypeName",
                        "src": "1502:7:4"
                      }
                    ],
                    "id": 1244,
                    "name": "VariableDeclaration",
                    "src": "1502:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "issueId",
                      "overrides": null,
                      "scope": 1278,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1245,
                        "name": "ElementaryTypeName",
                        "src": "1529:7:4"
                      }
                    ],
                    "id": 1246,
                    "name": "VariableDeclaration",
                    "src": "1529:15:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "merkleProof",
                      "overrides": null,
                      "scope": 1278,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1247,
                        "name": "ElementaryTypeName",
                        "src": "1554:5:4"
                      }
                    ],
                    "id": 1248,
                    "name": "VariableDeclaration",
                    "src": "1554:26:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1278,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1249,
                        "name": "ElementaryTypeName",
                        "src": "1590:5:4"
                      }
                    ],
                    "id": 1250,
                    "name": "VariableDeclaration",
                    "src": "1590:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "height",
                      "overrides": null,
                      "scope": 1278,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint32",
                          "type": "uint32"
                        },
                        "id": 1251,
                        "name": "ElementaryTypeName",
                        "src": "1764:6:4"
                      }
                    ],
                    "id": 1252,
                    "name": "VariableDeclaration",
                    "src": "1764:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "index",
                      "overrides": null,
                      "scope": 1278,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1253,
                        "name": "ElementaryTypeName",
                        "src": "1787:7:4"
                      }
                    ],
                    "id": 1254,
                    "name": "VariableDeclaration",
                    "src": "1787:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "header",
                      "overrides": null,
                      "scope": 1278,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1255,
                        "name": "ElementaryTypeName",
                        "src": "1810:5:4"
                      }
                    ],
                    "id": 1256,
                    "name": "VariableDeclaration",
                    "src": "1810:21:4"
                  }
                ],
                "id": 1257,
                "name": "ParameterList",
                "src": "1492:345:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1258,
                "name": "ParameterList",
                "src": "1847:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1260
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "_vout",
                          "overrides": null,
                          "scope": 1277,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "bytes",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes",
                              "type": "bytes"
                            },
                            "id": 1259,
                            "name": "ElementaryTypeName",
                            "src": "1857:5:4"
                          }
                        ],
                        "id": 1260,
                        "name": "VariableDeclaration",
                        "src": "1857:18:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bytes memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1223,
                              "type": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)",
                              "value": "verifyTx"
                            },
                            "id": 1261,
                            "name": "Identifier",
                            "src": "1890:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1252,
                              "type": "uint32",
                              "value": "height"
                            },
                            "id": 1262,
                            "name": "Identifier",
                            "src": "1899:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1254,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 1263,
                            "name": "Identifier",
                            "src": "1907:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1250,
                              "type": "bytes calldata",
                              "value": "rawTx"
                            },
                            "id": 1264,
                            "name": "Identifier",
                            "src": "1914:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1256,
                              "type": "bytes calldata",
                              "value": "header"
                            },
                            "id": 1265,
                            "name": "Identifier",
                            "src": "1921:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1248,
                              "type": "bytes calldata",
                              "value": "merkleProof"
                            },
                            "id": 1266,
                            "name": "Identifier",
                            "src": "1929:11:4"
                          }
                        ],
                        "id": 1267,
                        "name": "FunctionCall",
                        "src": "1890:51:4"
                      }
                    ],
                    "id": 1268,
                    "name": "VariableDeclarationStatement",
                    "src": "1857:84:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_executeIssue",
                              "referencedDeclaration": 1043,
                              "type": "function (address,uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1125,
                                  "type": "type(contract Issue)",
                                  "value": "Issue"
                                },
                                "id": 1269,
                                "name": "Identifier",
                                "src": "1952:5:4"
                              }
                            ],
                            "id": 1271,
                            "name": "MemberAccess",
                            "src": "1952:19:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1244,
                              "type": "address",
                              "value": "requester"
                            },
                            "id": 1272,
                            "name": "Identifier",
                            "src": "1972:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1246,
                              "type": "uint256",
                              "value": "issueId"
                            },
                            "id": 1273,
                            "name": "Identifier",
                            "src": "1983:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1260,
                              "type": "bytes memory",
                              "value": "_vout"
                            },
                            "id": 1274,
                            "name": "Identifier",
                            "src": "1992:5:4"
                          }
                        ],
                        "id": 1275,
                        "name": "FunctionCall",
                        "src": "1952:46:4"
                      }
                    ],
                    "id": 1276,
                    "name": "ExpressionStatement",
                    "src": "1952:46:4"
                  }
                ],
                "id": 1277,
                "name": "Block",
                "src": "1847:158:4"
              }
            ],
            "id": 1278,
            "name": "FunctionDefinition",
            "src": "1471:534:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "d4bcb1e9",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "cancelIssue",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "requester",
                      "overrides": null,
                      "scope": 1293,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1279,
                        "name": "ElementaryTypeName",
                        "src": "2032:7:4"
                      }
                    ],
                    "id": 1280,
                    "name": "VariableDeclaration",
                    "src": "2032:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "issueId",
                      "overrides": null,
                      "scope": 1293,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1281,
                        "name": "ElementaryTypeName",
                        "src": "2051:7:4"
                      }
                    ],
                    "id": 1282,
                    "name": "VariableDeclaration",
                    "src": "2051:15:4"
                  }
                ],
                "id": 1283,
                "name": "ParameterList",
                "src": "2031:36:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1284,
                "name": "ParameterList",
                "src": "2077:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_cancelIssue",
                              "referencedDeclaration": 1124,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1125,
                                  "type": "type(contract Issue)",
                                  "value": "Issue"
                                },
                                "id": 1285,
                                "name": "Identifier",
                                "src": "2087:5:4"
                              }
                            ],
                            "id": 1287,
                            "name": "MemberAccess",
                            "src": "2087:18:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1280,
                              "type": "address",
                              "value": "requester"
                            },
                            "id": 1288,
                            "name": "Identifier",
                            "src": "2106:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1282,
                              "type": "uint256",
                              "value": "issueId"
                            },
                            "id": 1289,
                            "name": "Identifier",
                            "src": "2117:7:4"
                          }
                        ],
                        "id": 1290,
                        "name": "FunctionCall",
                        "src": "2087:38:4"
                      }
                    ],
                    "id": 1291,
                    "name": "ExpressionStatement",
                    "src": "2087:38:4"
                  }
                ],
                "id": 1292,
                "name": "Block",
                "src": "2077:55:4"
              }
            ],
            "id": 1293,
            "name": "FunctionDefinition",
            "src": "2011:121:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "7d41c86e",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "requestRedeem",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amountOneBtc",
                      "overrides": null,
                      "scope": 1313,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1294,
                        "name": "ElementaryTypeName",
                        "src": "2170:7:4"
                      }
                    ],
                    "id": 1295,
                    "name": "VariableDeclaration",
                    "src": "2170:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcAddress",
                      "overrides": null,
                      "scope": 1313,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1296,
                        "name": "ElementaryTypeName",
                        "src": "2200:7:4"
                      }
                    ],
                    "id": 1297,
                    "name": "VariableDeclaration",
                    "src": "2200:18:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "vaultId",
                      "overrides": null,
                      "scope": 1313,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1298,
                        "name": "ElementaryTypeName",
                        "src": "2228:7:4"
                      }
                    ],
                    "id": 1299,
                    "name": "VariableDeclaration",
                    "src": "2228:15:4"
                  }
                ],
                "id": 1300,
                "name": "ParameterList",
                "src": "2160:89:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1301,
                "name": "ParameterList",
                "src": "2259:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_requestRedeem",
                              "referencedDeclaration": 1822,
                              "type": "function (address,uint256,address,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2001,
                                  "type": "type(contract Redeem)",
                                  "value": "Redeem"
                                },
                                "id": 1302,
                                "name": "Identifier",
                                "src": "2269:6:4"
                              }
                            ],
                            "id": 1304,
                            "name": "MemberAccess",
                            "src": "2269:21:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1305,
                                "name": "Identifier",
                                "src": "2304:3:4"
                              }
                            ],
                            "id": 1306,
                            "name": "MemberAccess",
                            "src": "2304:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1295,
                              "type": "uint256",
                              "value": "amountOneBtc"
                            },
                            "id": 1307,
                            "name": "Identifier",
                            "src": "2328:12:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1297,
                              "type": "address",
                              "value": "btcAddress"
                            },
                            "id": 1308,
                            "name": "Identifier",
                            "src": "2354:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1299,
                              "type": "address",
                              "value": "vaultId"
                            },
                            "id": 1309,
                            "name": "Identifier",
                            "src": "2378:7:4"
                          }
                        ],
                        "id": 1310,
                        "name": "FunctionCall",
                        "src": "2269:126:4"
                      }
                    ],
                    "id": 1311,
                    "name": "ExpressionStatement",
                    "src": "2269:126:4"
                  }
                ],
                "id": 1312,
                "name": "Block",
                "src": "2259:143:4"
              }
            ],
            "id": 1313,
            "name": "FunctionDefinition",
            "src": "2138:264:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "c5387e8f",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "executeRedeem",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "requester",
                      "overrides": null,
                      "scope": 1349,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1314,
                        "name": "ElementaryTypeName",
                        "src": "2440:7:4"
                      }
                    ],
                    "id": 1315,
                    "name": "VariableDeclaration",
                    "src": "2440:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "redeemId",
                      "overrides": null,
                      "scope": 1349,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1316,
                        "name": "ElementaryTypeName",
                        "src": "2467:7:4"
                      }
                    ],
                    "id": 1317,
                    "name": "VariableDeclaration",
                    "src": "2467:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "merkleProof",
                      "overrides": null,
                      "scope": 1349,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1318,
                        "name": "ElementaryTypeName",
                        "src": "2493:5:4"
                      }
                    ],
                    "id": 1319,
                    "name": "VariableDeclaration",
                    "src": "2493:26:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1349,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1320,
                        "name": "ElementaryTypeName",
                        "src": "2529:5:4"
                      }
                    ],
                    "id": 1321,
                    "name": "VariableDeclaration",
                    "src": "2529:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "height",
                      "overrides": null,
                      "scope": 1349,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint32",
                          "type": "uint32"
                        },
                        "id": 1322,
                        "name": "ElementaryTypeName",
                        "src": "2559:6:4"
                      }
                    ],
                    "id": 1323,
                    "name": "VariableDeclaration",
                    "src": "2559:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "index",
                      "overrides": null,
                      "scope": 1349,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1324,
                        "name": "ElementaryTypeName",
                        "src": "2582:7:4"
                      }
                    ],
                    "id": 1325,
                    "name": "VariableDeclaration",
                    "src": "2582:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "header",
                      "overrides": null,
                      "scope": 1349,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1326,
                        "name": "ElementaryTypeName",
                        "src": "2605:5:4"
                      }
                    ],
                    "id": 1327,
                    "name": "VariableDeclaration",
                    "src": "2605:21:4"
                  }
                ],
                "id": 1328,
                "name": "ParameterList",
                "src": "2430:202:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1329,
                "name": "ParameterList",
                "src": "2642:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1331
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "_vout",
                          "overrides": null,
                          "scope": 1348,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "bytes",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes",
                              "type": "bytes"
                            },
                            "id": 1330,
                            "name": "ElementaryTypeName",
                            "src": "2652:5:4"
                          }
                        ],
                        "id": 1331,
                        "name": "VariableDeclaration",
                        "src": "2652:18:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bytes memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1223,
                              "type": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)",
                              "value": "verifyTx"
                            },
                            "id": 1332,
                            "name": "Identifier",
                            "src": "2685:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1323,
                              "type": "uint32",
                              "value": "height"
                            },
                            "id": 1333,
                            "name": "Identifier",
                            "src": "2694:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1325,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 1334,
                            "name": "Identifier",
                            "src": "2702:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1321,
                              "type": "bytes calldata",
                              "value": "rawTx"
                            },
                            "id": 1335,
                            "name": "Identifier",
                            "src": "2709:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1327,
                              "type": "bytes calldata",
                              "value": "header"
                            },
                            "id": 1336,
                            "name": "Identifier",
                            "src": "2716:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1319,
                              "type": "bytes calldata",
                              "value": "merkleProof"
                            },
                            "id": 1337,
                            "name": "Identifier",
                            "src": "2724:11:4"
                          }
                        ],
                        "id": 1338,
                        "name": "FunctionCall",
                        "src": "2685:51:4"
                      }
                    ],
                    "id": 1339,
                    "name": "VariableDeclarationStatement",
                    "src": "2652:84:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_executeRedeem",
                              "referencedDeclaration": 1913,
                              "type": "function (address,uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2001,
                                  "type": "type(contract Redeem)",
                                  "value": "Redeem"
                                },
                                "id": 1340,
                                "name": "Identifier",
                                "src": "2747:6:4"
                              }
                            ],
                            "id": 1342,
                            "name": "MemberAccess",
                            "src": "2747:21:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1315,
                              "type": "address",
                              "value": "requester"
                            },
                            "id": 1343,
                            "name": "Identifier",
                            "src": "2769:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1317,
                              "type": "uint256",
                              "value": "redeemId"
                            },
                            "id": 1344,
                            "name": "Identifier",
                            "src": "2780:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1331,
                              "type": "bytes memory",
                              "value": "_vout"
                            },
                            "id": 1345,
                            "name": "Identifier",
                            "src": "2790:5:4"
                          }
                        ],
                        "id": 1346,
                        "name": "FunctionCall",
                        "src": "2747:49:4"
                      }
                    ],
                    "id": 1347,
                    "name": "ExpressionStatement",
                    "src": "2747:49:4"
                  }
                ],
                "id": 1348,
                "name": "Block",
                "src": "2642:161:4"
              }
            ],
            "id": 1349,
            "name": "FunctionDefinition",
            "src": "2408:395:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "90336df2",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "cancelRedeem",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "requester",
                      "overrides": null,
                      "scope": 1364,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1350,
                        "name": "ElementaryTypeName",
                        "src": "2831:7:4"
                      }
                    ],
                    "id": 1351,
                    "name": "VariableDeclaration",
                    "src": "2831:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "redeemId",
                      "overrides": null,
                      "scope": 1364,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1352,
                        "name": "ElementaryTypeName",
                        "src": "2850:7:4"
                      }
                    ],
                    "id": 1353,
                    "name": "VariableDeclaration",
                    "src": "2850:16:4"
                  }
                ],
                "id": 1354,
                "name": "ParameterList",
                "src": "2830:37:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1355,
                "name": "ParameterList",
                "src": "2877:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_cancelRedeem",
                              "referencedDeclaration": 2000,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2001,
                                  "type": "type(contract Redeem)",
                                  "value": "Redeem"
                                },
                                "id": 1356,
                                "name": "Identifier",
                                "src": "2887:6:4"
                              }
                            ],
                            "id": 1358,
                            "name": "MemberAccess",
                            "src": "2887:20:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1351,
                              "type": "address",
                              "value": "requester"
                            },
                            "id": 1359,
                            "name": "Identifier",
                            "src": "2908:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1353,
                              "type": "uint256",
                              "value": "redeemId"
                            },
                            "id": 1360,
                            "name": "Identifier",
                            "src": "2919:8:4"
                          }
                        ],
                        "id": 1361,
                        "name": "FunctionCall",
                        "src": "2887:41:4"
                      }
                    ],
                    "id": 1362,
                    "name": "ExpressionStatement",
                    "src": "2887:41:4"
                  }
                ],
                "id": 1363,
                "name": "Block",
                "src": "2877:58:4"
              }
            ],
            "id": 1364,
            "name": "FunctionDefinition",
            "src": "2809:126:4"
          },
          {
            "attributes": {
              "baseFunctions": [
                1601
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "lockOneBTC",
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Redeem",
                      "referencedDeclaration": 2001,
                      "type": "contract Redeem"
                    },
                    "id": 1370,
                    "name": "UserDefinedTypeName",
                    "src": "3025:6:4"
                  }
                ],
                "id": 1371,
                "name": "OverrideSpecifier",
                "src": "3016:16:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "from",
                      "overrides": null,
                      "scope": 1386,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1365,
                        "name": "ElementaryTypeName",
                        "src": "2961:7:4"
                      }
                    ],
                    "id": 1366,
                    "name": "VariableDeclaration",
                    "src": "2961:12:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 1386,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1367,
                        "name": "ElementaryTypeName",
                        "src": "2975:7:4"
                      }
                    ],
                    "id": 1368,
                    "name": "VariableDeclaration",
                    "src": "2975:14:4"
                  }
                ],
                "id": 1369,
                "name": "ParameterList",
                "src": "2960:30:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1372,
                "name": "ParameterList",
                "src": "3037:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_transfer",
                              "referencedDeclaration": 8327,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8506,
                                  "type": "type(contract ERC20)",
                                  "value": "ERC20"
                                },
                                "id": 1373,
                                "name": "Identifier",
                                "src": "3112:5:4"
                              }
                            ],
                            "id": 1375,
                            "name": "MemberAccess",
                            "src": "3112:15:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1376,
                                "name": "Identifier",
                                "src": "3128:3:4"
                              }
                            ],
                            "id": 1377,
                            "name": "MemberAccess",
                            "src": "3128:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_OneBtc_$1521",
                                      "typeString": "contract OneBtc"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "address",
                                      "type": null
                                    },
                                    "id": 1378,
                                    "name": "ElementaryTypeName",
                                    "src": "3140:7:4"
                                  }
                                ],
                                "id": 1379,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3140:7:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -28,
                                  "type": "contract OneBtc",
                                  "value": "this"
                                },
                                "id": 1380,
                                "name": "Identifier",
                                "src": "3148:4:4"
                              }
                            ],
                            "id": 1381,
                            "name": "FunctionCall",
                            "src": "3140:13:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1368,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1382,
                            "name": "Identifier",
                            "src": "3155:6:4"
                          }
                        ],
                        "id": 1383,
                        "name": "FunctionCall",
                        "src": "3112:50:4"
                      }
                    ],
                    "id": 1384,
                    "name": "ExpressionStatement",
                    "src": "3112:50:4"
                  }
                ],
                "id": 1385,
                "name": "Block",
                "src": "3037:132:4"
              }
            ],
            "id": 1386,
            "name": "FunctionDefinition",
            "src": "2941:228:4"
          },
          {
            "attributes": {
              "baseFunctions": [
                1606
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "burnLockedOneBTC",
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Redeem",
                      "referencedDeclaration": 2001,
                      "type": "contract Redeem"
                    },
                    "id": 1390,
                    "name": "UserDefinedTypeName",
                    "src": "3235:6:4"
                  }
                ],
                "id": 1391,
                "name": "OverrideSpecifier",
                "src": "3226:16:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 1404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1387,
                        "name": "ElementaryTypeName",
                        "src": "3201:7:4"
                      }
                    ],
                    "id": 1388,
                    "name": "VariableDeclaration",
                    "src": "3201:14:4"
                  }
                ],
                "id": 1389,
                "name": "ParameterList",
                "src": "3200:16:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1392,
                "name": "ParameterList",
                "src": "3243:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_burn",
                              "referencedDeclaration": 8438,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8506,
                                  "type": "type(contract ERC20)",
                                  "value": "ERC20"
                                },
                                "id": 1393,
                                "name": "Identifier",
                                "src": "3253:5:4"
                              }
                            ],
                            "id": 1395,
                            "name": "MemberAccess",
                            "src": "3253:11:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_OneBtc_$1521",
                                      "typeString": "contract OneBtc"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "address",
                                      "type": null
                                    },
                                    "id": 1396,
                                    "name": "ElementaryTypeName",
                                    "src": "3265:7:4"
                                  }
                                ],
                                "id": 1397,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3265:7:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -28,
                                  "type": "contract OneBtc",
                                  "value": "this"
                                },
                                "id": 1398,
                                "name": "Identifier",
                                "src": "3273:4:4"
                              }
                            ],
                            "id": 1399,
                            "name": "FunctionCall",
                            "src": "3265:13:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1388,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1400,
                            "name": "Identifier",
                            "src": "3280:6:4"
                          }
                        ],
                        "id": 1401,
                        "name": "FunctionCall",
                        "src": "3253:34:4"
                      }
                    ],
                    "id": 1402,
                    "name": "ExpressionStatement",
                    "src": "3253:34:4"
                  }
                ],
                "id": 1403,
                "name": "Block",
                "src": "3243:51:4"
              }
            ],
            "id": 1404,
            "name": "FunctionDefinition",
            "src": "3175:119:4"
          },
          {
            "attributes": {
              "baseFunctions": [
                1613
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "releaseLockedOneBTC",
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Redeem",
                      "referencedDeclaration": 2001,
                      "type": "contract Redeem"
                    },
                    "id": 1410,
                    "name": "UserDefinedTypeName",
                    "src": "3397:6:4"
                  }
                ],
                "id": 1411,
                "name": "OverrideSpecifier",
                "src": "3388:16:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "receiver",
                      "overrides": null,
                      "scope": 1425,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1405,
                        "name": "ElementaryTypeName",
                        "src": "3329:7:4"
                      }
                    ],
                    "id": 1406,
                    "name": "VariableDeclaration",
                    "src": "3329:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 1425,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1407,
                        "name": "ElementaryTypeName",
                        "src": "3347:7:4"
                      }
                    ],
                    "id": 1408,
                    "name": "VariableDeclaration",
                    "src": "3347:14:4"
                  }
                ],
                "id": 1409,
                "name": "ParameterList",
                "src": "3328:34:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1412,
                "name": "ParameterList",
                "src": "3409:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_transfer",
                              "referencedDeclaration": 8327,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8506,
                                  "type": "type(contract ERC20)",
                                  "value": "ERC20"
                                },
                                "id": 1413,
                                "name": "Identifier",
                                "src": "3419:5:4"
                              }
                            ],
                            "id": 1415,
                            "name": "MemberAccess",
                            "src": "3419:15:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_OneBtc_$1521",
                                      "typeString": "contract OneBtc"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "address",
                                      "type": null
                                    },
                                    "id": 1416,
                                    "name": "ElementaryTypeName",
                                    "src": "3435:7:4"
                                  }
                                ],
                                "id": 1417,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3435:7:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -28,
                                  "type": "contract OneBtc",
                                  "value": "this"
                                },
                                "id": 1418,
                                "name": "Identifier",
                                "src": "3443:4:4"
                              }
                            ],
                            "id": 1419,
                            "name": "FunctionCall",
                            "src": "3435:13:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1406,
                              "type": "address",
                              "value": "receiver"
                            },
                            "id": 1420,
                            "name": "Identifier",
                            "src": "3450:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1408,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1421,
                            "name": "Identifier",
                            "src": "3460:6:4"
                          }
                        ],
                        "id": 1422,
                        "name": "FunctionCall",
                        "src": "3419:48:4"
                      }
                    ],
                    "id": 1423,
                    "name": "ExpressionStatement",
                    "src": "3419:48:4"
                  }
                ],
                "id": 1424,
                "name": "Block",
                "src": "3409:65:4"
              }
            ],
            "id": 1425,
            "name": "FunctionDefinition",
            "src": "3300:174:4"
          },
          {
            "attributes": {
              "baseFunctions": [
                597
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "issueOneBTC",
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Issue",
                      "referencedDeclaration": 1125,
                      "type": "contract Issue"
                    },
                    "id": 1431,
                    "name": "UserDefinedTypeName",
                    "src": "3569:5:4"
                  }
                ],
                "id": 1432,
                "name": "OverrideSpecifier",
                "src": "3560:15:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "receiver",
                      "overrides": null,
                      "scope": 1442,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1426,
                        "name": "ElementaryTypeName",
                        "src": "3501:7:4"
                      }
                    ],
                    "id": 1427,
                    "name": "VariableDeclaration",
                    "src": "3501:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 1442,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1428,
                        "name": "ElementaryTypeName",
                        "src": "3519:7:4"
                      }
                    ],
                    "id": 1429,
                    "name": "VariableDeclaration",
                    "src": "3519:14:4"
                  }
                ],
                "id": 1430,
                "name": "ParameterList",
                "src": "3500:34:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1433,
                "name": "ParameterList",
                "src": "3580:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_mint",
                              "referencedDeclaration": 8382,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8506,
                                  "type": "type(contract ERC20)",
                                  "value": "ERC20"
                                },
                                "id": 1434,
                                "name": "Identifier",
                                "src": "3590:5:4"
                              }
                            ],
                            "id": 1436,
                            "name": "MemberAccess",
                            "src": "3590:11:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1427,
                              "type": "address",
                              "value": "receiver"
                            },
                            "id": 1437,
                            "name": "Identifier",
                            "src": "3602:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1429,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1438,
                            "name": "Identifier",
                            "src": "3612:6:4"
                          }
                        ],
                        "id": 1439,
                        "name": "FunctionCall",
                        "src": "3590:29:4"
                      }
                    ],
                    "id": 1440,
                    "name": "ExpressionStatement",
                    "src": "3590:29:4"
                  }
                ],
                "id": 1441,
                "name": "Block",
                "src": "3580:46:4"
              }
            ],
            "id": 1442,
            "name": "FunctionDefinition",
            "src": "3480:146:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "1704b9a6",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "requestReplace",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "oldVaultId",
                      "overrides": null,
                      "scope": 1460,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address payable",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "payable",
                          "type": "address payable"
                        },
                        "id": 1443,
                        "name": "ElementaryTypeName",
                        "src": "3665:15:4"
                      }
                    ],
                    "id": 1444,
                    "name": "VariableDeclaration",
                    "src": "3665:26:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcAmount",
                      "overrides": null,
                      "scope": 1460,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1445,
                        "name": "ElementaryTypeName",
                        "src": "3701:7:4"
                      }
                    ],
                    "id": 1446,
                    "name": "VariableDeclaration",
                    "src": "3701:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "griefingCollateral",
                      "overrides": null,
                      "scope": 1460,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1447,
                        "name": "ElementaryTypeName",
                        "src": "3728:7:4"
                      }
                    ],
                    "id": 1448,
                    "name": "VariableDeclaration",
                    "src": "3728:26:4"
                  }
                ],
                "id": 1449,
                "name": "ParameterList",
                "src": "3655:105:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1450,
                "name": "ParameterList",
                "src": "3778:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_requestReplace",
                              "referencedDeclaration": 2212,
                              "type": "function (address payable,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2570,
                                  "type": "type(contract Replace)",
                                  "value": "Replace"
                                },
                                "id": 1451,
                                "name": "Identifier",
                                "src": "3788:7:4"
                              }
                            ],
                            "id": 1453,
                            "name": "MemberAccess",
                            "src": "3788:23:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1444,
                              "type": "address payable",
                              "value": "oldVaultId"
                            },
                            "id": 1454,
                            "name": "Identifier",
                            "src": "3812:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1446,
                              "type": "uint256",
                              "value": "btcAmount"
                            },
                            "id": 1455,
                            "name": "Identifier",
                            "src": "3824:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1448,
                              "type": "uint256",
                              "value": "griefingCollateral"
                            },
                            "id": 1456,
                            "name": "Identifier",
                            "src": "3835:18:4"
                          }
                        ],
                        "id": 1457,
                        "name": "FunctionCall",
                        "src": "3788:66:4"
                      }
                    ],
                    "id": 1458,
                    "name": "ExpressionStatement",
                    "src": "3788:66:4"
                  }
                ],
                "id": 1459,
                "name": "Block",
                "src": "3778:83:4"
              }
            ],
            "id": 1460,
            "name": "FunctionDefinition",
            "src": "3632:229:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "c8c7fa00",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "acceptReplace",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "oldVaultId",
                      "overrides": null,
                      "scope": 1487,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1461,
                        "name": "ElementaryTypeName",
                        "src": "3899:7:4"
                      }
                    ],
                    "id": 1462,
                    "name": "VariableDeclaration",
                    "src": "3899:18:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "newVaultId",
                      "overrides": null,
                      "scope": 1487,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1463,
                        "name": "ElementaryTypeName",
                        "src": "3927:7:4"
                      }
                    ],
                    "id": 1464,
                    "name": "VariableDeclaration",
                    "src": "3927:18:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcAmount",
                      "overrides": null,
                      "scope": 1487,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1465,
                        "name": "ElementaryTypeName",
                        "src": "3955:7:4"
                      }
                    ],
                    "id": 1466,
                    "name": "VariableDeclaration",
                    "src": "3955:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "collateral",
                      "overrides": null,
                      "scope": 1487,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1467,
                        "name": "ElementaryTypeName",
                        "src": "3982:7:4"
                      }
                    ],
                    "id": 1468,
                    "name": "VariableDeclaration",
                    "src": "3982:18:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcPublicKeyX",
                      "overrides": null,
                      "scope": 1487,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1469,
                        "name": "ElementaryTypeName",
                        "src": "4010:7:4"
                      }
                    ],
                    "id": 1470,
                    "name": "VariableDeclaration",
                    "src": "4010:21:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcPublicKeyY",
                      "overrides": null,
                      "scope": 1487,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1471,
                        "name": "ElementaryTypeName",
                        "src": "4041:7:4"
                      }
                    ],
                    "id": 1472,
                    "name": "VariableDeclaration",
                    "src": "4041:21:4"
                  }
                ],
                "id": 1473,
                "name": "ParameterList",
                "src": "3889:179:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1474,
                "name": "ParameterList",
                "src": "4086:0:4"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_acceptReplace",
                              "referencedDeclaration": 2484,
                              "type": "function (address,address,uint256,uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2570,
                                  "type": "type(contract Replace)",
                                  "value": "Replace"
                                },
                                "id": 1475,
                                "name": "Identifier",
                                "src": "4096:7:4"
                              }
                            ],
                            "id": 1477,
                            "name": "MemberAccess",
                            "src": "4096:22:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1462,
                              "type": "address",
                              "value": "oldVaultId"
                            },
                            "id": 1478,
                            "name": "Identifier",
                            "src": "4132:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1464,
                              "type": "address",
                              "value": "newVaultId"
                            },
                            "id": 1479,
                            "name": "Identifier",
                            "src": "4156:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1466,
                              "type": "uint256",
                              "value": "btcAmount"
                            },
                            "id": 1480,
                            "name": "Identifier",
                            "src": "4180:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1468,
                              "type": "uint256",
                              "value": "collateral"
                            },
                            "id": 1481,
                            "name": "Identifier",
                            "src": "4203:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1470,
                              "type": "uint256",
                              "value": "btcPublicKeyX"
                            },
                            "id": 1482,
                            "name": "Identifier",
                            "src": "4227:13:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1472,
                              "type": "uint256",
                              "value": "btcPublicKeyY"
                            },
                            "id": 1483,
                            "name": "Identifier",
                            "src": "4254:13:4"
                          }
                        ],
                        "id": 1484,
                        "name": "FunctionCall",
                        "src": "4096:181:4"
                      }
                    ],
                    "id": 1485,
                    "name": "ExpressionStatement",
                    "src": "4096:181:4"
                  }
                ],
                "id": 1486,
                "name": "Block",
                "src": "4086:198:4"
              }
            ],
            "id": 1487,
            "name": "FunctionDefinition",
            "src": "3867:417:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "978f28dd",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "executeReplace",
              "overrides": null,
              "scope": 1521,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "replaceId",
                      "overrides": null,
                      "scope": 1520,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1488,
                        "name": "ElementaryTypeName",
                        "src": "4323:7:4"
                      }
                    ],
                    "id": 1489,
                    "name": "VariableDeclaration",
                    "src": "4323:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "merkleProof",
                      "overrides": null,
                      "scope": 1520,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1490,
                        "name": "ElementaryTypeName",
                        "src": "4350:5:4"
                      }
                    ],
                    "id": 1491,
                    "name": "VariableDeclaration",
                    "src": "4350:26:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1520,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1492,
                        "name": "ElementaryTypeName",
                        "src": "4386:5:4"
                      }
                    ],
                    "id": 1493,
                    "name": "VariableDeclaration",
                    "src": "4386:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "height",
                      "overrides": null,
                      "scope": 1520,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint32",
                          "type": "uint32"
                        },
                        "id": 1494,
                        "name": "ElementaryTypeName",
                        "src": "4556:6:4"
                      }
                    ],
                    "id": 1495,
                    "name": "VariableDeclaration",
                    "src": "4556:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "index",
                      "overrides": null,
                      "scope": 1520,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1496,
                        "name": "ElementaryTypeName",
                        "src": "4579:7:4"
                      }
                    ],
                    "id": 1497,
                    "name": "VariableDeclaration",
                    "src": "4579:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "header",
                      "overrides": null,
                      "scope": 1520,
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "type": "bytes",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes"
                        },
                        "id": 1498,
                        "name": "ElementaryTypeName",
                        "src": "4602:5:4"
                      }
                    ],
                    "id": 1499,
                    "name": "VariableDeclaration",
                    "src": "4602:21:4"
                  }
                ],
                "id": 1500,
                "name": "ParameterList",
                "src": "4313:316:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1501,
                "name": "ParameterList",
                "src": "4639:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1503
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "_vout",
                          "overrides": null,
                          "scope": 1519,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "bytes",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes",
                              "type": "bytes"
                            },
                            "id": 1502,
                            "name": "ElementaryTypeName",
                            "src": "4649:5:4"
                          }
                        ],
                        "id": 1503,
                        "name": "VariableDeclaration",
                        "src": "4649:18:4"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bytes memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1223,
                              "type": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)",
                              "value": "verifyTx"
                            },
                            "id": 1504,
                            "name": "Identifier",
                            "src": "4670:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1495,
                              "type": "uint32",
                              "value": "height"
                            },
                            "id": 1505,
                            "name": "Identifier",
                            "src": "4679:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1497,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 1506,
                            "name": "Identifier",
                            "src": "4687:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1493,
                              "type": "bytes calldata",
                              "value": "rawTx"
                            },
                            "id": 1507,
                            "name": "Identifier",
                            "src": "4694:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1499,
                              "type": "bytes calldata",
                              "value": "header"
                            },
                            "id": 1508,
                            "name": "Identifier",
                            "src": "4701:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1491,
                              "type": "bytes calldata",
                              "value": "merkleProof"
                            },
                            "id": 1509,
                            "name": "Identifier",
                            "src": "4709:11:4"
                          }
                        ],
                        "id": 1510,
                        "name": "FunctionCall",
                        "src": "4670:51:4"
                      }
                    ],
                    "id": 1511,
                    "name": "VariableDeclarationStatement",
                    "src": "4649:72:4"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_executeReplace",
                              "referencedDeclaration": 2569,
                              "type": "function (uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2570,
                                  "type": "type(contract Replace)",
                                  "value": "Replace"
                                },
                                "id": 1512,
                                "name": "Identifier",
                                "src": "4731:7:4"
                              }
                            ],
                            "id": 1514,
                            "name": "MemberAccess",
                            "src": "4731:23:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1489,
                              "type": "uint256",
                              "value": "replaceId"
                            },
                            "id": 1515,
                            "name": "Identifier",
                            "src": "4755:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1503,
                              "type": "bytes memory",
                              "value": "_vout"
                            },
                            "id": 1516,
                            "name": "Identifier",
                            "src": "4766:5:4"
                          }
                        ],
                        "id": 1517,
                        "name": "FunctionCall",
                        "src": "4731:41:4"
                      }
                    ],
                    "id": 1518,
                    "name": "ExpressionStatement",
                    "src": "4731:41:4"
                  }
                ],
                "id": 1519,
                "name": "Block",
                "src": "4639:140:4"
              }
            ],
            "id": 1520,
            "name": "FunctionDefinition",
            "src": "4290:489:4"
          }
        ],
        "id": 1521,
        "name": "ContractDefinition",
        "src": "415:4366:4"
      }
    ],
    "id": 1522,
    "name": "SourceUnit",
    "src": "33:4749:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.12+commit.27d51765.Emscripten.clang"
  },
  "networks": {
    "2": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x45c7f0162772dc14d848f7fc10d09f8a007bba89c372e47f17d0c6b4a2e67f86": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "issuedId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "IssueCancel",
          "type": "event"
        },
        "0x41ac549524df546b670900f16155b1ab138c8a69cb83091710e4824cf216c04e": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "issuedId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "IssueComplete",
          "type": "event"
        },
        "0x0279f22d36b78c19957d9d6d792e3625dfb99d644e30be9a850aab76b63b2594": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "issueId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "IssueRequest",
          "type": "event"
        },
        "0xa26b43a600355250ae61523a4d3a1269abbbbf462b22c633d629920603d05e45": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "LockCollateral",
          "type": "event"
        },
        "0x1fa2e68649c87d957477ccbe3c5a6af2bfde7f94bcdc6dc5b8944ef329ba25f4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "redeemId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "RedeemCancel",
          "type": "event"
        },
        "0x3114b251c2a5058491738f973e62ec694147154211b993a430d788a72ca6d194": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "redeemId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "RedeemComplete",
          "type": "event"
        },
        "0xde2047174185f9a5da05491e50e701207a1e4622bd87cca82c1a866d4382a9a7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "redeemId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "RedeemRequest",
          "type": "event"
        },
        "0x49fd9cc8f07d8a3a7cf7160535b6b0ce95d90fe87662605e19d90028ceb3aa3b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "collateral",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "btcPublicKeyX",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "btcPublicKeyY",
              "type": "uint256"
            }
          ],
          "name": "RegisterVault",
          "type": "event"
        },
        "0x943defbd695c6a58b5dbd0fcccb150d25f2fd14a5ebba6cb6b0d9e33651191d4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "ReleaseCollateral",
          "type": "event"
        },
        "0x1f62766d3b94993a001005cb9b5296a3959ccda7944a7033caf75e04a0e7b33c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "SlashCollateral",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0xd4fbb16c279424bdd5e637a14cae7b00e68dd1529d7fa5ea6e8a1018af2f3fed": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            }
          ],
          "name": "VaultPublicKeyUpdate",
          "type": "event"
        },
        "0x26899953ce5ec4fdd27150e3d625e33f84d65e89ccf4a2d960abc648b1b4df2a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "replaceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "btcAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "collateral",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "AcceptReplace",
          "type": "event"
        },
        "0xa775fae59d2cebcb8a9ed353241e1ffbec944562fc7f662d1fa16018e62c20de": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "replaceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "slashedCollateral",
              "type": "uint256"
            }
          ],
          "name": "CancelReplace",
          "type": "event"
        },
        "0x602ceb96b9001fc15cee84bae42af52eebda91a7e70da69fd29563f5d42ca5f1": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "DecreaseToBeIssuedTokens",
          "type": "event"
        },
        "0x4317750fb47a4dc685a826d40caf1dbf81881e792d205275e711b9054871f7aa": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "DecreaseToBeReplacedTokens",
          "type": "event"
        },
        "0x6e3e61fdf80541be797785f48ed6cf400134a61292f2f58f56efb3ab0a5cfa6c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "replaceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVault",
              "type": "address"
            }
          ],
          "name": "ExecuteReplace",
          "type": "event"
        },
        "0x2a0e25b59dbe8659199b9249e7e3897b753e8483dcbe40a7403b48242c6f4d34": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "IncreaseToBeIssuedTokens",
          "type": "event"
        },
        "0xa40b2e156dca6a5cc9204c1172c822104aa5957e50a2e4785fe281a0460e01df": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "IncreaseToBeRedeemedTokens",
          "type": "event"
        },
        "0xf052e4720689a6c9761eb963b628676705aa972a0ba9571c32440b9dcb785481": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "IncreaseToBeReplacedTokens",
          "type": "event"
        },
        "0x6db487de54f8294da3728759b0a0d5eb1ea2177a28902ba11abc9e3e989dc99c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "issuedId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "confiscatedGriefingCollateral",
              "type": "uint256"
            }
          ],
          "name": "IssueAmountChange",
          "type": "event"
        },
        "0xda0c72f67f0b71f8afdd41fe90a21ca4d9e2a768778ed664031c7cae3998f32a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "IssueTokens",
          "type": "event"
        },
        "0x60213c45c34d8b94e495fd5871fdea7a7511f659e884ea25a0c8843b7f98bfad": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "RedeemTokens",
          "type": "event"
        },
        "0x5b2260440eaa72a266c31b81fcf06107588de293792678adc73df44ace679b0f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVaultId",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokens",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "collateral",
              "type": "uint256"
            }
          ],
          "name": "ReplaceTokens",
          "type": "event"
        },
        "0x8913ea7a41c7a2e297c14b401089285065174a3e4c4bb03671fc5b4f27591ddc": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "btcAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "griefingCollateral",
              "type": "uint256"
            }
          ],
          "name": "RequestReplace",
          "type": "event"
        },
        "0x0ceead0380d9573101bcc8983dfa55e3513b14230e275d1c84176e9b1d0be26b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "withdrawnTokens",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "withdrawnGriefingCollateral",
              "type": "uint256"
            }
          ],
          "name": "WithdrawReplace",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x6e737A7a6622AEeA7Fa62702CcfEf77F2A23FfF3",
      "transactionHash": "0x74f9802dfff8f57965d6a04a8153fbc09ef55d96dff7a4b97b1becbb98a3bf3d"
    },
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x45c7f0162772dc14d848f7fc10d09f8a007bba89c372e47f17d0c6b4a2e67f86": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "issudeId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "IssueCancel",
          "type": "event"
        },
        "0x41ac549524df546b670900f16155b1ab138c8a69cb83091710e4824cf216c04e": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "issudeId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "IssueComplete",
          "type": "event"
        },
        "0x0279f22d36b78c19957d9d6d792e3625dfb99d644e30be9a850aab76b63b2594": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "issueId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "IssueRequest",
          "type": "event"
        },
        "0xa26b43a600355250ae61523a4d3a1269abbbbf462b22c633d629920603d05e45": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "LockCollateral",
          "type": "event"
        },
        "0x1fa2e68649c87d957477ccbe3c5a6af2bfde7f94bcdc6dc5b8944ef329ba25f4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "redeemId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "RedeemCancel",
          "type": "event"
        },
        "0x3114b251c2a5058491738f973e62ec694147154211b993a430d788a72ca6d194": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "redeemId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "RedeemComplete",
          "type": "event"
        },
        "0xde2047174185f9a5da05491e50e701207a1e4622bd87cca82c1a866d4382a9a7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "redeemId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "requester",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "RedeemRequest",
          "type": "event"
        },
        "0xd90c17b2d26cb3a1b3f65422ae335780e697e8b71645ad29fe1e204600d1fd0d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vault_id",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "btc_address",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "collateral",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "btc_public_key",
              "type": "bytes"
            }
          ],
          "name": "RegisterVault",
          "type": "event"
        },
        "0x943defbd695c6a58b5dbd0fcccb150d25f2fd14a5ebba6cb6b0d9e33651191d4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "ReleaseCollateral",
          "type": "event"
        },
        "0x1f62766d3b94993a001005cb9b5296a3959ccda7944a7033caf75e04a0e7b33c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "SlashCollateral",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0x49fd9cc8f07d8a3a7cf7160535b6b0ce95d90fe87662605e19d90028ceb3aa3b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "collateral",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "btcPublicKeyX",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "btcPublicKeyY",
              "type": "uint256"
            }
          ],
          "name": "RegisterVault",
          "type": "event"
        },
        "0xd4fbb16c279424bdd5e637a14cae7b00e68dd1529d7fa5ea6e8a1018af2f3fed": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            }
          ],
          "name": "VaultPublicKeyUpdate",
          "type": "event"
        },
        "0x602ceb96b9001fc15cee84bae42af52eebda91a7e70da69fd29563f5d42ca5f1": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "DecreaseToBeIssuedTokens",
          "type": "event"
        },
        "0x2a0e25b59dbe8659199b9249e7e3897b753e8483dcbe40a7403b48242c6f4d34": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "IncreaseToBeIssuedTokens",
          "type": "event"
        },
        "0xa40b2e156dca6a5cc9204c1172c822104aa5957e50a2e4785fe281a0460e01df": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "IncreaseToBeRedeemedTokens",
          "type": "event"
        },
        "0x6db487de54f8294da3728759b0a0d5eb1ea2177a28902ba11abc9e3e989dc99c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "issuedId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "confiscatedGriefingCollateral",
              "type": "uint256"
            }
          ],
          "name": "IssueAmountChange",
          "type": "event"
        },
        "0xda0c72f67f0b71f8afdd41fe90a21ca4d9e2a768778ed664031c7cae3998f32a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "IssueTokens",
          "type": "event"
        },
        "0x26899953ce5ec4fdd27150e3d625e33f84d65e89ccf4a2d960abc648b1b4df2a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "replaceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "btcAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "collateral",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "btcAddress",
              "type": "address"
            }
          ],
          "name": "AcceptReplace",
          "type": "event"
        },
        "0xa775fae59d2cebcb8a9ed353241e1ffbec944562fc7f662d1fa16018e62c20de": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "replaceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "slashedCollateral",
              "type": "uint256"
            }
          ],
          "name": "CancelReplace",
          "type": "event"
        },
        "0x4317750fb47a4dc685a826d40caf1dbf81881e792d205275e711b9054871f7aa": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "DecreaseToBeReplacedTokens",
          "type": "event"
        },
        "0x6e3e61fdf80541be797785f48ed6cf400134a61292f2f58f56efb3ab0a5cfa6c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "replaceId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVault",
              "type": "address"
            }
          ],
          "name": "ExecuteReplace",
          "type": "event"
        },
        "0xf052e4720689a6c9761eb963b628676705aa972a0ba9571c32440b9dcb785481": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "IncreaseToBeReplacedTokens",
          "type": "event"
        },
        "0x60213c45c34d8b94e495fd5871fdea7a7511f659e884ea25a0c8843b7f98bfad": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "RedeemTokens",
          "type": "event"
        },
        "0x5b2260440eaa72a266c31b81fcf06107588de293792678adc73df44ace679b0f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVaultId",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVaultId",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokens",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "collateral",
              "type": "uint256"
            }
          ],
          "name": "ReplaceTokens",
          "type": "event"
        },
        "0x8913ea7a41c7a2e297c14b401089285065174a3e4c4bb03671fc5b4f27591ddc": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "btcAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "griefingCollateral",
              "type": "uint256"
            }
          ],
          "name": "RequestReplace",
          "type": "event"
        },
        "0x0ceead0380d9573101bcc8983dfa55e3513b14230e275d1c84176e9b1d0be26b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "withdrawnTokens",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "withdrawnGriefingCollateral",
              "type": "uint256"
            }
          ],
          "name": "WithdrawReplace",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x010791748c7329b540A1fb308c89dbd9068284eB",
      "transactionHash": "0xe01bf95fa2c5baa484c78775b9ce302392e2728d22e0ae73b238e064a4795ad8"
    }
  },
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-21T13:38:14.720Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}; Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};
