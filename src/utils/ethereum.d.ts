export interface EthereumProvider {
  on?: (...args: any[]) => void
  send?: (method: string, args: any[]) => Promise<any>
  removeListener?: (...args: any[]) => void
  autoRefreshOnNetworkChange?: boolean
}

declare global {
  interface Window {
    ethereum?: EthereumProvider
  }
}
