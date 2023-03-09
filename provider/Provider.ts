import { Pool, UiIncentiveDataProvider, UiPoolDataProvider, WalletBalanceProvider } from '@aave/contract-helpers'
import { ethers } from 'ethers'
import PoolV3Artifact from '@aave/core-v3/artifacts/contracts/protocol/pool/Pool.sol/Pool.json'
import ERC20Artifact from '../abi/ERC20.json'
import { getProviderDataByChainId } from '../utilities/helpers'

export class Provider {
  chainId: number
  baseAssetSymbol: string
  poolProxyProviderAddress: string
  lendingPoolProviderAddress: string
  erc20Provider: any
  poolProxyProvider: any
  lendingPoolProvider: any
  uiPoolDataProvider: UiPoolDataProvider
  uiIncentiveDataProvider: UiIncentiveDataProvider
  walletBalanceProvider: WalletBalanceProvider

  constructor(chainId: string, reserveAddr: string) {
    const providerData = getProviderDataByChainId(Number(chainId))

    if (!providerData) {
      throw new Error('Provider data not found.')
    }

    const _chainId = providerData.chainId
    const _contractHelpersProvider = new ethers.providers.JsonRpcProvider(providerData.rcp, _chainId)

    this.chainId = _chainId
    this.baseAssetSymbol = getProviderDataByChainId(_chainId).baseAssetSymbol

    //Wallet from
    const privateKey = 'a69750e713c7cc98c8fd7b93f05b3c2a3c9273dd09bd3e4327ca7ae64c8a26f5'
    const wallet = new ethers.Wallet(privateKey, _contractHelpersProvider)

    //
    const poolProxy = new ethers.Contract('0x7b5C526B7F8dfdff278b4a3e045083FBA4028790', PoolV3Artifact.abi, wallet)
    let erc20Provider
    if (reserveAddr) {
      erc20Provider = new ethers.Contract('0x65aFADD39029741B3b8f0756952C74678c9cEC93', ERC20Artifact.abi, wallet)
    }

    const lendingPoolProvider = new Pool(_contractHelpersProvider, {
      POOL: providerData.lendingPoolProviderAddress,
    })

    this.poolProxyProviderAddress = providerData.poolProxyAddress
    this.lendingPoolProviderAddress = providerData.lendingPoolProviderAddress

    this.poolProxyProvider = poolProxy
    this.erc20Provider = erc20Provider
    this.lendingPoolProvider = lendingPoolProvider

    this.uiPoolDataProvider = new UiPoolDataProvider({
      uiPoolDataProviderAddress: providerData.uiPoolDataProviderAddress,
      provider: _contractHelpersProvider,
      chainId: _chainId,
    })

    this.uiIncentiveDataProvider = new UiIncentiveDataProvider({
      uiIncentiveDataProviderAddress: providerData.uiIncentiveDataProviderAddress,
      provider: _contractHelpersProvider,
      chainId: _chainId,
    })

    this.walletBalanceProvider = new WalletBalanceProvider({
      walletBalanceProviderAddress: providerData.walletBalanceProviderAddress,
      provider: _contractHelpersProvider,
    })
  }
}
