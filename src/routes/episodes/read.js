import Episode from '../../models/episode'

const read = async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id).populate('director')
    if (!episode) res.status(404).json({ message: 'Episode not found' })
    else res.json(episode)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default read
