import db = require('../config/database')
import { insertDeposit as insertDepositQuery } from '../queries/queries'

import { Provider } from '../provider/Provider'

export const getReserveData = async (req: any, res: any) => {
  try {
    const provider = req.provider as Provider
    const reserveAddress = req.query.reserve

    const reserveData = await provider.poolProxyProvider.methods.getReserveData(reserveAddress).call()

    const jsonContent = JSON.stringify(reserveData)

    res.status(200).send(jsonContent)
  } catch (err) {
    console.log(err)
    res.status(400).send('Oops... something went wrong')
  }
}

export const supplyAsset = async (req: any, res: any) => {
  try {
    const provider = req.provider as Provider
    // const { asset, amount, onBehalfOf, v, s, r, deadline } = req.body
    const { data } = req.body
    const { asset, amount, onBehalfOf } = data

    const decimals = await provider.erc20Provider.decimals()
    const tag = provider.baseAssetSymbol

    const tokenSupply = amount * Math.pow(10, decimals)

    // await provider.erc20ProviderContract.methods
    //   .approve(provider.poolProxyAddress, tokenSupply)
    //   .send({ from: onBehalfOf, gas: 50000 })

    // await provider.poolProxyContract.methods
    //   .supplyWithPermit(asset, tokenSupply, onBehalfOf, 0, deadline, v, r, s)
    //   .send({ from: onBehalfOf, gas: 50000 })
    //   .catch((e) => {
    //     console.log(e.message)
    //   })

    const txApprove = await provider.erc20Provider.approve(provider.poolProxyProviderAddress, tokenSupply, {
      from: onBehalfOf,
      gasLimit: 500000,
    })
    console.log(txApprove)

    const txSupply = await provider.poolProxyProvider.supply(asset, tokenSupply, onBehalfOf, 0, {
      from: onBehalfOf,
      gasLimit: 500000,
    })
    console.log(txSupply)

    const { rows } = await db.query(insertDepositQuery(provider.chainId, tag, 'tx', amount, onBehalfOf), null)
    res.status(200).send(rows[0])
  } catch (err) {
    console.log(err)
    res.status(400).send('Oops... something went wrong')
  }
}
