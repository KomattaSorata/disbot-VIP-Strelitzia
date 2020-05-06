const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  discord_id: {
    type: String,
    required: true,
  },

  hashed_id: {
    type: String,
    required: true,
  },

  init_date: {
    type: Date,
    default: Date.now,
  },

  restricted: {
    type: Boolean,
    default: false,
  },

  is_restricted_until: {
    type: Date,
  },

  id_regen_count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("user", UserSchema);
