import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const ObjectId = mongoose.Schema.Types.ObjectId

const SeasonSchema = new mongoose.Schema(
  {
    tvshow: {
      type: ObjectId,
      ref: 'Tvshow',
      required: true
    },
    title: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 50
    }
  },
  {
    timestamps: true
  }
)

SeasonSchema.plugin(mongoosePaginate)

SeasonSchema.post('save', (season, next) => {
  season
    .populate('tvshow')
    .execPopulate()
    .then(() => next())
})

export default mongoose.model('Season', SeasonSchema)
