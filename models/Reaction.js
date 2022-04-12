const { Schema, model } = require("mongoose");

// Schema to create Post model
const reactionSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
