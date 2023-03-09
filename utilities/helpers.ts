import { UserWalletBalancesResponse } from '@aave/contract-helpers'
import { BigNumber } from 'ethers'
import { PROVIDERS_DATA } from './constants'

export const getProviderDataByChainId = (id: number) => {
  const data = Object.entries(PROVIDERS_DATA).find((x) => x[1].chainId === id)
  return data?.[1] || PROVIDERS_DATA.GOERLI
}

export const formatWalletBalances = (balances: UserWalletBalancesResponse) => {
  const formattedResponse = balances[0].map((address: string, index: number) => {
    return {
      address: address.toLowerCase(),
      balance: BigNumber.from(balances[1][index]._hex).toString(),
    }
  })
  return formattedResponse
}
