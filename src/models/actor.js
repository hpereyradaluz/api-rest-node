import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const ActorSchema = new mongoose.Schema(
  {
    name: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 280
    },
    age: {
      type: 'Number',
      required: true,
      minlength: 1,
      maxlength: 280
    },
    height: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 280
    },
    debutYear: {
      type: 'Number',
      minlength: 4,
      maxlength: 4
    }
  },
  {
    timestamps: true
  }
)

ActorSchema.plugin(mongoosePaginate)

export default mongoose.model('Actor', ActorSchema)
