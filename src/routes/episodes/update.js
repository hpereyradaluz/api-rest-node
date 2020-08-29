import Episode from '../../models/episode'

const update = async (req, res) => {
  try {
    const episode = await Episode.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }).populate('author')
    if (!episode) res.status(404).json({ message: 'Episode not found' })
    else res.json(episode)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default update
