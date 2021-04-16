import mongoose from 'mongoose'
const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: 'Word is required'
  },

  region: {
    type: String,
  },

  meaning: {
    type: String,
  },

  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  comments: [{
    text: String,
    created: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
  }],
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Post', PostSchema)
