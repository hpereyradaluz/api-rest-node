import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const ObjectId = mongoose.Schema.Types.ObjectId

const MovieSchema = new mongoose.Schema(
  {
    director: {
      type: ObjectId,
      ref: 'Director',
      required: true
    },
    title: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 280
    },
    description: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 280
    },
    duration: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 10
    },
    actors:[{
      type: ObjectId,
      ref: 'actor'
    }]
  },
  {
    timestamps: true
  }
)

MovieSchema.plugin(mongoosePaginate)

MovieSchema.post('save', (movie, next) => {
  movie
    .populate('director')
    .execPopulate()
    .then(() => next())
})

export default mongoose.model('Movie', MovieSchema)
