import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const ObjectId = mongoose.Schema.Types.ObjectId

const EpisodeSchema = new mongoose.Schema(
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
    duration: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 10
    }
  },
  {
    timestamps: true
  }
)

EpisodeSchema.plugin(mongoosePaginate)

EpisodeSchema.post('save', (episode, next) => {
  episode
    .populate('director')
    .execPopulate()
    .then(() => next())
})

export default mongoose.model('Episode', EpisodeSchema)
