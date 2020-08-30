import Movie from '../../models/movie'

const update = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!movie) res.status(404).json({ message: 'Movie not found' })
    else res.json(movie)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default update
