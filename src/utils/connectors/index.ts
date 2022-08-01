import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { InjectedConnector } from "@web3-react/injected-connector"
import MetamaskIcon from "assets/images/metamask.png";
import { ALL_SUPPORTED_CHAIN_IDS } from './chains'
import { INFURA_NETWORK_URLS } from './infra'
import { NetworkConnector } from './NetworkConnector'

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})

export const gnosisSafe = new SafeAppConnector()

export const network = new NetworkConnector({
  urls: INFURA_NETWORK_URLS,
  defaultChainId: 1,
})

export interface WalletInfo {
  connector?: (() => Promise<AbstractConnector>) | AbstractConnector
  name: string
  icon: string
  description: string
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    icon: MetamaskIcon,
    description: 'Easy-to-use browser extension.',
  },
}