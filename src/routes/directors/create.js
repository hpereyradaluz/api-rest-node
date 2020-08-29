import Director from '../../models/director'

const create = async (req, res) => {
  try {
    const director = new Director({
      name: req.body.name,
      age: req.body.age,
      bornDate: req.body.bornDate,
      spouse: req.body.spouse
    })
    const newDirector = await director.save()
    res.json(newDirector)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
