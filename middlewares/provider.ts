import { Provider } from '../provider/Provider'

export const addProviderToRequest = (req: any, res: any, next: any) => {
  try {
    const { chain } = req.query

    req.provider = new Provider(chain)
    next()
  } catch (error) {
    res.status(500).send('Unable to create Provider instance')
  }
}
