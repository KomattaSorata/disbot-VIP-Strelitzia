const mongoose = require("mongoose");
const ThreadSchema = new mongoose.Schema({
  thread_id: {
    type: Number,
    default: 0,
  },

  init_date: {
    type: Date,
    default: Date.now,
  },

  starting_date: {
    type: Date,
    default: function () {
      return Date.now() + 900000;
    },
  },

  posts_count: {
    type: Number,
    default: 0,
    max: 1010,
  },

  open: {
    type: Boolean,
    default: false,
  },

  limite_reached: {
    type: Boolean,
    default: false,
  },

  maintenance_after: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("thread", ThreadSchema);
