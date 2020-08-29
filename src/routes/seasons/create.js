import Season from '../../models/season'
import mongoose from 'mongoose'
  
const create = async (req, res) => {
  try {
    const season = new Season({
      tvshow: mongoose.Types.ObjectId(req.body.tvshow),
      title: req.body.title
    })
    const newSeason = await season.save()
    res.json(newSeason)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
