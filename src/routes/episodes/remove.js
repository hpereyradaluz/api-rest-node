import Episode from '../../models/episode'

const remove = async (req, res) => {
  try {
    const episode = await Episode.findByIdAndDelete(req.params.id)
    if (!episode) res.status(404).json({ message: 'Episode not found' })
    else res.json(episode)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default remove
