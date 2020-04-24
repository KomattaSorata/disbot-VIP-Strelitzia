const mongoose = require("mongoose");
const ChannelSchema = new mongoose.Schema({
  server_id: {
    type: String,
    required: true,
  },

  channel_id: {
    type: String,
    required: true,
  },

  added_since_thread: {
    type: Number,
    default: 0,
  },

  added_since_date: {
    type: Date,
    default: Date.now,
  },

  removed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("channel", ChannelSchema);
