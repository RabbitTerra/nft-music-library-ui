export interface Network {
  chainId: string
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
  blockExplorerUrls: string[]
}

export enum SupportedChainId {
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

export const SUPPORTED_NETWORKS: { [chainId in SupportedChainId]: Network } = {
  [SupportedChainId.POLYGON]: {
    chainId: '0x89',
    chainName: 'Matic',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc-mainnet.maticvigil.com', 'https://nd-006-371-805.p2pify.com/1feceed66a20f8379b78809c560ec7b1'], // ['https://matic-mainnet.chainstacklabs.com/'],
    blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
  },
  [SupportedChainId.POLYGON_MUMBAI]: {
    chainId: '0x13881',
    chainName: 'Mumbai Testnet',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
    blockExplorerUrls: ['https://polygonscan.com'],
  },
}