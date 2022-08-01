import { ethers } from 'ethers'

export const signTypedRequest = async (provider: any, account: string, message: string): Promise<{ v: number; r: string; s: string }> => {
  return await provider.send('eth_signTypedData_v4', [account, message])
}

export const signMessage = async (provider: any, account: string, message: string): Promise<string> => {
  const anyWindow = window as any
  if (anyWindow.BinanceChain) {
    const { signature } = await anyWindow.BinanceChain.bnbSign(account, message)
    return signature
  }

  if (provider.provider?.wc) {
    const wcMessage = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message))
    const signature = await provider.provider?.wc.signPersonalMessage([wcMessage, account])
    return signature
  }
  return provider.getSigner(account).signMessage(message)
}