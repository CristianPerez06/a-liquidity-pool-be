import { UserWalletBalancesResponse } from '@aave/contract-helpers'
import { formatReserves, formatUserSummary } from '@aave/math-utils'
import dayjs from 'dayjs'
import { Provider } from '../provider/Provider'
import { formatWalletBalances } from '../utilities/helpers'

export const getReservesSummary = async (req: any, res: any) => {
  try {
    const provider = req.provider as Provider
    const userAddress = req.query.user

    const reserves = await provider.uiPoolDataProvider.getReservesHumanized({
      lendingPoolAddressProvider: provider.lendingPoolProviderAddress,
    })

    const userReserves = await provider.uiPoolDataProvider.getUserReservesHumanized({
      lendingPoolAddressProvider: provider.lendingPoolProviderAddress,
      user: userAddress,
    })

    const reservesArray = reserves.reservesData
    const baseCurrencyData = reserves.baseCurrencyData
    const userReservesArray = userReserves.userReserves
    const currentTimestamp = dayjs().unix()

    const formattedPoolReserves = formatReserves({
      reserves: reservesArray,
      currentTimestamp,
      marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
      marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
    })

    const formattedUserReserves = formatUserSummary({
      currentTimestamp,
      marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
      marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
      userReserves: userReservesArray,
      formattedReserves: formattedPoolReserves,
      userEmodeCategoryId: userReserves.userEmodeCategoryId,
    })

    const jsonContent = JSON.stringify({
      reserves: formattedPoolReserves,
      userReserves: formattedUserReserves,
    })

    res.status(200).send(jsonContent)
  } catch (err) {
    res.status(400).send('Oops... something went wrong')
  }
}

export const getBalances = async (req: any, res: any) => {
  try {
    const provider = req.provider as Provider
    const userAddress = req.query.user

    const walletBalances: UserWalletBalancesResponse =
      await provider.walletBalanceProvider.getUserWalletBalancesForLendingPoolProvider(
        userAddress,
        provider.lendingPoolProviderAddress
      )

    const walletBalancesFormatted = formatWalletBalances(walletBalances)

    const jsonContent = JSON.stringify(walletBalancesFormatted)

    res.status(200).send(jsonContent)
  } catch (err) {
    console.log(err)
    res.status(400).send('Oops... something went wrong')
  }
}
