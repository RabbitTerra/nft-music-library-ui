import { useEffect, useState } from "react"
import { CurrencyRate } from "utils/interface"

export const useCurrencyExchangeRate = () => {
  const [rate, setRate] = useState<CurrencyRate>()

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cmatic-network&vs_currencies=usd').then(res => res.json()).then((data) => {
      setRate({
        ethereum: data.ethereum.usd,
        matic: data['matic-network'].usd,
      })
    })
  }, [])

  return { rate }
}
