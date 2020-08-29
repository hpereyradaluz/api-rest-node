import Actor from '../../models/actor'

const create = async (req, res) => {
  try {
    const actor = new Actor({
      name: req.body.name,
      age: req.body.age,
      height: req.body.height,
      debutYear: req.body.debutYear
    })
    const newActor = await actor.save()
    res.json(newActor)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
