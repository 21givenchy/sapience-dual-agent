module.exports = [
"[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/chunk-3LDOUUX3.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collateralTokenAbi",
    ()=>collateralTokenAbi,
    "foilAbi",
    ()=>foilAbi,
    "foilFactoryAbi",
    ()=>foilFactoryAbi,
    "liquidityVaultAbi",
    ()=>liquidityVaultAbi,
    "predictionMarketAbi",
    ()=>predictionMarketAbi,
    "umaResolverAbi",
    ()=>umaResolverAbi
]);
// abis/PredictionMarket.json
var PredictionMarket_default = {
    address: "0xb04841CAd1147675505816e2Ec5c915430857B40",
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "name",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "symbol",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "_collateralToken",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "_minCollateral",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "APPROVE_TYPEHASH",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "approve",
            inputs: [
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "balanceOf",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "burn",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "refCode",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "cancelOrder",
            inputs: [
                {
                    name: "orderId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "config",
            inputs: [],
            outputs: [
                {
                    name: "collateralToken",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "minCollateral",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "consolidatePrediction",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "refCode",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "eip712Domain",
            inputs: [],
            outputs: [
                {
                    name: "fields",
                    type: "bytes1",
                    internalType: "bytes1"
                },
                {
                    name: "name",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "version",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "chainId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "verifyingContract",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "salt",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "extensions",
                    type: "uint256[]",
                    internalType: "uint256[]"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "fillOrder",
            inputs: [
                {
                    name: "orderId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "refCode",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "getApprovalHash",
            inputs: [
                {
                    name: "messageHash",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getApproved",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getConfig",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "tuple",
                    internalType: "struct IPredictionStructs.Settings",
                    components: [
                        {
                            name: "collateralToken",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "minCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        }
                    ]
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getOwnedPredictions",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "nftTokenIds",
                    type: "uint256[]",
                    internalType: "uint256[]"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getOwnedPredictionsCount",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "count",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getPrediction",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "predictionData",
                    type: "tuple",
                    internalType: "struct IPredictionStructs.PredictionData",
                    components: [
                        {
                            name: "predictionId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "resolver",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "maker",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "taker",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "encodedPredictedOutcomes",
                            type: "bytes",
                            internalType: "bytes"
                        },
                        {
                            name: "makerNftTokenId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "takerNftTokenId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "makerCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "takerCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "settled",
                            type: "bool",
                            internalType: "bool"
                        },
                        {
                            name: "makerWon",
                            type: "bool",
                            internalType: "bool"
                        }
                    ]
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getUnfilledOrder",
            inputs: [
                {
                    name: "orderId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "tuple",
                    internalType: "struct IPredictionStructs.LimitOrderData",
                    components: [
                        {
                            name: "orderId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "encodedPredictedOutcomes",
                            type: "bytes",
                            internalType: "bytes"
                        },
                        {
                            name: "resolver",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "makerCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "takerCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "maker",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "taker",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "orderDeadline",
                            type: "uint256",
                            internalType: "uint256"
                        }
                    ]
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getUnfilledOrderByMaker",
            inputs: [
                {
                    name: "maker",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256[]",
                    internalType: "uint256[]"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getUnfilledOrderIds",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256[]",
                    internalType: "uint256[]"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getUnfilledOrdersCount",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getUserCollateralDeposits",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "isApprovedForAll",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "operator",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "mint",
            inputs: [
                {
                    name: "mintPredictionRequestData",
                    type: "tuple",
                    internalType: "struct IPredictionStructs.MintPredictionRequestData",
                    components: [
                        {
                            name: "encodedPredictedOutcomes",
                            type: "bytes",
                            internalType: "bytes"
                        },
                        {
                            name: "resolver",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "makerCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "takerCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "maker",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "taker",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "makerNonce",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "takerSignature",
                            type: "bytes",
                            internalType: "bytes"
                        },
                        {
                            name: "takerDeadline",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "refCode",
                            type: "bytes32",
                            internalType: "bytes32"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "makerNftTokenId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "takerNftTokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "name",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "nonces",
            inputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "ownerOf",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "placeOrder",
            inputs: [
                {
                    name: "orderRequestData",
                    type: "tuple",
                    internalType: "struct IPredictionStructs.OrderRequestData",
                    components: [
                        {
                            name: "encodedPredictedOutcomes",
                            type: "bytes",
                            internalType: "bytes"
                        },
                        {
                            name: "orderDeadline",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "resolver",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "makerCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "takerCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "refCode",
                            type: "bytes32",
                            internalType: "bytes32"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "orderId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "safeTransferFrom",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "safeTransferFrom",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "data",
                    type: "bytes",
                    internalType: "bytes"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "setApprovalForAll",
            inputs: [
                {
                    name: "operator",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "approved",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "supportsInterface",
            inputs: [
                {
                    name: "interfaceId",
                    type: "bytes4",
                    internalType: "bytes4"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "symbol",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "tokenURI",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "transferFrom",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "event",
            name: "Approval",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "approved",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "ApprovalForAll",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "operator",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "approved",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "EIP712DomainChanged",
            inputs: [],
            anonymous: false
        },
        {
            type: "event",
            name: "OrderCancelled",
            inputs: [
                {
                    name: "orderId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "maker",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "encodedPredictedOutcomes",
                    type: "bytes",
                    indexed: false,
                    internalType: "bytes"
                },
                {
                    name: "makerCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "takerCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "OrderFilled",
            inputs: [
                {
                    name: "orderId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "maker",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "taker",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "encodedPredictedOutcomes",
                    type: "bytes",
                    indexed: false,
                    internalType: "bytes"
                },
                {
                    name: "makerCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "takerCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "refCode",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "OrderPlaced",
            inputs: [
                {
                    name: "maker",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "orderId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "encodedPredictedOutcomes",
                    type: "bytes",
                    indexed: false,
                    internalType: "bytes"
                },
                {
                    name: "resolver",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                },
                {
                    name: "makerCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "takerCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "refCode",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "PredictionBurned",
            inputs: [
                {
                    name: "maker",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "taker",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "encodedPredictedOutcomes",
                    type: "bytes",
                    indexed: false,
                    internalType: "bytes"
                },
                {
                    name: "makerNftTokenId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "takerNftTokenId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "totalCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "makerWon",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                },
                {
                    name: "refCode",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "PredictionConsolidated",
            inputs: [
                {
                    name: "makerNftTokenId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "takerNftTokenId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "totalCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "refCode",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "PredictionMinted",
            inputs: [
                {
                    name: "maker",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "taker",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "encodedPredictedOutcomes",
                    type: "bytes",
                    indexed: false,
                    internalType: "bytes"
                },
                {
                    name: "makerNftTokenId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "takerNftTokenId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "makerCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "takerCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "totalCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "refCode",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "Transfer",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "AddressEmptyCode",
            inputs: [
                {
                    name: "target",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "AddressInsufficientBalance",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "CollateralBelowMinimum",
            inputs: []
        },
        {
            type: "error",
            name: "ECDSAInvalidSignature",
            inputs: []
        },
        {
            type: "error",
            name: "ECDSAInvalidSignatureLength",
            inputs: [
                {
                    name: "length",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "ECDSAInvalidSignatureS",
            inputs: [
                {
                    name: "s",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ]
        },
        {
            type: "error",
            name: "ERC721IncorrectOwner",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC721InsufficientApproval",
            inputs: [
                {
                    name: "operator",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "ERC721InvalidApprover",
            inputs: [
                {
                    name: "approver",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC721InvalidOperator",
            inputs: [
                {
                    name: "operator",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC721InvalidOwner",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC721InvalidReceiver",
            inputs: [
                {
                    name: "receiver",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC721InvalidSender",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC721NonexistentToken",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "FailedInnerCall",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidCollateralToken",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidEncodedPredictedOutcomes",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidMakerNonce",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidMarketsAccordingToResolver",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidMinCollateral",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidShortString",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidTakerSignature",
            inputs: []
        },
        {
            type: "error",
            name: "MakerAndTakerAreDifferent",
            inputs: []
        },
        {
            type: "error",
            name: "MakerCollateralMustBeGreaterThanZero",
            inputs: []
        },
        {
            type: "error",
            name: "MakerIsNotCaller",
            inputs: []
        },
        {
            type: "error",
            name: "NotOwner",
            inputs: []
        },
        {
            type: "error",
            name: "OrderExpired",
            inputs: []
        },
        {
            type: "error",
            name: "OrderNotFound",
            inputs: []
        },
        {
            type: "error",
            name: "PredictionAlreadySettled",
            inputs: []
        },
        {
            type: "error",
            name: "PredictionDoesNotExist",
            inputs: []
        },
        {
            type: "error",
            name: "PredictionNotFound",
            inputs: []
        },
        {
            type: "error",
            name: "PredictionResolutionFailed",
            inputs: []
        },
        {
            type: "error",
            name: "ReentrancyGuardReentrantCall",
            inputs: []
        },
        {
            type: "error",
            name: "SafeERC20FailedOperation",
            inputs: [
                {
                    name: "token",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "StringTooLong",
            inputs: [
                {
                    name: "str",
                    type: "string",
                    internalType: "string"
                }
            ]
        },
        {
            type: "error",
            name: "TakerCollateralMustBeGreaterThanZero",
            inputs: []
        },
        {
            type: "error",
            name: "TakerDeadlineExpired",
            inputs: []
        },
        {
            type: "error",
            name: "TransferFailed",
            inputs: []
        },
        {
            type: "error",
            name: "TransferNotAllowed",
            inputs: []
        }
    ],
    constructorArgs: [
        "Prediction Market",
        "SPM",
        "0xfEb8C4d5eFbaFf6e928eA090Bc660c363f883DBA",
        "10000000000000000"
    ],
    linkedLibraries: {},
    deployTxnHash: "0x49aa9bcce78561dd57c45eb808fa884ab447b1fc54cbcd5a6ebb2ace348de6c1",
    deployTxnBlockNumber: "386456655",
    deployTimestamp: "1759700130",
    sourceName: "src/predictionMarket/PredictionMarket.sol",
    contractName: "PredictionMarket",
    deployedOn: "deploy.PredictionMarket",
    highlight: true,
    gasUsed: 3892720,
    gasCost: "10000000"
};
// abis/LiquidityVault.json
var LiquidityVault_default = {
    address: "0xcC1c64e849395D31d059a4bd19391af64D8855d7",
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "asset_",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "_manager",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "_name",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "_symbol",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "APPROVE_TYPEHASH",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "BASIS_POINTS",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "MIN_DEPOSIT",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "acceptOwnership",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "allowance",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "spender",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "approve",
            inputs: [
                {
                    name: "spender",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "value",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "approveFundsUsage",
            inputs: [
                {
                    name: "protocol",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "amount",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "asset",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "availableAssets",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "balanceOf",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "cancelDeposit",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "cancelWithdrawal",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "decimals",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint8",
                    internalType: "uint8"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "eip712Domain",
            inputs: [],
            outputs: [
                {
                    name: "fields",
                    type: "bytes1",
                    internalType: "bytes1"
                },
                {
                    name: "name",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "version",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "chainId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "verifyingContract",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "salt",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "extensions",
                    type: "uint256[]",
                    internalType: "uint256[]"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "emergencyMode",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "emergencyWithdraw",
            inputs: [
                {
                    name: "shares",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "expirationTime",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getActiveProtocol",
            inputs: [
                {
                    name: "index",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getActiveProtocols",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address[]",
                    internalType: "address[]"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getActiveProtocolsCount",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getApprovalHash",
            inputs: [
                {
                    name: "messageHash",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "interactionDelay",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "isValidSignature",
            inputs: [
                {
                    name: "messageHash",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "signature",
                    type: "bytes",
                    internalType: "bytes"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bytes4",
                    internalType: "bytes4"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "lastUserInteractionTimestamp",
            inputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "manager",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "maxUtilizationRate",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "name",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "onERC721Received",
            inputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "",
                    type: "bytes",
                    internalType: "bytes"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bytes4",
                    internalType: "bytes4"
                }
            ],
            stateMutability: "pure"
        },
        {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "pause",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "paused",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "pendingOwner",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "pendingRequests",
            inputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "user",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "isDeposit",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "shares",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "assets",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "timestamp",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "processed",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "processDeposit",
            inputs: [
                {
                    name: "requestedBy",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "processWithdrawal",
            inputs: [
                {
                    name: "requestedBy",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "renounceOwnership",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "requestDeposit",
            inputs: [
                {
                    name: "assets",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "expectedShares",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "requestWithdrawal",
            inputs: [
                {
                    name: "shares",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "expectedAssets",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "setExpirationTime",
            inputs: [
                {
                    name: "newExpirationTime",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "setInteractionDelay",
            inputs: [
                {
                    name: "newDelay",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "setManager",
            inputs: [
                {
                    name: "newManager",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "setMaxUtilizationRate",
            inputs: [
                {
                    name: "newMaxRate",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "supportsInterface",
            inputs: [
                {
                    name: "interfaceId",
                    type: "bytes4",
                    internalType: "bytes4"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "symbol",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "toggleEmergencyMode",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "totalDeployed",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "totalSupply",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "transfer",
            inputs: [
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "value",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "transferFrom",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "value",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "transferOwnership",
            inputs: [
                {
                    name: "newOwner",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "unpause",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "utilizationRate",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "event",
            name: "Approval",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "spender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "value",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "EIP712DomainChanged",
            inputs: [],
            anonymous: false
        },
        {
            type: "event",
            name: "EmergencyModeUpdated",
            inputs: [
                {
                    name: "emergencyMode",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "EmergencyWithdrawal",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "shares",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "assets",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "ExpirationTimeUpdated",
            inputs: [
                {
                    name: "oldExpirationTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "newExpirationTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "FundsApproved",
            inputs: [
                {
                    name: "manager",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "assets",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "targetProtocol",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "InteractionDelayUpdated",
            inputs: [
                {
                    name: "oldDelay",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "newDelay",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "ManagerUpdated",
            inputs: [
                {
                    name: "oldManager",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "newManager",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "OwnershipTransferStarted",
            inputs: [
                {
                    name: "previousOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "newOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "OwnershipTransferred",
            inputs: [
                {
                    name: "previousOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "newOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "Paused",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "PendingRequestCancelled",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "direction",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                },
                {
                    name: "shares",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "assets",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "PendingRequestCreated",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "direction",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                },
                {
                    name: "shares",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "assets",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "PendingRequestProcessed",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "direction",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                },
                {
                    name: "shares",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "assets",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "Transfer",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "value",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "Unpaused",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "UtilizationRateUpdated",
            inputs: [
                {
                    name: "oldRate",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "newRate",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "AddressEmptyCode",
            inputs: [
                {
                    name: "target",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "AddressInsufficientBalance",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "AmountTooSmall",
            inputs: [
                {
                    name: "amount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "minimum",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "ECDSAInvalidSignature",
            inputs: []
        },
        {
            type: "error",
            name: "ECDSAInvalidSignatureLength",
            inputs: [
                {
                    name: "length",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "ECDSAInvalidSignatureS",
            inputs: [
                {
                    name: "s",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ]
        },
        {
            type: "error",
            name: "ERC20InsufficientAllowance",
            inputs: [
                {
                    name: "spender",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "allowance",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "needed",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "ERC20InsufficientBalance",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "balance",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "needed",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "ERC20InvalidApprover",
            inputs: [
                {
                    name: "approver",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC20InvalidReceiver",
            inputs: [
                {
                    name: "receiver",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC20InvalidSender",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ERC20InvalidSpender",
            inputs: [
                {
                    name: "spender",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "EmergencyModeActive",
            inputs: []
        },
        {
            type: "error",
            name: "EmergencyModeNotActive",
            inputs: []
        },
        {
            type: "error",
            name: "EnforcedPause",
            inputs: []
        },
        {
            type: "error",
            name: "ExceedsMaxUtilization",
            inputs: [
                {
                    name: "current",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "max",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "ExpectedPause",
            inputs: []
        },
        {
            type: "error",
            name: "FailedInnerCall",
            inputs: []
        },
        {
            type: "error",
            name: "InsufficientAvailableAssets",
            inputs: [
                {
                    name: "requested",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "available",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InsufficientBalance",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "requested",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "available",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InteractionDelayNotExpired",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidAmount",
            inputs: [
                {
                    name: "amount",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidAsset",
            inputs: [
                {
                    name: "asset",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidManager",
            inputs: [
                {
                    name: "manager",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidProtocol",
            inputs: [
                {
                    name: "protocol",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidRate",
            inputs: [
                {
                    name: "rate",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "maxRate",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidShares",
            inputs: [
                {
                    name: "shares",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidShortString",
            inputs: []
        },
        {
            type: "error",
            name: "MathOverflowedMulDiv",
            inputs: []
        },
        {
            type: "error",
            name: "NoPendingDeposit",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "NoPendingRequests",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "NoPendingWithdrawal",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "NotImplemented",
            inputs: []
        },
        {
            type: "error",
            name: "OnlyManager",
            inputs: [
                {
                    name: "caller",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "expectedManager",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "OwnableInvalidOwner",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "OwnableUnauthorizedAccount",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "PendingRequestNotProcessed",
            inputs: [
                {
                    name: "user",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ReentrancyGuardReentrantCall",
            inputs: []
        },
        {
            type: "error",
            name: "RequestExpired",
            inputs: []
        },
        {
            type: "error",
            name: "RequestNotExpired",
            inputs: []
        },
        {
            type: "error",
            name: "SafeERC20FailedOperation",
            inputs: [
                {
                    name: "token",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "StringTooLong",
            inputs: [
                {
                    name: "str",
                    type: "string",
                    internalType: "string"
                }
            ]
        },
        {
            type: "error",
            name: "TransferFailed",
            inputs: [
                {
                    name: "balanceBefore",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "amount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "balanceAfter",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        }
    ],
    constructorArgs: [
        "0xfEb8C4d5eFbaFf6e928eA090Bc660c363f883DBA",
        "0x759dd186d243ddec7901d46d7ed94a3b1bc8b948",
        "Sapience LP",
        "sapLP"
    ],
    linkedLibraries: {},
    deployTxnHash: "0xb9053e0b9b8aca1e613888c496f0fe63dfc05268b5be6750d9f05a0a2808c7e1",
    deployTxnBlockNumber: "386456648",
    deployTimestamp: "1759700128",
    sourceName: "src/vault/PassiveLiquidityVault.sol",
    contractName: "PassiveLiquidityVault",
    deployedOn: "deploy.PassiveLiquidityVault",
    highlight: true,
    gasUsed: 3527507,
    gasCost: "10000000"
};
// abis/UMAResolver.json
var UMAResolver_default = {
    address: "0x2cC1311871b9FC7bFCB809C75dA4bA25732EafB9",
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "_config",
                    type: "tuple",
                    internalType: "struct PredictionMarketUmaResolver.Settings",
                    components: [
                        {
                            name: "maxPredictionMarkets",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        }
                    ]
                },
                {
                    name: "_approvedAsserters",
                    type: "address[]",
                    internalType: "address[]"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "approvedAsserters",
            inputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "assertionDisputedCallback",
            inputs: [
                {
                    name: "assertionId",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "assertionResolvedCallback",
            inputs: [
                {
                    name: "assertionId",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "assertedTruthfully",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "config",
            inputs: [],
            outputs: [
                {
                    name: "maxPredictionMarkets",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "optimisticOracleV3",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "bondCurrency",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "bondAmount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "assertionLiveness",
                    type: "uint64",
                    internalType: "uint64"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "decodePredictionOutcomes",
            inputs: [
                {
                    name: "encodedPredictedOutcomes",
                    type: "bytes",
                    internalType: "bytes"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "tuple[]",
                    internalType: "struct PredictionMarketUmaResolver.PredictedOutcome[]",
                    components: [
                        {
                            name: "marketId",
                            type: "bytes32",
                            internalType: "bytes32"
                        },
                        {
                            name: "prediction",
                            type: "bool",
                            internalType: "bool"
                        }
                    ]
                }
            ],
            stateMutability: "pure"
        },
        {
            type: "function",
            name: "encodePredictionOutcomes",
            inputs: [
                {
                    name: "predictedOutcomes",
                    type: "tuple[]",
                    internalType: "struct PredictionMarketUmaResolver.PredictedOutcome[]",
                    components: [
                        {
                            name: "marketId",
                            type: "bytes32",
                            internalType: "bytes32"
                        },
                        {
                            name: "prediction",
                            type: "bool",
                            internalType: "bool"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bytes",
                    internalType: "bytes"
                }
            ],
            stateMutability: "pure"
        },
        {
            type: "function",
            name: "resolvePrediction",
            inputs: [
                {
                    name: "encodedPredictedOutcomes",
                    type: "bytes",
                    internalType: "bytes"
                }
            ],
            outputs: [
                {
                    name: "isValid",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "error",
                    type: "uint8",
                    internalType: "enum IPredictionMarketResolver.Error"
                },
                {
                    name: "makerWon",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "submitAssertion",
            inputs: [
                {
                    name: "claim",
                    type: "bytes",
                    internalType: "bytes"
                },
                {
                    name: "endTime",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "resolvedToYes",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "umaSettlements",
            inputs: [
                {
                    name: "",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            outputs: [
                {
                    name: "marketId",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "resolvedToYes",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "submissionTime",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "settled",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "validatePredictionMarkets",
            inputs: [
                {
                    name: "encodedPredictedOutcomes",
                    type: "bytes",
                    internalType: "bytes"
                }
            ],
            outputs: [
                {
                    name: "isValid",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "error",
                    type: "uint8",
                    internalType: "enum IPredictionMarketResolver.Error"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "wrappedMarkets",
            inputs: [
                {
                    name: "",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            outputs: [
                {
                    name: "marketId",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "assertionSubmitted",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "settled",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "resolvedToYes",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "assertionId",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "event",
            name: "AssertionDisputed",
            inputs: [
                {
                    name: "marketId",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                },
                {
                    name: "assertionId",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                },
                {
                    name: "disputeTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "AssertionResolved",
            inputs: [
                {
                    name: "marketId",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                },
                {
                    name: "assertionId",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                },
                {
                    name: "resolvedToYes",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                },
                {
                    name: "assertedTruthfully",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                },
                {
                    name: "resolutionTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "AssertionSubmitted",
            inputs: [
                {
                    name: "asserter",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                },
                {
                    name: "marketId",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                },
                {
                    name: "assertionId",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                },
                {
                    name: "resolvedToYes",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                },
                {
                    name: "submissionTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "MarketWrapped",
            inputs: [
                {
                    name: "wrapper",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                },
                {
                    name: "marketId",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                },
                {
                    name: "claim",
                    type: "bytes",
                    indexed: false,
                    internalType: "bytes"
                },
                {
                    name: "endTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "wrapTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "AddressEmptyCode",
            inputs: [
                {
                    name: "target",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "AddressInsufficientBalance",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "AssertionAlreadySubmitted",
            inputs: []
        },
        {
            type: "error",
            name: "FailedInnerCall",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidAssertionId",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidCaller",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidMarketId",
            inputs: []
        },
        {
            type: "error",
            name: "MarketAlreadySettled",
            inputs: []
        },
        {
            type: "error",
            name: "MarketAlreadyWrapped",
            inputs: []
        },
        {
            type: "error",
            name: "MarketNotDisputed",
            inputs: []
        },
        {
            type: "error",
            name: "MarketNotEnded",
            inputs: []
        },
        {
            type: "error",
            name: "MarketNotOpen",
            inputs: []
        },
        {
            type: "error",
            name: "MarketNotSettled",
            inputs: []
        },
        {
            type: "error",
            name: "MustHaveAtLeastOneMarket",
            inputs: []
        },
        {
            type: "error",
            name: "NotEnoughBondAmount",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "bondCurrency",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "bondAmount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "initialBalance",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "finalBalance",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "OnlyApprovedAssertersCanCall",
            inputs: []
        },
        {
            type: "error",
            name: "OnlyOptimisticOracleV3CanCall",
            inputs: []
        },
        {
            type: "error",
            name: "ReentrancyGuardReentrantCall",
            inputs: []
        },
        {
            type: "error",
            name: "SafeERC20FailedOperation",
            inputs: [
                {
                    name: "token",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "TooManyMarkets",
            inputs: []
        }
    ],
    constructorArgs: [
        {
            maxPredictionMarkets: "15",
            optimisticOracleV3: "0xa6147867264374F324524E30C02C331cF28aa879",
            bondCurrency: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            bondAmount: "500000000",
            assertionLiveness: "600"
        },
        [
            "0xdb5Af497A73620d881561eDb508012A5f84e9BA2"
        ]
    ],
    linkedLibraries: {},
    deployTxnHash: "0xcbc8d23fbfaa2cfe41c2e9e5c64d16ab67daeacc6d8ca1c555e19ca569afdf71",
    deployTxnBlockNumber: "386456662",
    deployTimestamp: "1759700132",
    sourceName: "src/predictionMarket/resolvers/PredictionMarketUmaResolver.sol",
    contractName: "PredictionMarketUmaResolver",
    deployedOn: "deploy.UMAResolver",
    highlight: true,
    gasUsed: 1488607,
    gasCost: "10000000"
};
// abis/CollateralToken.json
var CollateralToken_default = {
    address: "0xfEb8C4d5eFbaFf6e928eA090Bc660c363f883DBA",
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "name",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "symbol",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "tokenDecimals",
                    type: "uint8",
                    internalType: "uint8"
                },
                {
                    name: "initialSupply",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "payable"
        },
        {
            type: "function",
            name: "allowance",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "spender",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "approve",
            inputs: [
                {
                    name: "spender",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "amount",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "balanceOf",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "decimals",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint8",
                    internalType: "uint8"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "decreaseAllowance",
            inputs: [
                {
                    name: "spender",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "subtractedValue",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "increaseAllowance",
            inputs: [
                {
                    name: "spender",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "addedValue",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "mint",
            inputs: [
                {
                    name: "amount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "name",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "renounceOwnership",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "symbol",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "totalSupply",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "transfer",
            inputs: [
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "amount",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "transferFrom",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "amount",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "transferOwnership",
            inputs: [
                {
                    name: "newOwner",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "event",
            name: "Approval",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "spender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "value",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "OwnershipTransferred",
            inputs: [
                {
                    name: "previousOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "newOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "Transfer",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "value",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        }
    ],
    constructorArgs: [
        "0xdb5Af497A73620d881561eDb508012A5f84e9BA2",
        "Sapience Test Collateral",
        "testUSDe",
        "18",
        "0"
    ],
    linkedLibraries: {},
    deployTxnHash: "0x3940cfe763b19bb9e421c0b44b991a3552c526f7be1a7a5bc17fac8c9ce54059",
    deployTxnBlockNumber: "386456640",
    deployTimestamp: "1759700126",
    sourceName: "src/MintableToken.sol",
    contractName: "MintableToken",
    deployedOn: "contract.Token",
    highlight: true,
    gasUsed: 790828,
    gasCost: "10000000"
};
// abis/Foil.json
var Foil_default = {
    abi: [
        {
            name: "facets",
            type: "function",
            stateMutability: "pure",
            inputs: [],
            outputs: [
                {
                    type: "tuple[]",
                    components: [
                        {
                            type: "address",
                            name: "facetAddress"
                        },
                        {
                            type: "bytes4[]",
                            name: "functionSelectors"
                        }
                    ]
                }
            ]
        },
        {
            name: "facetFunctionSelectors",
            type: "function",
            stateMutability: "pure",
            inputs: [
                {
                    type: "address",
                    name: "facet"
                }
            ],
            outputs: [
                {
                    type: "bytes4[]",
                    name: "functionSelectors"
                }
            ]
        },
        {
            name: "facetAddresses",
            type: "function",
            stateMutability: "pure",
            inputs: [],
            outputs: [
                {
                    type: "address[]",
                    name: "addresses"
                }
            ]
        },
        {
            name: "facetAddress",
            type: "function",
            stateMutability: "pure",
            inputs: [
                {
                    type: "bytes4",
                    name: "functionSelector"
                }
            ],
            outputs: [
                {
                    type: "address"
                }
            ]
        },
        {
            name: "emitDiamondCutEvent",
            type: "function",
            stateMutability: "nonpayable",
            inputs: [],
            outputs: [
                {
                    type: "bool"
                }
            ]
        },
        {
            type: "function",
            name: "acceptOwnership",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "createMarket",
            inputs: [
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketCreationParams",
                    components: [
                        {
                            name: "startTime",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "endTime",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "startingSqrtPriceX96",
                            type: "uint160",
                            internalType: "uint160"
                        },
                        {
                            name: "baseAssetMinPriceTick",
                            type: "int24",
                            internalType: "int24"
                        },
                        {
                            name: "baseAssetMaxPriceTick",
                            type: "int24",
                            internalType: "int24"
                        },
                        {
                            name: "salt",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "claimStatementYesOrNumeric",
                            type: "bytes",
                            internalType: "bytes"
                        },
                        {
                            name: "claimStatementNo",
                            type: "bytes",
                            internalType: "bytes"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "initializeMarketGroup",
            inputs: [
                {
                    name: "initialOwner",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "collateralAsset",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "minTradeSize",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "bridgedSettlement",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "marketParams",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketParams",
                    components: [
                        {
                            name: "feeRate",
                            type: "uint24",
                            internalType: "uint24"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapPositionManager",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapSwapRouter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapQuoter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        }
                    ]
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "pendingOwner",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "transferOwnership",
            inputs: [
                {
                    name: "newOwner",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "updateMarketGroup",
            inputs: [
                {
                    name: "marketParams",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketParams",
                    components: [
                        {
                            name: "feeRate",
                            type: "uint24",
                            internalType: "uint24"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapPositionManager",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapSwapRouter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapQuoter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        }
                    ]
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "event",
            name: "Initialized",
            inputs: [
                {
                    name: "version",
                    type: "uint64",
                    indexed: false,
                    internalType: "uint64"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "MarketCreated",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "startTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "endTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "startingSqrtPriceX96",
                    type: "uint160",
                    indexed: false,
                    internalType: "uint160"
                },
                {
                    name: "claimStatementYesOrNumeric",
                    type: "bytes",
                    indexed: false,
                    internalType: "bytes"
                },
                {
                    name: "claimStatementNo",
                    type: "bytes",
                    indexed: false,
                    internalType: "bytes"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "MarketGroupInitialized",
            inputs: [
                {
                    name: "initialOwner",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                },
                {
                    name: "collateralAsset",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                },
                {
                    name: "minTradeSize",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "bridgedSettlement",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                },
                {
                    name: "marketParams",
                    type: "tuple",
                    indexed: false,
                    internalType: "struct ISapienceStructs.MarketParams",
                    components: [
                        {
                            name: "feeRate",
                            type: "uint24",
                            internalType: "uint24"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapPositionManager",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapSwapRouter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapQuoter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        }
                    ]
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "MarketGroupUpdated",
            inputs: [
                {
                    name: "marketParams",
                    type: "tuple",
                    indexed: false,
                    internalType: "struct ISapienceStructs.MarketParams",
                    components: [
                        {
                            name: "feeRate",
                            type: "uint24",
                            internalType: "uint24"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapPositionManager",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapSwapRouter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapQuoter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        }
                    ]
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "OwnershipTransferStarted",
            inputs: [
                {
                    name: "previousOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "newOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "OwnershipTransferred",
            inputs: [
                {
                    name: "previousOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "newOwner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "EndTimeTooEarly",
            inputs: [
                {
                    name: "startTime",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "endTime",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidBaseAssetMaxPriceTick",
            inputs: [
                {
                    name: "maxPriceTick",
                    type: "int24",
                    internalType: "int24"
                },
                {
                    name: "tickSpacing",
                    type: "int24",
                    internalType: "int24"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidBaseAssetMinPriceTick",
            inputs: [
                {
                    name: "minPriceTick",
                    type: "int24",
                    internalType: "int24"
                },
                {
                    name: "tickSpacing",
                    type: "int24",
                    internalType: "int24"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidBondAmount",
            inputs: [
                {
                    name: "bondAmount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "minBond",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidFeeRate",
            inputs: [
                {
                    name: "feeRate",
                    type: "uint24",
                    internalType: "uint24"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidInitialization",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidMarketGroup",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidPriceTickRange",
            inputs: [
                {
                    name: "minPriceTick",
                    type: "int24",
                    internalType: "int24"
                },
                {
                    name: "maxPriceTick",
                    type: "int24",
                    internalType: "int24"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidStartingPrice",
            inputs: [
                {
                    name: "startingSqrtPriceX96",
                    type: "uint160",
                    internalType: "uint160"
                },
                {
                    name: "minSqrtPriceX96",
                    type: "uint160",
                    internalType: "uint160"
                },
                {
                    name: "maxSqrtPriceX96",
                    type: "uint160",
                    internalType: "uint160"
                }
            ]
        },
        {
            type: "error",
            name: "MarketAlreadyStarted",
            inputs: []
        },
        {
            type: "error",
            name: "MarketGroupAlreadyCreated",
            inputs: []
        },
        {
            type: "error",
            name: "MarketNotInitialized",
            inputs: []
        },
        {
            type: "error",
            name: "MathOverflowedMulDiv",
            inputs: []
        },
        {
            type: "error",
            name: "NotInitializing",
            inputs: []
        },
        {
            type: "error",
            name: "OnlyOwner",
            inputs: []
        },
        {
            type: "error",
            name: "OwnableUnauthorizedAccount",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "ReentrancyGuardReentrantCall",
            inputs: []
        },
        {
            type: "error",
            name: "StartTimeCannotBeZero",
            inputs: []
        },
        {
            type: "error",
            name: "T",
            inputs: []
        },
        {
            type: "error",
            name: "TokensAlreadyCreated",
            inputs: []
        },
        {
            type: "function",
            name: "closeLiquidityPosition",
            inputs: [
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.LiquidityCloseParams",
                    components: [
                        {
                            name: "positionId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "amount0Min",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "amount1Min",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "tradeSlippage",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "deadline",
                            type: "uint256",
                            internalType: "uint256"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "decreasedAmount0",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "decreasedAmount1",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "collateralAmount",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "createLiquidityPosition",
            inputs: [
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.LiquidityMintParams",
                    components: [
                        {
                            name: "marketId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "amountBaseToken",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "amountQuoteToken",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "collateralAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "lowerTick",
                            type: "int24",
                            internalType: "int24"
                        },
                        {
                            name: "upperTick",
                            type: "int24",
                            internalType: "int24"
                        },
                        {
                            name: "minAmountBaseToken",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "minAmountQuoteToken",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "deadline",
                            type: "uint256",
                            internalType: "uint256"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "id",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "requiredCollateralAmount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "totalDepositedCollateralAmount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "uniswapNftId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "liquidity",
                    type: "uint128",
                    internalType: "uint128"
                },
                {
                    name: "addedAmount0",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "addedAmount1",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "decreaseLiquidityPosition",
            inputs: [
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.LiquidityDecreaseParams",
                    components: [
                        {
                            name: "positionId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "liquidity",
                            type: "uint128",
                            internalType: "uint128"
                        },
                        {
                            name: "minBaseAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "minQuoteAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "deadline",
                            type: "uint256",
                            internalType: "uint256"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "decreasedAmount0",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "decreasedAmount1",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "collateralAmount",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "getTokensFromLiquidity",
            inputs: [
                {
                    name: "liquidity",
                    type: "uint128",
                    internalType: "uint128"
                },
                {
                    name: "sqrtPriceX96",
                    type: "uint160",
                    internalType: "uint160"
                },
                {
                    name: "sqrtPriceAX96",
                    type: "uint160",
                    internalType: "uint160"
                },
                {
                    name: "sqrtPriceBX96",
                    type: "uint160",
                    internalType: "uint160"
                }
            ],
            outputs: [
                {
                    name: "amount0",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "amount1",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "pure"
        },
        {
            type: "function",
            name: "increaseLiquidityPosition",
            inputs: [
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.LiquidityIncreaseParams",
                    components: [
                        {
                            name: "positionId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "collateralAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "baseTokenAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "quoteTokenAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "minBaseAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "minQuoteAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "deadline",
                            type: "uint256",
                            internalType: "uint256"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "liquidity",
                    type: "uint128",
                    internalType: "uint128"
                },
                {
                    name: "amount0",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "amount1",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "requiredCollateralAmount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "totalDepositedCollateralAmount",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "quoteLiquidityPositionTokens",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "depositedCollateralAmount",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "sqrtPriceX96",
                    type: "uint160",
                    internalType: "uint160"
                },
                {
                    name: "sqrtPriceAX96",
                    type: "uint160",
                    internalType: "uint160"
                },
                {
                    name: "sqrtPriceBX96",
                    type: "uint160",
                    internalType: "uint160"
                }
            ],
            outputs: [
                {
                    name: "amount0",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "amount1",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "liquidity",
                    type: "uint128",
                    internalType: "uint128"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "quoteRequiredCollateral",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "liquidity",
                    type: "uint128",
                    internalType: "uint128"
                }
            ],
            outputs: [
                {
                    name: "requiredCollateral",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "event",
            name: "LiquidityPositionClosed",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "positionId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "kind",
                    type: "uint8",
                    indexed: false,
                    internalType: "enum ISapienceStructs.PositionKind"
                },
                {
                    name: "collectedAmount0",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "collectedAmount1",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "loanAmount0",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "loanAmount1",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVquoteAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVbaseAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVquote",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVbase",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "deltaCollateral",
                    type: "int256",
                    indexed: false,
                    internalType: "int256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "LiquidityPositionCreated",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "positionId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "liquidity",
                    type: "uint128",
                    indexed: false,
                    internalType: "uint128"
                },
                {
                    name: "addedAmount0",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "addedAmount1",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "lowerTick",
                    type: "int24",
                    indexed: false,
                    internalType: "int24"
                },
                {
                    name: "upperTick",
                    type: "int24",
                    indexed: false,
                    internalType: "int24"
                },
                {
                    name: "positionCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVquoteAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVbaseAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVquote",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVbase",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "deltaCollateral",
                    type: "int256",
                    indexed: false,
                    internalType: "int256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "LiquidityPositionDecreased",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "positionId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "requiredCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "liquidity",
                    type: "uint128",
                    indexed: false,
                    internalType: "uint128"
                },
                {
                    name: "decreasedAmount0",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "decreasedAmount1",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "loanAmount0",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "loanAmount1",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVquoteAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVbaseAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVquote",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVbase",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "deltaCollateral",
                    type: "int256",
                    indexed: false,
                    internalType: "int256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "LiquidityPositionIncreased",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "positionId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "requiredCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "liquidity",
                    type: "uint128",
                    indexed: false,
                    internalType: "uint128"
                },
                {
                    name: "increasedAmount0",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "increasedAmount1",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "loanAmount0",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "loanAmount1",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVquoteAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVbaseAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVquote",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVbase",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "deltaCollateral",
                    type: "int256",
                    indexed: false,
                    internalType: "int256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "TraderPositionModified",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "positionId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "requiredCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "initialPrice",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "finalPrice",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "tradeRatio",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVquoteAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVbaseAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVquote",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVbase",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "deltaCollateral",
                    type: "int256",
                    indexed: false,
                    internalType: "int256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "Transfer",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "AddressEmptyCode",
            inputs: [
                {
                    name: "target",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "AddressInsufficientBalance",
            inputs: [
                {
                    name: "account",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "CollateralLimitReached",
            inputs: [
                {
                    name: "collateralRequired",
                    type: "int256",
                    internalType: "int256"
                },
                {
                    name: "maxCollateral",
                    type: "int256",
                    internalType: "int256"
                }
            ]
        },
        {
            type: "error",
            name: "ExpiredMarket",
            inputs: []
        },
        {
            type: "error",
            name: "FailedInnerCall",
            inputs: []
        },
        {
            type: "error",
            name: "InsufficientCollateral",
            inputs: [
                {
                    name: "amountRequired",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "collateralAvailable",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidData",
            inputs: [
                {
                    name: "message",
                    type: "string",
                    internalType: "string"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidInternalTradeSize",
            inputs: [
                {
                    name: "tradeSize",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidMarket",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidParameter",
            inputs: [
                {
                    name: "parameter",
                    type: "string",
                    internalType: "string"
                },
                {
                    name: "reason",
                    type: "string",
                    internalType: "string"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidPositionId",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidPositionKind",
            inputs: []
        },
        {
            type: "error",
            name: "InvalidRange",
            inputs: [
                {
                    name: "requestedTick",
                    type: "int24",
                    internalType: "int24"
                },
                {
                    name: "boundedTick",
                    type: "int24",
                    internalType: "int24"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidSlippage",
            inputs: [
                {
                    name: "liquiditySlippage",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "tradeSlippage",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidTransferRecipient",
            inputs: [
                {
                    name: "recipient",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "NotAccountOwner",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "sender",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "OverflowInt256ToUint256",
            inputs: []
        },
        {
            type: "error",
            name: "OverflowUint256ToInt256",
            inputs: []
        },
        {
            type: "error",
            name: "PoolPriceOutOfRange",
            inputs: [
                {
                    name: "poolPrice",
                    type: "uint160",
                    internalType: "uint160"
                },
                {
                    name: "minPrice",
                    type: "uint160",
                    internalType: "uint160"
                },
                {
                    name: "maxPrice",
                    type: "uint160",
                    internalType: "uint160"
                }
            ]
        },
        {
            type: "error",
            name: "PositionAlreadyCreated",
            inputs: []
        },
        {
            type: "error",
            name: "PositionAlreadySettled",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "SafeERC20FailedOperation",
            inputs: [
                {
                    name: "token",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "SwapFailed",
            inputs: [
                {
                    name: "reason",
                    type: "bytes",
                    internalType: "bytes"
                }
            ]
        },
        {
            type: "error",
            name: "TokenAlreadyMinted",
            inputs: [
                {
                    name: "id",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "TradePriceOutOfBounds",
            inputs: [
                {
                    name: "tradeRatioD18",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "minTradeRatioD18",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "maxTradeRatioD18",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "ZeroAddress",
            inputs: []
        },
        {
            type: "function",
            name: "assertionDisputedCallback",
            inputs: [
                {
                    name: "assertionId",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "assertionResolvedCallback",
            inputs: [
                {
                    name: "assertionId",
                    type: "bytes32",
                    internalType: "bytes32"
                },
                {
                    name: "assertedTruthfully",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "submitSettlementPrice",
            inputs: [
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.SettlementPriceParams",
                    components: [
                        {
                            name: "marketId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "asserter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "settlementSqrtPriceX96",
                            type: "uint160",
                            internalType: "uint160"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bytes32",
                    internalType: "bytes32"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "event",
            name: "MarketSettled",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "assertionId",
                    type: "bytes32",
                    indexed: false,
                    internalType: "bytes32"
                },
                {
                    name: "settlementSqrtPriceX96",
                    type: "uint160",
                    indexed: false,
                    internalType: "uint160"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "SettlementDisputed",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "disputeTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "SettlementSubmitted",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "asserter",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                },
                {
                    name: "settlementSqrtPriceX96",
                    type: "uint160",
                    indexed: false,
                    internalType: "uint160"
                },
                {
                    name: "submissionTime",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "function",
            name: "createTraderPosition",
            inputs: [
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.TraderPositionCreateParams",
                    components: [
                        {
                            name: "marketId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "size",
                            type: "int256",
                            internalType: "int256"
                        },
                        {
                            name: "maxCollateral",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "deadline",
                            type: "uint256",
                            internalType: "uint256"
                        }
                    ]
                }
            ],
            outputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "modifyTraderPosition",
            inputs: [
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.TraderPositionModifyParams",
                    components: [
                        {
                            name: "positionId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "size",
                            type: "int256",
                            internalType: "int256"
                        },
                        {
                            name: "deltaCollateralLimit",
                            type: "int256",
                            internalType: "int256"
                        },
                        {
                            name: "deadline",
                            type: "uint256",
                            internalType: "uint256"
                        }
                    ]
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "quoteCreateTraderPosition",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "size",
                    type: "int256",
                    internalType: "int256"
                }
            ],
            outputs: [
                {
                    name: "requiredCollateral",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "fillPrice",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "price18DigitsAfter",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "quoteModifyTraderPosition",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "size",
                    type: "int256",
                    internalType: "int256"
                }
            ],
            outputs: [
                {
                    name: "expectedCollateralDelta",
                    type: "int256",
                    internalType: "int256"
                },
                {
                    name: "closePnL",
                    type: "int256",
                    internalType: "int256"
                },
                {
                    name: "fillPrice",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "price18DigitsAfter",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "event",
            name: "TraderPositionCreated",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "positionId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                },
                {
                    name: "requiredCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "initialPrice",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "finalPrice",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "tradeRatio",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVquoteAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVbaseAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVquote",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVbase",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "deltaCollateral",
                    type: "int256",
                    indexed: false,
                    internalType: "int256"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "CollateralBelowMin",
            inputs: [
                {
                    name: "collateralRequired",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "minCollateral",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "DeltaTradeIsZero",
            inputs: []
        },
        {
            type: "error",
            name: "ExpiredMarketNotSettled",
            inputs: [
                {
                    name: "marketEndTime",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "MarketSettled",
            inputs: []
        },
        {
            type: "error",
            name: "PositionSizeBelowMin",
            inputs: []
        },
        {
            type: "error",
            name: "TransactionExpired",
            inputs: [
                {
                    name: "deadline",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "blockTime",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "function",
            name: "approve",
            inputs: [
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "balanceOf",
            inputs: [
                {
                    name: "holder",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "balance",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getApproved",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "operator",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "isApprovedForAll",
            inputs: [
                {
                    name: "holder",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "operator",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "name",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "ownerOf",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "safeTransferFrom",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "safeTransferFrom",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "data",
                    type: "bytes",
                    internalType: "bytes"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "setApprovalForAll",
            inputs: [
                {
                    name: "operator",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "approved",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "symbol",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "tokenByIndex",
            inputs: [
                {
                    name: "index",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "tokenOfOwnerByIndex",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "index",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "tokenURI",
            inputs: [
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "string",
                    internalType: "string"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "totalSupply",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "transferFrom",
            inputs: [
                {
                    name: "from",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "to",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "event",
            name: "Approval",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "approved",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "tokenId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "event",
            name: "ApprovalForAll",
            inputs: [
                {
                    name: "owner",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "operator",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "approved",
                    type: "bool",
                    indexed: false,
                    internalType: "bool"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "CannotSelfApprove",
            inputs: [
                {
                    name: "addr",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "IndexOverrun",
            inputs: [
                {
                    name: "requestedIndex",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "length",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidOwner",
            inputs: [
                {
                    name: "addr",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "InvalidTransferRecipient",
            inputs: [
                {
                    name: "addr",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "error",
            name: "TokenDoesNotExist",
            inputs: [
                {
                    name: "id",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        },
        {
            type: "error",
            name: "Unauthorized",
            inputs: [
                {
                    name: "addr",
                    type: "address",
                    internalType: "address"
                }
            ]
        },
        {
            type: "function",
            name: "getDecimalPriceFromSqrtPriceX96",
            inputs: [
                {
                    name: "sqrtPriceX96",
                    type: "uint160",
                    internalType: "uint160"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "pure"
        },
        {
            type: "function",
            name: "getLatestMarket",
            inputs: [],
            outputs: [
                {
                    name: "marketData",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketData",
                    components: [
                        {
                            name: "marketId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "startTime",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "endTime",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "pool",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "quoteToken",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "baseToken",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "minPriceD18",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "maxPriceD18",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "baseAssetMinPriceTick",
                            type: "int24",
                            internalType: "int24"
                        },
                        {
                            name: "baseAssetMaxPriceTick",
                            type: "int24",
                            internalType: "int24"
                        },
                        {
                            name: "settled",
                            type: "bool",
                            internalType: "bool"
                        },
                        {
                            name: "settlementPriceD18",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "assertionId",
                            type: "bytes32",
                            internalType: "bytes32"
                        },
                        {
                            name: "claimStatementYesOrNumeric",
                            type: "bytes",
                            internalType: "bytes"
                        },
                        {
                            name: "claimStatementNo",
                            type: "bytes",
                            internalType: "bytes"
                        }
                    ]
                },
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketParams",
                    components: [
                        {
                            name: "feeRate",
                            type: "uint24",
                            internalType: "uint24"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapPositionManager",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapSwapRouter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapQuoter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        }
                    ]
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getMarket",
            inputs: [
                {
                    name: "id",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "marketData",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketData",
                    components: [
                        {
                            name: "marketId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "startTime",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "endTime",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "pool",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "quoteToken",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "baseToken",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "minPriceD18",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "maxPriceD18",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "baseAssetMinPriceTick",
                            type: "int24",
                            internalType: "int24"
                        },
                        {
                            name: "baseAssetMaxPriceTick",
                            type: "int24",
                            internalType: "int24"
                        },
                        {
                            name: "settled",
                            type: "bool",
                            internalType: "bool"
                        },
                        {
                            name: "settlementPriceD18",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "assertionId",
                            type: "bytes32",
                            internalType: "bytes32"
                        },
                        {
                            name: "claimStatementYesOrNumeric",
                            type: "bytes",
                            internalType: "bytes"
                        },
                        {
                            name: "claimStatementNo",
                            type: "bytes",
                            internalType: "bytes"
                        }
                    ]
                },
                {
                    name: "params",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketParams",
                    components: [
                        {
                            name: "feeRate",
                            type: "uint24",
                            internalType: "uint24"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapPositionManager",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapSwapRouter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapQuoter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        }
                    ]
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getMarketGroup",
            inputs: [],
            outputs: [
                {
                    name: "owner",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "collateralAsset",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "marketParams",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketParams",
                    components: [
                        {
                            name: "feeRate",
                            type: "uint24",
                            internalType: "uint24"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapPositionManager",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapSwapRouter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapQuoter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        }
                    ]
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getMarketGroupTickSpacing",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "int24",
                    internalType: "int24"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getPosition",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "tuple",
                    internalType: "struct Position.Data",
                    components: [
                        {
                            name: "id",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "kind",
                            type: "uint8",
                            internalType: "enum ISapienceStructs.PositionKind"
                        },
                        {
                            name: "marketId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "depositedCollateralAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "borrowedVQuote",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "borrowedVBase",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "vQuoteAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "vBaseAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "uniswapPositionId",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "isSettled",
                            type: "bool",
                            internalType: "bool"
                        }
                    ]
                }
            ],
            stateMutability: "pure"
        },
        {
            type: "function",
            name: "getPositionCollateralValue",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "collateralValue",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getPositionPnl",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "pnl",
                    type: "int256",
                    internalType: "int256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getPositionSize",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "int256",
                    internalType: "int256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getReferencePrice",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "price18Digits",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getSqrtPriceX96",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "sqrtPriceX96",
                    type: "uint160",
                    internalType: "uint160"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "error",
            name: "NoMarketsCreated",
            inputs: []
        },
        {
            type: "function",
            name: "supportsInterface",
            inputs: [
                {
                    name: "interfaceId",
                    type: "bytes4",
                    internalType: "bytes4"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool",
                    internalType: "bool"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "settlePosition",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "withdrawnCollateral",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "event",
            name: "PositionSettled",
            inputs: [
                {
                    name: "positionId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "withdrawnCollateral",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionCollateralAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVquoteAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionVbaseAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVquote",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionBorrowedVbase",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "deltaCollateral",
                    type: "int256",
                    indexed: false,
                    internalType: "int256"
                },
                {
                    name: "marketId",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                },
                {
                    name: "positionOwner",
                    type: "address",
                    indexed: false,
                    internalType: "address"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "MarketNotSettled",
            inputs: [
                {
                    name: "marketId",
                    type: "uint256",
                    internalType: "uint256"
                }
            ]
        }
    ]
};
// abis/FoilFactory.json
var FoilFactory_default = {
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "_implementation",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "cloneAndInitializeMarketGroup",
            inputs: [
                {
                    name: "collateralAsset",
                    type: "address",
                    internalType: "address"
                },
                {
                    name: "minTradeSize",
                    type: "uint256",
                    internalType: "uint256"
                },
                {
                    name: "bridgedSettlement",
                    type: "bool",
                    internalType: "bool"
                },
                {
                    name: "marketParams",
                    type: "tuple",
                    internalType: "struct ISapienceStructs.MarketParams",
                    components: [
                        {
                            name: "feeRate",
                            type: "uint24",
                            internalType: "uint24"
                        },
                        {
                            name: "assertionLiveness",
                            type: "uint64",
                            internalType: "uint64"
                        },
                        {
                            name: "bondAmount",
                            type: "uint256",
                            internalType: "uint256"
                        },
                        {
                            name: "bondCurrency",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapPositionManager",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapSwapRouter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "uniswapQuoter",
                            type: "address",
                            internalType: "address"
                        },
                        {
                            name: "optimisticOracleV3",
                            type: "address",
                            internalType: "address"
                        }
                    ]
                },
                {
                    name: "nonce",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "implementation",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "event",
            name: "MarketGroupDeployed",
            inputs: [
                {
                    name: "sender",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "marketGroup",
                    type: "address",
                    indexed: true,
                    internalType: "address"
                },
                {
                    name: "nonce",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256"
                }
            ],
            anonymous: false
        },
        {
            type: "error",
            name: "ERC1167FailedCreateClone",
            inputs: []
        }
    ]
};
// abis/index.ts
var predictionMarketAbi = PredictionMarket_default.abi;
var liquidityVaultAbi = LiquidityVault_default.abi;
var umaResolverAbi = UMAResolver_default.abi;
var collateralTokenAbi = CollateralToken_default.abi;
var foilAbi = Foil_default.abi;
var foilFactoryAbi = FoilFactory_default.abi;
;
}),
"[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/chunk-EBQGTPWR.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESOURCE_ORDER",
    ()=>RESOURCE_ORDER
]);
// types/resources.ts
var RESOURCE_ORDER = [
    "ethereum-gas",
    "base-gas",
    "arbitrum-gas",
    "ethereum-blobspace",
    "celestia-blobspace",
    "bitcoin-fees"
];
;
}),
"[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/chunk-NRTWAEDO.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// ui/hooks/use-toast.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.2_39b5f7bf9254f45631682e0d132e5fc2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
;
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toastArg)=>{
                        addToRemoveQueue(toastArg.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === void 0 ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === void 0) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
        default:
            return state;
    }
};
var listeners = [];
var memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const defaultStyle = {
        maxWidth: "500px",
        width: "100%",
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
        flexDirection: "column",
        overflowY: "scroll"
    };
    const update = (propsArg)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...propsArg,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            style: {
                ...defaultStyle,
                ...props.style
            },
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
;
}),
"[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/chunk-EQLOBUGZ.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGraphQLClient",
    ()=>createGraphQLClient,
    "foilFactoryAbiFn",
    ()=>foilFactoryAbiFn,
    "graphqlRequest",
    ()=>graphqlRequest,
    "sapienceAbi",
    ()=>sapienceAbi,
    "typedGraphqlRequest",
    ()=>typedGraphqlRequest,
    "useLatestIndexPrice",
    ()=>useLatestIndexPrice,
    "useLatestResourcePrice",
    ()=>useLatestResourcePrice,
    "useMarket",
    ()=>useMarket,
    "useResources",
    ()=>useResources,
    "useSapienceAbi",
    ()=>useSapienceAbi,
    "useUniswapPool",
    ()=>useUniswapPool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$3LDOUUX3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/chunk-3LDOUUX3.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$EBQGTPWR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/chunk-EBQGTPWR.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$NRTWAEDO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk/dist/chunk-NRTWAEDO.mjs [app-route] (ecmascript)");
// queries/client/graphqlClient.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$7$2e$2$2e$0_graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2d$request$2f$build$2f$entrypoints$2f$main$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/graphql-request@7.2.0_graphql@16.12.0/node_modules/graphql-request/build/entrypoints/main.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$7$2e$2$2e$0_graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2d$request$2f$build$2f$legacy$2f$classes$2f$GraphQLClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/graphql-request@7.2.0_graphql@16.12.0/node_modules/graphql-request/build/legacy/classes/GraphQLClient.js [app-route] (ecmascript)");
// hooks/useResources.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$13_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.13_react@19.2.3/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-route] (ecmascript)");
// queries/hooks/market/useMarket.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.2_39b5f7bf9254f45631682e0d132e5fc2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$16_$40$tanstack$2b$que_108359e2a034faf32d193af1b6682e06$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.14.16_@tanstack+que_108359e2a034faf32d193af1b6682e06/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-route] (ecmascript)");
// hooks/useUniswapPool.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$sdk$2d$core$40$5$2e$4$2e$0$2f$node_modules$2f40$uniswap$2f$sdk$2d$core$2f$dist$2f$sdk$2d$core$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@uniswap+sdk-core@5.4.0/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$v3$2d$core$40$1$2e$0$2e$1$2f$node_modules$2f40$uniswap$2f$v3$2d$core$2f$artifacts$2f$contracts$2f$interfaces$2f$IUniswapV3Pool$2e$sol$2f$IUniswapV3Pool$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@uniswap+v3-core@1.0.1/node_modules/@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$v3$2d$sdk$40$3$2e$14$2e$0_hard_71d2c4647d437afced02fce7804bdb5a$2f$node_modules$2f40$uniswap$2f$v3$2d$sdk$2f$dist$2f$v3$2d$sdk$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@uniswap+v3-sdk@3.14.0_hard_71d2c4647d437afced02fce7804bdb5a/node_modules/@uniswap/v3-sdk/dist/v3-sdk.esm.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$16_$40$tanstack$2b$que_108359e2a034faf32d193af1b6682e06$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.14.16_@tanstack+que_108359e2a034faf32d193af1b6682e06/node_modules/wagmi/dist/esm/hooks/useReadContracts.js [app-route] (ecmascript)");
;
;
;
;
var getGraphQLEndpoint = ()=>{
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } catch  {}
    const baseUrl = process.env.NEXT_PUBLIC_FOIL_API_URL || "https://api.sapience.xyz";
    try {
        const u = new URL(baseUrl);
        return `${u.origin}/graphql`;
    } catch  {
        return "https://api.sapience.xyz/graphql";
    }
};
var createGraphQLClient = ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$7$2e$2$2e$0_graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2d$request$2f$build$2f$legacy$2f$classes$2f$GraphQLClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLClient"](getGraphQLEndpoint());
async function graphqlRequest(query, variables) {
    try {
        const client = createGraphQLClient();
        return await client.request(query, variables);
    } catch (error) {
        console.error("GraphQL request failed:", error);
        throw error;
    }
}
async function typedGraphqlRequest(query, variables) {
    try {
        const client = createGraphQLClient();
        return await client.request(query, variables);
    } catch (error) {
        console.error("GraphQL request failed:", error);
        throw error;
    }
}
// queries/client/abi.ts
var sapienceAbi = ()=>({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$3LDOUUX3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["foilAbi"]
    });
var foilFactoryAbiFn = ()=>({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$3LDOUUX3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["foilFactoryAbi"]
    });
var useSapienceAbi = ()=>sapienceAbi();
;
var LATEST_RESOURCE_PRICE_QUERY = /* GraphQL */ `
  query LatestResourcePrice($slug: String!, $from: Int!, $to: Int!, $interval: Int!) {
    resourceCandles(slug: $slug, from: $from, to: $to, interval: $interval) {
      data { timestamp close }
      lastUpdateTimestamp
    }
  }
`;
var LATEST_INDEX_PRICE_QUERY = /* GraphQL */ `
  query LatestIndexPrice($address: String!, $chainId: Int!, $marketId: String!, $from: Int!, $to: Int!, $interval: Int!) {
    indexCandles(address: $address, chainId: $chainId, marketId: $marketId, from: $from, to: $to, interval: $interval) {
      data { timestamp close }
      lastUpdateTimestamp
    }
  }
`;
var RESOURCES_QUERY = /* GraphQL */ `
  query Resources {
    resources {
      id
      name
      slug
      marketGroups {
        id
        address
        isBridged
        chainId
        markets { id marketId startTimestamp endTimestamp public question }
      }
    }
  }
`;
var useResources = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$13_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "resources"
        ],
        queryFn: async ()=>{
            const data = await graphqlRequest(RESOURCES_QUERY);
            const resources = data.resources.sort((a, b)=>{
                const indexA = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$EBQGTPWR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESOURCE_ORDER"].indexOf(a.slug);
                const indexB = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$EBQGTPWR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESOURCE_ORDER"].indexOf(b.slug);
                return indexA - indexB;
            });
            return resources.map((resource)=>({
                    ...resource,
                    iconPath: `/resources/${resource.slug}.svg`
                }));
        }
    });
};
var useLatestResourcePrice = (slug)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$13_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "resourcePrice",
            slug
        ],
        queryFn: async ()=>{
            const from = Math.floor(Date.now() / 1e3) - 300;
            const to = Math.floor(Date.now() / 1e3);
            const interval = 60;
            const data = await graphqlRequest(LATEST_RESOURCE_PRICE_QUERY, {
                slug,
                from,
                to,
                interval
            });
            const candles = data.resourceCandles.data;
            if (!candles || candles.length === 0) throw new Error("No price data found");
            const latestCandle = candles.reduce((latest, current)=>{
                if (!latest || current.timestamp > latest.timestamp) return current;
                return latest;
            }, null);
            if (!latestCandle) throw new Error("No price data found");
            return {
                timestamp: latestCandle.timestamp.toString(),
                value: latestCandle.close
            };
        },
        refetchInterval: 15e3
    });
};
var useLatestIndexPrice = (market)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$13_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "indexPrice",
            `${market.chainId}:${market.address}`,
            market.marketId
        ],
        queryFn: async ()=>{
            if (!market.address || !market.chainId || market.marketId === 0) return null;
            const from = Math.floor(Date.now() / 1e3) - 300;
            const to = Math.floor(Date.now() / 1e3);
            const interval = 60;
            const data = await graphqlRequest(LATEST_INDEX_PRICE_QUERY, {
                address: market.address,
                chainId: market.chainId,
                marketId: market.marketId.toString(),
                from,
                to,
                interval
            });
            const candles = data.indexCandles.data;
            if (!candles || candles.length === 0) throw new Error("No index price data found");
            const latestCandle = candles.reduce((latest, current)=>{
                if (!latest || current.timestamp > latest.timestamp) return current;
                return latest;
            }, null);
            if (!latestCandle) throw new Error("No index price data found");
            return {
                timestamp: latestCandle.timestamp.toString(),
                value: latestCandle.close
            };
        },
        refetchInterval: 15e3,
        enabled: !!market.address && !!market.chainId && market.marketId !== 0
    });
};
;
;
function useMarket({ marketAddress, marketId, abi }) {
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sapience$2b$sdk$40$0$2e$0$2e$1_$40$tansta_15d88eeafa91732f172c90958de039d3$2f$node_modules$2f40$sapience$2f$sdk$2f$dist$2f$chunk$2d$NRTWAEDO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useToast"])();
    const { data, isLoading, isError, error: contractError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$16_$40$tanstack$2b$que_108359e2a034faf32d193af1b6682e06$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: marketAddress,
        abi,
        chainId: 8453,
        functionName: "getMarket",
        args: [
            marketId
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isError && contractError) {
            toast({
                title: "Error loading market data",
                description: contractError.message,
                variant: "destructive"
            });
        }
    }, [
        isError,
        contractError,
        toast
    ]);
    const result = data;
    const marketData = result?.[0];
    const marketGroupParams = result?.[1];
    return {
        marketData,
        marketGroupParams,
        isLoading,
        error: contractError
    };
}
;
;
;
;
;
// queries/abis/erc20abi.json
var erc20abi_default = [
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_spender",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_from",
                type: "address"
            },
            {
                name: "_to",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                name: "",
                type: "uint8"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "balance",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_to",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address"
            },
            {
                name: "_spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        payable: true,
        stateMutability: "payable",
        type: "fallback"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    }
];
// hooks/useUniswapPool.ts
var REFETCH_INTERVAL = 6e4;
var useUniswapPool = (chainId, poolAddress)=>{
    const [pool, setPool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"])(null);
    const [liquidity, setLiquidity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"])("0");
    const { data, isError, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$16_$40$tanstack$2b$que_108359e2a034faf32d193af1b6682e06$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useReadContracts"])({
        contracts: [
            {
                address: poolAddress,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$v3$2d$core$40$1$2e$0$2e$1$2f$node_modules$2f40$uniswap$2f$v3$2d$core$2f$artifacts$2f$contracts$2f$interfaces$2f$IUniswapV3Pool$2e$sol$2f$IUniswapV3Pool$2e$json__$28$json$29$__["default"].abi,
                functionName: "token0",
                chainId
            },
            {
                address: poolAddress,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$v3$2d$core$40$1$2e$0$2e$1$2f$node_modules$2f40$uniswap$2f$v3$2d$core$2f$artifacts$2f$contracts$2f$interfaces$2f$IUniswapV3Pool$2e$sol$2f$IUniswapV3Pool$2e$json__$28$json$29$__["default"].abi,
                functionName: "token1",
                chainId
            },
            {
                address: poolAddress,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$v3$2d$core$40$1$2e$0$2e$1$2f$node_modules$2f40$uniswap$2f$v3$2d$core$2f$artifacts$2f$contracts$2f$interfaces$2f$IUniswapV3Pool$2e$sol$2f$IUniswapV3Pool$2e$json__$28$json$29$__["default"].abi,
                functionName: "fee",
                chainId
            },
            {
                address: poolAddress,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$v3$2d$core$40$1$2e$0$2e$1$2f$node_modules$2f40$uniswap$2f$v3$2d$core$2f$artifacts$2f$contracts$2f$interfaces$2f$IUniswapV3Pool$2e$sol$2f$IUniswapV3Pool$2e$json__$28$json$29$__["default"].abi,
                functionName: "liquidity",
                chainId
            },
            {
                address: poolAddress,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$v3$2d$core$40$1$2e$0$2e$1$2f$node_modules$2f40$uniswap$2f$v3$2d$core$2f$artifacts$2f$contracts$2f$interfaces$2f$IUniswapV3Pool$2e$sol$2f$IUniswapV3Pool$2e$json__$28$json$29$__["default"].abi,
                functionName: "slot0",
                chainId
            }
        ]
    });
    const { data: token0Balance, refetch: refetchTokenBalance, isRefetching: isRefetchingUniswap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$16_$40$tanstack$2b$que_108359e2a034faf32d193af1b6682e06$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: data?.[0].result,
        abi: erc20abi_default,
        functionName: "balanceOf",
        args: [
            poolAddress
        ],
        chainId,
        query: {
            enabled: !!data?.[0]?.result,
            refetchInterval: REFETCH_INTERVAL
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data && token0Balance !== void 0) {
            const token0Address = data[0].result;
            const token1Address = data[1].result;
            const fee = data[2].result;
            const uniswapLiquidity = data[3].result;
            const slot0 = data[4].result;
            if (token0Address && token1Address) {
                const [sqrtPriceX96, tick] = slot0;
                const token0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$sdk$2d$core$40$5$2e$4$2e$0$2f$node_modules$2f40$uniswap$2f$sdk$2d$core$2f$dist$2f$sdk$2d$core$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Token"](chainId, token0Address, 18, "Ggas", "Ggas");
                const token1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$sdk$2d$core$40$5$2e$4$2e$0$2f$node_modules$2f40$uniswap$2f$sdk$2d$core$2f$dist$2f$sdk$2d$core$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Token"](chainId, token1Address, 18, "wstETH", "wstETH");
                const poolInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uniswap$2b$v3$2d$sdk$40$3$2e$14$2e$0_hard_71d2c4647d437afced02fce7804bdb5a$2f$node_modules$2f40$uniswap$2f$v3$2d$sdk$2f$dist$2f$v3$2d$sdk$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pool"](token0, token1, fee, sqrtPriceX96.toString(), uniswapLiquidity.toString(), tick);
                setPool(poolInstance);
                const formattedToken0Balance = (Number(token0Balance) / 10 ** token0.decimals).toFixed(4);
                setLiquidity(formattedToken0Balance);
            }
        }
    }, [
        data,
        token0Balance,
        chainId
    ]);
    const refetchUniswapData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$2_39b5f7bf9254f45631682e0d132e5fc2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!isRefetchingUniswap) {
            refetchTokenBalance();
        }
    }, [
        isRefetchingUniswap,
        refetchTokenBalance
    ]);
    return {
        pool,
        liquidity,
        isError,
        isLoading,
        refetchUniswapData
    };
};
;
}),
];

//# sourceMappingURL=b0057_%40sapience_sdk_dist_6e39ee28._.js.map