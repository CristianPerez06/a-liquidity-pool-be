import { Provider } from '../provider/Provider'

export const addProviderToRequest = (req: any, res: any, next: any) => {
  try {
    const chainId = req.query.chain || req.body.chain
    const reserveAddr = req.query.reserve || req.body.reserve

    req.provider = new Provider(chainId, reserveAddr)
    next()
  } catch (error) {
    res.status(500).send('Unable to create Provider instance')
  }
}
