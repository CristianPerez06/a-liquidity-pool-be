import { UserWalletBalancesResponse } from '@aave/contract-helpers'
import { Provider } from '../provider/Provider'
import { formatWalletBalances } from '../utilities/helpers'

export const getBalances = async (req: any, res: any) => {
  try {
    const provider = req.provider as Provider
    const userAddress = req.query.user

    const walletBalances: UserWalletBalancesResponse =
      await provider.walletBalanceProviderContract.getUserWalletBalancesForLendingPoolProvider(
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
