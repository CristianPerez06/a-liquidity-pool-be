export const getExample = async (req: any, res: any) => {
  try {
    res.status(200).send('success')
  } catch (err) {
    res.status(400).send('oops... something went wrong')
  }
}
