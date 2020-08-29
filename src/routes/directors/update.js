import Actor from '../../models/actor'

const update = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })//.populate('author')
    if (!actor) res.status(404).json({ message: 'Actor not found' })
    else res.json(actor)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default update
