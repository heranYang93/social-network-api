const { Schema } = require("mongoose");

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = { reactionSchema };
