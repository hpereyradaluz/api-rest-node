import Movie from '../../models/movie'

const remove = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id)
    if (!movie) res.status(404).json({ message: 'Movie not found' })
    else res.json(movie)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default remove
