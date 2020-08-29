import Actor from '../../models/actor'

const remove = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndDelete(req.params.id)
    if (!actor) res.status(404).json({ message: 'Actor not found' })
    else res.json(actor)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default remove
