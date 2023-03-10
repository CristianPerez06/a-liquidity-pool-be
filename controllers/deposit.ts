import { Provider } from 'provider/Provider'
import db = require('../config/database')
import { getLatestDeposits as getLatestDepositsQuery } from '../queries/queries'

export const getLatestDeposits = async (req: any, res: any) => {
  try {
    const provider = req.provider as Provider
    const account = req.query.account

    const response = await db.query(getLatestDepositsQuery(provider.chainId, account), null)

    const jsonContent = JSON.stringify(response.rows)

    res.status(200).send(jsonContent)
  } catch (err) {
    console.log(err)
    res.status(400).send('Oops... something went wrong')
  }
}
