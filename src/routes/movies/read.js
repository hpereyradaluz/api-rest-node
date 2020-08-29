import Movie from '../../models/movie'

const read = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('author')
    if (!movie) res.status(404).json({ message: 'Movie not found' })
    else res.json(movie)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default read
