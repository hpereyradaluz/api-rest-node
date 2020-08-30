import Episode from '../../models/episode'
import mongoose from 'mongoose'
  
const create = async (req, res) => {
  try {
    const episode = new Episode({
      director: mongoose.Types.ObjectId(req.body.director),
      season: mongoose.Types.ObjectId(req.body.season),
      title: req.body.title,
      duration: req.body.duration
    })
    const newEpisode = await episode.save()
    res.json(newEpisode)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
