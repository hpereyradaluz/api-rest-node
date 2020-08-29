import Movie from '../../models/movie'
import mongoose from 'mongoose'
  
const create = async (req, res) => {
  try {
    const movie = new Movie({
      director: mongoose.Types.ObjectId(req.body.director),
      title: req.body.title,
      description: req.body.description,
      duration: req.body.duration,
      actors: req.body.actors.map((actor) => {
        return mongoose.Types.ObjectId(actor)
      })
    })
    const newMovie = await movie.save()
    res.json(newMovie)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
