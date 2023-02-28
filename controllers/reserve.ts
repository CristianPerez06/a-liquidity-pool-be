import dayjs from 'dayjs'
import { formatReserves, formatUserSummary } from '@aave/math-utils'
import { Provider } from '../provider/Provider'

export const getReservesSummary = async (req: any, res: any) => {
  try {
    const provider = req.provider as Provider
    const userAddress = req.query.user

    const reserves = await provider.uiPoolDataProviderContract.getReservesHumanized({
      lendingPoolAddressProvider: provider.lendingPoolProviderAddress,
    })

    const userReserves = await provider.uiPoolDataProviderContract.getUserReservesHumanized({
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

export const getReserveData = async (req: any, res: any) => {
  try {
    const provider = req.provider as Provider
    const reserveAddress = req.query.reserve

    const reserveList = await provider.poolProviderContract.methods
      .getReserveData(reserveAddress)
      .call()
      .catch((e) => {
        console.log(e.message)
      })

    const jsonContent = JSON.stringify(reserveList)

    res.status(200).send(jsonContent)
  } catch (err) {
    console.log(err)
    res.status(400).send('Oops... something went wrong')
  }
}
