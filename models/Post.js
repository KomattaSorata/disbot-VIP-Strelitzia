const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  thread_id: {
    type: Number,
    default: 0,
  },

  post2thread_id: {
    type: Number,
    default: 0,
    max: 1010,
  },

  author: {
    type: String,
    required: true,
  },

  content: {
    trpe: String,
    required: true,
  },

  removed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("post", PostSchema);
