import mongoose, {Schema} from 'mongoose'
import timestamp from 'mongoose-timestamp'

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  type: {
    type: String,
    default: 'image',
    required: true,
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  commentsCount: {
    type: Number,
    default: 0
  },
  likesCount: {
    type: Number,
    default: 0
  },
  liked: {
    type: Boolean,
    default: false,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Shot'
  },
  replyTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  images: {
    type: Array
  },
  latestComment: [{
    type: Schema.Types.ObjectId,
    ref: 'Shot'
  }],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
})

schema.plugin(timestamp)

export default mongoose.model('Shot', schema)
