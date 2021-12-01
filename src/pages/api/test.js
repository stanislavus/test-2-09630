export default (req: NextApiRequest, res) => {
  res.status(200).json({ name: 'TEST' })
}