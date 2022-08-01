import { Web3Provider } from '@ethersproject/providers'

export function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(
    provider,
    typeof provider.chainId === 'number'
      ? provider.chainId
      : typeof provider.chainId === 'string'
        ? parseInt(provider.chainId)
        : 'any'
  )
  library.pollingInterval = 15_000
  return library
}

export const shortenAddress = (address: string, maxLength?: number) => {
  if (address) {
    if (address.startsWith('0x')) {
      return address.slice(0, 4) + '...' + address.slice(maxLength || 42 - 4)
    }
    return '0x' + address.slice(0, 2) + '...' + address.slice(maxLength || 42 - 4)
  }
  return ''
}

export const abbreviateNumber = (number: number): string => {
  const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E']
  if (number !== 0) {
    // what tier? (determines SI symbol)
    const tier = (Math.log10(Math.abs(number)) / 3) | 0

    // if zero, we don't need a suffix
    if (tier === 0) return (+number.toFixed(2)).toString()

    // get suffix and determine scale
    const suffix = SI_SYMBOL[tier]
    const scale = Math.pow(10, tier * 3)

    // scale the number
    const scaled = number / scale

    return +scaled.toFixed(1) + suffix
  } else {
    return number.toString()
  }
}