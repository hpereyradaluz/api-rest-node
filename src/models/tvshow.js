import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const ObjectId = mongoose.Schema.Types.ObjectId

const TvshowSchema = new mongoose.Schema(
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
    actors:[{
      type: ObjectId,
      ref: 'actor'
    }]
  },
  {
    timestamps: true
  }
)

TvshowSchema.plugin(mongoosePaginate)

TvshowSchema.post('save', (tvshow, next) => {
  tvshow
    .populate('director')
    .execPopulate()
    .then(() => next())
})

export default mongoose.model('Tvshow', TvshowSchema)
