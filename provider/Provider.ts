import { UiIncentiveDataProvider, UiPoolDataProvider, WalletBalanceProvider } from '@aave/contract-helpers'
import { ethers } from 'ethers'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import PoolV3Artifact from '@aave/core-v3/artifacts/contracts/protocol/pool/Pool.sol/Pool.json'
import { getProviderDataByAddress } from '../utilities/helpers'

export class Provider {
  address: string
  lendingPoolProviderAddress: string
  poolProviderContract: any
  uiPoolDataProviderContract: UiPoolDataProvider
  uiIncentiveDataProviderContract: UiIncentiveDataProvider
  walletBalanceProviderContract: WalletBalanceProvider

  constructor(address: string) {
    const providerData = getProviderDataByAddress(address)

    if (!providerData) {
      throw new Error('Provider data not found.')
    }

    const _chainId = providerData.chainId
    const _contractHelpersProvider = new ethers.providers.StaticJsonRpcProvider(providerData.rcp, _chainId)

    const web3 = new Web3(new Web3.providers.HttpProvider(providerData.rcp))
    const abi = PoolV3Artifact.abi as AbiItem[]

    const poolProvider = new web3.eth.Contract(abi, providerData.poolProxyAddres)

    this.address = address

    this.lendingPoolProviderAddress = providerData.lendingPoolProviderAddress

    this.poolProviderContract = poolProvider

    this.uiPoolDataProviderContract = new UiPoolDataProvider({
      uiPoolDataProviderAddress: providerData.uiPoolDataProviderAddress,
      provider: _contractHelpersProvider,
      chainId: _chainId,
    })

    this.uiIncentiveDataProviderContract = new UiIncentiveDataProvider({
      uiIncentiveDataProviderAddress: providerData.uiIncentiveDataProviderAddress,
      provider: _contractHelpersProvider,
      chainId: _chainId,
    })

    this.walletBalanceProviderContract = new WalletBalanceProvider({
      walletBalanceProviderAddress: providerData.walletBalanceProviderAddress,
      provider: _contractHelpersProvider,
    })
  }
}
