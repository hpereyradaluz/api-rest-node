import mongoose from 'mongoose'

const DirectorSchema = new mongoose.Schema(
  {
    name: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 280
    },
    age:{
      type: 'number',
      required: true,
      minlength: 1,
      maxlength: 3
    },
    bornDate:{
      type: 'String',
      minlength: 1,
      maxlength: 280
    },
    spouse: {
      type: 'String',
      minlength: 1,
      maxlength: 50
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Director', DirectorSchema)
