const { Thought, User } = require("../models");

module.exports = {
  // localhost:3001/api/thoughts
  // GET
  // get all users
  getAllThoughts(req, res) {
    Thought.find()
      .then((allThoughtsData) => res.json(allThoughtsData))
      .catch((err) => res.status(500).json(err));
  },
  // localhost:3001/api/thoughts/:thoughtId
  // GET
  // get thought by id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((singleThoughtData) =>
        !singleThoughtData
          ? res
              .status(404)
              .json({ message: "No thought associated with this ID" })
          : res.json(singleThoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // localhost:3001/api/thoughts
  // POST
  // create a new thought
  // {text, userId}
  createThought(req, res) {
    Thought.create(req.body)
      .then((thisThought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thisThought._id } },
          { new: true }
        ).then((result) => {
          !result
            ? res.status(404).json({
                message: "Thought created, but found no user with that ID",
              })
            : res.json(result);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // localhost:3001/api/thoughts/:thoughtId
  // PUT
  // update a thought by id
  // {text, userId}
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((updatedThoughtData) =>
        !updatedThoughtData
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(updatedThoughtData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // localhost:3001/api/thoughts/:thoughtId
  // DELETE
  // Delete a thought and associated reaction
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((deleteResult) =>
        !deleteResult
          ? res.status(404).json(deleteResult)
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((updateUser) =>
        !updateUser
          ? res.status(404).json({
              message: "No user associated with this thought!",
            })
          : res.json({ message: "Thought successfully deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },

  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $addToSet: {
          reactions: req.body,
        },
      },
      { runValidators: true, new: true }
    )
      .then((updateReaction) =>
        !updateReaction
          ? res
              .status(404)
              .json({ message: "No thought associated with this id!" })
          : res.json(updateReaction)
      )
      .catch((err) => res.status(500).json(err));
  },

  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((removeResult) =>
        !removeResult
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(removeResult)
      )
      .catch((err) => res.status(500).json(err));
  },
};
