import { useCallback } from "react"
import { connectorLocalStorageKey } from "utils/constants"
import useActiveWeb3React from "./useActiveWeb3React"

const useAuth = () => {
  const { deactivate } = useActiveWeb3React()

  const logout = useCallback(() => {
    deactivate()
    if (window.ethereum && window.ethereum.on) {
      // Listening to Event
      window.ethereum.on("accountsChanged", (accounts: any) => {
        if (accounts.length <= 0) {
          window.localStorage.removeItem(connectorLocalStorageKey);
        }
      });
    }
    window.localStorage.removeItem(connectorLocalStorageKey)
  }, [deactivate])

  return { logout }
}

export default useAuth