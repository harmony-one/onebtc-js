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
    {
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
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "issueId",
          "type": "uint256"
        }
      ],
      "name": "getIssueAmount",
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
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "issueId",
          "type": "uint256"
        }
      ],
      "name": "getIssueBtcAddress",
      "outputs": [
        {
          "internalType": "address",
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
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "issueId",
          "type": "uint256"
        }
      ],
      "name": "getIssueStatus",
      "outputs": [
        {
          "internalType": "enum RequestStatus",
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
          "name": "requester",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemId",
          "type": "uint256"
        }
      ],
      "name": "getRedeemStatus",
      "outputs": [
        {
          "internalType": "enum RequestStatus",
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
          "internalType": "bytes",
          "name": "rawTx",
          "type": "bytes"
        }
      ],
      "name": "getHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "rawTx",
          "type": "bytes"
        }
      ],
      "name": "getHashView",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
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
          "name": "rawTx",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "header",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "merkleProof",
          "type": "bytes"
        }
      ],
      "name": "verifyTx",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
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
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IRelay\",\"name\":\"_relay\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"replaceId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"btcAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"AcceptReplace\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"replaceId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slashedCollateral\",\"type\":\"uint256\"}],\"name\":\"CancelReplace\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"DecreaseToBeIssuedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"DecreaseToBeReplacedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"replaceId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newVault\",\"type\":\"address\"}],\"name\":\"ExecuteReplace\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"IncreaseToBeIssuedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"IncreaseToBeRedeemedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"IncreaseToBeReplacedTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"issuedId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"confiscatedGriefingCollateral\",\"type\":\"uint256\"}],\"name\":\"IssueAmountChange\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"issudeId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"IssueCancel\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"issudeId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"IssueComplete\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"IssueRequest\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"IssueTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"LockCollateral\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"RedeemCancel\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"RedeemComplete\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"}],\"name\":\"RedeemRequest\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"RedeemTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"}],\"name\":\"RegisterVault\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ReleaseCollateral\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVaultId\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newVaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"}],\"name\":\"ReplaceTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"btcAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"griefingCollateral\",\"type\":\"uint256\"}],\"name\":\"RequestReplace\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"SlashCollateral\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"VaultPublicKeyUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldVault\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawnTokens\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawnGriefingCollateral\",\"type\":\"uint256\"}],\"name\":\"WithdrawReplace\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"CollateralBalances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"CollateralUsed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"TotalCollateral\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"oldVaultId\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"newVaultId\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"btcAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"}],\"name\":\"acceptReplace\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"threshold\",\"type\":\"uint256\"}],\"name\":\"calculateMaxWrappedFromCollateralForThreshold\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"}],\"name\":\"cancelIssue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"}],\"name\":\"cancelRedeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"merkleProof\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"},{\"internalType\":\"uint32\",\"name\":\"height\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"header\",\"type\":\"bytes\"}],\"name\":\"executeIssue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"merkleProof\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"},{\"internalType\":\"uint32\",\"name\":\"height\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"header\",\"type\":\"bytes\"}],\"name\":\"executeRedeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"replaceId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"merkleProof\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"},{\"internalType\":\"uint32\",\"name\":\"height\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"header\",\"type\":\"bytes\"}],\"name\":\"executeReplace\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"}],\"name\":\"getHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"}],\"name\":\"getHashView\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"}],\"name\":\"getIssueAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"}],\"name\":\"getIssueBtcAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"issueId\",\"type\":\"uint256\"}],\"name\":\"getIssueStatus\",\"outputs\":[{\"internalType\":\"enum RequestStatus\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"redeemId\",\"type\":\"uint256\"}],\"name\":\"getRedeemStatus\",\"outputs\":[{\"internalType\":\"enum RequestStatus\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"issuableTokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"issueRequests\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"opentime\",\"type\":\"uint256\"},{\"internalType\":\"address payable\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"btcPublicKey\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"griefingCollateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcHeight\",\"type\":\"uint256\"},{\"internalType\":\"enum RequestStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"issued\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lockAdditionalCollateral\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"realy\",\"outputs\":[{\"internalType\":\"contract IRelay\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"redeemRequests\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"opentime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountBtc\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"transferFeeBtc\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountOne\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"premiumOne\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"requester\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"btcHeight\",\"type\":\"uint256\"},{\"internalType\":\"enum RequestStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"}],\"name\":\"registerVault\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"replaceRequests\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"oldVault\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"newVault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"acceptTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"griefingCollateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcHeight\",\"type\":\"uint256\"},{\"internalType\":\"enum RequestStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountRequested\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"requestIssue\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOneBtc\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"btcAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"requestRedeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"oldVaultId\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"btcAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"griefingCollateral\",\"type\":\"uint256\"}],\"name\":\"requestReplace\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"secureCollateralThreshold\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"vaultId\",\"type\":\"address\"}],\"name\":\"toBeRedeemed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"}],\"name\":\"updatePublicKey\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"vaults\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyX\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"btcPublicKeyY\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"collateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"issued\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"toBeIssued\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"toBeRedeemed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"replaceCollateral\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"toBeReplaced\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"height\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"rawTx\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"header\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"merkleProof\",\"type\":\"bytes\"}],\"name\":\"verifyTx\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdrawCollateral\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}; Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol\":\"OneBtc\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Collateral.sol\":{\"keccak256\":\"0x768ef9314a318c81f63d1dbea13219e81270979c10b82c3b092495f545fed4c4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://baf7f07d176b48ec0f103030febff157382a0330ab001f5c2cafcf7bd0d86518\",\"dweb:/ipfs/QmUaH47tmaDuB4MBuAJZn3FX2JhwNa8md49eYgTSd3txnX\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/ExchangeRateOracle.sol\":{\"keccak256\":\"0xed1f0c823671b907ff41c76f09c47952c356a1a584ceec8a2ada375e69574f3a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2f49464819f8dbf0d6ee8c540f5e59c171faa9319192c483be9f335beba14a83\",\"dweb:/ipfs/QmTocKkgzofvMfqobUUoD2drmbgGTvhoURTDBtjDvTP8hr\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/IRelay.sol\":{\"keccak256\":\"0x9b9d6cb8b35ba9b87d3c80ac65c3a4ab148e58eba8d7daf71ffdb1719e977e4e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7acaca7f4573b1e3e72a67d2c1749898fc131af2b76ae2f60a955979a39f3441\",\"dweb:/ipfs/QmckP2gyAtVha5YoLTq9cD1WCjWkcZrQoSJpNtymoSwNzq\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Issue.sol\":{\"keccak256\":\"0x13beda835b2e238bcd38935c78db99b168e9ee9d5ea752c60cf0d2d2959b747e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://de0a25939300df54a73e04577505b40d76de25eaa2d2076d48b47968fabfd3bc\",\"dweb:/ipfs/QmU9sbtgxkaB5XxoCZjd5LagaHZFrjMebaCPayUDnXrhHX\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol\":{\"keccak256\":\"0xdb464dcdb7609bda7e955db91c11b97490da6eb64e45d43276b81e91ad927d14\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7b7f77ff5edcb921b97ad6f3f107df3e02cf8218318299f21212e73e40415ea8\",\"dweb:/ipfs/QmfUUfMBEmwwLu6J9CqB2akY3q8KVztoBG8Ycw45cNEqn6\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Redeem.sol\":{\"keccak256\":\"0x1387d0290c5da5ec051d2942252749247219d8247f730d3e39ad20bdb61fe156\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e6eaf9cc283ab2841861bd3b7c76ead0c35b831b46d3edf46136d98492aaed90\",\"dweb:/ipfs/QmckrJ6xS5d6QL38DyPvy28VaZDiq4Q6aLLWbU3Y4ywvsH\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Replace.sol\":{\"keccak256\":\"0x7d0bd81c96d0845d1144eda560ebc928d932c8e20b23963aa70b5dd8bc771423\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d79da7682f713e44d60b0708e5f77b685933633ab3294460b8d827c3f5b3b8e5\",\"dweb:/ipfs/QmX8rSvMtfLaadgQSXAGXZciGcULFDKrDSSBhhpzF6rtee\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Request.sol\":{\"keccak256\":\"0x650fd2d595ecd87b9798659098a01961bccced4bb40e82b8255d364e8d9d3a93\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9be893f742c7ab33aaca436a06657552e11b4f0f159d03f88e8a8e33284547f2\",\"dweb:/ipfs/QmeqqdWt7zntGSRqjGXGewRDPzbrX3VKqHhdMZ8qGdAFhB\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/TransactionUtils.sol\":{\"keccak256\":\"0xf62776682adfe3616f6840aee2f3e8cf5ab3e54541813792ee2a3a0d79c9265c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ecf8eb0bfdedc24dc0b77e11e24651653dcaf32132ed7de20b8fffea1b5807dd\",\"dweb:/ipfs/QmeL2HzZxp5TmvyZcLyQ3njQN9nF9szDhva7MyU72GbY8V\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/TxValidate.sol\":{\"keccak256\":\"0x2dca1644833fe8271bbf7ec780437b3468505209579e09ce5a21355b034752ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9fa111dfac31aaf88890384bf02f4f545eec5e9cc030af01e97ce2e1402ac869\",\"dweb:/ipfs/QmPQEnbFYFsAU5CsUzoB2EYoBRQ1Mz9y34eh9k4oFRZJjW\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/VaultRegistry.sol\":{\"keccak256\":\"0x147997299f835e007b194c7bcb45bcaca92429b24367b8a29a221d98f8fe15d0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c82b2d7a512e4caf49efe2b053e554d5586b55cacc30781eab8fd031ecddc3da\",\"dweb:/ipfs/QmQox6Wy7ZTTNTaygsR2TqL9qsuZrjCSGMbGA1dnnKxuBk\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/crypto/BitcoinKeyDerivation.sol\":{\"keccak256\":\"0xfa0ae3fcc5955015556293c3de02bd5dbfa456923a0eda6b5371fd9ed69a8bcd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e1255da4127cd133171fc24cabded3092b77552a3b77d972798e00a22a859be3\",\"dweb:/ipfs/QmcDVp7R2yJ7F12VoKFKs6GbgEeNmmZsKk4ndwdoUpJzPU\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/crypto/EllipticCurve.sol\":{\"keccak256\":\"0x4ed07e057e2636e1929dcba30d4ab1a6661c5bf4ad1109f5055b5591a8cc5317\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9a3de0c3c95b0c9fac7a48244a8b54ce82312942c0286c1394225bee2bae9e6d\",\"dweb:/ipfs/QmRuVjx2m2kHJiPDrqsqKEZS7M5uvAYL5Z1Gvsu5zW1Wib\"]},\"/Users/yuriy/pro5/onebtc/contract/bridge/contracts/crypto/Secp256k1.sol\":{\"keccak256\":\"0xafa60dd4f85b23db1534483a3cf4ce384f4c5b353d1a8ba84b1c314b0ecb74f7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c30a928f24e00f9a18a329066163a2c98e74194c790396fc0ed9c6baad2c5349\",\"dweb:/ipfs/QmaNZodNXimZE6FHcVAmJ1P8W9peEMubqJw9aDaFzdgY3Z\"]},\"@interlay/bitcoin-spv-sol/contracts/BTCUtils.sol\":{\"keccak256\":\"0xd7eee94c52175b8624f9673864a402ebb97e0f79d0eabbe1caaa83a12e48fbf4\",\"license\":\"LGPL-3.0-only\",\"urls\":[\"bzz-raw://1b6370e92ad1f73ef163e5d56f2c0105473fe8d7ad3833e53b177406f8c77be0\",\"dweb:/ipfs/QmNsZsNAufKFMZVzKgF1zB8gWYHkcqdcxSzuftfP9U6NfY\"]},\"@interlay/bitcoin-spv-sol/contracts/BytesLib.sol\":{\"keccak256\":\"0x303aced280e63a47a8fb1cce36f6c869c158dd49d4dee52b7e278419586fc10a\",\"license\":\"LGPL-3.0-only\",\"urls\":[\"bzz-raw://e70a490446911a1f77189259b9e95d0077d30e6770794960f92b0a88145dd973\",\"dweb:/ipfs/QmYCNsZHqyR1VoZqdAX7skJdyJt4XTFcJcGvcajExf3JQr\"]},\"@interlay/bitcoin-spv-sol/contracts/SafeMath.sol\":{\"keccak256\":\"0x81f2c4caf58215707c77cbb6607ffa46e61cbe1b12637a831ba3cf81c6b05fe6\",\"license\":\"LGPL-3.0-only\",\"urls\":[\"bzz-raw://6880cf52ff472f606d0584487740acc7fc520289119993dc23c3d5f76082b1e2\",\"dweb:/ipfs/QmcPzVZPd7faxQyzd4BnL3W4PmUxHWaqL9DeoizjrPCGBw\"]},\"@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol\":{\"keccak256\":\"0x0b0515de20f8c4020a6a31bfed3e3eb76f9a51061650703c7900648355998199\",\"license\":\"LGPL-3.0-only\",\"urls\":[\"bzz-raw://9b577f55ca3703ef863b99a196dc3f38572515f93a3a4c6bfda2df2bc507ec51\",\"dweb:/ipfs/QmUN52TmsRBkbpU7FCSKLt5Mk9YrajB5Hxg6XuEkvP9tLS\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/math/Math.sol\":{\"keccak256\":\"0x6c234834003dfb86e2c23d12dfdde7cc01e78013d71b52162cb308b4873562cb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f0e3f39b2ec26694a42c89a5d9e489d5228f1880fcf5e375c5c975ba816e5ffe\",\"dweb:/ipfs/QmUErheHopnbBUSLDQAtWsmw6HsEvqTNp1QiBEuSJhmhHn\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xf204d98eef08edacf5a02a2af1516ea4febdb6aba7a1ae5ac8deb6e568fd3dbb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c4dea62bffbd180772a6cfe7cb90e3a045c52d6b502bdb2fdff83193da42d8d0\",\"dweb:/ipfs/QmW8qGZ5nngajmv5Aamdrpkeuq7S5YCVaR7rtcqNekKHtK\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162005dd338038062005dd3833981810160405260208110156200003757600080fd5b50516040805180820182526006808252654f6e6542746360d01b6020838101828152855180870190965292855284015281519192916200007a91600391620000e8565b50805162000090906004906020840190620000e8565b50506005805460ff1916601217905550620000ac6008620000d2565b600d80546001600160a01b0319166001600160a01b039290921691909117905562000184565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b615c3f80620001946000396000f3fe6080604052600436106102675760003560e01c806393c9abfb11610144578063b00140aa116100b6578063db8e699b1161007a578063db8e699b14610f76578063dd304b1a14610faf578063dd62ed3e14611009578063e963361c14611044578063f02d7ef01461107d578063f4ffee5a146110b057610267565b8063b00140aa14610718578063c50c821414610c71578063c5387e8f14610db3578063c8c7fa0014610ef5578063d4bcb1e914610f3d57610267565b806399891792116101085780639989179214610a1d578063a1a97ca914610a25578063a457c2d714610a5e578063a463bfc714610a97578063a622ee7c14610bc4578063a9059cbb14610c3857610267565b806393c9abfb146107cc5780639446a5b4146107ff57806395d89b411461082f578063978f28dd146108445780639908cd7d1461097857610267565b8063489a1759116101dd5780636112fe2e116101a15780636112fe2e1461064e57806370a082311461067857806377d6b7ca146106ab5780637d41c86e146106d7578063873b7f7b1461071857806390336df21461079357610267565b8063489a1759146104e15780634b26a78d146105145780634d01f27b14610529578063500e9d511461055957806355061bb81461061b57610267565b80631bee398f1161022f5780631bee398f146103d157806323b872dd146103f45780632db99b1414610437578063313ce5671461046857806334e2624b1461049357806339509351146104a857610267565b806306fdde031461026c578063095ea7b3146102f657806316e139bb146103435780631704b9a61461038857806318160ddd146103bc575b600080fd5b34801561027857600080fd5b506102816111cd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102bb5781810151838201526020016102a3565b50505050905090810190601f1680156102e85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561030257600080fd5b5061032f6004803603604081101561031957600080fd5b506001600160a01b038135169060200135611263565b604080519115158252519081900360200190f35b34801561034f57600080fd5b506103766004803603602081101561036657600080fd5b50356001600160a01b0316611281565b60408051918252519081900360200190f35b6103ba6004803603606081101561039e57600080fd5b506001600160a01b0381351690602081013590604001356112a3565b005b3480156103c857600080fd5b506103766112b3565b6103ba600480360360408110156103e757600080fd5b50803590602001356112b9565b34801561040057600080fd5b5061032f6004803603606081101561041757600080fd5b506001600160a01b038135811691602081013590911690604001356113bc565b34801561044357600080fd5b5061044c611444565b604080516001600160a01b039092168252519081900360200190f35b34801561047457600080fd5b5061047d611453565b6040805160ff9092168252519081900360200190f35b34801561049f57600080fd5b5061037661145c565b3480156104b457600080fd5b5061032f600480360360408110156104cb57600080fd5b506001600160a01b038135169060200135611460565b3480156104ed57600080fd5b506103766004803603602081101561050457600080fd5b50356001600160a01b03166114ae565b34801561052057600080fd5b506103766114c0565b34801561053557600080fd5b506103ba6004803603604081101561054c57600080fd5b50803590602001356114c5565b34801561056557600080fd5b506105926004803603604081101561057c57600080fd5b506001600160a01b03813516906020013561156a565b604051808d6001600160a01b031681526020018c81526020018b81526020018a8152602001898152602001888152602001878152602001868152602001856001600160a01b03168152602001846001600160a01b031681526020018381526020018260038111156105ff57fe5b81526020019c5050505050505050505050505060405180910390f35b34801561062757600080fd5b506103766004803603602081101561063e57600080fd5b50356001600160a01b03166115e4565b34801561065a57600080fd5b506103ba6004803603602081101561067157600080fd5b50356115f6565b34801561068457600080fd5b506103766004803603602081101561069b57600080fd5b50356001600160a01b031661166a565b6103ba600480360360408110156106c157600080fd5b50803590602001356001600160a01b0316611685565b3480156106e357600080fd5b506103ba600480360360608110156106fa57600080fd5b508035906001600160a01b0360208201358116916040013516611691565b34801561072457600080fd5b506103766004803603602081101561073b57600080fd5b810190602081018135600160201b81111561075557600080fd5b82018360208201111561076757600080fd5b803590602001918460018302840111600160201b8311171561078857600080fd5b50909250905061169d565b34801561079f57600080fd5b506103ba600480360360408110156107b657600080fd5b506001600160a01b0381351690602001356116e7565b3480156107d857600080fd5b50610376600480360360208110156107ef57600080fd5b50356001600160a01b03166116f1565b34801561080b57600080fd5b506103766004803603604081101561082257600080fd5b5080359060200135611706565b34801561083b57600080fd5b5061028161171d565b34801561085057600080fd5b506103ba600480360360c081101561086757600080fd5b81359190810190604081016020820135600160201b81111561088857600080fd5b82018360208201111561089a57600080fd5b803590602001918460018302840111600160201b831117156108bb57600080fd5b919390929091602081019035600160201b8111156108d857600080fd5b8201836020820111156108ea57600080fd5b803590602001918460018302840111600160201b8311171561090b57600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b81111561093a57600080fd5b82018360208201111561094c57600080fd5b803590602001918460018302840111600160201b8311171561096d57600080fd5b50909250905061177e565b34801561098457600080fd5b506109a26004803603602081101561099b57600080fd5b50356117a8565b604051808b6001600160a01b031681526020018a6001600160a01b03168152602001898152602001888152602001878152602001866001600160a01b03168152602001858152602001848152602001838152602001826003811115610a0357fe5b81526020019a505050505050505050505060405180910390f35b6103ba61180b565b348015610a3157600080fd5b5061037660048036036040811015610a4857600080fd5b506001600160a01b03813516906020013561187b565b348015610a6a57600080fd5b5061032f60048036036040811015610a8157600080fd5b506001600160a01b0381351690602001356118a6565b348015610aa357600080fd5b50610281600480360360a0811015610aba57600080fd5b63ffffffff82351691602081013591810190606081016040820135600160201b811115610ae657600080fd5b820183602082011115610af857600080fd5b803590602001918460018302840111600160201b83111715610b1957600080fd5b919390929091602081019035600160201b811115610b3657600080fd5b820183602082011115610b4857600080fd5b803590602001918460018302840111600160201b83111715610b6957600080fd5b919390929091602081019035600160201b811115610b8657600080fd5b820183602082011115610b9857600080fd5b803590602001918460018302840111600160201b83111715610bb957600080fd5b50909250905061190e565b348015610bd057600080fd5b50610bf760048036036020811015610be757600080fd5b50356001600160a01b0316611b12565b604080519889526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b348015610c4457600080fd5b5061032f60048036036040811015610c5b57600080fd5b506001600160a01b038135169060200135611b55565b348015610c7d57600080fd5b506103ba600480360360e0811015610c9457600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b811115610cc357600080fd5b820183602082011115610cd557600080fd5b803590602001918460018302840111600160201b83111715610cf657600080fd5b919390929091602081019035600160201b811115610d1357600080fd5b820183602082011115610d2557600080fd5b803590602001918460018302840111600160201b83111715610d4657600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b811115610d7557600080fd5b820183602082011115610d8757600080fd5b803590602001918460018302840111600160201b83111715610da857600080fd5b509092509050611b69565b348015610dbf57600080fd5b506103ba600480360360e0811015610dd657600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b811115610e0557600080fd5b820183602082011115610e1757600080fd5b803590602001918460018302840111600160201b83111715610e3857600080fd5b919390929091602081019035600160201b811115610e5557600080fd5b820183602082011115610e6757600080fd5b803590602001918460018302840111600160201b83111715610e8857600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b811115610eb757600080fd5b820183602082011115610ec957600080fd5b803590602001918460018302840111600160201b83111715610eea57600080fd5b509092509050611b95565b6103ba600480360360c0811015610f0b57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a00135611bb4565b348015610f4957600080fd5b506103ba60048036036040811015610f6057600080fd5b506001600160a01b038135169060200135611bca565b348015610f8257600080fd5b5061044c60048036036040811015610f9957600080fd5b506001600160a01b038135169060200135611bd4565b348015610fbb57600080fd5b50610fe860048036036040811015610fd257600080fd5b506001600160a01b038135169060200135611bff565b60405180826003811115610ff857fe5b815260200191505060405180910390f35b34801561101557600080fd5b506103766004803603604081101561102c57600080fd5b506001600160a01b0381358116916020013516611c2d565b34801561105057600080fd5b50610fe86004803603604081101561106757600080fd5b506001600160a01b038135169060200135611c58565b34801561108957600080fd5b50610376600480360360208110156110a057600080fd5b50356001600160a01b0316611c86565b3480156110bc57600080fd5b506110e9600480360360408110156110d357600080fd5b506001600160a01b038135169060200135611ca4565b604051808c6001600160a01b031681526020018b81526020018a6001600160a01b03168152602001896001600160a01b031681526020018060200188815260200187815260200186815260200185815260200184815260200183600381111561114e57fe5b8152602001828103825289818151815260200191508051906020019080838360005b83811015611188578181015183820152602001611170565b50505050905090810190601f1680156111b55780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156112595780601f1061122e57610100808354040283529160200191611259565b820191906000526020600020905b81548152906001019060200180831161123c57829003601f168201915b5050505050905090565b6000611277611270611d9c565b8484611da0565b5060015b92915050565b6001600160a01b0381166000908152600860205260409020600501545b919050565b6112ae838383611e8c565b505050565b60025490565b336000818152600860205260409020805415611309576040805162461bcd60e51b815260206004820152600a6024820152691d985d5b1d115e1a5cdd60b21b604482015290519081900360640190fd5b831580159061131757508215155b611358576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c69645075626b657960981b604482015290519081900360640190fd5b8381556001810183905561136a61180b565b604080513481526020810186905280820185905290516001600160a01b038416917f49fd9cc8f07d8a3a7cf7160535b6b0ce95d90fe87662605e19d90028ceb3aa3b919081900360600190a250505050565b60006113c984848461201c565b611439846113d5611d9c565b61143485604051806060016040528060288152602001615ae1602891396001600160a01b038a16600090815260016020526040812090611413611d9c565b6001600160a01b031681526020810191909152604001600020549190612177565b611da0565b5060015b9392505050565b600d546001600160a01b031681565b60055460ff1690565b4790565b600061127761146d611d9c565b84611434856001600061147e611d9c565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061220e565b60066020526000908152604090205481565b609681565b3360008181526008602052604090208054611517576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b83815560018101839055604080518581526020810185905281516001600160a01b038516927fd4fbb16c279424bdd5e637a14cae7b00e68dd1529d7fa5ea6e8a1018af2f3fed928290030190a250505050565b600b602081815260009384526040808520909152918352912080546001820154600283015460038401546004850154600586015460068701546007880154600889015460098a0154600a8b01549a909b01546001600160a01b03998a169b989a979996989597949693959294918416939092169160ff168c565b60076020526000908152604090205481565b3360009081526008602052604090208054611648576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60028101546116579083612268565b600282015561166633836122aa565b5050565b6001600160a01b031660009081526020819052604090205490565b611666338383346122fd565b6112ae33848484612531565b6000806116df84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061274792505050565b949350505050565b6116668282612878565b6000806116fd83612a23565b905061143d8160965b600061143d82611717856064612a50565b90612aa9565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156112595780601f1061122e57610100808354040283529160200191611259565b60606117908585898987878f8f61190e565b905061179c8a82612aeb565b50505050505050505050565b600c6020526000908152604090208054600182015460028301546003840154600485015460058601546006870154600788015460088901546009909901546001600160a01b03988916999789169896979596949593909416939192909160ff168a565b336000818152600860205260409020805461185d576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600281015461186c903461220e565b60028201556116668234612c42565b6001600160a01b03919091166000908152600a60209081526040808320938352929052206005015490565b60006112776118b3611d9c565b8461143485604051806060016040528060258152602001615be560259139600160006118dd611d9c565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190612177565b6060600061195188888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061274792505050565b9050600d60009054906101000a90046001600160a01b03166001600160a01b031663acf974348b8b848a8a8a8a6001806040518a63ffffffff1660e01b8152600401808a63ffffffff168152602001898152602001888152602001806020018060200185815260200184151581526020018381038352898982818152602001925080828437600083820152601f01601f191690910184810383528781526020019050878780828437600081840152601f19601f8201169050808301925050509b50505050505050505050505060206040518083038186803b158015611a3557600080fd5b505afa158015611a49573d6000803e3d6000fd5b505050506040513d6020811015611a5f57600080fd5b50611a6a9050615953565b611aa989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612d0a92505050565b9050806060015163ffffffff16600014611b00576040805162461bcd60e51b81526020600482015260136024820152726c6f636b74696d65206d757374207a65726f2160681b604482015290519081900360640190fd5b604001519a9950505050505050505050565b6008602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460079097015495969495939492939192909188565b6000611277611b62611d9c565b848461201c565b6060611b7b8585898987878f8f61190e565b9050611b888b8b83612e64565b5050505050505050505050565b6060611ba78585898987878f8f61190e565b9050611b888b8b83613117565b611bc2868686868686613293565b505050505050565b611666828261365f565b6001600160a01b039182166000908152600a6020908152604080832093835292905220600301541690565b6001600160a01b03919091166000908152600b60208181526040808420948452939052919020015460ff1690565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03919091166000908152600a60208181526040808420948452939052919020015460ff1690565b6001600160a01b031660009081526008602052604090206003015490565b600a6020908152600092835260408084208252918352918190208054600180830154600280850154600386015460048701805489516101009782161597909702600019011693909304601f81018a90048a0286018a019098528785526001600160a01b03958616989397918616969516949392830182828015611d685780601f10611d3d57610100808354040283529160200191611d68565b820191906000526020600020905b815481529060010190602001808311611d4b57829003601f168201915b50505060058401546006850154600786015460088701546009880154600a9098015496979396929550909350919060ff168b565b3390565b6001600160a01b038316611de55760405162461bcd60e51b8152600401808060200182810382526024815260200180615bc16024913960400191505060405180910390fd5b6001600160a01b038216611e2a5760405162461bcd60e51b81526004018080602001828103825260228152602001806159eb6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b336001600160a01b03841614611ed35760405162461bcd60e51b8152600401808060200182810382526024815260200180615a0d6024913960400191505060405180910390fd5b6000611ede846137eb565b90506000611eec8285613871565b9050828415611f0357611f00848387613887565b90505b600080611f118885856138af565b915091506000611f1f613993565b905080831015611f6e576040805162461bcd60e51b8152602060048201526015602482015274105b5bdd5b9d10995b1bddd11d5cdd105b5bdd5b9d605a1b604482015290519081900360640190fd5b81611f7884613998565b1115611fc4576040805162461bcd60e51b8152602060048201526016602482015275125b9cdd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b611fce8985612c42565b604080518681526020810186905281516001600160a01b038c16927f8913ea7a41c7a2e297c14b401089285065174a3e4c4bb03671fc5b4f27591ddc928290030190a2505050505050505050565b6001600160a01b0383166120615760405162461bcd60e51b8152600401808060200182810382526025815260200180615b9c6025913960400191505060405180910390fd5b6001600160a01b0382166120a65760405162461bcd60e51b81526004018080602001828103825260238152602001806159a66023913960400191505060405180910390fd5b6120b18383836112ae565b6120ee81604051806060016040528060268152602001615a52602691396001600160a01b0386166000908152602081905260409020549190612177565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461211d908261220e565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156122065760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121cb5781810151838201526020016121b3565b50505050905090810190601f1680156121f85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008282018381101561143d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061143d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612177565b6122b582838361399b565b604080516001600160a01b03841681526020810183905281517f943defbd695c6a58b5dbd0fcccb150d25f2fd14a5ebba6cb6b0d9e33651191d4929181900390910190a15050565b8061230784613998565b1115612353576040805162461bcd60e51b8152602060048201526016602482015275125b9cdd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b61235d8284613af0565b6123a4576040805162461bcd60e51b8152602060048201526013602482015272115e18d959591a5b99d5985d5b1d131a5b5a5d606a1b604482015290519081900360640190fd5b60006123af85613b86565b905060006123bd8483613bd1565b905060006123ca86613ce3565b6001600160a01b0388166000908152600a6020908152604080832087845290915281209192508288039190600a82015460ff16600381111561240857fe5b1461244c576040805162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c995c5d595cdd608a1b604482015290519081900360640190fd5b80546001600160a01b03199081166001600160a01b038981169190911783554260018085019190915560028401805484168d84161790819055600385018054909416888416179093556005840185905560068401869055600784018990556202a300600885015560006009850155600a8401805460ff191690911790556124d4911687612c42565b60408051838152602081018590526001600160a01b03868116828401529151828a16928c169188917f0279f22d36b78c19957d9d6d792e3625dfb99d644e30be9a850aab76b63b25949181900360600190a4505050505050505050565b61253b8484613cf0565b600061254684613cfb565b90506000612552613993565b9050818503818103600061256589613b86565b90506125718684613d01565b6125c2576040805162461bcd60e51b815260206004820152601b60248201527f496e73756666696369656e74546f6b656e73436f6d6d69747465640000000000604482015290519081900360640190fd5b6001600160a01b0389166000908152600b60209081526040808320848452909152812090600b82015460ff1660038111156125f957fe5b1461263d576040805162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c995c5d595cdd608a1b604482015290519081900360640190fd5b80546001600160a01b0319166001600160a01b0388161781554260018201556202a300600282015560038101869055600581018590556004810183905561268383613998565b600682018190556008820180546001600160a01b038d81166001600160a01b031992831617909255600984018054928c1692909116919091179055600b8201805460ff191660011790556126d8908890613d97565b6004810154600382015460098301546040805193845260208401929092526001600160a01b03908116838301529051818a1692918d169185917fde2047174185f9a5da05491e50e701207a1e4622bd87cca82c1a866d4382a9a79181900360600190a450505050505050505050565b6000600280836040518082805190602001908083835b6020831061277c5780518252601f19909201916020918201910161275d565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156127bb573d6000803e3d6000fd5b5050506040513d60208110156127d057600080fd5b50516040805160208181019390935281518082038401815290820191829052805190928291908401908083835b6020831061281c5780518252601f1990920191602091820191016127fd565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa15801561285b573d6000803e3d6000fd5b5050506040513d602081101561287057600080fd5b505192915050565b6001600160a01b0382166000908152600b6020908152604080832084845290915290206001600b82015460ff1660038111156128b057fe5b146128f9576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b80600201548160010154014211612948576040805162461bcd60e51b815260206004820152600e60248201526d151a5b59539bdd115e1c1a5c995960921b604482015290519081900360640190fd5b600b8101805460ff19166003908117909155600882015490820154600483015461297c926001600160a01b03169101613e2c565b80546006820154612996916001600160a01b031690613e37565b8054600882015460068301546129b9926001600160a01b03908116921690613ee0565b80546004820154600383015460098401546040805193845260208401929092526001600160a01b03908116838301529051928116929086169185917f1fa2e68649c87d957477ccbe3c5a6af2bfde7f94bcdc6dc5b8944ef329ba25f49181900360600190a4505050565b6001600160a01b038116600090815260076020908152604080832054600690925282205461127b91612268565b600082612a5f5750600061127b565b82820282848281612a6c57fe5b041461143d5760405162461bcd60e51b8152600401808060200182810382526021815260200180615ac06021913960400191505060405180910390fd5b600061143d83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613f3a565b6000828152600c602052604090206001600982015460ff166003811115612b0e57fe5b14612b57576040805162461bcd60e51b815260206004820152601460248201527357726f6e6720726571756573742073746174757360601b604482015290519081900360640190fd5b8054600182015460058301546001600160a01b039283169291821691600091612b8591879184911689613f9f565b90508360040154811015612bca5760405162461bcd60e51b8152600401808060200182810382526024815260200180615b786024913960400191505060405180910390fd5b612bde838386600401548760020154614000565b612bec8385600601546122aa565b816001600160a01b0316836001600160a01b0316877f6e3e61fdf80541be797785f48ed6cf400134a61292f2f58f56efb3ab0a5cfa6c60405160405180910390a4505050600901805460ff191660021790555050565b80341015612c8b576040805162461bcd60e51b8152602060048201526011602482015270125b9d985b1a5910dbdb1b185d195c985b607a1b604482015290519081900360640190fd5b6001600160a01b038216600090815260066020526040902054612cae908261220e565b6001600160a01b03831660008181526006602090815260409182902093909355805191825291810183905281517fa26b43a600355250ae61523a4d3a1269abbbbf462b22c633d629920603d05e45929181900390910190a15050565b612d12615953565b815160046060612d2485836002614124565b905080600081518110612d3357fe5b01602001516001600160f81b031916158015612d6e575080600181518110612d5757fe5b6020910101516001600160f81b031916600160f81b145b15612d7a578160020191505b81600080612d93612d8e8985808a03614124565b6141de565b91509150816001018501945060005b81811015612de057602486019550600080612dcd612d8e898a8c038e6141249092919063ffffffff16565b0197909701600501965050600101612da2565b506040805160808101909152859080612e04612dff8c60006004614124565b614264565b63ffffffff168152602001612e26868785038d6141249092919063ffffffff16565b8152602001612e3c8b84808c0360031901614124565b8152602001612e4f612dff8c60046142a9565b63ffffffff1690529998505050505050505050565b6001600160a01b0383166000908152600a6020908152604080832085845290915290206001600a82015460ff166003811115612e9c57fe5b14612ee5576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b6003810154600090612f0490849083906001600160a01b031687613f9f565b600683015460058401549192500180821015612fee5760028301546001600160a01b03163314612f6d576040805162461bcd60e51b815260206004820152600f60248201526e24b73b30b634b222bc32b1baba37b960891b604482015290519081900360640190fd5b825482820390612f86906001600160a01b0316826142ce565b6000612f9785600701548585613887565b6002860154909150612fb2906001600160a01b0316826122aa565b6007850154600286015486549183900391612fda916001600160a01b03908116911683613ee0565b612fe68887878461433e565b505050613040565b6002830154600784015461300b916001600160a01b0316906122aa565b808211156130405782548183039061302c906001600160a01b031682613af0565b1561303e5761303e868585600061433e565b505b600683015460058401548454910190613062906001600160a01b0316826143a2565b8354600685015461307c916001600160a01b031690614426565b60028401546005850154613099916001600160a01b031690614426565b600a8401805460ff1916600217905583546005850154600686015460038701546040805193845260208401929092526001600160a01b0390811683830152905192811692908a169189917f41ac549524df546b670900f16155b1ab138c8a69cb83091710e4824cf216c04e916060908290030190a450505050505050565b6001600160a01b0383166000908152600b6020908152604080832085845290915290206001600b82015460ff16600381111561314f57fe5b14613198576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b600481015460098201546131b79184916001600160a01b031686613f9f565b506131c58160040154614430565b805460038201546131df916001600160a01b031690613e2c565b600b8101805460ff1916600217905580546006820154613208916001600160a01b031690613e37565b805460058201546004830154613228926001600160a01b0316910161443d565b80546004820154600383015460098401546040805193845260208401929092526001600160a01b03908116838301529051928116929087169186917f3114b251c2a5058491738f973e62ec694147154211b993a430d788a72ca6d1949181900360600190a450505050565b336001600160a01b038616146132f0576040805162461bcd60e51b815260206004820181905260248201527f53656e6465722073686f756c64206265206e6577205661756c74206f776e6572604482015290519081900360640190fd5b846001600160a01b0316866001600160a01b031614156133415760405162461bcd60e51b8152600401808060200182810382526026815260200180615a9a6026913960400191505060405180910390fd5b6001600160a01b038087166000908152600860205260408082209288168252902081546133a5576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b80546133e8576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6000806133f58a896144c1565b915091506000613403613993565b905080831015613452576040805162461bcd60e51b8152602060048201526015602482015274105b5bdd5b9d10995b1bddd11d5cdd105b5bdd5b9d605a1b604482015290519081900360640190fd5b600061345f89858c613887565b905061346b8b826145d0565b6134758c85613d01565b506134808b85613af0565b50600061348c8d613b86565b9050600061349c8d8b8b85614635565b6000838152600c60205260408120919250600982015460ff1660038111156134c057fe5b14613512576040805162461bcd60e51b815260206004820152601c60248201527f54686973207265706c61636520616c7265616479206372656174656400000000604482015290519081900360640190fd5b8e8160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508d8160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550868160040181905550818160050160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508381600201819055508581600601819055506202a30081600701819055506000816008018190555060018160090160006101000a81548160ff021916908360038111156135df57fe5b0217905550600181015481546004830154600284015460058501546040805193845260208401929092526001600160a01b039081168383015290519381169392169186917f26899953ce5ec4fdd27150e3d625e33f84d65e89ccf4a2d960abc648b1b4df2a919081900360600190a4505050505050505050505050505050565b6001600160a01b0382166000908152600a6020908152604080832084845290915290206001600a82015460ff16600381111561369757fe5b146136e0576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b8060080154816001015401421161372f576040805162461bcd60e51b815260206004820152600e60248201526d151a5b59539bdd115e1c1a5c995960921b604482015290519081900360640190fd5b600a8101805460ff19166003179055600281015481546007830154613761926001600160a01b03908116921690613ee0565b805460068201546005830154613781926001600160a01b031691016142ce565b80546005820154600683015460038401546040805193845260208401929092526001600160a01b03908116838301529051928116929086169185917f45c7f0162772dc14d848f7fc10d09f8a007bba89c372e47f17d0c6b4a2e67f869181900360600190a4505050565b6001600160a01b03811660009081526008602052604081208054613846576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60006116df826007015461386b8460050154856003015461226890919063ffffffff16565b90612268565b6000818310613880578161143d565b5090919050565b600082158015613895575081155b156138a157508261143d565b6116df826117178686612a50565b6001600160a01b03831660009081526008602052604081208190816138d3876137eb565b9050808611156139145760405162461bcd60e51b815260040180806020018281038252604e815260200180615b09604e913960600191505060405180910390fd5b6007820154613923908761220e565b60078301556006820154613937908661220e565b60068301556040805187815290516001600160a01b038916917ff052e4720689a6c9761eb963b628676705aa972a0ba9571c32440b9dcb785481919081900360200190a281600701548260060154935093505050935093915050565b600090565b90565b6001600160a01b03831660009081526007602090815260408083205460069092529091205482916139cc9190612268565b1015613a18576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6001600160a01b038316600090815260066020526040902054613a3b9082612268565b6001600160a01b0380851660009081526006602052604080822093909355915184929183169084908381818185875af1925050503d8060008114613a9b576040519150601f19603f3d011682016040523d82523d6000602084013e613aa0565b606091505b5050905080613ae9576040805162461bcd60e51b815260206004820152601060248201526f2a3930b739b332b9103330b4b632b21760811b604482015290519081900360640190fd5b5050505050565b600080613afc846116f1565b905082811015613b1057600091505061127b565b6001600160a01b03841660009081526008602052604090206004810154613b37908561220e565b60048201556040805185815290516001600160a01b038716917f2a0e25b59dbe8659199b9249e7e3897b753e8483dcbe40a7403b48242c6f4d34919081900360200190a2506001949350505050565b600081600143034060405160200180836001600160a01b031660601b8152601401828152602001925050506040516020818303038152906040528051906020012060001c9050919050565b6001600160a01b03821660009081526008602052604081208054613c2c576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6000613c418260000154836001015486614741565b6001600160a01b038116600090815260088401602052604090205490915060ff1615613cb4576040805162461bcd60e51b815260206004820152601d60248201527f5468697320627463206164647265737320616c72656164792075736564000000604482015290519081900360640190fd5b6001600160a01b038116600090815260089092016020526040909120805460ff19166001179055905092915050565b6103e86002919091020490565b61166633308361201c565b50600090565b600080613d0d84614797565b905080831115613d2157600091505061127b565b6001600160a01b03841660009081526008602052604090206005810154613d48908561220e565b60058201556040805185815290516001600160a01b038716917fa40b2e156dca6a5cc9204c1172c822104aa5957e50a2e4785fe281a0460e01df919081900360200190a2506001949350505050565b6001600160a01b038216600090815260076020526040902054613dba908261220e565b6001600160a01b038316600090815260076020908152604080832084905560069091529020541015611666576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b61166630838361201c565b6001600160a01b038216600090815260076020526040902054811115613e9d576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6001600160a01b038216600090815260076020526040902054613ec09082612268565b6001600160a01b0390921660009081526007602052604090209190915550565b613eeb83838361399b565b604080516001600160a01b0380861682528416602082015280820183905290517f1f62766d3b94993a001005cb9b5296a3959ccda7944a7033caf75e04a0e7b33c9181900360600190a1505050565b60008183613f895760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121cb5781810151838201526020016121b3565b506000838581613f9557fe5b0495945050505050565b600080613fac86856147c2565b905084811015613ff7576040805162461bcd60e51b8152602060048201526011602482015270496e73756666696369656e7456616c756560781b604482015290519081900360640190fd5b95945050505050565b6001600160a01b03808516600090815260086020526040808220928616825290208154614064576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b80546140a7576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60038201546140b69085612268565b6003808401919091558101546140cc908561220e565b6003820155604080518581526020810185905281516001600160a01b0380891693908a16927f5b2260440eaa72a266c31b81fcf06107588de293792678adc73df44ace679b0f929081900390910190a3505050505050565b606081614140575060408051602081019091526000815261143d565b8282018381118015614153575080855110155b61419a576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b604051915082604083010160405282825283850182038460208701018481015b808210156141d3578151838301526020820191506141ba565b505050509392505050565b60008060006141ec846148ff565b905060ff81166142195760008460008151811061420557fe5b016020015190935060f81c915061425f9050565b8060010160ff1684511015614237576000196000925092505061425f565b6000614253612dff61424e87600160ff8716614124565b61497b565b60ff9092169350909150505b915091565b60008060005b83518110156142a2578060010184510360080260020a84828151811061428c57fe5b016020015160f81c02919091019060010161426a565b5092915050565b606060006142c1838551614a1890919063ffffffff16565b90506116df848285614124565b6001600160a01b038216600090815260086020526040902060048101546142f59083612268565b60048201556040805183815290516001600160a01b038516917f602ceb96b9001fc15cee84bae42af52eebda91a7e70da69fd29563f5d42ca5f1919081900360200190a2505050565b61434782613ce3565b6006840181905580830360058501819055604080519182526020820192909252808201839052905185917f6db487de54f8294da3728759b0a0d5eb1ea2177a28902ba11abc9e3e989dc99c919081900360600190a250505050565b6001600160a01b038216600090815260086020526040902060038101546143c9908361220e565b600382015560048101546143dd9083612268565b60048201556040805183815290516001600160a01b038516917fda0c72f67f0b71f8afdd41fe90a21ca4d9e2a768778ed664031c7cae3998f32a919081900360200190a2505050565b6116668282614a75565b61443a3082614b65565b50565b6001600160a01b038216600090815260086020526040902060058101546144649083612268565b600582015560038101546144789083612268565b60038201556040805183815290516001600160a01b038516917f60213c45c34d8b94e495fd5871fdea7a7511f659e884ea25a0c8843b7f98bfad919081900360200190a2505050565b6001600160a01b0382166000908152600860205260408120805482919061451f576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600061452f826007015486613871565b905060006145468360060154838560070154613887565b90506000614558846006015483613871565b600785015490915061456a9084612268565b6007850155600684015461457e9082612268565b60068501556040805184815290516001600160a01b038a16917f4317750fb47a4dc685a826d40caf1dbf81881e792d205275e711b9054871f7aa919081900360200190a2919791965090945050505050565b6001600160a01b0382166000908152600860205260409020805461462b576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6112ae8383612c42565b6001600160a01b03841660009081526008602052604081208054614690576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600061469d868686614741565b6001600160a01b038116600090815260088401602052604090205490915060ff1615614710576040805162461bcd60e51b815260206004820152601d60248201527f5468697320627463206164647265737320616c72656164792075736564000000604482015290519081900360640190fd5b6001600160a01b038116600090815260089092016020526040909120805460ff191660011790559050949350505050565b60408051602080820186905281830185905260608083018590528351808403909101815260809092019092528051910120600090614780818686614c61565b9095509350613ff76147928686614cda565b614d16565b6001600160a01b03811660009081526008602052604081206005810154600382015461143d91612268565b6000806147ce846141de565b91505060006147de826003613871565b905060606000805b8381101561489b5760606147fa8983614e41565b905083516000141561481f5761480f8161500b565b80519094501561481f5750614893565b876001600160a01b0316836001600160a01b0316146148915760606148438261507c565b90508051601414801561487157506001600160a01b0389166148668260006152a9565b6001600160a01b0316145b1561488f5761487f8261530b565b67ffffffffffffffff1697508893505b505b505b6001016147e6565b50856001600160a01b0316816001600160a01b0316146148f5576040805162461bcd60e51b815260206004820152601060248201526f125b9d985b1a59149958da5c1a595b9d60821b604482015290519081900360640190fd5b5050505092915050565b60008160008151811061490e57fe5b60209101015160f81c60ff14156149275750600861129e565b8160008151811061493457fe5b60209101015160f81c60fe141561494d5750600461129e565b8160008151811061495a57fe5b60209101015160f81c60fd14156149735750600261129e565b506000919050565b606080825167ffffffffffffffff8111801561499657600080fd5b506040519080825280601f01601f1916602001820160405280156149c1576020820181803683370190505b50905060005b83518110156142a2578381815181106149dc57fe5b602001015160f81c60f81b8260018387510303815181106149f957fe5b60200101906001600160f81b031916908160001a9053506001016149c7565b600082821115614a6f576040805162461bcd60e51b815260206004820152601d60248201527f556e646572666c6f7720647572696e67207375627472616374696f6e2e000000604482015290519081900360640190fd5b50900390565b6001600160a01b038216614ad0576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b614adc600083836112ae565b600254614ae9908261220e565b6002556001600160a01b038216600090815260208190526040902054614b0f908261220e565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216614baa5760405162461bcd60e51b8152600401808060200182810382526021815260200180615b576021913960400191505060405180910390fd5b614bb6826000836112ae565b614bf3816040518060600160405280602281526020016159c9602291396001600160a01b0385166000908152602081905260409020549190612177565b6001600160a01b038316600090815260208190526040902055600254614c199082612268565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60008070014551231950b75fc4402da1732fc9bebe198506614cba576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c6964207363616c6560981b604482015290519081900360640190fd5b614cce85858560006401000003d019615330565b91509150935093915050565b6040805160019290921660020160f81b6001600160f81b0319166020830152602180830193909352805180830390930183526041909101905290565b600060036002836040518082805190602001908083835b60208310614d4c5780518252601f199092019160209182019101614d2d565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015614d8b573d6000803e3d6000fd5b5050506040513d6020811015614da057600080fd5b50516040805160208181019390935281518082038401815290820191829052805190928291908401908083835b60208310614dec5780518252601f199092019160209182019101614dcd565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015614e2b573d6000803e3d6000fd5b5050604051516001600160a01b03169392505050565b6060600080614e4f856141de565b9092509050600019821415614e955760405162461bcd60e51b8152600401808060200182810382526022815260200180615a786022913960400191505060405180910390fd5b808410614edd576040805162461bcd60e51b81526020600482015260116024820152702b37baba103932b0b21037bb32b9393ab760791b604482015290519081900360640190fd5b6060600060018401815b87811015614f7757614f0782838b51038b6141249092919063ffffffff16565b9350614f128461536a565b9250600019831415614f6b576040805162461bcd60e51b815260206004820152601a60248201527f42616420566172496e7420696e207363726970745075626b6579000000000000604482015290519081900360640190fd5b90820190600101614ee7565b50614f9081828a51038a6141249092919063ffffffff16565b9250614f9b8361536a565b9150600019821415614ff4576040805162461bcd60e51b815260206004820152601a60248201527f42616420566172496e7420696e207363726970745075626b6579000000000000604482015290519081900360640190fd5b614fff888284614124565b98975050505050505050565b60607fb31d742db54d6961c6b346af2c9c4c495eb8aff2ebf6b3699e052d1cef5cf50b61503b83600960016153d0565b14615055575060408051602081019091526000815261129e565b606061506483600a6001614124565b905061143d600b61507483614264565b859190614124565b606060008260088151811061508d57fe5b0160200151835160f89190911c91506009820160ff16146150be57505060408051602081019091526000815261129e565b826009815181106150cb57fe5b016020015160f81c6151685760028160ff1610156150f957505060408051602081019091526000815261129e565b600083600a8151811061510857fe5b016020015160f81c9050600119820160ff1681141580615135575080602014158015615135575080601414155b1561515357604051806020016040528060008152509250505061129e565b61515f84600b83614124565b9250505061129e565b600061517784600860036153d0565b90507fe1683aec1a10d43657f3f2c82e683d8e19e8a3f320ce9d3bf22c6ca6ab4cbce68114156152245783600b815181106151ae57fe5b60209101015160f81c60141415806151f9575083517f3b50b2715f5a28d2a7eeb517f17ec797e8536bd425bf31fc4f6bf7ce1e34b77d906151f69086906001190160026153d0565b14155b1561521757604051806020016040528060008152509250505061129e565b61515f84600c6014614124565b7fa0916ee0b243ee20fb4ce56170744d86b54d7ae03a418a7a12156f40dedcf7d7811415615292578360018551038151811061525c57fe5b60209101015160f81c60871461528557604051806020016040528060008152509250505061129e565b61515f84600b6014614124565b505050604080516020810190915260008152919050565b60006014820182811180156152bf575080845110155b6152fa5760405162461bcd60e51b8152600401808060200182810382526021815260200180615a316021913960400191505060405180910390fd5b50500160200151600160601b900490565b6000606061531883615437565b905060606153258261497b565b90506116df81614264565b60008060008060006153478a8a8a60018b8b615446565b925092509250615359838383896154bd565b945094505050509550959350505050565b600060098251101561537f575060001961129e565b606061539a600880855103856141249092919063ffffffff16565b90506000806153a8836141de565b90925090506000198214156153c457600019935050505061129e565b01600901915050919050565b600082820183811180156153e5575080855110155b61542c576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b505091016020012090565b606061127b8260006008614124565b600080808861545c5750869150859050846154b1565b8860008060015b83156154a8576001841615615489576154818383838f8f8f8e615514565b919450925090505b60028404935061549c8c8c8c8c8c615791565b919d509b509950615463565b91955093509150505b96509650969350505050565b60008060006154cc85856158a7565b9050600084806154d857fe5b8283099050600085806154e757fe5b828a099050600086806154f657fe5b87806154fe57fe5b8486098a09919a91995090975050505050505050565b6000808089158015615524575088155b15615536575085915084905083615784565b86158015615542575085155b15615554575088915087905086615784565b61555c615987565b848061556457fe5b898a098152848061557157fe5b81518a096020820152848061558257fe5b8687096040820152848061559257fe5b60408201518709606082015260408051608081019091528086806155b257fe5b60408401518e09815260200186806155c657fe5b60608401518d09815260200186806155da57fe5b83518b09815260200186806155eb57fe5b60208401518a0990526040810151815191925014158061561357506060810151602082015114155b615664576040805162461bcd60e51b815260206004820152601e60248201527f557365206a6163446f75626c652066756e6374696f6e20696e73746561640000604482015290519081900360640190fd5b61566c615987565b858061567457fe5b8251604084015190880390088152858061568a57fe5b602083015160608401519088039008602082015285806156a657fe5b81518009604082015285806156b757fe5b81516040830151096060820152600086806156ce57fe5b6060830151880388806156dd57fe5b6020850151800908905086806156ef57fe5b87806156f757fe5b88806156ff57fe5b60408501518651096002098803820890506000878061571a57fe5b888061572257fe5b838a038a8061572d57fe5b6040870151885109086020850151099050878061574657fe5b888061574e57fe5b60608501516020870151098903820890506000888061576957fe5b898061577157fe5b8b8f098551099297509095509093505050505b9750975097945050505050565b60008080856157a757508691508590508461589c565b600084806157b157fe5b898a099050600085806157c057fe5b898a099050600086806157cf57fe5b898a099050600087806157de57fe5b88806157e657fe5b848e096004099050600088806157f857fe5b898061580057fe5b8a8061580857fe5b8586098c098a8061581557fe5b87600309089050888061582457fe5b898061582c57fe5b8384088a038a8061583957fe5b838409089450888061584757fe5b898061584f57fe5b8a8061585757fe5b8687096008098a038a8061586757fe5b8b8061586f57fe5b888d0386088409089350888061588157fe5b898061588957fe5b8c8e096002099497509295509293505050505b955095509592505050565b600082158015906158b85750818314155b80156158c357508115155b615905576040805162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b210373ab6b132b960911b604482015290519081900360640190fd5b6000600183825b86156159485786828161591b57fe5b04905082868061592757fe5b878061592f57fe5b858409880386088289029093039790945091925061590c565b509195945050505050565b6040518060800160405280600063ffffffff1681526020016060815260200160608152602001600063ffffffff1681525090565b6040518060800160405280600490602082028036833750919291505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737353656e6465722073686f756c64206265206f776e6572206f662074686973205661756c744164647265737320636f6e76657273696f6e206f7574206f6620626f756e64732e45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636552656164206f76657272756e20647572696e6720566172496e742070617273696e676f6c645661756c74204d555354204e4f5420626520657175616c20746f206e65775661756c74536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f756c64206e6f7420696e63726561736520746f2d62652d7265706c6163656420746f6b656e732062656361757365206974206973206d6f7265207468616e2069737375656420616d6f756e7445524332303a206275726e2066726f6d20746865207a65726f20616464726573735472616e73616374696f6e20636f6e7461696e2077726f6e672062746320616d6f756e7445524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212201fa358317dbbe487d530fabb644c3c83c0e702fe17a6f5368d0168a7591afeae64736f6c634300060c0033",
  "deployedBytecode": "0x6080604052600436106102675760003560e01c806393c9abfb11610144578063b00140aa116100b6578063db8e699b1161007a578063db8e699b14610f76578063dd304b1a14610faf578063dd62ed3e14611009578063e963361c14611044578063f02d7ef01461107d578063f4ffee5a146110b057610267565b8063b00140aa14610718578063c50c821414610c71578063c5387e8f14610db3578063c8c7fa0014610ef5578063d4bcb1e914610f3d57610267565b806399891792116101085780639989179214610a1d578063a1a97ca914610a25578063a457c2d714610a5e578063a463bfc714610a97578063a622ee7c14610bc4578063a9059cbb14610c3857610267565b806393c9abfb146107cc5780639446a5b4146107ff57806395d89b411461082f578063978f28dd146108445780639908cd7d1461097857610267565b8063489a1759116101dd5780636112fe2e116101a15780636112fe2e1461064e57806370a082311461067857806377d6b7ca146106ab5780637d41c86e146106d7578063873b7f7b1461071857806390336df21461079357610267565b8063489a1759146104e15780634b26a78d146105145780634d01f27b14610529578063500e9d511461055957806355061bb81461061b57610267565b80631bee398f1161022f5780631bee398f146103d157806323b872dd146103f45780632db99b1414610437578063313ce5671461046857806334e2624b1461049357806339509351146104a857610267565b806306fdde031461026c578063095ea7b3146102f657806316e139bb146103435780631704b9a61461038857806318160ddd146103bc575b600080fd5b34801561027857600080fd5b506102816111cd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102bb5781810151838201526020016102a3565b50505050905090810190601f1680156102e85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561030257600080fd5b5061032f6004803603604081101561031957600080fd5b506001600160a01b038135169060200135611263565b604080519115158252519081900360200190f35b34801561034f57600080fd5b506103766004803603602081101561036657600080fd5b50356001600160a01b0316611281565b60408051918252519081900360200190f35b6103ba6004803603606081101561039e57600080fd5b506001600160a01b0381351690602081013590604001356112a3565b005b3480156103c857600080fd5b506103766112b3565b6103ba600480360360408110156103e757600080fd5b50803590602001356112b9565b34801561040057600080fd5b5061032f6004803603606081101561041757600080fd5b506001600160a01b038135811691602081013590911690604001356113bc565b34801561044357600080fd5b5061044c611444565b604080516001600160a01b039092168252519081900360200190f35b34801561047457600080fd5b5061047d611453565b6040805160ff9092168252519081900360200190f35b34801561049f57600080fd5b5061037661145c565b3480156104b457600080fd5b5061032f600480360360408110156104cb57600080fd5b506001600160a01b038135169060200135611460565b3480156104ed57600080fd5b506103766004803603602081101561050457600080fd5b50356001600160a01b03166114ae565b34801561052057600080fd5b506103766114c0565b34801561053557600080fd5b506103ba6004803603604081101561054c57600080fd5b50803590602001356114c5565b34801561056557600080fd5b506105926004803603604081101561057c57600080fd5b506001600160a01b03813516906020013561156a565b604051808d6001600160a01b031681526020018c81526020018b81526020018a8152602001898152602001888152602001878152602001868152602001856001600160a01b03168152602001846001600160a01b031681526020018381526020018260038111156105ff57fe5b81526020019c5050505050505050505050505060405180910390f35b34801561062757600080fd5b506103766004803603602081101561063e57600080fd5b50356001600160a01b03166115e4565b34801561065a57600080fd5b506103ba6004803603602081101561067157600080fd5b50356115f6565b34801561068457600080fd5b506103766004803603602081101561069b57600080fd5b50356001600160a01b031661166a565b6103ba600480360360408110156106c157600080fd5b50803590602001356001600160a01b0316611685565b3480156106e357600080fd5b506103ba600480360360608110156106fa57600080fd5b508035906001600160a01b0360208201358116916040013516611691565b34801561072457600080fd5b506103766004803603602081101561073b57600080fd5b810190602081018135600160201b81111561075557600080fd5b82018360208201111561076757600080fd5b803590602001918460018302840111600160201b8311171561078857600080fd5b50909250905061169d565b34801561079f57600080fd5b506103ba600480360360408110156107b657600080fd5b506001600160a01b0381351690602001356116e7565b3480156107d857600080fd5b50610376600480360360208110156107ef57600080fd5b50356001600160a01b03166116f1565b34801561080b57600080fd5b506103766004803603604081101561082257600080fd5b5080359060200135611706565b34801561083b57600080fd5b5061028161171d565b34801561085057600080fd5b506103ba600480360360c081101561086757600080fd5b81359190810190604081016020820135600160201b81111561088857600080fd5b82018360208201111561089a57600080fd5b803590602001918460018302840111600160201b831117156108bb57600080fd5b919390929091602081019035600160201b8111156108d857600080fd5b8201836020820111156108ea57600080fd5b803590602001918460018302840111600160201b8311171561090b57600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b81111561093a57600080fd5b82018360208201111561094c57600080fd5b803590602001918460018302840111600160201b8311171561096d57600080fd5b50909250905061177e565b34801561098457600080fd5b506109a26004803603602081101561099b57600080fd5b50356117a8565b604051808b6001600160a01b031681526020018a6001600160a01b03168152602001898152602001888152602001878152602001866001600160a01b03168152602001858152602001848152602001838152602001826003811115610a0357fe5b81526020019a505050505050505050505060405180910390f35b6103ba61180b565b348015610a3157600080fd5b5061037660048036036040811015610a4857600080fd5b506001600160a01b03813516906020013561187b565b348015610a6a57600080fd5b5061032f60048036036040811015610a8157600080fd5b506001600160a01b0381351690602001356118a6565b348015610aa357600080fd5b50610281600480360360a0811015610aba57600080fd5b63ffffffff82351691602081013591810190606081016040820135600160201b811115610ae657600080fd5b820183602082011115610af857600080fd5b803590602001918460018302840111600160201b83111715610b1957600080fd5b919390929091602081019035600160201b811115610b3657600080fd5b820183602082011115610b4857600080fd5b803590602001918460018302840111600160201b83111715610b6957600080fd5b919390929091602081019035600160201b811115610b8657600080fd5b820183602082011115610b9857600080fd5b803590602001918460018302840111600160201b83111715610bb957600080fd5b50909250905061190e565b348015610bd057600080fd5b50610bf760048036036020811015610be757600080fd5b50356001600160a01b0316611b12565b604080519889526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b348015610c4457600080fd5b5061032f60048036036040811015610c5b57600080fd5b506001600160a01b038135169060200135611b55565b348015610c7d57600080fd5b506103ba600480360360e0811015610c9457600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b811115610cc357600080fd5b820183602082011115610cd557600080fd5b803590602001918460018302840111600160201b83111715610cf657600080fd5b919390929091602081019035600160201b811115610d1357600080fd5b820183602082011115610d2557600080fd5b803590602001918460018302840111600160201b83111715610d4657600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b811115610d7557600080fd5b820183602082011115610d8757600080fd5b803590602001918460018302840111600160201b83111715610da857600080fd5b509092509050611b69565b348015610dbf57600080fd5b506103ba600480360360e0811015610dd657600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b811115610e0557600080fd5b820183602082011115610e1757600080fd5b803590602001918460018302840111600160201b83111715610e3857600080fd5b919390929091602081019035600160201b811115610e5557600080fd5b820183602082011115610e6757600080fd5b803590602001918460018302840111600160201b83111715610e8857600080fd5b9193909263ffffffff833516926020810135929190606081019060400135600160201b811115610eb757600080fd5b820183602082011115610ec957600080fd5b803590602001918460018302840111600160201b83111715610eea57600080fd5b509092509050611b95565b6103ba600480360360c0811015610f0b57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a00135611bb4565b348015610f4957600080fd5b506103ba60048036036040811015610f6057600080fd5b506001600160a01b038135169060200135611bca565b348015610f8257600080fd5b5061044c60048036036040811015610f9957600080fd5b506001600160a01b038135169060200135611bd4565b348015610fbb57600080fd5b50610fe860048036036040811015610fd257600080fd5b506001600160a01b038135169060200135611bff565b60405180826003811115610ff857fe5b815260200191505060405180910390f35b34801561101557600080fd5b506103766004803603604081101561102c57600080fd5b506001600160a01b0381358116916020013516611c2d565b34801561105057600080fd5b50610fe86004803603604081101561106757600080fd5b506001600160a01b038135169060200135611c58565b34801561108957600080fd5b50610376600480360360208110156110a057600080fd5b50356001600160a01b0316611c86565b3480156110bc57600080fd5b506110e9600480360360408110156110d357600080fd5b506001600160a01b038135169060200135611ca4565b604051808c6001600160a01b031681526020018b81526020018a6001600160a01b03168152602001896001600160a01b031681526020018060200188815260200187815260200186815260200185815260200184815260200183600381111561114e57fe5b8152602001828103825289818151815260200191508051906020019080838360005b83811015611188578181015183820152602001611170565b50505050905090810190601f1680156111b55780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156112595780601f1061122e57610100808354040283529160200191611259565b820191906000526020600020905b81548152906001019060200180831161123c57829003601f168201915b5050505050905090565b6000611277611270611d9c565b8484611da0565b5060015b92915050565b6001600160a01b0381166000908152600860205260409020600501545b919050565b6112ae838383611e8c565b505050565b60025490565b336000818152600860205260409020805415611309576040805162461bcd60e51b815260206004820152600a6024820152691d985d5b1d115e1a5cdd60b21b604482015290519081900360640190fd5b831580159061131757508215155b611358576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c69645075626b657960981b604482015290519081900360640190fd5b8381556001810183905561136a61180b565b604080513481526020810186905280820185905290516001600160a01b038416917f49fd9cc8f07d8a3a7cf7160535b6b0ce95d90fe87662605e19d90028ceb3aa3b919081900360600190a250505050565b60006113c984848461201c565b611439846113d5611d9c565b61143485604051806060016040528060288152602001615ae1602891396001600160a01b038a16600090815260016020526040812090611413611d9c565b6001600160a01b031681526020810191909152604001600020549190612177565b611da0565b5060015b9392505050565b600d546001600160a01b031681565b60055460ff1690565b4790565b600061127761146d611d9c565b84611434856001600061147e611d9c565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061220e565b60066020526000908152604090205481565b609681565b3360008181526008602052604090208054611517576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b83815560018101839055604080518581526020810185905281516001600160a01b038516927fd4fbb16c279424bdd5e637a14cae7b00e68dd1529d7fa5ea6e8a1018af2f3fed928290030190a250505050565b600b602081815260009384526040808520909152918352912080546001820154600283015460038401546004850154600586015460068701546007880154600889015460098a0154600a8b01549a909b01546001600160a01b03998a169b989a979996989597949693959294918416939092169160ff168c565b60076020526000908152604090205481565b3360009081526008602052604090208054611648576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60028101546116579083612268565b600282015561166633836122aa565b5050565b6001600160a01b031660009081526020819052604090205490565b611666338383346122fd565b6112ae33848484612531565b6000806116df84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061274792505050565b949350505050565b6116668282612878565b6000806116fd83612a23565b905061143d8160965b600061143d82611717856064612a50565b90612aa9565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156112595780601f1061122e57610100808354040283529160200191611259565b60606117908585898987878f8f61190e565b905061179c8a82612aeb565b50505050505050505050565b600c6020526000908152604090208054600182015460028301546003840154600485015460058601546006870154600788015460088901546009909901546001600160a01b03988916999789169896979596949593909416939192909160ff168a565b336000818152600860205260409020805461185d576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600281015461186c903461220e565b60028201556116668234612c42565b6001600160a01b03919091166000908152600a60209081526040808320938352929052206005015490565b60006112776118b3611d9c565b8461143485604051806060016040528060258152602001615be560259139600160006118dd611d9c565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190612177565b6060600061195188888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061274792505050565b9050600d60009054906101000a90046001600160a01b03166001600160a01b031663acf974348b8b848a8a8a8a6001806040518a63ffffffff1660e01b8152600401808a63ffffffff168152602001898152602001888152602001806020018060200185815260200184151581526020018381038352898982818152602001925080828437600083820152601f01601f191690910184810383528781526020019050878780828437600081840152601f19601f8201169050808301925050509b50505050505050505050505060206040518083038186803b158015611a3557600080fd5b505afa158015611a49573d6000803e3d6000fd5b505050506040513d6020811015611a5f57600080fd5b50611a6a9050615953565b611aa989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612d0a92505050565b9050806060015163ffffffff16600014611b00576040805162461bcd60e51b81526020600482015260136024820152726c6f636b74696d65206d757374207a65726f2160681b604482015290519081900360640190fd5b604001519a9950505050505050505050565b6008602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460079097015495969495939492939192909188565b6000611277611b62611d9c565b848461201c565b6060611b7b8585898987878f8f61190e565b9050611b888b8b83612e64565b5050505050505050505050565b6060611ba78585898987878f8f61190e565b9050611b888b8b83613117565b611bc2868686868686613293565b505050505050565b611666828261365f565b6001600160a01b039182166000908152600a6020908152604080832093835292905220600301541690565b6001600160a01b03919091166000908152600b60208181526040808420948452939052919020015460ff1690565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03919091166000908152600a60208181526040808420948452939052919020015460ff1690565b6001600160a01b031660009081526008602052604090206003015490565b600a6020908152600092835260408084208252918352918190208054600180830154600280850154600386015460048701805489516101009782161597909702600019011693909304601f81018a90048a0286018a019098528785526001600160a01b03958616989397918616969516949392830182828015611d685780601f10611d3d57610100808354040283529160200191611d68565b820191906000526020600020905b815481529060010190602001808311611d4b57829003601f168201915b50505060058401546006850154600786015460088701546009880154600a9098015496979396929550909350919060ff168b565b3390565b6001600160a01b038316611de55760405162461bcd60e51b8152600401808060200182810382526024815260200180615bc16024913960400191505060405180910390fd5b6001600160a01b038216611e2a5760405162461bcd60e51b81526004018080602001828103825260228152602001806159eb6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b336001600160a01b03841614611ed35760405162461bcd60e51b8152600401808060200182810382526024815260200180615a0d6024913960400191505060405180910390fd5b6000611ede846137eb565b90506000611eec8285613871565b9050828415611f0357611f00848387613887565b90505b600080611f118885856138af565b915091506000611f1f613993565b905080831015611f6e576040805162461bcd60e51b8152602060048201526015602482015274105b5bdd5b9d10995b1bddd11d5cdd105b5bdd5b9d605a1b604482015290519081900360640190fd5b81611f7884613998565b1115611fc4576040805162461bcd60e51b8152602060048201526016602482015275125b9cdd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b611fce8985612c42565b604080518681526020810186905281516001600160a01b038c16927f8913ea7a41c7a2e297c14b401089285065174a3e4c4bb03671fc5b4f27591ddc928290030190a2505050505050505050565b6001600160a01b0383166120615760405162461bcd60e51b8152600401808060200182810382526025815260200180615b9c6025913960400191505060405180910390fd5b6001600160a01b0382166120a65760405162461bcd60e51b81526004018080602001828103825260238152602001806159a66023913960400191505060405180910390fd5b6120b18383836112ae565b6120ee81604051806060016040528060268152602001615a52602691396001600160a01b0386166000908152602081905260409020549190612177565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461211d908261220e565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156122065760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121cb5781810151838201526020016121b3565b50505050905090810190601f1680156121f85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008282018381101561143d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061143d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612177565b6122b582838361399b565b604080516001600160a01b03841681526020810183905281517f943defbd695c6a58b5dbd0fcccb150d25f2fd14a5ebba6cb6b0d9e33651191d4929181900390910190a15050565b8061230784613998565b1115612353576040805162461bcd60e51b8152602060048201526016602482015275125b9cdd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b61235d8284613af0565b6123a4576040805162461bcd60e51b8152602060048201526013602482015272115e18d959591a5b99d5985d5b1d131a5b5a5d606a1b604482015290519081900360640190fd5b60006123af85613b86565b905060006123bd8483613bd1565b905060006123ca86613ce3565b6001600160a01b0388166000908152600a6020908152604080832087845290915281209192508288039190600a82015460ff16600381111561240857fe5b1461244c576040805162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c995c5d595cdd608a1b604482015290519081900360640190fd5b80546001600160a01b03199081166001600160a01b038981169190911783554260018085019190915560028401805484168d84161790819055600385018054909416888416179093556005840185905560068401869055600784018990556202a300600885015560006009850155600a8401805460ff191690911790556124d4911687612c42565b60408051838152602081018590526001600160a01b03868116828401529151828a16928c169188917f0279f22d36b78c19957d9d6d792e3625dfb99d644e30be9a850aab76b63b25949181900360600190a4505050505050505050565b61253b8484613cf0565b600061254684613cfb565b90506000612552613993565b9050818503818103600061256589613b86565b90506125718684613d01565b6125c2576040805162461bcd60e51b815260206004820152601b60248201527f496e73756666696369656e74546f6b656e73436f6d6d69747465640000000000604482015290519081900360640190fd5b6001600160a01b0389166000908152600b60209081526040808320848452909152812090600b82015460ff1660038111156125f957fe5b1461263d576040805162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a59081c995c5d595cdd608a1b604482015290519081900360640190fd5b80546001600160a01b0319166001600160a01b0388161781554260018201556202a300600282015560038101869055600581018590556004810183905561268383613998565b600682018190556008820180546001600160a01b038d81166001600160a01b031992831617909255600984018054928c1692909116919091179055600b8201805460ff191660011790556126d8908890613d97565b6004810154600382015460098301546040805193845260208401929092526001600160a01b03908116838301529051818a1692918d169185917fde2047174185f9a5da05491e50e701207a1e4622bd87cca82c1a866d4382a9a79181900360600190a450505050505050505050565b6000600280836040518082805190602001908083835b6020831061277c5780518252601f19909201916020918201910161275d565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156127bb573d6000803e3d6000fd5b5050506040513d60208110156127d057600080fd5b50516040805160208181019390935281518082038401815290820191829052805190928291908401908083835b6020831061281c5780518252601f1990920191602091820191016127fd565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa15801561285b573d6000803e3d6000fd5b5050506040513d602081101561287057600080fd5b505192915050565b6001600160a01b0382166000908152600b6020908152604080832084845290915290206001600b82015460ff1660038111156128b057fe5b146128f9576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b80600201548160010154014211612948576040805162461bcd60e51b815260206004820152600e60248201526d151a5b59539bdd115e1c1a5c995960921b604482015290519081900360640190fd5b600b8101805460ff19166003908117909155600882015490820154600483015461297c926001600160a01b03169101613e2c565b80546006820154612996916001600160a01b031690613e37565b8054600882015460068301546129b9926001600160a01b03908116921690613ee0565b80546004820154600383015460098401546040805193845260208401929092526001600160a01b03908116838301529051928116929086169185917f1fa2e68649c87d957477ccbe3c5a6af2bfde7f94bcdc6dc5b8944ef329ba25f49181900360600190a4505050565b6001600160a01b038116600090815260076020908152604080832054600690925282205461127b91612268565b600082612a5f5750600061127b565b82820282848281612a6c57fe5b041461143d5760405162461bcd60e51b8152600401808060200182810382526021815260200180615ac06021913960400191505060405180910390fd5b600061143d83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613f3a565b6000828152600c602052604090206001600982015460ff166003811115612b0e57fe5b14612b57576040805162461bcd60e51b815260206004820152601460248201527357726f6e6720726571756573742073746174757360601b604482015290519081900360640190fd5b8054600182015460058301546001600160a01b039283169291821691600091612b8591879184911689613f9f565b90508360040154811015612bca5760405162461bcd60e51b8152600401808060200182810382526024815260200180615b786024913960400191505060405180910390fd5b612bde838386600401548760020154614000565b612bec8385600601546122aa565b816001600160a01b0316836001600160a01b0316877f6e3e61fdf80541be797785f48ed6cf400134a61292f2f58f56efb3ab0a5cfa6c60405160405180910390a4505050600901805460ff191660021790555050565b80341015612c8b576040805162461bcd60e51b8152602060048201526011602482015270125b9d985b1a5910dbdb1b185d195c985b607a1b604482015290519081900360640190fd5b6001600160a01b038216600090815260066020526040902054612cae908261220e565b6001600160a01b03831660008181526006602090815260409182902093909355805191825291810183905281517fa26b43a600355250ae61523a4d3a1269abbbbf462b22c633d629920603d05e45929181900390910190a15050565b612d12615953565b815160046060612d2485836002614124565b905080600081518110612d3357fe5b01602001516001600160f81b031916158015612d6e575080600181518110612d5757fe5b6020910101516001600160f81b031916600160f81b145b15612d7a578160020191505b81600080612d93612d8e8985808a03614124565b6141de565b91509150816001018501945060005b81811015612de057602486019550600080612dcd612d8e898a8c038e6141249092919063ffffffff16565b0197909701600501965050600101612da2565b506040805160808101909152859080612e04612dff8c60006004614124565b614264565b63ffffffff168152602001612e26868785038d6141249092919063ffffffff16565b8152602001612e3c8b84808c0360031901614124565b8152602001612e4f612dff8c60046142a9565b63ffffffff1690529998505050505050505050565b6001600160a01b0383166000908152600a6020908152604080832085845290915290206001600a82015460ff166003811115612e9c57fe5b14612ee5576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b6003810154600090612f0490849083906001600160a01b031687613f9f565b600683015460058401549192500180821015612fee5760028301546001600160a01b03163314612f6d576040805162461bcd60e51b815260206004820152600f60248201526e24b73b30b634b222bc32b1baba37b960891b604482015290519081900360640190fd5b825482820390612f86906001600160a01b0316826142ce565b6000612f9785600701548585613887565b6002860154909150612fb2906001600160a01b0316826122aa565b6007850154600286015486549183900391612fda916001600160a01b03908116911683613ee0565b612fe68887878461433e565b505050613040565b6002830154600784015461300b916001600160a01b0316906122aa565b808211156130405782548183039061302c906001600160a01b031682613af0565b1561303e5761303e868585600061433e565b505b600683015460058401548454910190613062906001600160a01b0316826143a2565b8354600685015461307c916001600160a01b031690614426565b60028401546005850154613099916001600160a01b031690614426565b600a8401805460ff1916600217905583546005850154600686015460038701546040805193845260208401929092526001600160a01b0390811683830152905192811692908a169189917f41ac549524df546b670900f16155b1ab138c8a69cb83091710e4824cf216c04e916060908290030190a450505050505050565b6001600160a01b0383166000908152600b6020908152604080832085845290915290206001600b82015460ff16600381111561314f57fe5b14613198576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b600481015460098201546131b79184916001600160a01b031686613f9f565b506131c58160040154614430565b805460038201546131df916001600160a01b031690613e2c565b600b8101805460ff1916600217905580546006820154613208916001600160a01b031690613e37565b805460058201546004830154613228926001600160a01b0316910161443d565b80546004820154600383015460098401546040805193845260208401929092526001600160a01b03908116838301529051928116929087169186917f3114b251c2a5058491738f973e62ec694147154211b993a430d788a72ca6d1949181900360600190a450505050565b336001600160a01b038616146132f0576040805162461bcd60e51b815260206004820181905260248201527f53656e6465722073686f756c64206265206e6577205661756c74206f776e6572604482015290519081900360640190fd5b846001600160a01b0316866001600160a01b031614156133415760405162461bcd60e51b8152600401808060200182810382526026815260200180615a9a6026913960400191505060405180910390fd5b6001600160a01b038087166000908152600860205260408082209288168252902081546133a5576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b80546133e8576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6000806133f58a896144c1565b915091506000613403613993565b905080831015613452576040805162461bcd60e51b8152602060048201526015602482015274105b5bdd5b9d10995b1bddd11d5cdd105b5bdd5b9d605a1b604482015290519081900360640190fd5b600061345f89858c613887565b905061346b8b826145d0565b6134758c85613d01565b506134808b85613af0565b50600061348c8d613b86565b9050600061349c8d8b8b85614635565b6000838152600c60205260408120919250600982015460ff1660038111156134c057fe5b14613512576040805162461bcd60e51b815260206004820152601c60248201527f54686973207265706c61636520616c7265616479206372656174656400000000604482015290519081900360640190fd5b8e8160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508d8160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550868160040181905550818160050160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508381600201819055508581600601819055506202a30081600701819055506000816008018190555060018160090160006101000a81548160ff021916908360038111156135df57fe5b0217905550600181015481546004830154600284015460058501546040805193845260208401929092526001600160a01b039081168383015290519381169392169186917f26899953ce5ec4fdd27150e3d625e33f84d65e89ccf4a2d960abc648b1b4df2a919081900360600190a4505050505050505050505050505050565b6001600160a01b0382166000908152600a6020908152604080832084845290915290206001600a82015460ff16600381111561369757fe5b146136e0576040805162461bcd60e51b81526020600482015260146024820152731c995c5d595cdd081a5cc818dbdb5c1b195d195960621b604482015290519081900360640190fd5b8060080154816001015401421161372f576040805162461bcd60e51b815260206004820152600e60248201526d151a5b59539bdd115e1c1a5c995960921b604482015290519081900360640190fd5b600a8101805460ff19166003179055600281015481546007830154613761926001600160a01b03908116921690613ee0565b805460068201546005830154613781926001600160a01b031691016142ce565b80546005820154600683015460038401546040805193845260208401929092526001600160a01b03908116838301529051928116929086169185917f45c7f0162772dc14d848f7fc10d09f8a007bba89c372e47f17d0c6b4a2e67f869181900360600190a4505050565b6001600160a01b03811660009081526008602052604081208054613846576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60006116df826007015461386b8460050154856003015461226890919063ffffffff16565b90612268565b6000818310613880578161143d565b5090919050565b600082158015613895575081155b156138a157508261143d565b6116df826117178686612a50565b6001600160a01b03831660009081526008602052604081208190816138d3876137eb565b9050808611156139145760405162461bcd60e51b815260040180806020018281038252604e815260200180615b09604e913960600191505060405180910390fd5b6007820154613923908761220e565b60078301556006820154613937908661220e565b60068301556040805187815290516001600160a01b038916917ff052e4720689a6c9761eb963b628676705aa972a0ba9571c32440b9dcb785481919081900360200190a281600701548260060154935093505050935093915050565b600090565b90565b6001600160a01b03831660009081526007602090815260408083205460069092529091205482916139cc9190612268565b1015613a18576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6001600160a01b038316600090815260066020526040902054613a3b9082612268565b6001600160a01b0380851660009081526006602052604080822093909355915184929183169084908381818185875af1925050503d8060008114613a9b576040519150601f19603f3d011682016040523d82523d6000602084013e613aa0565b606091505b5050905080613ae9576040805162461bcd60e51b815260206004820152601060248201526f2a3930b739b332b9103330b4b632b21760811b604482015290519081900360640190fd5b5050505050565b600080613afc846116f1565b905082811015613b1057600091505061127b565b6001600160a01b03841660009081526008602052604090206004810154613b37908561220e565b60048201556040805185815290516001600160a01b038716917f2a0e25b59dbe8659199b9249e7e3897b753e8483dcbe40a7403b48242c6f4d34919081900360200190a2506001949350505050565b600081600143034060405160200180836001600160a01b031660601b8152601401828152602001925050506040516020818303038152906040528051906020012060001c9050919050565b6001600160a01b03821660009081526008602052604081208054613c2c576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6000613c418260000154836001015486614741565b6001600160a01b038116600090815260088401602052604090205490915060ff1615613cb4576040805162461bcd60e51b815260206004820152601d60248201527f5468697320627463206164647265737320616c72656164792075736564000000604482015290519081900360640190fd5b6001600160a01b038116600090815260089092016020526040909120805460ff19166001179055905092915050565b6103e86002919091020490565b61166633308361201c565b50600090565b600080613d0d84614797565b905080831115613d2157600091505061127b565b6001600160a01b03841660009081526008602052604090206005810154613d48908561220e565b60058201556040805185815290516001600160a01b038716917fa40b2e156dca6a5cc9204c1172c822104aa5957e50a2e4785fe281a0460e01df919081900360200190a2506001949350505050565b6001600160a01b038216600090815260076020526040902054613dba908261220e565b6001600160a01b038316600090815260076020908152604080832084905560069091529020541015611666576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b61166630838361201c565b6001600160a01b038216600090815260076020526040902054811115613e9d576040805162461bcd60e51b8152602060048201526016602482015275125b94dd59999a58da595b9d10dbdb1b185d195c985b60521b604482015290519081900360640190fd5b6001600160a01b038216600090815260076020526040902054613ec09082612268565b6001600160a01b0390921660009081526007602052604090209190915550565b613eeb83838361399b565b604080516001600160a01b0380861682528416602082015280820183905290517f1f62766d3b94993a001005cb9b5296a3959ccda7944a7033caf75e04a0e7b33c9181900360600190a1505050565b60008183613f895760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121cb5781810151838201526020016121b3565b506000838581613f9557fe5b0495945050505050565b600080613fac86856147c2565b905084811015613ff7576040805162461bcd60e51b8152602060048201526011602482015270496e73756666696369656e7456616c756560781b604482015290519081900360640190fd5b95945050505050565b6001600160a01b03808516600090815260086020526040808220928616825290208154614064576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b80546140a7576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b60038201546140b69085612268565b6003808401919091558101546140cc908561220e565b6003820155604080518581526020810185905281516001600160a01b0380891693908a16927f5b2260440eaa72a266c31b81fcf06107588de293792678adc73df44ace679b0f929081900390910190a3505050505050565b606081614140575060408051602081019091526000815261143d565b8282018381118015614153575080855110155b61419a576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b604051915082604083010160405282825283850182038460208701018481015b808210156141d3578151838301526020820191506141ba565b505050509392505050565b60008060006141ec846148ff565b905060ff81166142195760008460008151811061420557fe5b016020015190935060f81c915061425f9050565b8060010160ff1684511015614237576000196000925092505061425f565b6000614253612dff61424e87600160ff8716614124565b61497b565b60ff9092169350909150505b915091565b60008060005b83518110156142a2578060010184510360080260020a84828151811061428c57fe5b016020015160f81c02919091019060010161426a565b5092915050565b606060006142c1838551614a1890919063ffffffff16565b90506116df848285614124565b6001600160a01b038216600090815260086020526040902060048101546142f59083612268565b60048201556040805183815290516001600160a01b038516917f602ceb96b9001fc15cee84bae42af52eebda91a7e70da69fd29563f5d42ca5f1919081900360200190a2505050565b61434782613ce3565b6006840181905580830360058501819055604080519182526020820192909252808201839052905185917f6db487de54f8294da3728759b0a0d5eb1ea2177a28902ba11abc9e3e989dc99c919081900360600190a250505050565b6001600160a01b038216600090815260086020526040902060038101546143c9908361220e565b600382015560048101546143dd9083612268565b60048201556040805183815290516001600160a01b038516917fda0c72f67f0b71f8afdd41fe90a21ca4d9e2a768778ed664031c7cae3998f32a919081900360200190a2505050565b6116668282614a75565b61443a3082614b65565b50565b6001600160a01b038216600090815260086020526040902060058101546144649083612268565b600582015560038101546144789083612268565b60038201556040805183815290516001600160a01b038516917f60213c45c34d8b94e495fd5871fdea7a7511f659e884ea25a0c8843b7f98bfad919081900360200190a2505050565b6001600160a01b0382166000908152600860205260408120805482919061451f576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600061452f826007015486613871565b905060006145468360060154838560070154613887565b90506000614558846006015483613871565b600785015490915061456a9084612268565b6007850155600684015461457e9082612268565b60068501556040805184815290516001600160a01b038a16917f4317750fb47a4dc685a826d40caf1dbf81881e792d205275e711b9054871f7aa919081900360200190a2919791965090945050505050565b6001600160a01b0382166000908152600860205260409020805461462b576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b6112ae8383612c42565b6001600160a01b03841660009081526008602052604081208054614690576040805162461bcd60e51b815260206004820152600d60248201526c1d985d5b1d139bdd115e1a5cdd609a1b604482015290519081900360640190fd5b600061469d868686614741565b6001600160a01b038116600090815260088401602052604090205490915060ff1615614710576040805162461bcd60e51b815260206004820152601d60248201527f5468697320627463206164647265737320616c72656164792075736564000000604482015290519081900360640190fd5b6001600160a01b038116600090815260089092016020526040909120805460ff191660011790559050949350505050565b60408051602080820186905281830185905260608083018590528351808403909101815260809092019092528051910120600090614780818686614c61565b9095509350613ff76147928686614cda565b614d16565b6001600160a01b03811660009081526008602052604081206005810154600382015461143d91612268565b6000806147ce846141de565b91505060006147de826003613871565b905060606000805b8381101561489b5760606147fa8983614e41565b905083516000141561481f5761480f8161500b565b80519094501561481f5750614893565b876001600160a01b0316836001600160a01b0316146148915760606148438261507c565b90508051601414801561487157506001600160a01b0389166148668260006152a9565b6001600160a01b0316145b1561488f5761487f8261530b565b67ffffffffffffffff1697508893505b505b505b6001016147e6565b50856001600160a01b0316816001600160a01b0316146148f5576040805162461bcd60e51b815260206004820152601060248201526f125b9d985b1a59149958da5c1a595b9d60821b604482015290519081900360640190fd5b5050505092915050565b60008160008151811061490e57fe5b60209101015160f81c60ff14156149275750600861129e565b8160008151811061493457fe5b60209101015160f81c60fe141561494d5750600461129e565b8160008151811061495a57fe5b60209101015160f81c60fd14156149735750600261129e565b506000919050565b606080825167ffffffffffffffff8111801561499657600080fd5b506040519080825280601f01601f1916602001820160405280156149c1576020820181803683370190505b50905060005b83518110156142a2578381815181106149dc57fe5b602001015160f81c60f81b8260018387510303815181106149f957fe5b60200101906001600160f81b031916908160001a9053506001016149c7565b600082821115614a6f576040805162461bcd60e51b815260206004820152601d60248201527f556e646572666c6f7720647572696e67207375627472616374696f6e2e000000604482015290519081900360640190fd5b50900390565b6001600160a01b038216614ad0576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b614adc600083836112ae565b600254614ae9908261220e565b6002556001600160a01b038216600090815260208190526040902054614b0f908261220e565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216614baa5760405162461bcd60e51b8152600401808060200182810382526021815260200180615b576021913960400191505060405180910390fd5b614bb6826000836112ae565b614bf3816040518060600160405280602281526020016159c9602291396001600160a01b0385166000908152602081905260409020549190612177565b6001600160a01b038316600090815260208190526040902055600254614c199082612268565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60008070014551231950b75fc4402da1732fc9bebe198506614cba576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c6964207363616c6560981b604482015290519081900360640190fd5b614cce85858560006401000003d019615330565b91509150935093915050565b6040805160019290921660020160f81b6001600160f81b0319166020830152602180830193909352805180830390930183526041909101905290565b600060036002836040518082805190602001908083835b60208310614d4c5780518252601f199092019160209182019101614d2d565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015614d8b573d6000803e3d6000fd5b5050506040513d6020811015614da057600080fd5b50516040805160208181019390935281518082038401815290820191829052805190928291908401908083835b60208310614dec5780518252601f199092019160209182019101614dcd565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015614e2b573d6000803e3d6000fd5b5050604051516001600160a01b03169392505050565b6060600080614e4f856141de565b9092509050600019821415614e955760405162461bcd60e51b8152600401808060200182810382526022815260200180615a786022913960400191505060405180910390fd5b808410614edd576040805162461bcd60e51b81526020600482015260116024820152702b37baba103932b0b21037bb32b9393ab760791b604482015290519081900360640190fd5b6060600060018401815b87811015614f7757614f0782838b51038b6141249092919063ffffffff16565b9350614f128461536a565b9250600019831415614f6b576040805162461bcd60e51b815260206004820152601a60248201527f42616420566172496e7420696e207363726970745075626b6579000000000000604482015290519081900360640190fd5b90820190600101614ee7565b50614f9081828a51038a6141249092919063ffffffff16565b9250614f9b8361536a565b9150600019821415614ff4576040805162461bcd60e51b815260206004820152601a60248201527f42616420566172496e7420696e207363726970745075626b6579000000000000604482015290519081900360640190fd5b614fff888284614124565b98975050505050505050565b60607fb31d742db54d6961c6b346af2c9c4c495eb8aff2ebf6b3699e052d1cef5cf50b61503b83600960016153d0565b14615055575060408051602081019091526000815261129e565b606061506483600a6001614124565b905061143d600b61507483614264565b859190614124565b606060008260088151811061508d57fe5b0160200151835160f89190911c91506009820160ff16146150be57505060408051602081019091526000815261129e565b826009815181106150cb57fe5b016020015160f81c6151685760028160ff1610156150f957505060408051602081019091526000815261129e565b600083600a8151811061510857fe5b016020015160f81c9050600119820160ff1681141580615135575080602014158015615135575080601414155b1561515357604051806020016040528060008152509250505061129e565b61515f84600b83614124565b9250505061129e565b600061517784600860036153d0565b90507fe1683aec1a10d43657f3f2c82e683d8e19e8a3f320ce9d3bf22c6ca6ab4cbce68114156152245783600b815181106151ae57fe5b60209101015160f81c60141415806151f9575083517f3b50b2715f5a28d2a7eeb517f17ec797e8536bd425bf31fc4f6bf7ce1e34b77d906151f69086906001190160026153d0565b14155b1561521757604051806020016040528060008152509250505061129e565b61515f84600c6014614124565b7fa0916ee0b243ee20fb4ce56170744d86b54d7ae03a418a7a12156f40dedcf7d7811415615292578360018551038151811061525c57fe5b60209101015160f81c60871461528557604051806020016040528060008152509250505061129e565b61515f84600b6014614124565b505050604080516020810190915260008152919050565b60006014820182811180156152bf575080845110155b6152fa5760405162461bcd60e51b8152600401808060200182810382526021815260200180615a316021913960400191505060405180910390fd5b50500160200151600160601b900490565b6000606061531883615437565b905060606153258261497b565b90506116df81614264565b60008060008060006153478a8a8a60018b8b615446565b925092509250615359838383896154bd565b945094505050509550959350505050565b600060098251101561537f575060001961129e565b606061539a600880855103856141249092919063ffffffff16565b90506000806153a8836141de565b90925090506000198214156153c457600019935050505061129e565b01600901915050919050565b600082820183811180156153e5575080855110155b61542c576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b505091016020012090565b606061127b8260006008614124565b600080808861545c5750869150859050846154b1565b8860008060015b83156154a8576001841615615489576154818383838f8f8f8e615514565b919450925090505b60028404935061549c8c8c8c8c8c615791565b919d509b509950615463565b91955093509150505b96509650969350505050565b60008060006154cc85856158a7565b9050600084806154d857fe5b8283099050600085806154e757fe5b828a099050600086806154f657fe5b87806154fe57fe5b8486098a09919a91995090975050505050505050565b6000808089158015615524575088155b15615536575085915084905083615784565b86158015615542575085155b15615554575088915087905086615784565b61555c615987565b848061556457fe5b898a098152848061557157fe5b81518a096020820152848061558257fe5b8687096040820152848061559257fe5b60408201518709606082015260408051608081019091528086806155b257fe5b60408401518e09815260200186806155c657fe5b60608401518d09815260200186806155da57fe5b83518b09815260200186806155eb57fe5b60208401518a0990526040810151815191925014158061561357506060810151602082015114155b615664576040805162461bcd60e51b815260206004820152601e60248201527f557365206a6163446f75626c652066756e6374696f6e20696e73746561640000604482015290519081900360640190fd5b61566c615987565b858061567457fe5b8251604084015190880390088152858061568a57fe5b602083015160608401519088039008602082015285806156a657fe5b81518009604082015285806156b757fe5b81516040830151096060820152600086806156ce57fe5b6060830151880388806156dd57fe5b6020850151800908905086806156ef57fe5b87806156f757fe5b88806156ff57fe5b60408501518651096002098803820890506000878061571a57fe5b888061572257fe5b838a038a8061572d57fe5b6040870151885109086020850151099050878061574657fe5b888061574e57fe5b60608501516020870151098903820890506000888061576957fe5b898061577157fe5b8b8f098551099297509095509093505050505b9750975097945050505050565b60008080856157a757508691508590508461589c565b600084806157b157fe5b898a099050600085806157c057fe5b898a099050600086806157cf57fe5b898a099050600087806157de57fe5b88806157e657fe5b848e096004099050600088806157f857fe5b898061580057fe5b8a8061580857fe5b8586098c098a8061581557fe5b87600309089050888061582457fe5b898061582c57fe5b8384088a038a8061583957fe5b838409089450888061584757fe5b898061584f57fe5b8a8061585757fe5b8687096008098a038a8061586757fe5b8b8061586f57fe5b888d0386088409089350888061588157fe5b898061588957fe5b8c8e096002099497509295509293505050505b955095509592505050565b600082158015906158b85750818314155b80156158c357508115155b615905576040805162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b210373ab6b132b960911b604482015290519081900360640190fd5b6000600183825b86156159485786828161591b57fe5b04905082868061592757fe5b878061592f57fe5b858409880386088289029093039790945091925061590c565b509195945050505050565b6040518060800160405280600063ffffffff1681526020016060815260200160608152602001600063ffffffff1681525090565b6040518060800160405280600490602082028036833750919291505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737353656e6465722073686f756c64206265206f776e6572206f662074686973205661756c744164647265737320636f6e76657273696f6e206f7574206f6620626f756e64732e45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636552656164206f76657272756e20647572696e6720566172496e742070617273696e676f6c645661756c74204d555354204e4f5420626520657175616c20746f206e65775661756c74536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f756c64206e6f7420696e63726561736520746f2d62652d7265706c6163656420746f6b656e732062656361757365206974206973206d6f7265207468616e2069737375656420616d6f756e7445524332303a206275726e2066726f6d20746865207a65726f20616464726573735472616e73616374696f6e20636f6e7461696e2077726f6e672062746320616d6f756e7445524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212201fa358317dbbe487d530fabb644c3c83c0e702fe17a6f5368d0168a7591afeae64736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "415:4650:4:-:0;;;496:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;496:118:4;2013:141:21;;;;;;;;;;;;-1:-1:-1;;;496:118:4;2013:141:21;;;;;;;;;;;;;;;;;;;;2085:12;;2013:141;;;2085:12;;:5;;:12;:::i;:::-;-1:-1:-1;2107:16:21;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;;2133:9:21;:14;;-1:-1:-1;;2133:14:21;2145:2;2133:14;;;-1:-1:-1;566:17:4::1;581:1;566:14;:17::i;:::-;593:5;:14:::0;;-1:-1:-1;;;;;;593:14:4::1;-1:-1:-1::0;;;;;593:14:4;;;::::1;::::0;;;::::1;::::0;;415:4650;;10022:88:21;10082:9;:21;;-1:-1:-1;;10082:21:21;;;;;;;;;;;;10022:88::o;415:4650:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;415:4650:4;;;-1:-1:-1;415:4650:4;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "415:4650:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81:21;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4255:166;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4255:166:21;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;2417:158:10;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2417:158:10;-1:-1:-1;;;;;2417:158:10;;:::i;:::-;;;;;;;;;;;;;;;;3916:229:4;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3916:229:4;;;;;;;;;;;;;:::i;:::-;;3262:98:21;;;;;;;;;;;;;:::i;1784:627:10:-;;;;;;;;;;;;;;;;-1:-1:-1;1784:627:10;;;;;;;:::i;4881:317:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4881:317:21;;;;;;;;;;;;;;;;;:::i;470:19:4:-;;;;;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;470:19:4;;;;;;;;;;;;;;3121:81:21;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;522:104:0;;;;;;;;;;;;;:::i;5593:215:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;5593:215:21;;;;;;;;:::i;393:53:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;393:53:0;-1:-1:-1;;;;;393:53:0;;:::i;811:55:10:-;;;;;;;;;;;;;:::i;3934:418::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3934:418:10;;;;;;;:::i;535:85:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;535:85:5;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;535:85:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;535:85:5;;;;;;-1:-1:-1;;;;;535:85:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;452:49:0;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;452:49:0;-1:-1:-1;;;;;452:49:0;;:::i;4683:286:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4683:286:10;;:::i;3418:117:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3418:117:21;-1:-1:-1;;;;;3418:117:21;;:::i;1563:186:4:-;;;;;;;;;;;;;;;;-1:-1:-1;1563:186:4;;;;;;-1:-1:-1;;;;;1563:186:4;;:::i;2422:264::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2422:264:4;;;-1:-1:-1;;;;;2422:264:4;;;;;;;;;;;;:::i;758:141::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;758:141:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;758:141:4;;;;;;;;;;-1:-1:-1;758:141:4;;-1:-1:-1;758:141:4;-1:-1:-1;758:141:4;:::i;3093:126::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3093:126:4;;;;;;;;:::i;6839:255:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;6839:255:10;-1:-1:-1;;;;;6839:255:10;;:::i;6522:311::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;6522:311:10;;;;;;;:::i;2413:85:21:-;;;;;;;;;;;;;:::i;4574:489:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4574:489:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4574:489:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4574:489:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4574:489:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4574:489:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;4574:489:4;;;;;;;;;;-1:-1:-1;4574:489:4;;-1:-1:-1;4574:489:4;-1:-1:-1;4574:489:4;:::i;1401:59:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1401:59:6;;:::i;:::-;;;;;-1:-1:-1;;;;;1401:59:6;;;;;;-1:-1:-1;;;;;1401:59:6;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1401:59:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4358:319:10;;;:::i;2376:204:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2376:204:3;;;;;;;;:::i;6295:266:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;6295:266:21;;;;;;;;:::i;905:652:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;905:652:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;905:652:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;905:652:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;905:652:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;905:652:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;905:652:4;;;;;;;;;;-1:-1:-1;905:652:4;;-1:-1:-1;905:652:4;-1:-1:-1;905:652:4;:::i;766:39:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;766:39:10;-1:-1:-1;;;;;766:39:10;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3738:172:21;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3738:172:21;;;;;;;;:::i;1755:534:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1755:534:4;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1755:534:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1755:534:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1755:534:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1755:534:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1755:534:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1755:534:4;;;;;;;;;;-1:-1:-1;1755:534:4;;-1:-1:-1;1755:534:4;-1:-1:-1;1755:534:4;:::i;2692:395::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2692:395:4;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2692:395:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2692:395:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2692:395:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2692:395:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2692:395:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2692:395:4;;;;;;;;;;-1:-1:-1;2692:395:4;;-1:-1:-1;2692:395:4;-1:-1:-1;2692:395:4;:::i;4151:417::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4151:417:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;2295:121::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2295:121:4;;;;;;;;:::i;2158:212:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2158:212:3;;;;;;;;:::i;1613:215:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1613:215:5;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;3968:149:21;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3968:149:21;;;;;;;;;;:::i;1942:210:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1942:210:3;;;;;;;;:::i;2581:146:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2581:146:10;-1:-1:-1;;;;;2581:146:10;;:::i;1308:75:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1308:75:3;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;1308:75:3;;;;;;;;;;;-1:-1:-1;;;;;1308:75:3;;;;;;-1:-1:-1;;;;;1308:75:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81:21;2288:5;2281:12;;;;;;;;-1:-1:-1;;2281:12:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2256:13;;2281:12;;2288:5;;2281:12;;2288:5;2281:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81;:::o;4255:166::-;4338:4;4354:39;4363:12;:10;:12::i;:::-;4377:7;4386:6;4354:8;:39::i;:::-;-1:-1:-1;4410:4:21;4255:166;;;;;:::o;2417:158:10:-;-1:-1:-1;;;;;2518:15:10;;2477:7;2518:15;;;:6;:15;;;;;2550:18;;;2417:158;;;;:::o;3916:229:4:-;4072:66;4096:10;4108:9;4119:18;4072:23;:66::i;:::-;3916:229;;;:::o;3262:98:21:-;3341:12;;3262:98;:::o;1784:627:10:-;1918:10;1900:15;1960;;;:6;:15;;;;;1993:19;;:24;1985:47;;;;;-1:-1:-1;;;1985:47:10;;;;;;;;;;;;-1:-1:-1;;;1985:47:10;;;;;;;;;;;;;;;2063:18;;;;;:40;;-1:-1:-1;2085:18:10;;;2063:40;2042:100;;;;;-1:-1:-1;;;2042:100:10;;;;;;;;;;;;-1:-1:-1;;;2042:100:10;;;;;;;;;;;;;;;2152:35;;;2197:19;;;:35;;;2242:26;:24;:26::i;:::-;2283:121;;;2331:9;2283:121;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2283:121:10;;;;;;;;;;;;;1784:627;;;;:::o;4881:317:21:-;4987:4;5003:36;5013:6;5021:9;5032:6;5003:9;:36::i;:::-;5049:121;5058:6;5066:12;:10;:12::i;:::-;5080:89;5118:6;5080:89;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5080:19:21;;;;;;:11;:19;;;;;;5100:12;:10;:12::i;:::-;-1:-1:-1;;;;;5080:33:21;;;;;;;;;;;;-1:-1:-1;5080:33:21;;;:89;:37;:89::i;:::-;5049:8;:121::i;:::-;-1:-1:-1;5187:4:21;4881:317;;;;;;:::o;470:19:4:-;;;-1:-1:-1;;;;;470:19:4;;:::o;3121:81:21:-;3186:9;;;;3121:81;:::o;522:104:0:-;598:21;522:104;:::o;5593:215:21:-;5681:4;5697:83;5706:12;:10;:12::i;:::-;5720:7;5729:50;5768:10;5729:11;:25;5741:12;:10;:12::i;:::-;-1:-1:-1;;;;;5729:25:21;;;;;;;;;;;;;;;;;-1:-1:-1;5729:25:21;;;:34;;;;;;;;;;;:38;:50::i;393:53:0:-;;;;;;;;;;;;;:::o;811:55:10:-;863:3;811:55;:::o;3934:418::-;4064:10;4046:15;4106;;;:6;:15;;;;;4139:19;;4131:50;;;;;-1:-1:-1;;;4131:50:10;;;;;;;;;;;;-1:-1:-1;;;4131:50:10;;;;;;;;;;;;;;;4191:35;;;4236:19;;;:35;;;4286:59;;;;;;;;;;;;;;-1:-1:-1;;;;;4286:59:10;;;;;;;;;;;3934:418;;;;:::o;535:85:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;535:85:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;452:49:0:-;;;;;;;;;;;;;:::o;4683:286:10:-;4775:10;4746:19;4768:18;;;:6;:18;;;;;4804:19;;4796:50;;;;;-1:-1:-1;;;4796:50:10;;;;;;;;;;;;-1:-1:-1;;;4796:50:10;;;;;;;;;;;;;;;4875:16;;;;:28;;4896:6;4875:20;:28::i;:::-;4856:16;;;:47;4913:49;4943:10;4955:6;4913:29;:49::i;:::-;4683:286;;:::o;3418:117:21:-;-1:-1:-1;;;;;3510:18:21;3484:7;3510:18;;;;;;;;;;;;3418:117::o;1563:186:4:-;1674:68;1694:10;1706:15;1723:7;1732:9;1674:19;:68::i;2422:264::-;2553:126;2588:10;2612:12;2638:10;2662:7;2553:21;:126::i;758:141::-;822:7;841:12;856:15;:5;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;856:13:4;;-1:-1:-1;;;856:15:4:i;:::-;841:30;758:141;-1:-1:-1;;;;758:141:4:o;3093:126::-;3171:41;3192:9;3203:8;3171:20;:41::i;6839:255:10:-;6900:7;6919:22;6944:38;6974:7;6944:29;:38::i;:::-;6919:63;;6999:88;7045:14;863:3;6522:311;6636:7;6792:34;6816:9;6792:19;:10;6807:3;6792:14;:19::i;:::-;:23;;:34::i;2413:85:21:-;2484:7;2477:14;;;;;;;;-1:-1:-1;;2477:14:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2452:13;;2477:14;;2484:7;;2477:14;;2484:7;2477:14;;;;;;;;;;;;;;;;;;;;;;;;4574:489:4;4933:18;4954:51;4963:6;4971:5;4978;;4985:6;;4993:11;;4954:8;:51::i;:::-;4933:72;;5015:41;5039:9;5050:5;5015:23;:41::i;:::-;4574:489;;;;;;;;;;:::o;1401:59:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1401:59:6;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4358:319:10:-;4437:10;4419:15;4479;;;:6;:15;;;;;4512:19;;4504:50;;;;;-1:-1:-1;;;4504:50:10;;;;;;;;;;;;-1:-1:-1;;;4504:50:10;;;;;;;;;;;;;;;4583:16;;;;:31;;4604:9;4583:20;:31::i;:::-;4564:16;;;:50;4624:46;4651:7;4660:9;4624:26;:46::i;2376:204:3:-;-1:-1:-1;;;;;2509:24:3;;;;2457:7;2509:24;;;:13;:24;;;;;;;;:33;;;;;;;2559:14;;;;2376:204::o;6295:266:21:-;6388:4;6404:129;6413:12;:10;:12::i;:::-;6427:7;6436:96;6475:15;6436:96;;;;;;;;;;;;;;;;;:11;:25;6448:12;:10;:12::i;:::-;-1:-1:-1;;;;;6436:25:21;;;;;;;;;;;;;;;;;-1:-1:-1;6436:25:21;;;:34;;;;;;;;;;;:96;:38;:96::i;905:652:4:-;1088:12;1112;1127:15;:5;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1127:13:4;;-1:-1:-1;;;1127:15:4:i;:::-;1112:30;;1152:5;;;;;;;;;-1:-1:-1;;;;;1152:5:4;-1:-1:-1;;;;;1152:14:4;;1180:6;1200:5;1219:4;1237:6;;1257:11;;1282:1;1297:4;1152:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1152:159:4;;;;;;;;;;;;;;;-1:-1:-1;1152:159:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1321:41:4;;-1:-1:-1;1321:41:4;:::i;:::-;1377:33;1404:5;;1377:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1377:26:4;;-1:-1:-1;;;1377:33:4:i;:::-;1321:89;;1428:5;:14;;;:19;;1446:1;1428:19;1420:51;;;;;-1:-1:-1;;;1420:51:4;;;;;;;;;;;;-1:-1:-1;;;1420:51:4;;;;;;;;;;;;;;;1539:11;;;;905:652;-1:-1:-1;;;;;;;;;;905:652:4:o;766:39:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3738:172:21:-;3824:4;3840:42;3850:12;:10;:12::i;:::-;3864:9;3875:6;3840:9;:42::i;1755:534:4:-;2141:18;2174:51;2183:6;2191:5;2198;;2205:6;;2213:11;;2174:8;:51::i;:::-;2141:84;;2236:46;2256:9;2267:7;2276:5;2236:19;:46::i;:::-;1755:534;;;;;;;;;;;:::o;2692:395::-;2936:18;2969:51;2978:6;2986:5;2993;;3000:6;;3008:11;;2969:8;:51::i;:::-;2936:84;;3031:49;3053:9;3064:8;3074:5;3031:21;:49::i;4151:417::-;4380:181;4416:10;4440;4464:9;4487:10;4511:13;4538;4380:22;:181::i;:::-;4151:417;;;;;;:::o;2295:121::-;2371:38;2390:9;2401:7;2371:18;:38::i;2158:212:3:-;-1:-1:-1;;;;;2295:24:3;;;2243:7;2295:24;;;:13;:24;;;;;;;;:33;;;;;;;2345:18;;;;;2158:212::o;1613:215:5:-;-1:-1:-1;;;;;1755:25:5;;;;1696:13;1755:25;;;:14;:25;;;;;;;;:35;;;;;;;;;1807:14;;;;;1613:215::o;3968:149:21:-;-1:-1:-1;;;;;4083:18:21;;;4057:7;4083:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3968:149::o;1942:210:3:-;-1:-1:-1;;;;;2081:24:3;;;;2023:13;2081:24;;;:13;:24;;;;;;;;:33;;;;;;;;;2131:14;;;;;1942:210::o;2581:146:10:-;-1:-1:-1;;;;;2676:15:10;2635:7;2676:15;;;:6;:15;;;;;2708:12;;;;2581:146::o;1308:75:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1308:75:3;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1308:75:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1308:75:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1308:75:3;;-1:-1:-1;1308:75:3;;;;;:::o;590:104:18:-;677:10;590:104;:::o;9359:340:21:-;-1:-1:-1;;;;;9460:19:21;;9452:68;;;;-1:-1:-1;;;9452:68:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9538:21:21;;9530:68;;;;-1:-1:-1;;;9530:68:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9609:18:21;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;9660:32;;;;;;;;;;;;;;;;;9359:340;;;:::o;1943:1827:6:-;2100:10;-1:-1:-1;;;;;2100:24:6;;;2092:73;;;;-1:-1:-1;;;2092:73:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2243:25;2271:55;2315:10;2271:43;:55::i;:::-;2243:83;;2336:28;2367:38;2376:17;2395:9;2367:8;:38::i;:::-;2336:69;-1:-1:-1;2452:18:6;2484:13;;2481:157;;2541:86;2575:18;2595:20;2617:9;2541:33;:86::i;:::-;2513:114;;2481:157;2649:25;2676:31;2711:104;2755:10;2767:20;2789:25;2711:43;:104::i;:::-;2648:167;;;;3106:17;3126:24;:22;:24::i;:::-;3106:44;;3189:9;3168:17;:30;;3160:64;;;;;-1:-1:-1;;;3160:64:6;;;;;;;;;;;;-1:-1:-1;;;3160:64:6;;;;;;;;;;;;;;;3430:23;3367:47;3396:17;3367:28;:47::i;:::-;:86;;3346:155;;;;;-1:-1:-1;;;3346:155:6;;;;;;;;;;;;-1:-1:-1;;;3346:155:6;;;;;;;;;;;;;;;3607:65;3634:10;3646:25;3607:26;:65::i;:::-;3688:75;;;;;;;;;;;;;;-1:-1:-1;;;;;3688:75:6;;;;;;;;;;;1943:1827;;;;;;;;;:::o;7035:530:21:-;-1:-1:-1;;;;;7140:20:21;;7132:70;;;;-1:-1:-1;;;7132:70:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7220:23:21;;7212:71;;;;-1:-1:-1;;;7212:71:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7294:47;7315:6;7323:9;7334:6;7294:20;:47::i;:::-;7372:71;7394:6;7372:71;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7372:17:21;;:9;:17;;;;;;;;;;;;:71;:21;:71::i;:::-;-1:-1:-1;;;;;7352:17:21;;;:9;:17;;;;;;;;;;;:91;;;;7476:20;;;;;;;:32;;7501:6;7476:24;:32::i;:::-;-1:-1:-1;;;;;7453:20:21;;;:9;:20;;;;;;;;;;;;:55;;;;7523:35;;;;;;;7453:20;;7523:35;;;;;;;;;;;;;7035:530;;;:::o;1746:187:20:-;1832:7;1867:12;1859:6;;;;1851:29;;;;-1:-1:-1;;;1851:29:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1902:5:20;;;1746:187::o;874:176::-;932:7;963:5;;;986:6;;;;978:46;;;;;-1:-1:-1;;;978:46:20;;;;;;;;;;;;;;;;;;;;;;;;;;;1321:134;1379:7;1405:43;1409:1;1412;1405:43;;;;;;;;;;;;;;;;;:3;:43::i;1370:164:0:-;1448:31;1456:6;1464;1472;1448:7;:31::i;:::-;1494:33;;;-1:-1:-1;;;;;1494:33:0;;;;;;;;;;;;;;;;;;;;;;;1370:164;;:::o;3388:1676:3:-;3645:18;3586:43;3613:15;3586:26;:43::i;:::-;:77;;3565:146;;;;;-1:-1:-1;;;3565:146:3;;;;;;;;;;;;-1:-1:-1;;;3565:146:3;;;;;;;;;;;;;;;3742:113;3801:7;3826:15;3742:41;:113::i;:::-;3721:179;;;;;-1:-1:-1;;;3721:179:3;;;;;;;;;;;;-1:-1:-1;;;3721:179:3;;;;;;;;;;;;;;;3910:15;3928:21;3939:9;3928:10;:21::i;:::-;3910:39;;3959:18;3980:54;4017:7;4026;3980:36;:54::i;:::-;3959:75;;4044:11;4058:28;4070:15;4058:11;:28::i;:::-;-1:-1:-1;;;;;4181:24:3;;4096:18;4181:24;;;:13;:24;;;;;;;;:33;;;;;;;;4044:42;;-1:-1:-1;4117:21:3;;;;4181:33;4232:14;;;;;;:36;;;;;;;;;4224:64;;;;;-1:-1:-1;;;4224:64:3;;;;;;;;;;;;-1:-1:-1;;;4224:64:3;;;;;;;;;;;;;;;4312:41;;-1:-1:-1;;;;;;4312:41:3;;;-1:-1:-1;;;;;4312:41:3;;;;;;;;;4386:15;-1:-1:-1;4367:16:3;;;:34;;;;4415:17;;;:29;;;;;;;;;;;;4458:18;;;:31;;;;;;;;;;;;4503:14;;;:27;;;4544:11;;;:17;;;4575:26;;;:47;;;4653:6;4636:14;;;:23;-1:-1:-1;4673:17:3;;;:21;4708:14;;;:38;;-1:-1:-1;;4708:38:3;;;;;;4766:107;;4806:17;4575:47;4766:26;:107::i;:::-;4905:152;;;;;;;;;;;;-1:-1:-1;;;;;4905:152:3;;;;;;;;;;;;;;;;4931:7;;4905:152;;;;;;;;;3388:1676;;;;;;;;;:::o;2289:1696:5:-;2448:35;2459:9;2470:12;2448:10;:35::i;:::-;2493:17;2513:26;2526:12;2513;:26::i;:::-;2493:46;;2549:20;2572:24;:22;:24::i;:::-;2549:47;-1:-1:-1;2630:24:5;;;2693:28;;;2606:21;2750:22;2762:9;2750:11;:22::i;:::-;2731:41;;2804:113;2865:7;2890:13;2804:43;:113::i;:::-;2783:187;;;;;-1:-1:-1;;;2783:187:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3051:25:5;;3017:31;3051:25;;;:14;:25;;;;;;;;:35;;;;;;;;;3104:14;;;;;;:36;;;;;;;;;3096:64;;;;;-1:-1:-1;;;3096:64:5;;;;;;;;;;;;-1:-1:-1;;;3096:64:5;;;;;;;;;;;;;;;3184:23;;-1:-1:-1;;;;;;3184:23:5;-1:-1:-1;;;;;3184:23:5;;;;;3240:15;-1:-1:-1;3221:16:5;;:34;3286:6;3269:14;;;:23;3306:11;;;:23;;;3343:22;;;:37;;;3394:17;;;:38;;;3499:39;3394:38;3499:19;:39::i;:::-;3479:17;;;:59;;;3552:17;;;:29;;-1:-1:-1;;;;;3552:29:5;;;-1:-1:-1;;;;;;3552:29:5;;;;;;;3595:18;;;:31;;;;;;;;;;;;;;;3672:14;;;:38;;-1:-1:-1;;3672:38:5;-1:-1:-1;3672:38:5;;;3730:56;;3759:7;;3730:28;:56::i;:::-;3894:17;;;;3925:11;;;;3950:18;;;;3801:177;;;;;;;;;;;;;-1:-1:-1;;;;;3950:18:5;;;3801:177;;;;;;;;;;;;;;3828:8;;3801:177;;;;;;;;;2289:1696;;;;;;;;;;:::o;5745:126:14:-;5802:7;5828:36;5852:10;5859:2;5852:10;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5852:10:14;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5852:10:14;;;;;;;;;;;;;;;;;;-1:-1:-1;5852:10:14;;-1:-1:-1;;5852:10:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5852:10:14;5835:28;;;5852:10;5835:28;;;;;;;;;;;;;;;;;;;;;;;5828:36;;5835:28;;;;5828:36;;;;;5835:28;5828:36;;;;;;;;;;;-1:-1:-1;;5828:36:14;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5828:36:14;;;;;;;;;;;;;;;;;;-1:-1:-1;5828:36:14;;-1:-1:-1;;5828:36:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5828:36:14;;5745:126;-1:-1:-1;;5745:126:14:o;4991:964:5:-;-1:-1:-1;;;;;5104:25:5;;5070:31;5104:25;;;:14;:25;;;;;;;;:35;;;;;;;;5188:21;5170:14;;;;;;:39;;;;;;;;;5149:106;;;;;-1:-1:-1;;;5149:106:5;;;;;;;;;;;;-1:-1:-1;;;5149:106:5;;;;;;;;;;;;;;;5323:7;:14;;;5304:7;:16;;;:33;5286:15;:51;5265:112;;;;;-1:-1:-1;;;5265:112:5;;;;;;;;;;;;-1:-1:-1;;;5265:112:5;;;;;;;;;;;;;;;5387:14;;;:40;;-1:-1:-1;;5387:40:5;5404:23;5387:40;;;;;;5470:17;;;;5521:11;;;;5501:17;;;;5437:105;;-1:-1:-1;;;;;5470:17:5;;5501:31;5437:19;:105::i;:::-;5582:13;;5597:17;;;;5553:62;;-1:-1:-1;;;;;5582:13:5;;5553:28;:62::i;:::-;5666:13;;5693:17;;;;5724;;;;5625:126;;-1:-1:-1;;;;;5666:13:5;;;;5693:17;;5625:27;:126::i;:::-;5837:13;;5864:17;;;;5895:11;;;;5920:18;;;;5766:182;;;;;;;;;;;;;-1:-1:-1;;;;;5920:18:5;;;5766:182;;;;;;5837:13;;;;5766:182;;;;5792:8;;5766:182;;;;;;;;;4991:964;;;:::o;1742:155:0:-;-1:-1:-1;;;;;1866:23:0;;1808:7;1866:23;;;:14;:23;;;;;;;;;1834:18;:27;;;;;;:56;;:31;:56::i;2180:459:20:-;2238:7;2479:6;2475:45;;-1:-1:-1;2508:1:20;2501:8;;2475:45;2542:5;;;2546:1;2542;:5;:1;2565:5;;;;;:10;2557:56;;;;-1:-1:-1;;;2557:56:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3101:130;3159:7;3185:39;3189:1;3192;3185:39;;;;;;;;;;;;;;;;;:3;:39::i;7194:1417:6:-;7380:32;7415:26;;;:15;:26;;;;;7477:21;7459:14;;;;;;:39;;;;;;;;;7451:72;;;;;-1:-1:-1;;;7451:72:6;;;;;;;;;;;;-1:-1:-1;;;7451:72:6;;;;;;;;;;;;;;;7630:16;;;7677;;;7834:18;;;;-1:-1:-1;;;;;7630:16:6;;;;7677;;;;7609:18;;7744:149;;7792:5;;7609:18;;7834;7870:9;7744:30;:149::i;:::-;7704:189;;7934:7;:14;;;7913:17;:35;;7904:85;;;;-1:-1:-1;;;7904:85:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8135:87;8163:10;8175;8187:7;:14;;;8203:7;:18;;;8135:27;:87::i;:::-;8323:69;8353:10;8365:7;:26;;;8323:29;:69::i;:::-;8484:10;-1:-1:-1;;;;;8446:49:6;8472:10;-1:-1:-1;;;;;8446:49:6;8461:9;8446:49;;;;;;;;;;-1:-1:-1;;;8554:14:6;;:40;;-1:-1:-1;;8554:40:6;8571:23;8554:40;;;-1:-1:-1;;7194:1417:6:o;632:253:0:-;728:6;715:9;:19;;707:49;;;;;-1:-1:-1;;;707:49:0;;;;;;;;;;;;-1:-1:-1;;;707:49:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;795:26:0;;;;;;:18;:26;;;;;;:38;;826:6;795:30;:38::i;:::-;-1:-1:-1;;;;;766:26:0;;;;;;:18;:26;;;;;;;;;:67;;;;848:30;;;;;;;;;;;;;;;;;;;;;;;;632:253;;:::o;575:1303:8:-;661:18;;:::i;:::-;712:12;;748:1;776:19;798;712:5;748:1;815;798:11;:19::i;:::-;776:41;;831:6;838:1;831:9;;;;;;;;;;;;-1:-1:-1;;;;;;831:9:8;:17;:38;;;;;852:6;859:1;852:9;;;;;;;;;;;;;-1:-1:-1;;;;;;852:9:8;-1:-1:-1;;;852:17:8;831:38;827:82;;;891:3;897:1;891:7;885:13;;827:82;937:3;919:15;;1004:44;:30;:5;937:3;1021:12;;;1004:11;:30::i;:::-;:42;:44::i;:::-;951:97;;;;1065:9;1077:1;1065:13;1058:20;;;;1094:9;1089:428;1113:9;1109:1;:13;1089:428;;;1150:2;1143:9;;;;1226:26;1254:20;1294:44;:30;1306:3;1320;1311:6;:12;1294:5;:11;;:30;;;;;:::i;:44::-;1361:84;1353:136;;;;1361:127;1353:136;;-1:-1:-1;;1398:1:8;1124:3;1089:428;;;-1:-1:-1;1577:294:8;;;;;;;;;1545:3;;1577:294;1623:31;:17;:5;1526:16;1638:1;1623:11;:17::i;:::-;:29;:31::i;:::-;1577:294;;;;;;1679:40;1691:7;1711;1700:8;:18;1679:5;:11;;:40;;;;;:::i;:::-;1577:294;;;;1744:44;:5;1756:8;1766:21;;;-1:-1:-1;;1766:21:8;1744:11;:44::i;:::-;1577:294;;;;1823:32;:18;:5;1839:1;1823:15;:18::i;:32::-;1577:294;;;;1558:313;575:1303;-1:-1:-1;;;;;;;;;575:1303:8:o;5070:3277:3:-;-1:-1:-1;;;;;5231:24:3;;5198:30;5231:24;;;:13;:24;;;;;;;;:33;;;;;;;;5313:21;5295:14;;;;;;:39;;;;;;;;;5274:106;;;;;-1:-1:-1;;;5274:106:3;;;;;;;;;;;;-1:-1:-1;;;5274:106:3;;;;;;;;;;;;;;;5504:18;;;;5390:25;;5426:127;;5470:5;;5390:25;;-1:-1:-1;;;;;5504:18:3;5536:7;5426:30;:127::i;:::-;5610:11;;;;5593:14;;;;5390:163;;-1:-1:-1;5593:28:3;5635:39;;;5631:2164;;;5803:17;;;;-1:-1:-1;;;;;5803:17:3;5789:10;:31;5781:59;;;;;-1:-1:-1;;;5781:59:3;;;;;;;;;;;;-1:-1:-1;;;5781:59:3;;;;;;;;;;;;;;;5964:13;;5872:39;;;;5925:62;;-1:-1:-1;;;;;5964:13:3;5872:39;5925:38;:62::i;:::-;6001:26;6042:163;6093:7;:26;;;6137:17;6172:19;6042:33;:163::i;:::-;6266:17;;;;6001:204;;-1:-1:-1;6219:114:3;;-1:-1:-1;;;;;6266:17:3;6001:204;6219:29;:114::i;:::-;6387:26;;;;6493:17;;;;6528:13;;6387:47;;;;;6448:142;;-1:-1:-1;;;;;6493:17:3;;;;6528:13;6387:47;6448:27;:142::i;:::-;6621:151;6656:7;6681;6706:17;6741;6621;:151::i;:::-;5631:2164;;;;;;6850:17;;;;6885:26;;;;6803:122;;-1:-1:-1;;;;;6850:17:3;;6803:29;:122::i;:::-;6980:19;6960:17;:39;6956:829;;;7205:13;;7056:39;;;;7138:138;;-1:-1:-1;;;;;7205:13:3;7056:39;7138:41;:138::i;:::-;7113:658;;;7317:175;7360:7;7393;7426:17;7469:1;7317:17;:175::i;:::-;6956:829;;7837:11;;;;7820:14;;;;7884:13;;7820:28;;;7858:47;;-1:-1:-1;;;;;7884:13:3;7820:28;7858:25;:47::i;:::-;7927:13;;7942:11;;;;7915:39;;-1:-1:-1;;;;;7927:13:3;;7915:11;:39::i;:::-;7976:17;;;;7995:14;;;;7964:46;;-1:-1:-1;;;;;7976:17:3;;7964:11;:46::i;:::-;8020:14;;;:40;;-1:-1:-1;;8020:40:3;8037:23;8020:40;;;8232:13;;8259:14;;;;8287:11;;;;8312:18;;;;8161:179;;;;;;;;;;;;;-1:-1:-1;;;;;8312:18:3;;;8161:179;;;;;;8232:13;;;;8161:179;;;;8188:7;;8161:179;;;;;;;;;;5070:3277;;;;;;;:::o;3991:994:5:-;-1:-1:-1;;;;;4155:25:5;;4121:31;4155:25;;;:14;:25;;;;;;;;:35;;;;;;;;4239:21;4221:14;;;;;;:39;;;;;;;;;4200:106;;;;;-1:-1:-1;;;4200:106:5;;;;;;;;;;;;-1:-1:-1;;;4200:106:5;;;;;;;;;;;;;;;4379:17;;;;4410:18;;;;4316:144;;4360:5;;-1:-1:-1;;;;;4410:18:5;4442:8;4316:30;:144::i;:::-;;4470:35;4487:7;:17;;;4470:16;:35::i;:::-;4535:13;;4550:11;;;;4515:47;;-1:-1:-1;;;;;4535:13:5;;4515:19;:47::i;:::-;4572:14;;;:40;;-1:-1:-1;;4572:40:5;4589:23;4572:40;;;4651:13;;4666:17;;;;4622:62;;-1:-1:-1;;;;;4651:13:5;;4622:28;:62::i;:::-;4721:13;;4756:22;;;;4736:17;;;;4694:85;;-1:-1:-1;;;;;4721:13:5;;4736:42;4694:26;:85::i;:::-;4867:13;;4894:17;;;;4925:11;;;;4950:18;;;;4794:184;;;;;;;;;;;;;-1:-1:-1;;;;;4950:18:5;;;4794:184;;;;;;4867:13;;;;4794:184;;;;4822:8;;4794:184;;;;;;;;;3991:994;;;;:::o;4363:2825:6:-;4593:10;-1:-1:-1;;;;;4593:24:6;;;4585:69;;;;;-1:-1:-1;;;4585:69:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4686:10;-1:-1:-1;;;;;4672:24:6;:10;-1:-1:-1;;;;;4672:24:6;;;4664:75;;;;-1:-1:-1;;;4664:75:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4934:32:6;;;4909:22;4934:32;;;:20;:32;;;;;;5001;;;;;;;5052:22;;5044:53;;;;;-1:-1:-1;;;5044:53:6;;;;;;;;;;;;-1:-1:-1;;;5044:53:6;;;;;;;;;;;;;;;5115:22;;5107:53;;;;;-1:-1:-1;;;5107:53:6;;;;;;;;;;;;-1:-1:-1;;;5107:53:6;;;;;;;;;;;;;;;5226:24;5252:26;5282:63;5323:10;5335:9;5282:40;:63::i;:::-;5225:120;;;;5411:17;5431:24;:22;:24::i;:::-;5411:44;;5493:9;5473:16;:29;;5465:63;;;;;-1:-1:-1;;;5465:63:6;;;;;;;;;;;;-1:-1:-1;;;5465:63:6;;;;;;;;;;;;;;;5607:32;5642:74;5676:10;5688:16;5706:9;5642:33;:74::i;:::-;5607:109;;5727:72;5762:10;5774:24;5727:34;:72::i;:::-;5889:73;5933:10;5945:16;5889:43;:73::i;:::-;;6078:71;6120:10;6132:16;6078:41;:71::i;:::-;;6160:17;6180:24;6193:10;6180:12;:24::i;:::-;6160:44;;6215:18;6236:92;6276:10;6288:13;6303;6318:9;6236:39;:92::i;:::-;6339:32;6374:26;;;:15;:26;;;;;6215:113;;-1:-1:-1;6419:14:6;;;;;;:36;;;;;;;;;6411:77;;;;;-1:-1:-1;;;6411:77:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;6548:10;6513:7;:16;;;:47;;;;;-1:-1:-1;;;;;6513:47:6;;;;;-1:-1:-1;;;;;6513:47:6;;;;;;6609:10;6574:7;:16;;;:47;;;;;-1:-1:-1;;;;;6574:47:6;;;;;-1:-1:-1;;;;;6574:47:6;;;;;;6652:16;6635:7;:14;;:33;;;;6703:10;6682:7;:18;;;:31;;;;;-1:-1:-1;;;;;6682:31:6;;;;;-1:-1:-1;;;;;6682:31:6;;;;;;6748:24;6727:7;:18;;:45;;;;6815:18;6786:7;:26;;:47;;;;6864:6;6847:7;:14;;:23;;;;6904:1;6884:7;:17;;:21;;;;6936;6919:7;:14;;;:38;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7063:16:6;;;;7033;;7093:14;;;;7121:18;;;;7153;;;;6983:198;;;;;;;;;;;;;-1:-1:-1;;;;;7153:18:6;;;6983:198;;;;;;7063:16;;;;7033;;;7010:9;;6983:198;;;;;;;;;;4363:2825;;;;;;;;;;;;;;;:::o;8353:919:3:-;-1:-1:-1;;;;;8463:24:3;;8430:30;8463:24;;;:13;:24;;;;;;;;:33;;;;;;;;8545:21;8527:14;;;;;;:39;;;;;;;;;8506:106;;;;;-1:-1:-1;;;8506:106:3;;;;;;;;;;;;-1:-1:-1;;;8506:106:3;;;;;;;;;;;;;;;8680:7;:14;;;8661:7;:16;;;:33;8643:15;:51;8622:112;;;;;-1:-1:-1;;;8622:112:3;;;;;;;;;;;;-1:-1:-1;;;8622:112:3;;;;;;;;;;;;;;;8744:14;;;:40;;-1:-1:-1;;8744:40:3;8761:23;8744:40;;;8835:17;;;;8866:13;;8893:26;;;;8794:135;;-1:-1:-1;;;;;8835:17:3;;;;8866:13;;8794:27;:135::i;:::-;9008:13;;9052:11;;;;9035:14;;;;8956:117;;-1:-1:-1;;;;;9008:13:3;;9035:28;8956:38;:117::i;:::-;9157:13;;9184:14;;;;9212:11;;;;9237:18;;;;9088:177;;;;;;;;;;;;;-1:-1:-1;;;;;9237:18:3;;;9088:177;;;;;;9157:13;;;;9088:177;;;;9113:7;;9088:177;;;;;;;;;8353:919;;;:::o;7658:342:10:-;-1:-1:-1;;;;;7780:15:10;;7732:14;7780:15;;;:6;:15;;;;;7813:19;;7805:50;;;;;-1:-1:-1;;;7805:50:10;;;;;;;;;;;;-1:-1:-1;;;7805:50:10;;;;;;;;;;;;;;;7866:27;7896:60;7937:5;:18;;;7896:36;7913:5;:18;;;7896:5;:12;;;:16;;:36;;;;:::i;:::-;:40;;:60::i;391:104:19:-;449:7;479:1;475;:5;:13;;487:1;475:13;;;-1:-1:-1;483:1:19;;391:104;-1:-1:-1;391:104:19:o;7372:280:10:-;7479:14;7508;;:34;;;;-1:-1:-1;7526:16:10;;7508:34;7505:81;;;-1:-1:-1;7565:10:10;7558:17;;7505:81;7603:42;7633:11;7603:25;:10;7618:9;7603:14;:25::i;8006:651::-;-1:-1:-1;;;;;8166:15:10;;8116:7;8166:15;;;:6;:15;;;;;8116:7;;;8222:38;8173:7;8222:29;:38::i;:::-;8192:68;;8289:19;8279:6;:29;;8271:120;;;;-1:-1:-1;;;8271:120:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8423:18;;;;:30;;8446:6;8423:22;:30::i;:::-;8402:18;;;:51;8489:23;;;;:39;;8517:10;8489:27;:39::i;:::-;8463:23;;;:65;8544:43;;;;;;;;-1:-1:-1;;;;;8544:43:10;;;;;;;;;;;;;8606:5;:18;;;8626:5;:23;;;8598:52;;;;;;8006:651;;;;;;:::o;1687:100:6:-;1737:7;1687:100;:::o;1793:144::-;1921:9;1793:144::o;891:473:0:-;-1:-1:-1;;;;;1052:22:0;;;;;;:14;:22;;;;;;;;;1021:18;:26;;;;;;;1079:6;;1021:54;;:26;:30;:54::i;:::-;:64;;1000:133;;;;;-1:-1:-1;;;1000:133:0;;;;;;;;;;;;-1:-1:-1;;;1000:133:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;1172:26:0;;;;;;:18;:26;;;;;;:38;;1203:6;1172:30;:38::i;:::-;-1:-1:-1;;;;;1143:26:0;;;;;;;:18;:26;;;;;;:67;;;;1288:26;;1258:2;;1143:26;1288:8;;;1303:6;;1143:26;1288;1143;1288;1303:6;1288:8;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1272:42;;;1332:4;1324:33;;;;;-1:-1:-1;;;1324:33:0;;;;;;;;;;;;-1:-1:-1;;;1324:33:0;;;;;;;;;;;;;;;891:473;;;;;:::o;5224:412:10:-;5311:4;5327:22;5352:23;5367:7;5352:14;:23::i;:::-;5327:48;;5405:6;5388:14;:23;5385:40;;;5420:5;5413:12;;;;;5385:40;-1:-1:-1;;;;;5480:15:10;;5458:19;5480:15;;;:6;:15;;;;;5524:16;;;;:28;;5545:6;5524:20;:28::i;:::-;5505:16;;;:47;5567:41;;;;;;;;-1:-1:-1;;;;;5567:41:10;;;;;;;;;;;;;-1:-1:-1;5625:4:10;;5224:412;-1:-1:-1;;;;5224:412:10:o;2586:212:3:-;2642:7;2746:4;2777:1;2762:12;:16;2752:27;2729:51;;;;;;-1:-1:-1;;;;;2729:51:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;2719:62;;;;;;2698:93;;2683:108;;2586:212;;;:::o;2733:579:10:-;-1:-1:-1;;;;;2878:15:10;;2833:7;2878:15;;;:6;:15;;;;;2911:19;;2903:50;;;;;-1:-1:-1;;;2903:50:10;;;;;;;;;;;;-1:-1:-1;;;2903:50:10;;;;;;;;;;;;;;;2963:18;2996:142;3043:5;:19;;;3080:5;:19;;;3117:7;2996:29;:142::i;:::-;-1:-1:-1;;;;;3158:34:10;;;;;;:22;;;:34;;;;;;2963:175;;-1:-1:-1;3158:34:10;;3157:35;3149:77;;;;;-1:-1:-1;;;3149:77:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3236:34:10;;;;;;:22;;;;:34;;;;;;:41;;-1:-1:-1;;3236:41:10;3273:4;3236:41;;;3259:10;-1:-1:-1;2733:579:10;;;;:::o;1468:137:3:-;1594:4;1592:1;1576:17;;;;:22;;1468:137::o;3225:228:4:-;3396:50;3412:10;3432:4;3439:6;3396:15;:50::i;1486:121:5:-;-1:-1:-1;1573:7:5;;1486:121::o;5642:414:10:-;5731:4;5747:18;5768:25;5785:7;5768:16;:25::i;:::-;5747:46;;5815:10;5806:6;:19;5803:36;;;5834:5;5827:12;;;;;5803:36;-1:-1:-1;;;;;5894:15:10;;5872:19;5894:15;;;:6;:15;;;;;5940:18;;;;:30;;5963:6;5940:22;:30::i;:::-;5919:18;;;:51;5985:43;;;;;;;;-1:-1:-1;;;;;5985:43:10;;;;;;;;;;;;;-1:-1:-1;6045:4:10;;5642:414;-1:-1:-1;;;;5642:414:10:o;1903:279:0:-;-1:-1:-1;;;;;2007:23:0;;;;;;:14;:23;;;;;;:35;;2035:6;2007:27;:35::i;:::-;-1:-1:-1;;;;;1981:23:0;;;;;;:14;:23;;;;;;;;:61;;;2073:18;:27;;;;;;:54;;2052:123;;;;;-1:-1:-1;;;2052:123:0;;;;;;;;;;;;-1:-1:-1;;;2052:123:0;;;;;;;;;;;;;;3584:174:4;3703:48;3727:4;3734:8;3744:6;3703:15;:48::i;2188:224:0:-;-1:-1:-1;;;;;2274:23:0;;;;;;:14;:23;;;;;;:33;-1:-1:-1;2274:33:0;2266:68;;;;;-1:-1:-1;;;2266:68:0;;;;;;;;;;;;-1:-1:-1;;;2266:68:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;2370:23:0;;;;;;:14;:23;;;;;;:35;;2398:6;2370:27;:35::i;:::-;-1:-1:-1;;;;;2344:23:0;;;;;;;:14;:23;;;;;:61;;;;-1:-1:-1;2188:224:0:o;1540:196::-;1656:25;1664:4;1670:2;1674:6;1656:7;:25::i;:::-;1696:33;;;-1:-1:-1;;;;;1696:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;1540:196;;;:::o;3713:272:20:-;3799:7;3833:12;3826:5;3818:28;;;;-1:-1:-1;;;3818:28:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3856:9;3872:1;3868;:5;;;;;;;3713:272;-1:-1:-1;;;;;3713:272:20:o;1671:476:9:-;1851:7;1871:24;1911:59;1942:6;1950:19;1911:30;:59::i;:::-;1870:100;;2075:10;2055:16;:30;;2047:60;;;;;-1:-1:-1;;;2047:60:9;;;;;;;;;;;;-1:-1:-1;;;2047:60:9;;;;;;;;;;;;;;;2124:16;1671:476;-1:-1:-1;;;;;1671:476:9:o;9417:625:10:-;-1:-1:-1;;;;;9560:18:10;;;9535:22;9560:18;;;:6;:18;;;;;;9613;;;;;;;9650:22;;9642:53;;;;;-1:-1:-1;;;9642:53:10;;;;;;;;;;;;-1:-1:-1;;;9642:53:10;;;;;;;;;;;;;;;9713:22;;9705:53;;;;;-1:-1:-1;;;9705:53:10;;;;;;;;;;;;-1:-1:-1;;;9705:53:10;;;;;;;;;;;;;;;9880:15;;;;:27;;9900:6;9880:19;:27::i;:::-;9862:15;;;;:45;;;;9935:15;;;:27;;9955:6;9935:19;:27::i;:::-;9917:15;;;:45;9978:57;;;;;;;;;;;;;;-1:-1:-1;;;;;9978:57:10;;;;;;;;;;;;;;;;;;;9417:625;;;;;;:::o;10387:924:15:-;10474:16;10506:12;10502:55;;-1:-1:-1;10534:12:15;;;;;;;;;-1:-1:-1;10534:12:15;;;;10502:55;10578:16;;;10612:13;;;:38;;;;;10646:4;10629:6;:13;:21;;10612:38;10604:70;;;;;-1:-1:-1;;;10604:70:15;;;;;;;;;;;;-1:-1:-1;;;10604:70:15;;;;;;;;;;;;;;;10811:4;10805:11;10798:18;;10860:7;10855:2;10850:3;10846:12;10842:26;10836:4;10829:40;10894:7;10889:3;10882:20;11021:6;11013;11009:19;11004:3;11000:29;11097:6;11092:2;11084:6;11080:15;11076:28;11141:7;11136:3;11132:17;11043:252;11172:3;11167;11164:12;11043:252;;;11276:3;11270:10;11263:4;11258:3;11254:14;11247:34;11211:2;11206:3;11202:12;11195:19;;11043:252;;;11047:116;;;10694:611;;;;;;:::o;1949:424:14:-;2010:7;2019;2038:14;2055:29;2081:2;2055:25;:29::i;:::-;2038:46;-1:-1:-1;2099:13:14;;;2095:68;;2136:1;2145:2;2148:1;2145:5;;;;;;;;;;;;2128:24;;-1:-1:-1;2145:5:14;;;-1:-1:-1;2128:24:14;;-1:-1:-1;2128:24:14;2095:68;2192:8;2188:1;:12;2176:24;;:2;:9;:24;2172:78;;;-1:-1:-1;;2237:1:14;2216:23;;;;;;;2172:78;2259:15;2277:53;2289:40;2307:21;:2;2316:1;2307:21;;;:8;:21::i;:::-;2289:17;:40::i;2277:53::-;2340:26;;;;;-1:-1:-1;2259:71:14;;-1:-1:-1;;1949:424:14;;;;:::o;4424:268::-;4485:7;4504:15;4535:6;4530:131;4551:2;:9;4547:1;:13;4530:131;;;4641:1;4645;4641:5;4628:2;:9;:19;4623:1;:25;4617:1;:32;4607:2;4610:1;4607:5;;;;;;;;;;;;;;4601:49;4591:59;;;;;4562:3;;4530:131;;;-1:-1:-1;4678:7:14;4424:268;-1:-1:-1;;4424:268:14:o;4934:180::-;5007:12;5031:14;5048:19;5062:4;5048:2;:9;:13;;:19;;;;:::i;:::-;5031:36;-1:-1:-1;5085:22:14;:2;5031:36;5102:4;5085:8;:22::i;4975:243:10:-;-1:-1:-1;;;;;5083:15:10;;5061:19;5083:15;;;:6;:15;;;;;5127:16;;;;:28;;5148:6;5127:20;:28::i;:::-;5108:16;;;:47;5170:41;;;;;;;;-1:-1:-1;;;;;5170:41:10;;;;;;;;;;;;;4975:243;;;:::o;2936:446:3:-;3142:27;3154:14;3142:11;:27::i;:::-;3130:9;;;:39;;;3194:26;;;3179:12;;;:41;;;3235:140;;;;;;;;;;;;;;;;;;;;;3266:7;;3235:140;;;;;;;;;;2936:446;;;;:::o;7100:266:10:-;-1:-1:-1;;;;;7195:15:10;;7173:19;7195:15;;;:6;:15;;;;;7235:12;;;;:24;;7252:6;7235:16;:24::i;:::-;7220:12;;;:39;7288:16;;;;:28;;7309:6;7288:20;:28::i;:::-;7269:16;;;:47;7331:28;;;;;;;;-1:-1:-1;;;;;7331:28:10;;;;;;;;;;;;;7100:266;;;:::o;3764:146:4:-;3874:29;3886:8;3896:6;3874:11;:29::i;3459:119::-;3537:34;3557:4;3564:6;3537:11;:34::i;:::-;3459:119;:::o;6244:272:10:-;-1:-1:-1;;;;;6340:15:10;;6318:19;6340:15;;;:6;:15;;;;;6386:18;;;;:30;;6409:6;6386:22;:30::i;:::-;6365:18;;;:51;6441:12;;;;:24;;6458:6;6441:16;:24::i;:::-;6426:12;;;:39;6480:29;;;;;;;;-1:-1:-1;;;;;6480:29:10;;;;;;;;;;;;;6244:272;;;:::o;8663:748::-;-1:-1:-1;;;;;8800:15:10;;8750:7;8800:15;;;:6;:15;;;;;8833:19;;8750:7;;8800:15;8825:50;;;;;-1:-1:-1;;;8825:50:10;;;;;;;;;;;;-1:-1:-1;;;8825:50:10;;;;;;;;;;;;;;;8886:18;8907:36;8916:5;:18;;;8936:6;8907:8;:36::i;:::-;8886:57;;8954:28;8985:76;9005:5;:23;;;9030:10;9042:5;:18;;;8985:19;:76::i;:::-;8954:107;;9071:22;9096:55;9105:5;:23;;;9130:20;9096:8;:55::i;:::-;9183:18;;;;9071:80;;-1:-1:-1;9183:34:10;;9206:10;9183:22;:34::i;:::-;9162:18;;;:55;9253:23;;;;:43;;9281:14;9253:27;:43::i;:::-;9227:23;;;:69;9312:47;;;;;;;;-1:-1:-1;;;;;9312:47:10;;;;;;;;;;;;;9377:10;;;;-1:-1:-1;8663:748:10;;-1:-1:-1;;;;;8663:748:10:o;10048:464::-;-1:-1:-1;;;;;10152:15:10;;10130:19;10152:15;;;:6;:15;;;;;10185:19;;10177:50;;;;;-1:-1:-1;;;10177:50:10;;;;;;;;;;;;-1:-1:-1;;;10177:50:10;;;;;;;;;;;;;;;10238:43;10265:7;10274:6;10238:26;:43::i;3318:610::-;-1:-1:-1;;;;;3531:15:10;;3490:7;3531:15;;;:6;:15;;;;;3564:19;;3556:50;;;;;-1:-1:-1;;;3556:50:10;;;;;;;;;;;;-1:-1:-1;;;3556:50:10;;;;;;;;;;;;;;;3617:18;3638:116;3681:13;3708;3735:9;3638:29;:116::i;:::-;-1:-1:-1;;;;;3774:34:10;;;;;;:22;;;:34;;;;;;3617:137;;-1:-1:-1;3774:34:10;;3773:35;3765:77;;;;;-1:-1:-1;;;3765:77:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3852:34:10;;;;;;:22;;;;:34;;;;;;:41;;-1:-1:-1;;3852:41:10;3889:4;3852:41;;;3875:10;-1:-1:-1;3318:610:10;;;;;;:::o;269:481:11:-;419:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;392:151;;;;;349:7;;580:101;392:151;457:4;483;580:15;:101::i;:::-;553:128;;-1:-1:-1;553:128:11;-1:-1:-1;698:45:11;709:33;553:128;;709:21;:33::i;:::-;698:10;:45::i;6062:176:10:-;-1:-1:-1;;;;;6163:15:10;;6122:7;6163:15;;;:6;:15;;;;;6212:18;;;;6195:12;;;;:36;;:16;:36::i;436:1229:9:-;570:17;602:15;621:20;:6;:18;:20::i;:::-;599:42;;;651:17;671:20;680:7;689:1;671:8;:20::i;:::-;651:40;-1:-1:-1;701:27:9;738:18;;766:708;790:9;786:1;:13;766:708;;;820:17;840:30;:6;868:1;840:27;:30::i;:::-;820:50;;888:14;:21;913:1;888:26;884:165;;;951:26;:4;:24;:26::i;:::-;999:21;;934:43;;-1:-1:-1;999:25:9;995:39;;1026:8;;;995:39;1080:19;-1:-1:-1;;;;;1066:33:9;:10;-1:-1:-1;;;;;1066:33:9;;1062:402;;1119:25;1147:18;:4;:16;:18::i;:::-;1119:46;;1208:12;:19;1231:2;1208:25;:97;;;;-1:-1:-1;;;;;;1257:48:9;;:25;:12;1280:1;1257:22;:25::i;:::-;-1:-1:-1;;;;;1257:48:9;;1208:97;1183:267;;;1358:19;:4;:17;:19::i;:::-;1346:31;;;;1412:19;1399:32;;1183:267;1062:402;;766:708;;801:3;;766:708;;;;1505:19;-1:-1:-1;;;;;1491:33:9;:10;-1:-1:-1;;;;;1491:33:9;;1483:62;;;;;-1:-1:-1;;;1483:62:9;;;;;;;;;;;;-1:-1:-1;;;1483:62:9;;;;;;;;;;;;;;;436:1229;;;;;;;;:::o;1094:437:14:-;1172:5;1199;1205:1;1199:8;;;;;;;;;;;;;;;1193:15;:23;1189:94;;;-1:-1:-1;1239:1:14;1232:8;;1189:94;1302:5;1308:1;1302:8;;;;;;;;;;;;;;;1315:4;1296:23;1292:94;;;-1:-1:-1;1342:1:14;1335:8;;1292:94;1405:5;1411:1;1405:8;;;;;;;;;;;;;;;1418:4;1399:23;1395:94;;;-1:-1:-1;1445:1:14;1438:8;;1395:94;-1:-1:-1;1506:1:14;1094:437;;;:::o;2590:278::-;2657:12;2681:22;2716:2;:9;2706:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2706:20:14;;2681:45;;2742:6;2737:98;2758:2;:9;2754:1;:13;2737:98;;;2819:2;2822:1;2819:5;;;;;;;;;;;;;;;;2788:9;2814:1;2810;2798:2;:9;:13;:17;2788:28;;;;;;;;;;;:36;-1:-1:-1;;;;;2788:36:14;;;;;;;;-1:-1:-1;2769:3:14;;2737:98;;2330:160:16;2390:7;2423:2;2417;:8;;2409:50;;;;;-1:-1:-1;;;2409:50:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2476:7:16;;;2330:160::o;7835:370:21:-;-1:-1:-1;;;;;7918:21:21;;7910:65;;;;;-1:-1:-1;;;7910:65:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;7986:49;8015:1;8019:7;8028:6;7986:20;:49::i;:::-;8061:12;;:24;;8078:6;8061:16;:24::i;:::-;8046:12;:39;-1:-1:-1;;;;;8116:18:21;;:9;:18;;;;;;;;;;;:30;;8139:6;8116:22;:30::i;:::-;-1:-1:-1;;;;;8095:18:21;;:9;:18;;;;;;;;;;;:51;;;;8161:37;;;;;;;8095:18;;:9;;8161:37;;;;;;;;;;7835:370;;:::o;8524:410::-;-1:-1:-1;;;;;8607:21:21;;8599:67;;;;-1:-1:-1;;;8599:67:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8677:49;8698:7;8715:1;8719:6;8677:20;:49::i;:::-;8758:68;8781:6;8758:68;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;8758:18:21;;:9;:18;;;;;;;;;;;;:68;:22;:68::i;:::-;-1:-1:-1;;;;;8737:18:21;;:9;:18;;;;;;;;;;:89;8851:12;;:24;;8868:6;8851:16;:24::i;:::-;8836:12;:39;8890:37;;;;;;;;8916:1;;-1:-1:-1;;;;;8890:37:21;;;;;;;;;;;;8524:410;;:::o;722:242:13:-;829:7;;-1:-1:-1;;865:5:13;:10;857:41;;;;;-1:-1:-1;;;857:41:13;;;;;;;;;;;;-1:-1:-1;;;857:41:13;;;;;;;;;;;;;;;915:42;935:5;942:2;946;489:1;-1:-1:-1;;915:19:13;:42::i;:::-;908:49;;;;722:242;;;;;;:::o;1249:200::-;1415:27;;;1396:1;1392:5;;;;1382:1;:16;1415:27;;-1:-1:-1;;;;;;1415:27:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1249:200::o;755:158:11:-;819:7;861:43;888:14;895:6;888:14;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;888:14:11;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;888:14:11;;;;;;;;;;;;;;;;;;-1:-1:-1;888:14:11;;-1:-1:-1;;888:14:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;888:14:11;871:32;;;888:14;871:32;;;;;;;;;;;;;;;;;;;;;;;861:43;;871:32;;;;861:43;;;;;871:32;861:43;;;;;;;;;;;-1:-1:-1;;861:43:11;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;861:43:11;;;;;;;;;;;;;;;;;;-1:-1:-1;861:43:11;;-1:-1:-1;;861:43:11;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;861:43:11;;;-1:-1:-1;;;;;853:52:11;;755:158;-1:-1:-1;;;755:158:11:o;14039:987:14:-;14128:12;14152:22;14184:14;14236:18;14248:5;14236:11;:18::i;:::-;14209:45;;-1:-1:-1;14209:45:14;-1:-1:-1;;;14272:29:14;;;14264:76;;;;-1:-1:-1;;;14264:76:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14367:6;14358;:15;14350:45;;;;;-1:-1:-1;;;14350:45:14;;;;;;;;;;;;-1:-1:-1;;;14350:45:14;;;;;;;;;;;;;;;14406:23;14440:12;14484:1;:18;;14440:12;14513:278;14539:6;14534:2;:11;14513:278;;;14581:44;14593:7;14617;14602:5;:12;:22;14581:5;:11;;:44;;;;;:::i;:::-;14568:57;;14646:33;14668:10;14646:21;:33::i;:::-;14639:40;;-1:-1:-1;;14701:4:14;:19;;14693:58;;;;;-1:-1:-1;;;14693:58:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;14765:15;;;;14547:5;;14513:278;;;;14814:44;14826:7;14850;14835:5;:12;:22;14814:5;:11;;:44;;;;;:::i;:::-;14801:57;;14875:33;14897:10;14875:21;:33::i;:::-;14868:40;;-1:-1:-1;;14926:4:14;:19;;14918:58;;;;;-1:-1:-1;;;14918:58:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;14993:26;:5;15005:7;15014:4;14993:11;:26::i;:::-;14986:33;14039:987;-1:-1:-1;;;;;;;;14039:987:14:o;16123:308::-;16197:12;16257:18;16225:28;:7;16248:1;16251;16225:22;:28::i;:::-;:50;16221:93;;-1:-1:-1;16291:12:14;;;;;;;;;-1:-1:-1;16291:12:14;;;;16221:93;16323:21;16347:20;:7;16361:2;16365:1;16347:13;:20::i;:::-;16323:44;;16384:40;16398:2;16402:21;16414:8;16402:11;:21::i;:::-;16384:7;;:40;:13;:40::i;16706:1974::-;16772:12;16796:16;16821:7;16829:1;16821:10;;;;;;;;;;;;17098:14;;16821:10;;;;;;-1:-1:-1;17093:1:14;17080:14;;16815:17;17080:32;;17076:75;;-1:-1:-1;;17128:12:14;;;;;;;;;-1:-1:-1;17128:12:14;;;;17076:75;17171:7;17179:1;17171:10;;;;;;;;;;;;;;17161:1413;;17220:1;17207:10;:14;;;17203:65;;;-1:-1:-1;;17241:12:14;;;;;;;;;-1:-1:-1;17241:12:14;;;;17203:65;17281:19;17309:7;17317:2;17309:11;;;;;;;;;;;;;;;-1:-1:-1;;;17497:14:14;;17303:18;17482:29;;;;;:77;;;17516:11;17531:4;17516:19;;:42;;;;;17539:11;17554:4;17539:19;;17516:42;17478:128;;;17579:12;;;;;;;;;;;;;;;;;;17478:128;17626:30;:7;17640:2;17644:11;17626:13;:30::i;:::-;17619:37;;;;;;17161:1413;17687:12;17702:28;:7;17725:1;17728;17702:22;:28::i;:::-;17687:43;;17777:22;17769:4;:30;17765:799;;;17963:7;17971:2;17963:11;;;;;;;;;;;;;;;17979:4;17957:26;;;:119;;-1:-1:-1;18030:14:14;;18056:20;;18007:45;;18030:7;;-1:-1:-1;;18030:18:14;18047:1;18007:22;:45::i;:::-;:69;;17957:119;17953:178;;;18100:12;;;;;;;;;;;;;;;;;;17953:178;18155:21;:7;18169:2;18173;18155:13;:21::i;17765:799::-;18228:22;18220:4;:30;18216:348;;;18413:7;18438:1;18421:7;:14;:18;18413:27;;;;;;;;;;;;;;;18445:4;18407:42;18403:101;;18473:12;;;;;;;;;;;;;;;;;;18403:101;18528:21;:7;18542:2;18546;18528:13;:21::i;18216:348::-;17161:1413;-1:-1:-1;;18583:12:14;;;;;;;;;-1:-1:-1;18583:12:14;;16706:1974;;;:::o;11317:422:15:-;11394:7;11439:2;11430:11;;11459:18;;;:48;;;;;11498:9;11481:6;:13;:26;;11459:48;11451:94;;;;-1:-1:-1;;;11451:94:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;11633:30:15;11649:4;11633:30;11627:37;-1:-1:-1;;;11623:71:15;;;11317:422::o;15604:246:14:-;15671:6;15689:21;15713:23;15728:7;15713:14;:23::i;:::-;15689:47;;15746:21;15770:27;15788:8;15770:17;:27::i;:::-;15746:51;;15821:21;15833:8;15821:11;:21::i;7756:358:12:-;7902:7;7911;7966:10;7978;7990;8004:31;8011:2;8015;8019;8023:1;8026:3;8031;8004:6;:31::i;:::-;7965:70;;;;;;8082:25;8091:2;8095;8099;8103:3;8082:8;:25::i;:::-;8075:32;;;;;;;7756:358;;;;;;;;:::o;13092:582:14:-;13168:7;13208:1;13191:7;:14;:18;13187:67;;;-1:-1:-1;;;13225:18:14;;13187:67;13263:24;13290:36;13304:1;13324;13307:7;:14;:18;13290:7;:13;;:36;;;;;:::i;:::-;13263:63;;13337:22;13369:27;13446:24;13458:11;13446;:24::i;:::-;13406:64;;-1:-1:-1;13406:64:14;-1:-1:-1;;;13485:29:14;;13481:78;;;-1:-1:-1;;13530:18:14;;;;;;;13481:78;13623:44;:5;:44;;-1:-1:-1;;13092:582:14;;;:::o;16452:337:15:-;16547:14;16585:16;;;16619:13;;;:38;;;;;16653:4;16636:6;:13;:21;;16619:38;16611:70;;;;;-1:-1:-1;;;16611:70:15;;;;;;;;;;;;-1:-1:-1;;;16611:70:15;;;;;;;;;;;;;;;-1:-1:-1;;16735:28:15;;16751:2;16735:28;16725:48;;16701:82::o;15261:126:14:-;15330:12;15361:19;:7;15375:1;15378;15361:13;:19::i;12601:823:12:-;12805:7;;;12930;12926:57;;-1:-1:-1;12961:2:12;;-1:-1:-1;12965:2:12;;-1:-1:-1;12969:2:12;12953:19;;12926:57;13013:2;12993:17;;13086:1;13134:255;13141:14;;13134:255;;13188:1;13176:13;;13175:20;13171:109;;13230:35;13237:2;13241;13245;13249;13253;13257;13261:3;13230:6;:35::i;:::-;13215:50;;-1:-1:-1;13215:50:12;-1:-1:-1;13215:50:12;-1:-1:-1;13171:109:12;13317:1;13305:9;:13;13293:25;;13347:31;13357:2;13361;13365;13369:3;13374;13347:9;:31::i;:::-;13332:46;;-1:-1:-1;13332:46:12;-1:-1:-1;13332:46:12;-1:-1:-1;13134:255:12;;;13406:2;;-1:-1:-1;13410:2:12;-1:-1:-1;13414:2:12;-1:-1:-1;;12601:823:12;;;;;;;;;;;:::o;2944:377::-;3072:7;3081;3100:12;3115:15;3122:2;3126:3;3115:6;:15::i;:::-;3100:30;;3140:13;3175:3;3156:23;;;;;3169:4;3163;3156:23;3140:39;;3189:10;3220:3;3202:22;;;;;3213:5;3209:2;3202:22;3189:35;;3234:10;3284:3;3247:41;;;;;3278:3;3258:24;;;;;3271:5;3265:4;3258:24;3254:2;3247:41;3307:2;;;;-1:-1:-1;2944:377:12;;-1:-1:-1;;;;;;;;2944:377:12:o;8501:2019::-;8730:7;;;8808:8;;:20;;;;-1:-1:-1;8820:8:12;;8808:20;8804:48;;;-1:-1:-1;8838:3:12;;-1:-1:-1;8843:3:12;;-1:-1:-1;8848:3:12;8830:22;;8804:48;8866:8;;:20;;;;-1:-1:-1;8878:8:12;;8866:20;8862:48;;;-1:-1:-1;8896:3:12;;-1:-1:-1;8901:3:12;;-1:-1:-1;8906:3:12;8888:22;;8862:48;9058:20;;:::i;:::-;9139:3;9122:21;;;;;9134:3;9129;9122:21;9114:29;;9180:3;;9161:23;;;;9173:5;;9168:3;9161:23;9153:5;;;:31;9219:3;;9202:21;;;;9214:3;9209;9202:21;9194:5;;;:29;9260:3;;9241:23;;;;9253:5;;;;9248:3;9241:23;9233:5;;;:31;9301:163;;;;;;;;;;9339:3;;9320:23;;;;9332:5;;;;9327:3;9320:23;9301:163;;;;9376:3;9357:23;;;;;9369:5;;;;9364:3;9357:23;9301:163;;;;9413:3;9394:23;;;;;9406:5;;9401:3;9394:23;9301:163;;;;9450:3;9431:23;;;;;9443:5;;;;9438:3;9431:23;9301:163;;9592:5;;;;9583;;9301:163;;-1:-1:-1;9583:14:12;;;:32;;-1:-1:-1;9610:5:12;;;;;9601;;;:14;;9583:32;9562:109;;;;;-1:-1:-1;;;9562:109:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;9682:20;;:::i;:::-;9759:3;9732:31;;;;;9752:5;;9739;;;;9746:11;;;;9732:31;9724:39;;9820:3;;9793:31;;;;9813:5;;;;9800;;;;9807:11;;;;9793:31;9785:5;;;:39;9877:3;;9856:25;;;;9870:5;;;9856:25;9848:5;;;:33;9935:3;;9914:25;;;;9928:5;;9921;;;;9914:25;9906:5;;;:33;9983:10;10043:3;;9996:51;;;;10036:5;;;;10030:11;;:3;;10003:25;;;;10017:5;;;;;10003:25;9996:51;9983:64;;10122:3;10062:64;;;;;10116:3;10079:41;;;;;10110:3;10089:25;;;;;10103:5;;;;10096;;10089:25;10086:1;10079:41;10073:3;:47;10069:2;10062:64;10057:69;;10178:10;10316:3;10203:130;;;;;10294:3;10250:48;;;;;10290:2;10284:3;:8;10278:3;10257:25;;;;;10271:5;;;;10264;;10257:25;10250:48;10227:5;;;;10203:130;10178:155;;10392:3;10348:48;;;;;10386:3;10365:25;;;;;10379:5;;;;;10372;;;10365:25;10359:3;:31;10355:2;10348:48;10343:53;;10430:10;10480:3;10443:41;;;;;10474:3;10457:21;;;;;10469:3;10464;10457:21;10450:5;;10443:41;10502:2;;-1:-1:-1;10506:2:12;;-1:-1:-1;10430:54:12;;-1:-1:-1;;;;8501:2019:12;;;;;;;;;;;;:::o;10807:1479::-;10994:7;;;11072;11068:32;;-1:-1:-1;11089:2:12;;-1:-1:-1;11093:2:12;;-1:-1:-1;11097:2:12;11081:19;;11068:32;11409:9;11436:3;11421:19;;;;;11432:2;11428;11421:19;11409:31;;11457:9;11484:3;11469:19;;;;;11480:2;11476;11469:19;11457:31;;11505:9;11532:3;11517:19;;;;;11528:2;11524;11517:19;11505:31;;11567:9;11609:3;11579:34;;;;;11603:3;11589:18;;;;;11600:1;11596:2;11589:18;11586:1;11579:34;11567:46;;11636:9;11723:3;11660:67;;;;;11717:3;11686:35;;;;;11711:3;11698:17;;;;;11708:1;11705;11698:17;11693:3;11686:35;11680:3;11667:17;;;;;11677:1;11674;11667:17;11660:67;11636:91;;11989:3;11938:55;;;;;11983:3;11970:17;;;;;11980:1;11977;11970:17;11964:3;:23;11958:3;11945:17;;;;;11955:1;11952;11945:17;11938:55;11934:59;;12166:3;12040:139;;;;;12148:3;12119:33;;;;;12142:3;12129:17;;;;;12139:1;12136;12129:17;12126:1;12119:33;12113:3;:39;12095:3;12060:39;;;;;12089:3;12070:23;;;;;12086:1;12080:3;:7;12077:1;12070:23;12067:1;12060:39;12040:139;12036:143;;12248:3;12217:35;;;;;12242:3;12227:19;;;;;12238:2;12234;12227:19;12224:1;12217:35;12271:1;;-1:-1:-1;12274:1:12;;-1:-1:-1;12213:39:12;;-1:-1:-1;;;;10807:1479:12;;;;;;;;;;:::o;747:439::-;811:7;838;;;;;:20;;;855:3;849:2;:9;;838:20;:32;;;;-1:-1:-1;862:8:12;;;838:32;830:59;;;;;-1:-1:-1;;;830:59:12;;;;;;;;;;;;-1:-1:-1;;;830:59:12;;;;;;;;;;;;;;;899:9;937:1;960:3;899:9;992:169;999:7;;992:169;;1030:2;1026:1;:6;;;;;;1022:10;;1059:4;1105:3;1065:44;;;;;1098:3;1082:20;;;;;1092:4;1089:1;1082:20;1076:3;:26;1072:1;1065:44;1143:6;;;1139:10;;;;1046:64;;-1:-1:-1;1046:64:12;;-1:-1:-1;992:169:12;;;-1:-1:-1;1178:1:12;;747:439;-1:-1:-1;;;;;747:439:12:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.6.12;\n\nimport {ERC20} from \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport {ValidateSPV} from \"@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol\";\nimport {TransactionUtils} from \"./TransactionUtils.sol\";\nimport {Issue} from \"./Issue.sol\";\nimport {Redeem} from \"./Redeem.sol\";\nimport {Replace} from \"./Replace.sol\";\nimport {IRelay} from \"./IRelay.sol\";\n\ncontract OneBtc is ERC20, Issue, Redeem, Replace {\n    IRelay public realy;\n\n    constructor(IRelay _relay) public ERC20(\"OneBtc\", \"OneBtc\") {\n        _setupDecimals(8);\n        realy = _relay;\n    }\n\n    function getHash(bytes calldata rawTx) public returns (bytes32) {\n        bytes32 txId = rawTx.hash256();\n        return txId;\n    }\n\n    function getHashView(bytes calldata rawTx) public view returns (bytes32) {\n        bytes32 txId = rawTx.hash256();\n        return txId;\n    }\n\n    function verifyTx(\n        uint32 height,\n        uint256 index,\n        bytes calldata rawTx,\n        bytes calldata header,\n        bytes calldata merkleProof\n    ) public returns (bytes memory) {\n        bytes32 txId = rawTx.hash256();\n        realy.verifyTx(\n            height,\n            index,\n            txId,\n            header,\n            merkleProof,\n            1,\n            true\n        );\n        TransactionUtils.Transaction memory btcTx =\n            TransactionUtils.extractTx(rawTx);\n        require(btcTx.locktime == 0, \"locktime must zero!\");\n        // check version?\n        // btcTx.version\n        return btcTx.vouts;\n    }\n\n    function requestIssue(uint256 amountRequested, address vaultId)\n        external\n        payable\n    {\n        Issue._requestIssue(msg.sender, amountRequested, vaultId, msg.value);\n    }\n\n    function executeIssue(\n        address requester,\n        uint256 issueId,\n        bytes calldata merkleProof,\n        bytes calldata rawTx, // avoid compiler error: stack too deep\n        //bytes calldata _version, bytes calldata _vin, bytes calldata _vout, bytes calldata _locktime,\n        uint32 height,\n        uint256 index,\n        bytes calldata header\n    ) external {\n        bytes memory _vout =\n            verifyTx(height, index, rawTx, header, merkleProof);\n\n        Issue._executeIssue(requester, issueId, _vout);\n    }\n\n    function cancelIssue(address requester, uint256 issueId) external {\n        Issue._cancelIssue(requester, issueId);\n    }\n\n    function requestRedeem(\n        uint256 amountOneBtc,\n        address btcAddress,\n        address vaultId\n    ) external {\n        Redeem._requestRedeem(\n            msg.sender,\n            amountOneBtc,\n            btcAddress,\n            vaultId\n        );\n    }\n\n    function executeRedeem(\n        address requester,\n        uint256 redeemId,\n        bytes calldata merkleProof,\n        bytes calldata rawTx,\n        uint32 height,\n        uint256 index,\n        bytes calldata header\n    ) external {\n        bytes memory _vout =\n            verifyTx(height, index, rawTx, header, merkleProof);\n\n        Redeem._executeRedeem(requester, redeemId, _vout);\n    }\n\n    function cancelRedeem(address requester, uint256 redeemId) external {\n        Redeem._cancelRedeem(requester, redeemId);\n    }\n\n    function lockOneBTC(address from, uint256 amount)\n        internal\n        override(Redeem)\n    {\n        //ERC20(this).transferFrom(from, address(this), amount);\n        ERC20._transfer(msg.sender, address(this), amount);\n    }\n\n    function burnLockedOneBTC(uint256 amount) internal override(Redeem) {\n        ERC20._burn(address(this), amount);\n    }\n\n    function releaseLockedOneBTC(address receiver, uint256 amount)\n        internal\n        override(Redeem)\n    {\n        ERC20._transfer(address(this), receiver, amount);\n    }\n\n    function issueOneBTC(address receiver, uint256 amount)\n        internal\n        override(Issue)\n    {\n        ERC20._mint(receiver, amount);\n    }\n\n    function requestReplace(\n        address payable oldVaultId,\n        uint256 btcAmount,\n        uint256 griefingCollateral\n    ) external payable {\n        Replace._requestReplace(oldVaultId, btcAmount, griefingCollateral);\n    }\n\n    function acceptReplace(\n        address oldVaultId,\n        address newVaultId,\n        uint256 btcAmount,\n        uint256 collateral,\n        uint256 btcPublicKeyX,\n        uint256 btcPublicKeyY\n    ) external payable {\n        Replace._acceptReplace(\n            oldVaultId,\n            newVaultId,\n            btcAmount,\n            collateral,\n            btcPublicKeyX,\n            btcPublicKeyY\n        );\n    }\n\n    function executeReplace(\n        uint256 replaceId,\n        bytes calldata merkleProof,\n        bytes calldata rawTx, // avoid compiler error: stack too deep\n    //bytes calldata _version, bytes calldata _vin, bytes calldata _vout, bytes calldata _locktime,\n        uint32 height,\n        uint256 index,\n        bytes calldata header\n    ) external {\n        bytes memory _vout = verifyTx(height, index, rawTx, header, merkleProof);\n        Replace._executeReplace(replaceId, _vout);\n    }\n}\n",
  "sourcePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol",
  "ast": {
    "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol",
    "exportedSymbols": {
      "OneBtc": [
        1613
      ]
    },
    "id": 1614,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1187,
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
        "id": 1189,
        "nodeType": "ImportDirective",
        "scope": 1614,
        "sourceUnit": 8595,
        "src": "59:68:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1188,
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
        "id": 1191,
        "nodeType": "ImportDirective",
        "scope": 1614,
        "sourceUnit": 7796,
        "src": "128:80:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1190,
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
        "id": 1193,
        "nodeType": "ImportDirective",
        "scope": 1614,
        "sourceUnit": 2935,
        "src": "209:56:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1192,
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
        "id": 1195,
        "nodeType": "ImportDirective",
        "scope": 1614,
        "sourceUnit": 1186,
        "src": "266:34:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1194,
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
        "id": 1197,
        "nodeType": "ImportDirective",
        "scope": 1614,
        "sourceUnit": 2115,
        "src": "301:36:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1196,
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
        "id": 1199,
        "nodeType": "ImportDirective",
        "scope": 1614,
        "sourceUnit": 2684,
        "src": "338:38:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1198,
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
        "id": 1201,
        "nodeType": "ImportDirective",
        "scope": 1614,
        "sourceUnit": 503,
        "src": "377:36:4",
        "symbolAliases": [
          {
            "foreign": {
              "argumentTypes": null,
              "id": 1200,
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
              "id": 1202,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8594,
              "src": "434:5:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$8594",
                "typeString": "contract ERC20"
              }
            },
            "id": 1203,
            "nodeType": "InheritanceSpecifier",
            "src": "434:5:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1204,
              "name": "Issue",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1185,
              "src": "441:5:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Issue_$1185",
                "typeString": "contract Issue"
              }
            },
            "id": 1205,
            "nodeType": "InheritanceSpecifier",
            "src": "441:5:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1206,
              "name": "Redeem",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2114,
              "src": "448:6:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Redeem_$2114",
                "typeString": "contract Redeem"
              }
            },
            "id": 1207,
            "nodeType": "InheritanceSpecifier",
            "src": "448:6:4"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1208,
              "name": "Replace",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2683,
              "src": "456:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Replace_$2683",
                "typeString": "contract Replace"
              }
            },
            "id": 1209,
            "nodeType": "InheritanceSpecifier",
            "src": "456:7:4"
          }
        ],
        "contractDependencies": [
          255,
          1185,
          2114,
          2683,
          4105,
          7818,
          8594,
          8672
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1613,
        "linearizedBaseContracts": [
          1613,
          2683,
          2114,
          1185,
          4105,
          255,
          8594,
          8672,
          7818
        ],
        "name": "OneBtc",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "2db99b14",
            "id": 1211,
            "mutability": "mutable",
            "name": "realy",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1613,
            "src": "470:19:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IRelay_$502",
              "typeString": "contract IRelay"
            },
            "typeName": {
              "contractScope": null,
              "id": 1210,
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
              "id": 1228,
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
                        "id": 1221,
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
                      "id": 1220,
                      "name": "_setupDecimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8582,
                      "src": "566:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint8_$returns$__$",
                        "typeString": "function (uint8)"
                      }
                    },
                    "id": 1222,
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
                  "id": 1223,
                  "nodeType": "ExpressionStatement",
                  "src": "566:17:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1224,
                      "name": "realy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1211,
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
                      "id": 1225,
                      "name": "_relay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1213,
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
                  "id": 1227,
                  "nodeType": "ExpressionStatement",
                  "src": "593:14:4"
                }
              ]
            },
            "documentation": null,
            "id": 1229,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "4f6e65427463",
                    "id": 1216,
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
                    "id": 1217,
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
                "id": 1218,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1215,
                  "name": "ERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 8594,
                  "src": "530:5:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20_$8594_$",
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
              "id": 1214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1213,
                  "mutability": "mutable",
                  "name": "_relay",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1229,
                  "src": "508:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IRelay_$502",
                    "typeString": "contract IRelay"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1212,
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
              "id": 1219,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "556:0:4"
            },
            "scope": 1613,
            "src": "496:118:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1244,
              "nodeType": "Block",
              "src": "684:68:4",
              "statements": [
                {
                  "assignments": [
                    1237
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1237,
                      "mutability": "mutable",
                      "name": "txId",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1244,
                      "src": "694:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1236,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "694:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1241,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1238,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1231,
                        "src": "709:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      "id": 1239,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hash256",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5787,
                      "src": "709:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 1240,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:15:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "694:30:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1242,
                    "name": "txId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1237,
                    "src": "741:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 1235,
                  "id": 1243,
                  "nodeType": "Return",
                  "src": "734:11:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b00140aa",
            "id": 1245,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getHash",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1231,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1245,
                  "src": "637:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1230,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "637:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "636:22:4"
            },
            "returnParameters": {
              "id": 1235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1234,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1245,
                  "src": "675:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1233,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "675:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "674:9:4"
            },
            "scope": 1613,
            "src": "620:132:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1260,
              "nodeType": "Block",
              "src": "831:68:4",
              "statements": [
                {
                  "assignments": [
                    1253
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1253,
                      "mutability": "mutable",
                      "name": "txId",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1260,
                      "src": "841:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1252,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "841:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1257,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1254,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1247,
                        "src": "856:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      "id": 1255,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hash256",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5787,
                      "src": "856:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 1256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "856:15:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "841:30:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1258,
                    "name": "txId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1253,
                    "src": "888:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 1251,
                  "id": 1259,
                  "nodeType": "Return",
                  "src": "881:11:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "873b7f7b",
            "id": 1261,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getHashView",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1248,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1247,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1261,
                  "src": "779:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1246,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "779:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "778:22:4"
            },
            "returnParameters": {
              "id": 1251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1250,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1261,
                  "src": "822:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1249,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "822:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "821:9:4"
            },
            "scope": 1613,
            "src": "758:141:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1314,
              "nodeType": "Block",
              "src": "1102:455:4",
              "statements": [
                {
                  "assignments": [
                    1277
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1277,
                      "mutability": "mutable",
                      "name": "txId",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1314,
                      "src": "1112:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1276,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1112:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1281,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1278,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1267,
                        "src": "1127:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      "id": 1279,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "hash256",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5787,
                      "src": "1127:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 1280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1127:15:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1112:30:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1285,
                        "name": "height",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1263,
                        "src": "1180:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1286,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1265,
                        "src": "1200:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1287,
                        "name": "txId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1277,
                        "src": "1219:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1288,
                        "name": "header",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1269,
                        "src": "1237:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1289,
                        "name": "merkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1271,
                        "src": "1257:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 1290,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1282:1:4",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 1291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1297:4:4",
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
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1282,
                        "name": "realy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1211,
                        "src": "1152:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IRelay_$502",
                          "typeString": "contract IRelay"
                        }
                      },
                      "id": 1284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "verifyTx",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 501,
                      "src": "1152:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint32_$_t_uint256_$_t_bytes32_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_uint256_$_t_bool_$returns$_t_bool_$",
                        "typeString": "function (uint32,uint256,bytes32,bytes memory,bytes memory,uint256,bool) view external returns (bool)"
                      }
                    },
                    "id": 1292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1152:159:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1293,
                  "nodeType": "ExpressionStatement",
                  "src": "1152:159:4"
                },
                {
                  "assignments": [
                    1297
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1297,
                      "mutability": "mutable",
                      "name": "btcTx",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1314,
                      "src": "1321:41:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Transaction_$2782_memory_ptr",
                        "typeString": "struct TransactionUtils.Transaction"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1296,
                        "name": "TransactionUtils.Transaction",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 2782,
                        "src": "1321:28:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Transaction_$2782_storage_ptr",
                          "typeString": "struct TransactionUtils.Transaction"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1302,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1300,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1267,
                        "src": "1404:5:4",
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
                        "id": 1298,
                        "name": "TransactionUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2934,
                        "src": "1377:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TransactionUtils_$2934_$",
                          "typeString": "type(library TransactionUtils)"
                        }
                      },
                      "id": 1299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "extractTx",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2933,
                      "src": "1377:26:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_struct$_Transaction_$2782_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (struct TransactionUtils.Transaction memory)"
                      }
                    },
                    "id": 1301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1377:33:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Transaction_$2782_memory_ptr",
                      "typeString": "struct TransactionUtils.Transaction memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1321:89:4"
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
                        "id": 1307,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1304,
                            "name": "btcTx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1297,
                            "src": "1428:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Transaction_$2782_memory_ptr",
                              "typeString": "struct TransactionUtils.Transaction memory"
                            }
                          },
                          "id": 1305,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "locktime",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 2781,
                          "src": "1428:14:4",
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
                          "id": 1306,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1446:1:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1428:19:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6c6f636b74696d65206d757374207a65726f21",
                        "id": 1308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1449:21:4",
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
                      "id": 1303,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1420:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1420:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1310,
                  "nodeType": "ExpressionStatement",
                  "src": "1420:51:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 1311,
                      "name": "btcTx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1297,
                      "src": "1539:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Transaction_$2782_memory_ptr",
                        "typeString": "struct TransactionUtils.Transaction memory"
                      }
                    },
                    "id": 1312,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "vouts",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 2779,
                    "src": "1539:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1275,
                  "id": 1313,
                  "nodeType": "Return",
                  "src": "1532:18:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "a463bfc7",
            "id": 1315,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyTx",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1263,
                  "mutability": "mutable",
                  "name": "height",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1315,
                  "src": "932:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 1262,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "932:6:4",
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
                  "id": 1265,
                  "mutability": "mutable",
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1315,
                  "src": "955:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1264,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "955:7:4",
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
                  "id": 1267,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1315,
                  "src": "978:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1266,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:5:4",
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
                  "id": 1269,
                  "mutability": "mutable",
                  "name": "header",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1315,
                  "src": "1008:21:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1268,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1008:5:4",
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
                  "id": 1271,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1315,
                  "src": "1039:26:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1270,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1039:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "922:149:4"
            },
            "returnParameters": {
              "id": 1275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1274,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1315,
                  "src": "1088:12:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1273,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1088:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1087:14:4"
            },
            "scope": 1613,
            "src": "905:652:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1333,
              "nodeType": "Block",
              "src": "1664:85:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1325,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1694:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1694:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1327,
                        "name": "amountRequested",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1317,
                        "src": "1706:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1328,
                        "name": "vaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1319,
                        "src": "1723:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1329,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1732:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1732:9:4",
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
                        "id": 1322,
                        "name": "Issue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1185,
                        "src": "1674:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Issue_$1185_$",
                          "typeString": "type(contract Issue)"
                        }
                      },
                      "id": 1324,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_requestIssue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 901,
                      "src": "1674:19:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_payable_$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address payable,uint256,address,uint256)"
                      }
                    },
                    "id": 1331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1674:68:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1332,
                  "nodeType": "ExpressionStatement",
                  "src": "1674:68:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "77d6b7ca",
            "id": 1334,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestIssue",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1317,
                  "mutability": "mutable",
                  "name": "amountRequested",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1334,
                  "src": "1585:23:4",
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
                    "src": "1585:7:4",
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
                  "name": "vaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1334,
                  "src": "1610:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1318,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1610:7:4",
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
              "src": "1584:42:4"
            },
            "returnParameters": {
              "id": 1321,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1664:0:4"
            },
            "scope": 1613,
            "src": "1563:186:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1369,
              "nodeType": "Block",
              "src": "2131:158:4",
              "statements": [
                {
                  "assignments": [
                    1352
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1352,
                      "mutability": "mutable",
                      "name": "_vout",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1369,
                      "src": "2141:18:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1351,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2141:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1360,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1354,
                        "name": "height",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1344,
                        "src": "2183:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1355,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1346,
                        "src": "2191:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1356,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1342,
                        "src": "2198:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1357,
                        "name": "header",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1348,
                        "src": "2205:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1358,
                        "name": "merkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1340,
                        "src": "2213:11:4",
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
                      "id": 1353,
                      "name": "verifyTx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1315,
                      "src": "2174:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint32_$_t_uint256_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)"
                      }
                    },
                    "id": 1359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2174:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2141:84:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1364,
                        "name": "requester",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1336,
                        "src": "2256:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1365,
                        "name": "issueId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1338,
                        "src": "2267:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1366,
                        "name": "_vout",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1352,
                        "src": "2276:5:4",
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
                        "id": 1361,
                        "name": "Issue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1185,
                        "src": "2236:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Issue_$1185_$",
                          "typeString": "type(contract Issue)"
                        }
                      },
                      "id": 1363,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_executeIssue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1104,
                      "src": "2236:19:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 1367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2236:46:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1368,
                  "nodeType": "ExpressionStatement",
                  "src": "2236:46:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "c50c8214",
            "id": 1370,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "executeIssue",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1336,
                  "mutability": "mutable",
                  "name": "requester",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1370,
                  "src": "1786:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1335,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1786:7:4",
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
                  "id": 1338,
                  "mutability": "mutable",
                  "name": "issueId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1370,
                  "src": "1813:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1813:7:4",
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
                  "id": 1340,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1370,
                  "src": "1838:26:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1339,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1838:5:4",
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
                  "id": 1342,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1370,
                  "src": "1874:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1341,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1874:5:4",
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
                  "id": 1344,
                  "mutability": "mutable",
                  "name": "height",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1370,
                  "src": "2048:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 1343,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2048:6:4",
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
                  "id": 1346,
                  "mutability": "mutable",
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1370,
                  "src": "2071:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1345,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2071:7:4",
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
                  "id": 1348,
                  "mutability": "mutable",
                  "name": "header",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1370,
                  "src": "2094:21:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1347,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2094:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1776:345:4"
            },
            "returnParameters": {
              "id": 1350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2131:0:4"
            },
            "scope": 1613,
            "src": "1755:534:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1384,
              "nodeType": "Block",
              "src": "2361:55:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1380,
                        "name": "requester",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1372,
                        "src": "2390:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1381,
                        "name": "issueId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1374,
                        "src": "2401:7:4",
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
                        "id": 1377,
                        "name": "Issue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1185,
                        "src": "2371:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Issue_$1185_$",
                          "typeString": "type(contract Issue)"
                        }
                      },
                      "id": 1379,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_cancelIssue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1184,
                      "src": "2371:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1382,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2371:38:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1383,
                  "nodeType": "ExpressionStatement",
                  "src": "2371:38:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d4bcb1e9",
            "id": 1385,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cancelIssue",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1372,
                  "mutability": "mutable",
                  "name": "requester",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1385,
                  "src": "2316:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1371,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2316:7:4",
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
                  "id": 1374,
                  "mutability": "mutable",
                  "name": "issueId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1385,
                  "src": "2335:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1373,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2335:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2315:36:4"
            },
            "returnParameters": {
              "id": 1376,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2361:0:4"
            },
            "scope": 1613,
            "src": "2295:121:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1404,
              "nodeType": "Block",
              "src": "2543:143:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1397,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2588:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2588:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1399,
                        "name": "amountOneBtc",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1387,
                        "src": "2612:12:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1400,
                        "name": "btcAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1389,
                        "src": "2638:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1401,
                        "name": "vaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1391,
                        "src": "2662:7:4",
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
                        "id": 1394,
                        "name": "Redeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2114,
                        "src": "2553:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Redeem_$2114_$",
                          "typeString": "type(contract Redeem)"
                        }
                      },
                      "id": 1396,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_requestRedeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1935,
                      "src": "2553:21:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,uint256,address,address)"
                      }
                    },
                    "id": 1402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2553:126:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1403,
                  "nodeType": "ExpressionStatement",
                  "src": "2553:126:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7d41c86e",
            "id": 1405,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestRedeem",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1387,
                  "mutability": "mutable",
                  "name": "amountOneBtc",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1405,
                  "src": "2454:20:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2454:7:4",
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
                  "id": 1389,
                  "mutability": "mutable",
                  "name": "btcAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1405,
                  "src": "2484:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1388,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2484:7:4",
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
                  "id": 1391,
                  "mutability": "mutable",
                  "name": "vaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1405,
                  "src": "2512:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1390,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2512:7:4",
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
              "src": "2444:89:4"
            },
            "returnParameters": {
              "id": 1393,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2543:0:4"
            },
            "scope": 1613,
            "src": "2422:264:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1440,
              "nodeType": "Block",
              "src": "2926:161:4",
              "statements": [
                {
                  "assignments": [
                    1423
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1423,
                      "mutability": "mutable",
                      "name": "_vout",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1440,
                      "src": "2936:18:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1422,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2936:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1431,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1425,
                        "name": "height",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1415,
                        "src": "2978:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1426,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1417,
                        "src": "2986:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1427,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1413,
                        "src": "2993:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1428,
                        "name": "header",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1419,
                        "src": "3000:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1429,
                        "name": "merkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1411,
                        "src": "3008:11:4",
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
                      "id": 1424,
                      "name": "verifyTx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1315,
                      "src": "2969:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint32_$_t_uint256_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)"
                      }
                    },
                    "id": 1430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2969:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2936:84:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1435,
                        "name": "requester",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1407,
                        "src": "3053:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1436,
                        "name": "redeemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1409,
                        "src": "3064:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1437,
                        "name": "_vout",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1423,
                        "src": "3074:5:4",
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
                        "id": 1432,
                        "name": "Redeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2114,
                        "src": "3031:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Redeem_$2114_$",
                          "typeString": "type(contract Redeem)"
                        }
                      },
                      "id": 1434,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_executeRedeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2026,
                      "src": "3031:21:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 1438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3031:49:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1439,
                  "nodeType": "ExpressionStatement",
                  "src": "3031:49:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "c5387e8f",
            "id": 1441,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "executeRedeem",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1407,
                  "mutability": "mutable",
                  "name": "requester",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1441,
                  "src": "2724:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1406,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2724:7:4",
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
                  "id": 1409,
                  "mutability": "mutable",
                  "name": "redeemId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1441,
                  "src": "2751:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1408,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2751:7:4",
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
                  "id": 1411,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1441,
                  "src": "2777:26:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1410,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2777:5:4",
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
                  "id": 1413,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1441,
                  "src": "2813:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1412,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2813:5:4",
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
                  "id": 1415,
                  "mutability": "mutable",
                  "name": "height",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1441,
                  "src": "2843:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 1414,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2843:6:4",
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
                  "id": 1417,
                  "mutability": "mutable",
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1441,
                  "src": "2866:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2866:7:4",
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
                  "id": 1419,
                  "mutability": "mutable",
                  "name": "header",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1441,
                  "src": "2889:21:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1418,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2889:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2714:202:4"
            },
            "returnParameters": {
              "id": 1421,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2926:0:4"
            },
            "scope": 1613,
            "src": "2692:395:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1455,
              "nodeType": "Block",
              "src": "3161:58:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1451,
                        "name": "requester",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1443,
                        "src": "3192:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1452,
                        "name": "redeemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1445,
                        "src": "3203:8:4",
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
                        "id": 1448,
                        "name": "Redeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2114,
                        "src": "3171:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Redeem_$2114_$",
                          "typeString": "type(contract Redeem)"
                        }
                      },
                      "id": 1450,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_cancelRedeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2113,
                      "src": "3171:20:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3171:41:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1454,
                  "nodeType": "ExpressionStatement",
                  "src": "3171:41:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "90336df2",
            "id": 1456,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cancelRedeem",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1446,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1443,
                  "mutability": "mutable",
                  "name": "requester",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1456,
                  "src": "3115:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1442,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3115:7:4",
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
                  "id": 1445,
                  "mutability": "mutable",
                  "name": "redeemId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1456,
                  "src": "3134:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1444,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3134:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3114:37:4"
            },
            "returnParameters": {
              "id": 1447,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3161:0:4"
            },
            "scope": 1613,
            "src": "3093:126:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              1693
            ],
            "body": {
              "id": 1477,
              "nodeType": "Block",
              "src": "3321:132:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1468,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3412:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1469,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3412:10:4",
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
                            "id": 1472,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3432:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_OneBtc_$1613",
                              "typeString": "contract OneBtc"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_OneBtc_$1613",
                              "typeString": "contract OneBtc"
                            }
                          ],
                          "id": 1471,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3424:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1470,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3424:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 1473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3424:13:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1474,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1460,
                        "src": "3439:6:4",
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
                        "id": 1465,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8594,
                        "src": "3396:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$8594_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 1467,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8415,
                      "src": "3396:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 1475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3396:50:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1476,
                  "nodeType": "ExpressionStatement",
                  "src": "3396:50:4"
                }
              ]
            },
            "documentation": null,
            "id": 1478,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "lockOneBTC",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 1463,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 1462,
                  "name": "Redeem",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 2114,
                  "src": "3309:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Redeem_$2114",
                    "typeString": "contract Redeem"
                  }
                }
              ],
              "src": "3300:16:4"
            },
            "parameters": {
              "id": 1461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1458,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1478,
                  "src": "3245:12:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3245:7:4",
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
                  "id": 1460,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1478,
                  "src": "3259:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1459,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3259:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3244:30:4"
            },
            "returnParameters": {
              "id": 1464,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3321:0:4"
            },
            "scope": 1613,
            "src": "3225:228:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1698
            ],
            "body": {
              "id": 1495,
              "nodeType": "Block",
              "src": "3527:51:4",
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
                            "id": 1490,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3557:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_OneBtc_$1613",
                              "typeString": "contract OneBtc"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_OneBtc_$1613",
                              "typeString": "contract OneBtc"
                            }
                          ],
                          "id": 1489,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3549:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1488,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3549:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 1491,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3549:13:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1492,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1480,
                        "src": "3564:6:4",
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
                        "id": 1485,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8594,
                        "src": "3537:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$8594_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 1487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8526,
                      "src": "3537:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3537:34:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1494,
                  "nodeType": "ExpressionStatement",
                  "src": "3537:34:4"
                }
              ]
            },
            "documentation": null,
            "id": 1496,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burnLockedOneBTC",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 1483,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 1482,
                  "name": "Redeem",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 2114,
                  "src": "3519:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Redeem_$2114",
                    "typeString": "contract Redeem"
                  }
                }
              ],
              "src": "3510:16:4"
            },
            "parameters": {
              "id": 1481,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1480,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1496,
                  "src": "3485:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1479,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3485:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3484:16:4"
            },
            "returnParameters": {
              "id": 1484,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3527:0:4"
            },
            "scope": 1613,
            "src": "3459:119:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              1705
            ],
            "body": {
              "id": 1516,
              "nodeType": "Block",
              "src": "3693:65:4",
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
                            "id": 1510,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3727:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_OneBtc_$1613",
                              "typeString": "contract OneBtc"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_OneBtc_$1613",
                              "typeString": "contract OneBtc"
                            }
                          ],
                          "id": 1509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3719:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1508,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3719:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 1511,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3719:13:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1512,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1498,
                        "src": "3734:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1513,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1500,
                        "src": "3744:6:4",
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
                        "id": 1505,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8594,
                        "src": "3703:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$8594_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 1507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8415,
                      "src": "3703:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 1514,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3703:48:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1515,
                  "nodeType": "ExpressionStatement",
                  "src": "3703:48:4"
                }
              ]
            },
            "documentation": null,
            "id": 1517,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "releaseLockedOneBTC",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 1503,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 1502,
                  "name": "Redeem",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 2114,
                  "src": "3681:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Redeem_$2114",
                    "typeString": "contract Redeem"
                  }
                }
              ],
              "src": "3672:16:4"
            },
            "parameters": {
              "id": 1501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1498,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1517,
                  "src": "3613:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1497,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3613:7:4",
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
                  "id": 1500,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1517,
                  "src": "3631:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1499,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3631:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3612:34:4"
            },
            "returnParameters": {
              "id": 1504,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3693:0:4"
            },
            "scope": 1613,
            "src": "3584:174:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              592
            ],
            "body": {
              "id": 1533,
              "nodeType": "Block",
              "src": "3864:46:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1529,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1519,
                        "src": "3886:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1530,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1521,
                        "src": "3896:6:4",
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
                        "id": 1526,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8594,
                        "src": "3874:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$8594_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 1528,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8470,
                      "src": "3874:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1531,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3874:29:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1532,
                  "nodeType": "ExpressionStatement",
                  "src": "3874:29:4"
                }
              ]
            },
            "documentation": null,
            "id": 1534,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "issueOneBTC",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 1524,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 1523,
                  "name": "Issue",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1185,
                  "src": "3853:5:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Issue_$1185",
                    "typeString": "contract Issue"
                  }
                }
              ],
              "src": "3844:15:4"
            },
            "parameters": {
              "id": 1522,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1519,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1534,
                  "src": "3785:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1518,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3785:7:4",
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
                  "id": 1521,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1534,
                  "src": "3803:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1520,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3803:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3784:34:4"
            },
            "returnParameters": {
              "id": 1525,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3864:0:4"
            },
            "scope": 1613,
            "src": "3764:146:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1551,
              "nodeType": "Block",
              "src": "4062:83:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1546,
                        "name": "oldVaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1536,
                        "src": "4096:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1547,
                        "name": "btcAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1538,
                        "src": "4108:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1548,
                        "name": "griefingCollateral",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1540,
                        "src": "4119:18:4",
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
                        "id": 1543,
                        "name": "Replace",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2683,
                        "src": "4072:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Replace_$2683_$",
                          "typeString": "type(contract Replace)"
                        }
                      },
                      "id": 1545,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_requestReplace",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2325,
                      "src": "4072:23:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_payable_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address payable,uint256,uint256)"
                      }
                    },
                    "id": 1549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4072:66:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1550,
                  "nodeType": "ExpressionStatement",
                  "src": "4072:66:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "1704b9a6",
            "id": 1552,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestReplace",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1541,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1536,
                  "mutability": "mutable",
                  "name": "oldVaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1552,
                  "src": "3949:26:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 1535,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3949:15:4",
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
                  "id": 1538,
                  "mutability": "mutable",
                  "name": "btcAmount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1552,
                  "src": "3985:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1537,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3985:7:4",
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
                  "id": 1540,
                  "mutability": "mutable",
                  "name": "griefingCollateral",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1552,
                  "src": "4012:26:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1539,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4012:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3939:105:4"
            },
            "returnParameters": {
              "id": 1542,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4062:0:4"
            },
            "scope": 1613,
            "src": "3916:229:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1578,
              "nodeType": "Block",
              "src": "4370:198:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1570,
                        "name": "oldVaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1554,
                        "src": "4416:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1571,
                        "name": "newVaultId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1556,
                        "src": "4440:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1572,
                        "name": "btcAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1558,
                        "src": "4464:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1573,
                        "name": "collateral",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1560,
                        "src": "4487:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1574,
                        "name": "btcPublicKeyX",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1562,
                        "src": "4511:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1575,
                        "name": "btcPublicKeyY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1564,
                        "src": "4538:13:4",
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
                        "id": 1567,
                        "name": "Replace",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2683,
                        "src": "4380:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Replace_$2683_$",
                          "typeString": "type(contract Replace)"
                        }
                      },
                      "id": 1569,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_acceptReplace",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2597,
                      "src": "4380:22:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 1576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4380:181:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1577,
                  "nodeType": "ExpressionStatement",
                  "src": "4380:181:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "c8c7fa00",
            "id": 1579,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "acceptReplace",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1554,
                  "mutability": "mutable",
                  "name": "oldVaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1579,
                  "src": "4183:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4183:7:4",
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
                  "id": 1556,
                  "mutability": "mutable",
                  "name": "newVaultId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1579,
                  "src": "4211:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1555,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4211:7:4",
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
                  "id": 1558,
                  "mutability": "mutable",
                  "name": "btcAmount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1579,
                  "src": "4239:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1557,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4239:7:4",
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
                  "id": 1560,
                  "mutability": "mutable",
                  "name": "collateral",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1579,
                  "src": "4266:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1559,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4266:7:4",
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
                  "id": 1562,
                  "mutability": "mutable",
                  "name": "btcPublicKeyX",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1579,
                  "src": "4294:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1561,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4294:7:4",
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
                  "id": 1564,
                  "mutability": "mutable",
                  "name": "btcPublicKeyY",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1579,
                  "src": "4325:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4325:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4173:179:4"
            },
            "returnParameters": {
              "id": 1566,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4370:0:4"
            },
            "scope": 1613,
            "src": "4151:417:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1611,
              "nodeType": "Block",
              "src": "4923:140:4",
              "statements": [
                {
                  "assignments": [
                    1595
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1595,
                      "mutability": "mutable",
                      "name": "_vout",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1611,
                      "src": "4933:18:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1594,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4933:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1603,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1597,
                        "name": "height",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1587,
                        "src": "4963:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1598,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1589,
                        "src": "4971:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1599,
                        "name": "rawTx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1585,
                        "src": "4978:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1600,
                        "name": "header",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1591,
                        "src": "4985:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1601,
                        "name": "merkleProof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1583,
                        "src": "4993:11:4",
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
                      "id": 1596,
                      "name": "verifyTx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1315,
                      "src": "4954:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint32_$_t_uint256_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$_t_bytes_calldata_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)"
                      }
                    },
                    "id": 1602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4954:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4933:72:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1607,
                        "name": "replaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1581,
                        "src": "5039:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1608,
                        "name": "_vout",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1595,
                        "src": "5050:5:4",
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
                        "id": 1604,
                        "name": "Replace",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2683,
                        "src": "5015:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Replace_$2683_$",
                          "typeString": "type(contract Replace)"
                        }
                      },
                      "id": 1606,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_executeReplace",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2682,
                      "src": "5015:23:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,bytes memory)"
                      }
                    },
                    "id": 1609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5015:41:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1610,
                  "nodeType": "ExpressionStatement",
                  "src": "5015:41:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "978f28dd",
            "id": 1612,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "executeReplace",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1581,
                  "mutability": "mutable",
                  "name": "replaceId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1612,
                  "src": "4607:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4607:7:4",
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
                  "id": 1583,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1612,
                  "src": "4634:26:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1582,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4634:5:4",
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
                  "id": 1585,
                  "mutability": "mutable",
                  "name": "rawTx",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1612,
                  "src": "4670:20:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1584,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4670:5:4",
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
                  "id": 1587,
                  "mutability": "mutable",
                  "name": "height",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1612,
                  "src": "4840:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 1586,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4840:6:4",
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
                  "id": 1589,
                  "mutability": "mutable",
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1612,
                  "src": "4863:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1588,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4863:7:4",
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
                  "id": 1591,
                  "mutability": "mutable",
                  "name": "header",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1612,
                  "src": "4886:21:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1590,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4886:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4597:316:4"
            },
            "returnParameters": {
              "id": 1593,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4923:0:4"
            },
            "scope": 1613,
            "src": "4574:489:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1614,
        "src": "415:4650:4"
      }
    ],
    "src": "33:5033:4"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/OneBtc.sol",
      "exportedSymbols": {
        "OneBtc": [
          1613
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
        "id": 1187,
        "name": "PragmaDirective",
        "src": "33:24:4"
      },
      {
        "attributes": {
          "SourceUnit": 8595,
          "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "scope": 1614,
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
                "id": 1188,
                "name": "Identifier",
                "src": "67:5:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1189,
        "name": "ImportDirective",
        "src": "59:68:4"
      },
      {
        "attributes": {
          "SourceUnit": 7796,
          "absolutePath": "@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol",
          "file": "@interlay/bitcoin-spv-sol/contracts/ValidateSPV.sol",
          "scope": 1614,
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
                "id": 1190,
                "name": "Identifier",
                "src": "136:11:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1191,
        "name": "ImportDirective",
        "src": "128:80:4"
      },
      {
        "attributes": {
          "SourceUnit": 2935,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/TransactionUtils.sol",
          "file": "./TransactionUtils.sol",
          "scope": 1614,
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
                "id": 1192,
                "name": "Identifier",
                "src": "217:16:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1193,
        "name": "ImportDirective",
        "src": "209:56:4"
      },
      {
        "attributes": {
          "SourceUnit": 1186,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Issue.sol",
          "file": "./Issue.sol",
          "scope": 1614,
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
                "id": 1194,
                "name": "Identifier",
                "src": "274:5:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1195,
        "name": "ImportDirective",
        "src": "266:34:4"
      },
      {
        "attributes": {
          "SourceUnit": 2115,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Redeem.sol",
          "file": "./Redeem.sol",
          "scope": 1614,
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
                "id": 1196,
                "name": "Identifier",
                "src": "309:6:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1197,
        "name": "ImportDirective",
        "src": "301:36:4"
      },
      {
        "attributes": {
          "SourceUnit": 2684,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/Replace.sol",
          "file": "./Replace.sol",
          "scope": 1614,
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
                "id": 1198,
                "name": "Identifier",
                "src": "346:7:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1199,
        "name": "ImportDirective",
        "src": "338:38:4"
      },
      {
        "attributes": {
          "SourceUnit": 503,
          "absolutePath": "/Users/yuriy/pro5/onebtc/contract/bridge/contracts/IRelay.sol",
          "file": "./IRelay.sol",
          "scope": 1614,
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
                "id": 1200,
                "name": "Identifier",
                "src": "385:6:4"
              },
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 1201,
        "name": "ImportDirective",
        "src": "377:36:4"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            255,
            1185,
            2114,
            2683,
            4105,
            7818,
            8594,
            8672
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1613,
            2683,
            2114,
            1185,
            4105,
            255,
            8594,
            8672,
            7818
          ],
          "name": "OneBtc",
          "scope": 1614
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
                  "referencedDeclaration": 8594,
                  "type": "contract ERC20"
                },
                "id": 1202,
                "name": "UserDefinedTypeName",
                "src": "434:5:4"
              }
            ],
            "id": 1203,
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
                  "referencedDeclaration": 1185,
                  "type": "contract Issue"
                },
                "id": 1204,
                "name": "UserDefinedTypeName",
                "src": "441:5:4"
              }
            ],
            "id": 1205,
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
                  "referencedDeclaration": 2114,
                  "type": "contract Redeem"
                },
                "id": 1206,
                "name": "UserDefinedTypeName",
                "src": "448:6:4"
              }
            ],
            "id": 1207,
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
                  "referencedDeclaration": 2683,
                  "type": "contract Replace"
                },
                "id": 1208,
                "name": "UserDefinedTypeName",
                "src": "456:7:4"
              }
            ],
            "id": 1209,
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
              "scope": 1613,
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
                "id": 1210,
                "name": "UserDefinedTypeName",
                "src": "470:6:4"
              }
            ],
            "id": 1211,
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
              "scope": 1613,
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
                      "scope": 1229,
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
                        "id": 1212,
                        "name": "UserDefinedTypeName",
                        "src": "508:6:4"
                      }
                    ],
                    "id": 1213,
                    "name": "VariableDeclaration",
                    "src": "508:13:4"
                  }
                ],
                "id": 1214,
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
                "id": 1219,
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
                      "referencedDeclaration": 8594,
                      "type": "type(contract ERC20)",
                      "value": "ERC20"
                    },
                    "id": 1215,
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
                    "id": 1216,
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
                    "id": 1217,
                    "name": "Literal",
                    "src": "546:8:4"
                  }
                ],
                "id": 1218,
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
                              "referencedDeclaration": 8582,
                              "type": "function (uint8)",
                              "value": "_setupDecimals"
                            },
                            "id": 1220,
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
                            "id": 1221,
                            "name": "Literal",
                            "src": "581:1:4"
                          }
                        ],
                        "id": 1222,
                        "name": "FunctionCall",
                        "src": "566:17:4"
                      }
                    ],
                    "id": 1223,
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
                              "referencedDeclaration": 1211,
                              "type": "contract IRelay",
                              "value": "realy"
                            },
                            "id": 1224,
                            "name": "Identifier",
                            "src": "593:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1213,
                              "type": "contract IRelay",
                              "value": "_relay"
                            },
                            "id": 1225,
                            "name": "Identifier",
                            "src": "601:6:4"
                          }
                        ],
                        "id": 1226,
                        "name": "Assignment",
                        "src": "593:14:4"
                      }
                    ],
                    "id": 1227,
                    "name": "ExpressionStatement",
                    "src": "593:14:4"
                  }
                ],
                "id": 1228,
                "name": "Block",
                "src": "556:58:4"
              }
            ],
            "id": 1229,
            "name": "FunctionDefinition",
            "src": "496:118:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "b00140aa",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getHash",
              "overrides": null,
              "scope": 1613,
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
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1245,
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
                        "id": 1230,
                        "name": "ElementaryTypeName",
                        "src": "637:5:4"
                      }
                    ],
                    "id": 1231,
                    "name": "VariableDeclaration",
                    "src": "637:20:4"
                  }
                ],
                "id": 1232,
                "name": "ParameterList",
                "src": "636:22:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 1245,
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
                        "id": 1233,
                        "name": "ElementaryTypeName",
                        "src": "675:7:4"
                      }
                    ],
                    "id": 1234,
                    "name": "VariableDeclaration",
                    "src": "675:7:4"
                  }
                ],
                "id": 1235,
                "name": "ParameterList",
                "src": "674:9:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1237
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "txId",
                          "overrides": null,
                          "scope": 1244,
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
                            "id": 1236,
                            "name": "ElementaryTypeName",
                            "src": "694:7:4"
                          }
                        ],
                        "id": 1237,
                        "name": "VariableDeclaration",
                        "src": "694:12:4"
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
                              "referencedDeclaration": 5787,
                              "type": "function (bytes memory) pure returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1231,
                                  "type": "bytes calldata",
                                  "value": "rawTx"
                                },
                                "id": 1238,
                                "name": "Identifier",
                                "src": "709:5:4"
                              }
                            ],
                            "id": 1239,
                            "name": "MemberAccess",
                            "src": "709:13:4"
                          }
                        ],
                        "id": 1240,
                        "name": "FunctionCall",
                        "src": "709:15:4"
                      }
                    ],
                    "id": 1241,
                    "name": "VariableDeclarationStatement",
                    "src": "694:30:4"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1235
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1237,
                          "type": "bytes32",
                          "value": "txId"
                        },
                        "id": 1242,
                        "name": "Identifier",
                        "src": "741:4:4"
                      }
                    ],
                    "id": 1243,
                    "name": "Return",
                    "src": "734:11:4"
                  }
                ],
                "id": 1244,
                "name": "Block",
                "src": "684:68:4"
              }
            ],
            "id": 1245,
            "name": "FunctionDefinition",
            "src": "620:132:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "873b7f7b",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getHashView",
              "overrides": null,
              "scope": 1613,
              "stateMutability": "view",
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
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1261,
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
                        "id": 1246,
                        "name": "ElementaryTypeName",
                        "src": "779:5:4"
                      }
                    ],
                    "id": 1247,
                    "name": "VariableDeclaration",
                    "src": "779:20:4"
                  }
                ],
                "id": 1248,
                "name": "ParameterList",
                "src": "778:22:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 1261,
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
                        "id": 1249,
                        "name": "ElementaryTypeName",
                        "src": "822:7:4"
                      }
                    ],
                    "id": 1250,
                    "name": "VariableDeclaration",
                    "src": "822:7:4"
                  }
                ],
                "id": 1251,
                "name": "ParameterList",
                "src": "821:9:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1253
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "txId",
                          "overrides": null,
                          "scope": 1260,
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
                            "id": 1252,
                            "name": "ElementaryTypeName",
                            "src": "841:7:4"
                          }
                        ],
                        "id": 1253,
                        "name": "VariableDeclaration",
                        "src": "841:12:4"
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
                              "referencedDeclaration": 5787,
                              "type": "function (bytes memory) pure returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1247,
                                  "type": "bytes calldata",
                                  "value": "rawTx"
                                },
                                "id": 1254,
                                "name": "Identifier",
                                "src": "856:5:4"
                              }
                            ],
                            "id": 1255,
                            "name": "MemberAccess",
                            "src": "856:13:4"
                          }
                        ],
                        "id": 1256,
                        "name": "FunctionCall",
                        "src": "856:15:4"
                      }
                    ],
                    "id": 1257,
                    "name": "VariableDeclarationStatement",
                    "src": "841:30:4"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1251
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1253,
                          "type": "bytes32",
                          "value": "txId"
                        },
                        "id": 1258,
                        "name": "Identifier",
                        "src": "888:4:4"
                      }
                    ],
                    "id": 1259,
                    "name": "Return",
                    "src": "881:11:4"
                  }
                ],
                "id": 1260,
                "name": "Block",
                "src": "831:68:4"
              }
            ],
            "id": 1261,
            "name": "FunctionDefinition",
            "src": "758:141:4"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "a463bfc7",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "verifyTx",
              "overrides": null,
              "scope": 1613,
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
                      "name": "height",
                      "overrides": null,
                      "scope": 1315,
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
                        "id": 1262,
                        "name": "ElementaryTypeName",
                        "src": "932:6:4"
                      }
                    ],
                    "id": 1263,
                    "name": "VariableDeclaration",
                    "src": "932:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "index",
                      "overrides": null,
                      "scope": 1315,
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
                        "id": 1264,
                        "name": "ElementaryTypeName",
                        "src": "955:7:4"
                      }
                    ],
                    "id": 1265,
                    "name": "VariableDeclaration",
                    "src": "955:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1315,
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
                        "id": 1266,
                        "name": "ElementaryTypeName",
                        "src": "978:5:4"
                      }
                    ],
                    "id": 1267,
                    "name": "VariableDeclaration",
                    "src": "978:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "header",
                      "overrides": null,
                      "scope": 1315,
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
                        "id": 1268,
                        "name": "ElementaryTypeName",
                        "src": "1008:5:4"
                      }
                    ],
                    "id": 1269,
                    "name": "VariableDeclaration",
                    "src": "1008:21:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "merkleProof",
                      "overrides": null,
                      "scope": 1315,
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
                        "id": 1270,
                        "name": "ElementaryTypeName",
                        "src": "1039:5:4"
                      }
                    ],
                    "id": 1271,
                    "name": "VariableDeclaration",
                    "src": "1039:26:4"
                  }
                ],
                "id": 1272,
                "name": "ParameterList",
                "src": "922:149:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 1315,
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
                        "id": 1273,
                        "name": "ElementaryTypeName",
                        "src": "1088:5:4"
                      }
                    ],
                    "id": 1274,
                    "name": "VariableDeclaration",
                    "src": "1088:12:4"
                  }
                ],
                "id": 1275,
                "name": "ParameterList",
                "src": "1087:14:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1277
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "txId",
                          "overrides": null,
                          "scope": 1314,
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
                            "id": 1276,
                            "name": "ElementaryTypeName",
                            "src": "1112:7:4"
                          }
                        ],
                        "id": 1277,
                        "name": "VariableDeclaration",
                        "src": "1112:12:4"
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
                              "referencedDeclaration": 5787,
                              "type": "function (bytes memory) pure returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1267,
                                  "type": "bytes calldata",
                                  "value": "rawTx"
                                },
                                "id": 1278,
                                "name": "Identifier",
                                "src": "1127:5:4"
                              }
                            ],
                            "id": 1279,
                            "name": "MemberAccess",
                            "src": "1127:13:4"
                          }
                        ],
                        "id": 1280,
                        "name": "FunctionCall",
                        "src": "1127:15:4"
                      }
                    ],
                    "id": 1281,
                    "name": "VariableDeclarationStatement",
                    "src": "1112:30:4"
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
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
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
                                  "referencedDeclaration": 1211,
                                  "type": "contract IRelay",
                                  "value": "realy"
                                },
                                "id": 1282,
                                "name": "Identifier",
                                "src": "1152:5:4"
                              }
                            ],
                            "id": 1284,
                            "name": "MemberAccess",
                            "src": "1152:14:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1263,
                              "type": "uint32",
                              "value": "height"
                            },
                            "id": 1285,
                            "name": "Identifier",
                            "src": "1180:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1265,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 1286,
                            "name": "Identifier",
                            "src": "1200:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1277,
                              "type": "bytes32",
                              "value": "txId"
                            },
                            "id": 1287,
                            "name": "Identifier",
                            "src": "1219:4:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1269,
                              "type": "bytes calldata",
                              "value": "header"
                            },
                            "id": 1288,
                            "name": "Identifier",
                            "src": "1237:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1271,
                              "type": "bytes calldata",
                              "value": "merkleProof"
                            },
                            "id": 1289,
                            "name": "Identifier",
                            "src": "1257:11:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 1290,
                            "name": "Literal",
                            "src": "1282:1:4"
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
                            "id": 1291,
                            "name": "Literal",
                            "src": "1297:4:4"
                          }
                        ],
                        "id": 1292,
                        "name": "FunctionCall",
                        "src": "1152:159:4"
                      }
                    ],
                    "id": 1293,
                    "name": "ExpressionStatement",
                    "src": "1152:159:4"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1297
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "btcTx",
                          "overrides": null,
                          "scope": 1314,
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
                              "referencedDeclaration": 2782,
                              "type": "struct TransactionUtils.Transaction"
                            },
                            "id": 1296,
                            "name": "UserDefinedTypeName",
                            "src": "1321:28:4"
                          }
                        ],
                        "id": 1297,
                        "name": "VariableDeclaration",
                        "src": "1321:41:4"
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
                              "referencedDeclaration": 2933,
                              "type": "function (bytes memory) pure returns (struct TransactionUtils.Transaction memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2934,
                                  "type": "type(library TransactionUtils)",
                                  "value": "TransactionUtils"
                                },
                                "id": 1298,
                                "name": "Identifier",
                                "src": "1377:16:4"
                              }
                            ],
                            "id": 1299,
                            "name": "MemberAccess",
                            "src": "1377:26:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1267,
                              "type": "bytes calldata",
                              "value": "rawTx"
                            },
                            "id": 1300,
                            "name": "Identifier",
                            "src": "1404:5:4"
                          }
                        ],
                        "id": 1301,
                        "name": "FunctionCall",
                        "src": "1377:33:4"
                      }
                    ],
                    "id": 1302,
                    "name": "VariableDeclarationStatement",
                    "src": "1321:89:4"
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
                            "id": 1303,
                            "name": "Identifier",
                            "src": "1420:7:4"
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
                                  "referencedDeclaration": 2781,
                                  "type": "uint32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1297,
                                      "type": "struct TransactionUtils.Transaction memory",
                                      "value": "btcTx"
                                    },
                                    "id": 1304,
                                    "name": "Identifier",
                                    "src": "1428:5:4"
                                  }
                                ],
                                "id": 1305,
                                "name": "MemberAccess",
                                "src": "1428:14:4"
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
                                "id": 1306,
                                "name": "Literal",
                                "src": "1446:1:4"
                              }
                            ],
                            "id": 1307,
                            "name": "BinaryOperation",
                            "src": "1428:19:4"
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
                            "id": 1308,
                            "name": "Literal",
                            "src": "1449:21:4"
                          }
                        ],
                        "id": 1309,
                        "name": "FunctionCall",
                        "src": "1420:51:4"
                      }
                    ],
                    "id": 1310,
                    "name": "ExpressionStatement",
                    "src": "1420:51:4"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1275
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
                          "referencedDeclaration": 2779,
                          "type": "bytes memory"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1297,
                              "type": "struct TransactionUtils.Transaction memory",
                              "value": "btcTx"
                            },
                            "id": 1311,
                            "name": "Identifier",
                            "src": "1539:5:4"
                          }
                        ],
                        "id": 1312,
                        "name": "MemberAccess",
                        "src": "1539:11:4"
                      }
                    ],
                    "id": 1313,
                    "name": "Return",
                    "src": "1532:18:4"
                  }
                ],
                "id": 1314,
                "name": "Block",
                "src": "1102:455:4"
              }
            ],
            "id": 1315,
            "name": "FunctionDefinition",
            "src": "905:652:4"
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
              "scope": 1613,
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
                      "scope": 1334,
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
                        "src": "1585:7:4"
                      }
                    ],
                    "id": 1317,
                    "name": "VariableDeclaration",
                    "src": "1585:23:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "vaultId",
                      "overrides": null,
                      "scope": 1334,
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
                        "id": 1318,
                        "name": "ElementaryTypeName",
                        "src": "1610:7:4"
                      }
                    ],
                    "id": 1319,
                    "name": "VariableDeclaration",
                    "src": "1610:15:4"
                  }
                ],
                "id": 1320,
                "name": "ParameterList",
                "src": "1584:42:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1321,
                "name": "ParameterList",
                "src": "1664:0:4"
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
                              "referencedDeclaration": 901,
                              "type": "function (address payable,uint256,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1185,
                                  "type": "type(contract Issue)",
                                  "value": "Issue"
                                },
                                "id": 1322,
                                "name": "Identifier",
                                "src": "1674:5:4"
                              }
                            ],
                            "id": 1324,
                            "name": "MemberAccess",
                            "src": "1674:19:4"
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
                                "id": 1325,
                                "name": "Identifier",
                                "src": "1694:3:4"
                              }
                            ],
                            "id": 1326,
                            "name": "MemberAccess",
                            "src": "1694:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1317,
                              "type": "uint256",
                              "value": "amountRequested"
                            },
                            "id": 1327,
                            "name": "Identifier",
                            "src": "1706:15:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1319,
                              "type": "address",
                              "value": "vaultId"
                            },
                            "id": 1328,
                            "name": "Identifier",
                            "src": "1723:7:4"
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
                                "id": 1329,
                                "name": "Identifier",
                                "src": "1732:3:4"
                              }
                            ],
                            "id": 1330,
                            "name": "MemberAccess",
                            "src": "1732:9:4"
                          }
                        ],
                        "id": 1331,
                        "name": "FunctionCall",
                        "src": "1674:68:4"
                      }
                    ],
                    "id": 1332,
                    "name": "ExpressionStatement",
                    "src": "1674:68:4"
                  }
                ],
                "id": 1333,
                "name": "Block",
                "src": "1664:85:4"
              }
            ],
            "id": 1334,
            "name": "FunctionDefinition",
            "src": "1563:186:4"
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
              "scope": 1613,
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
                      "scope": 1370,
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
                        "id": 1335,
                        "name": "ElementaryTypeName",
                        "src": "1786:7:4"
                      }
                    ],
                    "id": 1336,
                    "name": "VariableDeclaration",
                    "src": "1786:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "issueId",
                      "overrides": null,
                      "scope": 1370,
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
                        "id": 1337,
                        "name": "ElementaryTypeName",
                        "src": "1813:7:4"
                      }
                    ],
                    "id": 1338,
                    "name": "VariableDeclaration",
                    "src": "1813:15:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "merkleProof",
                      "overrides": null,
                      "scope": 1370,
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
                        "id": 1339,
                        "name": "ElementaryTypeName",
                        "src": "1838:5:4"
                      }
                    ],
                    "id": 1340,
                    "name": "VariableDeclaration",
                    "src": "1838:26:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1370,
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
                        "id": 1341,
                        "name": "ElementaryTypeName",
                        "src": "1874:5:4"
                      }
                    ],
                    "id": 1342,
                    "name": "VariableDeclaration",
                    "src": "1874:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "height",
                      "overrides": null,
                      "scope": 1370,
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
                        "id": 1343,
                        "name": "ElementaryTypeName",
                        "src": "2048:6:4"
                      }
                    ],
                    "id": 1344,
                    "name": "VariableDeclaration",
                    "src": "2048:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "index",
                      "overrides": null,
                      "scope": 1370,
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
                        "id": 1345,
                        "name": "ElementaryTypeName",
                        "src": "2071:7:4"
                      }
                    ],
                    "id": 1346,
                    "name": "VariableDeclaration",
                    "src": "2071:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "header",
                      "overrides": null,
                      "scope": 1370,
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
                        "id": 1347,
                        "name": "ElementaryTypeName",
                        "src": "2094:5:4"
                      }
                    ],
                    "id": 1348,
                    "name": "VariableDeclaration",
                    "src": "2094:21:4"
                  }
                ],
                "id": 1349,
                "name": "ParameterList",
                "src": "1776:345:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1350,
                "name": "ParameterList",
                "src": "2131:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1352
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "_vout",
                          "overrides": null,
                          "scope": 1369,
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
                            "id": 1351,
                            "name": "ElementaryTypeName",
                            "src": "2141:5:4"
                          }
                        ],
                        "id": 1352,
                        "name": "VariableDeclaration",
                        "src": "2141:18:4"
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
                              "referencedDeclaration": 1315,
                              "type": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)",
                              "value": "verifyTx"
                            },
                            "id": 1353,
                            "name": "Identifier",
                            "src": "2174:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1344,
                              "type": "uint32",
                              "value": "height"
                            },
                            "id": 1354,
                            "name": "Identifier",
                            "src": "2183:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1346,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 1355,
                            "name": "Identifier",
                            "src": "2191:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1342,
                              "type": "bytes calldata",
                              "value": "rawTx"
                            },
                            "id": 1356,
                            "name": "Identifier",
                            "src": "2198:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1348,
                              "type": "bytes calldata",
                              "value": "header"
                            },
                            "id": 1357,
                            "name": "Identifier",
                            "src": "2205:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1340,
                              "type": "bytes calldata",
                              "value": "merkleProof"
                            },
                            "id": 1358,
                            "name": "Identifier",
                            "src": "2213:11:4"
                          }
                        ],
                        "id": 1359,
                        "name": "FunctionCall",
                        "src": "2174:51:4"
                      }
                    ],
                    "id": 1360,
                    "name": "VariableDeclarationStatement",
                    "src": "2141:84:4"
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
                              "referencedDeclaration": 1104,
                              "type": "function (address,uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1185,
                                  "type": "type(contract Issue)",
                                  "value": "Issue"
                                },
                                "id": 1361,
                                "name": "Identifier",
                                "src": "2236:5:4"
                              }
                            ],
                            "id": 1363,
                            "name": "MemberAccess",
                            "src": "2236:19:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1336,
                              "type": "address",
                              "value": "requester"
                            },
                            "id": 1364,
                            "name": "Identifier",
                            "src": "2256:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1338,
                              "type": "uint256",
                              "value": "issueId"
                            },
                            "id": 1365,
                            "name": "Identifier",
                            "src": "2267:7:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1352,
                              "type": "bytes memory",
                              "value": "_vout"
                            },
                            "id": 1366,
                            "name": "Identifier",
                            "src": "2276:5:4"
                          }
                        ],
                        "id": 1367,
                        "name": "FunctionCall",
                        "src": "2236:46:4"
                      }
                    ],
                    "id": 1368,
                    "name": "ExpressionStatement",
                    "src": "2236:46:4"
                  }
                ],
                "id": 1369,
                "name": "Block",
                "src": "2131:158:4"
              }
            ],
            "id": 1370,
            "name": "FunctionDefinition",
            "src": "1755:534:4"
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
              "scope": 1613,
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
                      "scope": 1385,
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
                        "id": 1371,
                        "name": "ElementaryTypeName",
                        "src": "2316:7:4"
                      }
                    ],
                    "id": 1372,
                    "name": "VariableDeclaration",
                    "src": "2316:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "issueId",
                      "overrides": null,
                      "scope": 1385,
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
                        "id": 1373,
                        "name": "ElementaryTypeName",
                        "src": "2335:7:4"
                      }
                    ],
                    "id": 1374,
                    "name": "VariableDeclaration",
                    "src": "2335:15:4"
                  }
                ],
                "id": 1375,
                "name": "ParameterList",
                "src": "2315:36:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1376,
                "name": "ParameterList",
                "src": "2361:0:4"
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
                              "referencedDeclaration": 1184,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1185,
                                  "type": "type(contract Issue)",
                                  "value": "Issue"
                                },
                                "id": 1377,
                                "name": "Identifier",
                                "src": "2371:5:4"
                              }
                            ],
                            "id": 1379,
                            "name": "MemberAccess",
                            "src": "2371:18:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1372,
                              "type": "address",
                              "value": "requester"
                            },
                            "id": 1380,
                            "name": "Identifier",
                            "src": "2390:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1374,
                              "type": "uint256",
                              "value": "issueId"
                            },
                            "id": 1381,
                            "name": "Identifier",
                            "src": "2401:7:4"
                          }
                        ],
                        "id": 1382,
                        "name": "FunctionCall",
                        "src": "2371:38:4"
                      }
                    ],
                    "id": 1383,
                    "name": "ExpressionStatement",
                    "src": "2371:38:4"
                  }
                ],
                "id": 1384,
                "name": "Block",
                "src": "2361:55:4"
              }
            ],
            "id": 1385,
            "name": "FunctionDefinition",
            "src": "2295:121:4"
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
              "scope": 1613,
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
                      "scope": 1405,
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
                        "id": 1386,
                        "name": "ElementaryTypeName",
                        "src": "2454:7:4"
                      }
                    ],
                    "id": 1387,
                    "name": "VariableDeclaration",
                    "src": "2454:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcAddress",
                      "overrides": null,
                      "scope": 1405,
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
                        "id": 1388,
                        "name": "ElementaryTypeName",
                        "src": "2484:7:4"
                      }
                    ],
                    "id": 1389,
                    "name": "VariableDeclaration",
                    "src": "2484:18:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "vaultId",
                      "overrides": null,
                      "scope": 1405,
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
                        "id": 1390,
                        "name": "ElementaryTypeName",
                        "src": "2512:7:4"
                      }
                    ],
                    "id": 1391,
                    "name": "VariableDeclaration",
                    "src": "2512:15:4"
                  }
                ],
                "id": 1392,
                "name": "ParameterList",
                "src": "2444:89:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1393,
                "name": "ParameterList",
                "src": "2543:0:4"
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
                              "referencedDeclaration": 1935,
                              "type": "function (address,uint256,address,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2114,
                                  "type": "type(contract Redeem)",
                                  "value": "Redeem"
                                },
                                "id": 1394,
                                "name": "Identifier",
                                "src": "2553:6:4"
                              }
                            ],
                            "id": 1396,
                            "name": "MemberAccess",
                            "src": "2553:21:4"
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
                                "id": 1397,
                                "name": "Identifier",
                                "src": "2588:3:4"
                              }
                            ],
                            "id": 1398,
                            "name": "MemberAccess",
                            "src": "2588:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1387,
                              "type": "uint256",
                              "value": "amountOneBtc"
                            },
                            "id": 1399,
                            "name": "Identifier",
                            "src": "2612:12:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1389,
                              "type": "address",
                              "value": "btcAddress"
                            },
                            "id": 1400,
                            "name": "Identifier",
                            "src": "2638:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1391,
                              "type": "address",
                              "value": "vaultId"
                            },
                            "id": 1401,
                            "name": "Identifier",
                            "src": "2662:7:4"
                          }
                        ],
                        "id": 1402,
                        "name": "FunctionCall",
                        "src": "2553:126:4"
                      }
                    ],
                    "id": 1403,
                    "name": "ExpressionStatement",
                    "src": "2553:126:4"
                  }
                ],
                "id": 1404,
                "name": "Block",
                "src": "2543:143:4"
              }
            ],
            "id": 1405,
            "name": "FunctionDefinition",
            "src": "2422:264:4"
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
              "scope": 1613,
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
                      "scope": 1441,
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
                        "id": 1406,
                        "name": "ElementaryTypeName",
                        "src": "2724:7:4"
                      }
                    ],
                    "id": 1407,
                    "name": "VariableDeclaration",
                    "src": "2724:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "redeemId",
                      "overrides": null,
                      "scope": 1441,
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
                        "id": 1408,
                        "name": "ElementaryTypeName",
                        "src": "2751:7:4"
                      }
                    ],
                    "id": 1409,
                    "name": "VariableDeclaration",
                    "src": "2751:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "merkleProof",
                      "overrides": null,
                      "scope": 1441,
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
                        "id": 1410,
                        "name": "ElementaryTypeName",
                        "src": "2777:5:4"
                      }
                    ],
                    "id": 1411,
                    "name": "VariableDeclaration",
                    "src": "2777:26:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1441,
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
                        "id": 1412,
                        "name": "ElementaryTypeName",
                        "src": "2813:5:4"
                      }
                    ],
                    "id": 1413,
                    "name": "VariableDeclaration",
                    "src": "2813:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "height",
                      "overrides": null,
                      "scope": 1441,
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
                        "id": 1414,
                        "name": "ElementaryTypeName",
                        "src": "2843:6:4"
                      }
                    ],
                    "id": 1415,
                    "name": "VariableDeclaration",
                    "src": "2843:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "index",
                      "overrides": null,
                      "scope": 1441,
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
                        "id": 1416,
                        "name": "ElementaryTypeName",
                        "src": "2866:7:4"
                      }
                    ],
                    "id": 1417,
                    "name": "VariableDeclaration",
                    "src": "2866:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "header",
                      "overrides": null,
                      "scope": 1441,
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
                        "id": 1418,
                        "name": "ElementaryTypeName",
                        "src": "2889:5:4"
                      }
                    ],
                    "id": 1419,
                    "name": "VariableDeclaration",
                    "src": "2889:21:4"
                  }
                ],
                "id": 1420,
                "name": "ParameterList",
                "src": "2714:202:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1421,
                "name": "ParameterList",
                "src": "2926:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1423
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "_vout",
                          "overrides": null,
                          "scope": 1440,
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
                            "id": 1422,
                            "name": "ElementaryTypeName",
                            "src": "2936:5:4"
                          }
                        ],
                        "id": 1423,
                        "name": "VariableDeclaration",
                        "src": "2936:18:4"
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
                              "referencedDeclaration": 1315,
                              "type": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)",
                              "value": "verifyTx"
                            },
                            "id": 1424,
                            "name": "Identifier",
                            "src": "2969:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1415,
                              "type": "uint32",
                              "value": "height"
                            },
                            "id": 1425,
                            "name": "Identifier",
                            "src": "2978:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1417,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 1426,
                            "name": "Identifier",
                            "src": "2986:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1413,
                              "type": "bytes calldata",
                              "value": "rawTx"
                            },
                            "id": 1427,
                            "name": "Identifier",
                            "src": "2993:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1419,
                              "type": "bytes calldata",
                              "value": "header"
                            },
                            "id": 1428,
                            "name": "Identifier",
                            "src": "3000:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1411,
                              "type": "bytes calldata",
                              "value": "merkleProof"
                            },
                            "id": 1429,
                            "name": "Identifier",
                            "src": "3008:11:4"
                          }
                        ],
                        "id": 1430,
                        "name": "FunctionCall",
                        "src": "2969:51:4"
                      }
                    ],
                    "id": 1431,
                    "name": "VariableDeclarationStatement",
                    "src": "2936:84:4"
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
                              "referencedDeclaration": 2026,
                              "type": "function (address,uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2114,
                                  "type": "type(contract Redeem)",
                                  "value": "Redeem"
                                },
                                "id": 1432,
                                "name": "Identifier",
                                "src": "3031:6:4"
                              }
                            ],
                            "id": 1434,
                            "name": "MemberAccess",
                            "src": "3031:21:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1407,
                              "type": "address",
                              "value": "requester"
                            },
                            "id": 1435,
                            "name": "Identifier",
                            "src": "3053:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1409,
                              "type": "uint256",
                              "value": "redeemId"
                            },
                            "id": 1436,
                            "name": "Identifier",
                            "src": "3064:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1423,
                              "type": "bytes memory",
                              "value": "_vout"
                            },
                            "id": 1437,
                            "name": "Identifier",
                            "src": "3074:5:4"
                          }
                        ],
                        "id": 1438,
                        "name": "FunctionCall",
                        "src": "3031:49:4"
                      }
                    ],
                    "id": 1439,
                    "name": "ExpressionStatement",
                    "src": "3031:49:4"
                  }
                ],
                "id": 1440,
                "name": "Block",
                "src": "2926:161:4"
              }
            ],
            "id": 1441,
            "name": "FunctionDefinition",
            "src": "2692:395:4"
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
              "scope": 1613,
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
                      "scope": 1456,
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
                        "id": 1442,
                        "name": "ElementaryTypeName",
                        "src": "3115:7:4"
                      }
                    ],
                    "id": 1443,
                    "name": "VariableDeclaration",
                    "src": "3115:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "redeemId",
                      "overrides": null,
                      "scope": 1456,
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
                        "id": 1444,
                        "name": "ElementaryTypeName",
                        "src": "3134:7:4"
                      }
                    ],
                    "id": 1445,
                    "name": "VariableDeclaration",
                    "src": "3134:16:4"
                  }
                ],
                "id": 1446,
                "name": "ParameterList",
                "src": "3114:37:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1447,
                "name": "ParameterList",
                "src": "3161:0:4"
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
                              "referencedDeclaration": 2113,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2114,
                                  "type": "type(contract Redeem)",
                                  "value": "Redeem"
                                },
                                "id": 1448,
                                "name": "Identifier",
                                "src": "3171:6:4"
                              }
                            ],
                            "id": 1450,
                            "name": "MemberAccess",
                            "src": "3171:20:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1443,
                              "type": "address",
                              "value": "requester"
                            },
                            "id": 1451,
                            "name": "Identifier",
                            "src": "3192:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1445,
                              "type": "uint256",
                              "value": "redeemId"
                            },
                            "id": 1452,
                            "name": "Identifier",
                            "src": "3203:8:4"
                          }
                        ],
                        "id": 1453,
                        "name": "FunctionCall",
                        "src": "3171:41:4"
                      }
                    ],
                    "id": 1454,
                    "name": "ExpressionStatement",
                    "src": "3171:41:4"
                  }
                ],
                "id": 1455,
                "name": "Block",
                "src": "3161:58:4"
              }
            ],
            "id": 1456,
            "name": "FunctionDefinition",
            "src": "3093:126:4"
          },
          {
            "attributes": {
              "baseFunctions": [
                1693
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "lockOneBTC",
              "scope": 1613,
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
                      "referencedDeclaration": 2114,
                      "type": "contract Redeem"
                    },
                    "id": 1462,
                    "name": "UserDefinedTypeName",
                    "src": "3309:6:4"
                  }
                ],
                "id": 1463,
                "name": "OverrideSpecifier",
                "src": "3300:16:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "from",
                      "overrides": null,
                      "scope": 1478,
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
                        "id": 1457,
                        "name": "ElementaryTypeName",
                        "src": "3245:7:4"
                      }
                    ],
                    "id": 1458,
                    "name": "VariableDeclaration",
                    "src": "3245:12:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 1478,
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
                        "id": 1459,
                        "name": "ElementaryTypeName",
                        "src": "3259:7:4"
                      }
                    ],
                    "id": 1460,
                    "name": "VariableDeclaration",
                    "src": "3259:14:4"
                  }
                ],
                "id": 1461,
                "name": "ParameterList",
                "src": "3244:30:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1464,
                "name": "ParameterList",
                "src": "3321:0:4"
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
                              "referencedDeclaration": 8415,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8594,
                                  "type": "type(contract ERC20)",
                                  "value": "ERC20"
                                },
                                "id": 1465,
                                "name": "Identifier",
                                "src": "3396:5:4"
                              }
                            ],
                            "id": 1467,
                            "name": "MemberAccess",
                            "src": "3396:15:4"
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
                                "id": 1468,
                                "name": "Identifier",
                                "src": "3412:3:4"
                              }
                            ],
                            "id": 1469,
                            "name": "MemberAccess",
                            "src": "3412:10:4"
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
                                      "typeIdentifier": "t_contract$_OneBtc_$1613",
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
                                    "id": 1470,
                                    "name": "ElementaryTypeName",
                                    "src": "3424:7:4"
                                  }
                                ],
                                "id": 1471,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3424:7:4"
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
                                "id": 1472,
                                "name": "Identifier",
                                "src": "3432:4:4"
                              }
                            ],
                            "id": 1473,
                            "name": "FunctionCall",
                            "src": "3424:13:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1460,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1474,
                            "name": "Identifier",
                            "src": "3439:6:4"
                          }
                        ],
                        "id": 1475,
                        "name": "FunctionCall",
                        "src": "3396:50:4"
                      }
                    ],
                    "id": 1476,
                    "name": "ExpressionStatement",
                    "src": "3396:50:4"
                  }
                ],
                "id": 1477,
                "name": "Block",
                "src": "3321:132:4"
              }
            ],
            "id": 1478,
            "name": "FunctionDefinition",
            "src": "3225:228:4"
          },
          {
            "attributes": {
              "baseFunctions": [
                1698
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "burnLockedOneBTC",
              "scope": 1613,
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
                      "referencedDeclaration": 2114,
                      "type": "contract Redeem"
                    },
                    "id": 1482,
                    "name": "UserDefinedTypeName",
                    "src": "3519:6:4"
                  }
                ],
                "id": 1483,
                "name": "OverrideSpecifier",
                "src": "3510:16:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 1496,
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
                        "id": 1479,
                        "name": "ElementaryTypeName",
                        "src": "3485:7:4"
                      }
                    ],
                    "id": 1480,
                    "name": "VariableDeclaration",
                    "src": "3485:14:4"
                  }
                ],
                "id": 1481,
                "name": "ParameterList",
                "src": "3484:16:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1484,
                "name": "ParameterList",
                "src": "3527:0:4"
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
                              "referencedDeclaration": 8526,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8594,
                                  "type": "type(contract ERC20)",
                                  "value": "ERC20"
                                },
                                "id": 1485,
                                "name": "Identifier",
                                "src": "3537:5:4"
                              }
                            ],
                            "id": 1487,
                            "name": "MemberAccess",
                            "src": "3537:11:4"
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
                                      "typeIdentifier": "t_contract$_OneBtc_$1613",
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
                                    "id": 1488,
                                    "name": "ElementaryTypeName",
                                    "src": "3549:7:4"
                                  }
                                ],
                                "id": 1489,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3549:7:4"
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
                                "id": 1490,
                                "name": "Identifier",
                                "src": "3557:4:4"
                              }
                            ],
                            "id": 1491,
                            "name": "FunctionCall",
                            "src": "3549:13:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1480,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1492,
                            "name": "Identifier",
                            "src": "3564:6:4"
                          }
                        ],
                        "id": 1493,
                        "name": "FunctionCall",
                        "src": "3537:34:4"
                      }
                    ],
                    "id": 1494,
                    "name": "ExpressionStatement",
                    "src": "3537:34:4"
                  }
                ],
                "id": 1495,
                "name": "Block",
                "src": "3527:51:4"
              }
            ],
            "id": 1496,
            "name": "FunctionDefinition",
            "src": "3459:119:4"
          },
          {
            "attributes": {
              "baseFunctions": [
                1705
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "releaseLockedOneBTC",
              "scope": 1613,
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
                      "referencedDeclaration": 2114,
                      "type": "contract Redeem"
                    },
                    "id": 1502,
                    "name": "UserDefinedTypeName",
                    "src": "3681:6:4"
                  }
                ],
                "id": 1503,
                "name": "OverrideSpecifier",
                "src": "3672:16:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "receiver",
                      "overrides": null,
                      "scope": 1517,
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
                        "id": 1497,
                        "name": "ElementaryTypeName",
                        "src": "3613:7:4"
                      }
                    ],
                    "id": 1498,
                    "name": "VariableDeclaration",
                    "src": "3613:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 1517,
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
                        "id": 1499,
                        "name": "ElementaryTypeName",
                        "src": "3631:7:4"
                      }
                    ],
                    "id": 1500,
                    "name": "VariableDeclaration",
                    "src": "3631:14:4"
                  }
                ],
                "id": 1501,
                "name": "ParameterList",
                "src": "3612:34:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1504,
                "name": "ParameterList",
                "src": "3693:0:4"
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
                              "referencedDeclaration": 8415,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8594,
                                  "type": "type(contract ERC20)",
                                  "value": "ERC20"
                                },
                                "id": 1505,
                                "name": "Identifier",
                                "src": "3703:5:4"
                              }
                            ],
                            "id": 1507,
                            "name": "MemberAccess",
                            "src": "3703:15:4"
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
                                      "typeIdentifier": "t_contract$_OneBtc_$1613",
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
                                    "id": 1508,
                                    "name": "ElementaryTypeName",
                                    "src": "3719:7:4"
                                  }
                                ],
                                "id": 1509,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3719:7:4"
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
                                "id": 1510,
                                "name": "Identifier",
                                "src": "3727:4:4"
                              }
                            ],
                            "id": 1511,
                            "name": "FunctionCall",
                            "src": "3719:13:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1498,
                              "type": "address",
                              "value": "receiver"
                            },
                            "id": 1512,
                            "name": "Identifier",
                            "src": "3734:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1500,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1513,
                            "name": "Identifier",
                            "src": "3744:6:4"
                          }
                        ],
                        "id": 1514,
                        "name": "FunctionCall",
                        "src": "3703:48:4"
                      }
                    ],
                    "id": 1515,
                    "name": "ExpressionStatement",
                    "src": "3703:48:4"
                  }
                ],
                "id": 1516,
                "name": "Block",
                "src": "3693:65:4"
              }
            ],
            "id": 1517,
            "name": "FunctionDefinition",
            "src": "3584:174:4"
          },
          {
            "attributes": {
              "baseFunctions": [
                592
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "issueOneBTC",
              "scope": 1613,
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
                      "referencedDeclaration": 1185,
                      "type": "contract Issue"
                    },
                    "id": 1523,
                    "name": "UserDefinedTypeName",
                    "src": "3853:5:4"
                  }
                ],
                "id": 1524,
                "name": "OverrideSpecifier",
                "src": "3844:15:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "receiver",
                      "overrides": null,
                      "scope": 1534,
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
                        "id": 1518,
                        "name": "ElementaryTypeName",
                        "src": "3785:7:4"
                      }
                    ],
                    "id": 1519,
                    "name": "VariableDeclaration",
                    "src": "3785:16:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 1534,
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
                        "id": 1520,
                        "name": "ElementaryTypeName",
                        "src": "3803:7:4"
                      }
                    ],
                    "id": 1521,
                    "name": "VariableDeclaration",
                    "src": "3803:14:4"
                  }
                ],
                "id": 1522,
                "name": "ParameterList",
                "src": "3784:34:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1525,
                "name": "ParameterList",
                "src": "3864:0:4"
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
                              "referencedDeclaration": 8470,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8594,
                                  "type": "type(contract ERC20)",
                                  "value": "ERC20"
                                },
                                "id": 1526,
                                "name": "Identifier",
                                "src": "3874:5:4"
                              }
                            ],
                            "id": 1528,
                            "name": "MemberAccess",
                            "src": "3874:11:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1519,
                              "type": "address",
                              "value": "receiver"
                            },
                            "id": 1529,
                            "name": "Identifier",
                            "src": "3886:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1521,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1530,
                            "name": "Identifier",
                            "src": "3896:6:4"
                          }
                        ],
                        "id": 1531,
                        "name": "FunctionCall",
                        "src": "3874:29:4"
                      }
                    ],
                    "id": 1532,
                    "name": "ExpressionStatement",
                    "src": "3874:29:4"
                  }
                ],
                "id": 1533,
                "name": "Block",
                "src": "3864:46:4"
              }
            ],
            "id": 1534,
            "name": "FunctionDefinition",
            "src": "3764:146:4"
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
              "scope": 1613,
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
                      "scope": 1552,
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
                        "id": 1535,
                        "name": "ElementaryTypeName",
                        "src": "3949:15:4"
                      }
                    ],
                    "id": 1536,
                    "name": "VariableDeclaration",
                    "src": "3949:26:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcAmount",
                      "overrides": null,
                      "scope": 1552,
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
                        "id": 1537,
                        "name": "ElementaryTypeName",
                        "src": "3985:7:4"
                      }
                    ],
                    "id": 1538,
                    "name": "VariableDeclaration",
                    "src": "3985:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "griefingCollateral",
                      "overrides": null,
                      "scope": 1552,
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
                        "id": 1539,
                        "name": "ElementaryTypeName",
                        "src": "4012:7:4"
                      }
                    ],
                    "id": 1540,
                    "name": "VariableDeclaration",
                    "src": "4012:26:4"
                  }
                ],
                "id": 1541,
                "name": "ParameterList",
                "src": "3939:105:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1542,
                "name": "ParameterList",
                "src": "4062:0:4"
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
                              "referencedDeclaration": 2325,
                              "type": "function (address payable,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2683,
                                  "type": "type(contract Replace)",
                                  "value": "Replace"
                                },
                                "id": 1543,
                                "name": "Identifier",
                                "src": "4072:7:4"
                              }
                            ],
                            "id": 1545,
                            "name": "MemberAccess",
                            "src": "4072:23:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1536,
                              "type": "address payable",
                              "value": "oldVaultId"
                            },
                            "id": 1546,
                            "name": "Identifier",
                            "src": "4096:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1538,
                              "type": "uint256",
                              "value": "btcAmount"
                            },
                            "id": 1547,
                            "name": "Identifier",
                            "src": "4108:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1540,
                              "type": "uint256",
                              "value": "griefingCollateral"
                            },
                            "id": 1548,
                            "name": "Identifier",
                            "src": "4119:18:4"
                          }
                        ],
                        "id": 1549,
                        "name": "FunctionCall",
                        "src": "4072:66:4"
                      }
                    ],
                    "id": 1550,
                    "name": "ExpressionStatement",
                    "src": "4072:66:4"
                  }
                ],
                "id": 1551,
                "name": "Block",
                "src": "4062:83:4"
              }
            ],
            "id": 1552,
            "name": "FunctionDefinition",
            "src": "3916:229:4"
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
              "scope": 1613,
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
                      "scope": 1579,
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
                        "id": 1553,
                        "name": "ElementaryTypeName",
                        "src": "4183:7:4"
                      }
                    ],
                    "id": 1554,
                    "name": "VariableDeclaration",
                    "src": "4183:18:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "newVaultId",
                      "overrides": null,
                      "scope": 1579,
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
                        "id": 1555,
                        "name": "ElementaryTypeName",
                        "src": "4211:7:4"
                      }
                    ],
                    "id": 1556,
                    "name": "VariableDeclaration",
                    "src": "4211:18:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcAmount",
                      "overrides": null,
                      "scope": 1579,
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
                        "id": 1557,
                        "name": "ElementaryTypeName",
                        "src": "4239:7:4"
                      }
                    ],
                    "id": 1558,
                    "name": "VariableDeclaration",
                    "src": "4239:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "collateral",
                      "overrides": null,
                      "scope": 1579,
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
                        "id": 1559,
                        "name": "ElementaryTypeName",
                        "src": "4266:7:4"
                      }
                    ],
                    "id": 1560,
                    "name": "VariableDeclaration",
                    "src": "4266:18:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcPublicKeyX",
                      "overrides": null,
                      "scope": 1579,
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
                        "id": 1561,
                        "name": "ElementaryTypeName",
                        "src": "4294:7:4"
                      }
                    ],
                    "id": 1562,
                    "name": "VariableDeclaration",
                    "src": "4294:21:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "btcPublicKeyY",
                      "overrides": null,
                      "scope": 1579,
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
                        "id": 1563,
                        "name": "ElementaryTypeName",
                        "src": "4325:7:4"
                      }
                    ],
                    "id": 1564,
                    "name": "VariableDeclaration",
                    "src": "4325:21:4"
                  }
                ],
                "id": 1565,
                "name": "ParameterList",
                "src": "4173:179:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1566,
                "name": "ParameterList",
                "src": "4370:0:4"
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
                              "referencedDeclaration": 2597,
                              "type": "function (address,address,uint256,uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2683,
                                  "type": "type(contract Replace)",
                                  "value": "Replace"
                                },
                                "id": 1567,
                                "name": "Identifier",
                                "src": "4380:7:4"
                              }
                            ],
                            "id": 1569,
                            "name": "MemberAccess",
                            "src": "4380:22:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1554,
                              "type": "address",
                              "value": "oldVaultId"
                            },
                            "id": 1570,
                            "name": "Identifier",
                            "src": "4416:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1556,
                              "type": "address",
                              "value": "newVaultId"
                            },
                            "id": 1571,
                            "name": "Identifier",
                            "src": "4440:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1558,
                              "type": "uint256",
                              "value": "btcAmount"
                            },
                            "id": 1572,
                            "name": "Identifier",
                            "src": "4464:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1560,
                              "type": "uint256",
                              "value": "collateral"
                            },
                            "id": 1573,
                            "name": "Identifier",
                            "src": "4487:10:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1562,
                              "type": "uint256",
                              "value": "btcPublicKeyX"
                            },
                            "id": 1574,
                            "name": "Identifier",
                            "src": "4511:13:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1564,
                              "type": "uint256",
                              "value": "btcPublicKeyY"
                            },
                            "id": 1575,
                            "name": "Identifier",
                            "src": "4538:13:4"
                          }
                        ],
                        "id": 1576,
                        "name": "FunctionCall",
                        "src": "4380:181:4"
                      }
                    ],
                    "id": 1577,
                    "name": "ExpressionStatement",
                    "src": "4380:181:4"
                  }
                ],
                "id": 1578,
                "name": "Block",
                "src": "4370:198:4"
              }
            ],
            "id": 1579,
            "name": "FunctionDefinition",
            "src": "4151:417:4"
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
              "scope": 1613,
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
                      "scope": 1612,
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
                        "id": 1580,
                        "name": "ElementaryTypeName",
                        "src": "4607:7:4"
                      }
                    ],
                    "id": 1581,
                    "name": "VariableDeclaration",
                    "src": "4607:17:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "merkleProof",
                      "overrides": null,
                      "scope": 1612,
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
                        "id": 1582,
                        "name": "ElementaryTypeName",
                        "src": "4634:5:4"
                      }
                    ],
                    "id": 1583,
                    "name": "VariableDeclaration",
                    "src": "4634:26:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "rawTx",
                      "overrides": null,
                      "scope": 1612,
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
                        "id": 1584,
                        "name": "ElementaryTypeName",
                        "src": "4670:5:4"
                      }
                    ],
                    "id": 1585,
                    "name": "VariableDeclaration",
                    "src": "4670:20:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "height",
                      "overrides": null,
                      "scope": 1612,
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
                        "id": 1586,
                        "name": "ElementaryTypeName",
                        "src": "4840:6:4"
                      }
                    ],
                    "id": 1587,
                    "name": "VariableDeclaration",
                    "src": "4840:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "index",
                      "overrides": null,
                      "scope": 1612,
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
                        "id": 1588,
                        "name": "ElementaryTypeName",
                        "src": "4863:7:4"
                      }
                    ],
                    "id": 1589,
                    "name": "VariableDeclaration",
                    "src": "4863:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "header",
                      "overrides": null,
                      "scope": 1612,
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
                        "id": 1590,
                        "name": "ElementaryTypeName",
                        "src": "4886:5:4"
                      }
                    ],
                    "id": 1591,
                    "name": "VariableDeclaration",
                    "src": "4886:21:4"
                  }
                ],
                "id": 1592,
                "name": "ParameterList",
                "src": "4597:316:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1593,
                "name": "ParameterList",
                "src": "4923:0:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1595
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "_vout",
                          "overrides": null,
                          "scope": 1611,
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
                            "id": 1594,
                            "name": "ElementaryTypeName",
                            "src": "4933:5:4"
                          }
                        ],
                        "id": 1595,
                        "name": "VariableDeclaration",
                        "src": "4933:18:4"
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
                              "referencedDeclaration": 1315,
                              "type": "function (uint32,uint256,bytes calldata,bytes calldata,bytes calldata) returns (bytes memory)",
                              "value": "verifyTx"
                            },
                            "id": 1596,
                            "name": "Identifier",
                            "src": "4954:8:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1587,
                              "type": "uint32",
                              "value": "height"
                            },
                            "id": 1597,
                            "name": "Identifier",
                            "src": "4963:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1589,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 1598,
                            "name": "Identifier",
                            "src": "4971:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1585,
                              "type": "bytes calldata",
                              "value": "rawTx"
                            },
                            "id": 1599,
                            "name": "Identifier",
                            "src": "4978:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1591,
                              "type": "bytes calldata",
                              "value": "header"
                            },
                            "id": 1600,
                            "name": "Identifier",
                            "src": "4985:6:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1583,
                              "type": "bytes calldata",
                              "value": "merkleProof"
                            },
                            "id": 1601,
                            "name": "Identifier",
                            "src": "4993:11:4"
                          }
                        ],
                        "id": 1602,
                        "name": "FunctionCall",
                        "src": "4954:51:4"
                      }
                    ],
                    "id": 1603,
                    "name": "VariableDeclarationStatement",
                    "src": "4933:72:4"
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
                              "referencedDeclaration": 2682,
                              "type": "function (uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2683,
                                  "type": "type(contract Replace)",
                                  "value": "Replace"
                                },
                                "id": 1604,
                                "name": "Identifier",
                                "src": "5015:7:4"
                              }
                            ],
                            "id": 1606,
                            "name": "MemberAccess",
                            "src": "5015:23:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1581,
                              "type": "uint256",
                              "value": "replaceId"
                            },
                            "id": 1607,
                            "name": "Identifier",
                            "src": "5039:9:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1595,
                              "type": "bytes memory",
                              "value": "_vout"
                            },
                            "id": 1608,
                            "name": "Identifier",
                            "src": "5050:5:4"
                          }
                        ],
                        "id": 1609,
                        "name": "FunctionCall",
                        "src": "5015:41:4"
                      }
                    ],
                    "id": 1610,
                    "name": "ExpressionStatement",
                    "src": "5015:41:4"
                  }
                ],
                "id": 1611,
                "name": "Block",
                "src": "4923:140:4"
              }
            ],
            "id": 1612,
            "name": "FunctionDefinition",
            "src": "4574:489:4"
          }
        ],
        "id": 1613,
        "name": "ContractDefinition",
        "src": "415:4650:4"
      }
    ],
    "id": 1614,
    "name": "SourceUnit",
    "src": "33:5033:4"
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
      "address": "0x4A96FdAeA8Fd6064B1efC56753d01B866Ff14883",
      "transactionHash": "0xc2ab7ede53fb1ba2dabef560a41e0534173ae640e96fe251d900d760e5302b78"
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
  "updatedAt": "2021-09-24T10:34:05.098Z",
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
