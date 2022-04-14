const { Schema } = require("mongoose");

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionText: {
      type: String,
      required: true,
    },
    thoughtId: {
      type: Schema.Types.ObjectId,
      ref: "Thought",
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
