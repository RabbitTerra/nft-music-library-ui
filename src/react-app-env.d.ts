/// <reference types="react-scripts" />

interface Window {
  // walletLinkExtension is injected by the Coinbase Wallet extension
  walletLinkExtension?: any
  ethereum?: {
    // value that is populated and returns true by the Coinbase Wallet mobile dapp browser
    isCoinbaseWallet?: true
    isMetaMask?: true
    autoRefreshOnNetworkChange?: boolean
    send: (method: string, args: any[]) => Promise<any>
    request: (...args: any[]) => Promise<void>
    on?: (...args: any[]) => void
  }
  web3?: Record<string, unknown>
}