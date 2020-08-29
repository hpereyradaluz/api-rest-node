import Actor from '../../models/actor'

const read = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id).populate('author')
    if (!actor) res.status(404).json({ message: 'Actor not found' })
    else res.json(actor)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default read
