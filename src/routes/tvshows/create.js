import Tvshow from '../../models/tvshow'
import mongoose from 'mongoose'
  
const create = async (req, res) => {
  try {
    const tvshow = new Tvshow({
      director: mongoose.Types.ObjectId(req.body.director),
      title: req.body.title,
      description: req.body.description,
      actors: req.body.actors.map((actor) => {
        return mongoose.Types.ObjectId(actor)
      })
    })
    const newTvshow = await tvshow.save()
    res.json(newTvshow)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
