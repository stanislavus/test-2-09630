export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'TEST' })
}