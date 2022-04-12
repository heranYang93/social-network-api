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
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // localhost:3001/api/thoughts
  // POST
  // create a new thought
  // {thoughtText, userId}
  createThought(req, res) {
    Thought.create(req.body)
      .then((thisThought) => {
        return User.findOneAndUpdate(
          { userId: req.body.userId },
          { $addToSet: { thoughts: thisThought.thoughtId } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought created, but found no user with that ID",
            })
          : res.json("Created the thought 🎉")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // localhost:3001/api/thoughts/:thoughtId
  // PUT
  // update a thought by id
  // {thoughtText, userId}
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { thoughtId: req.params.applicationId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((updatedThoughtData) =>
        !updatedThoughtData
          ? res.status(404).json({ message: "No application with this id!" })
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
    Thought.findOneAndRemove({ _id: req.params.applicationId })
      .then((application) =>
        !application
          ? res.status(404).json({ message: "No application with this id!" })
          : User.findOneAndUpdate(
              { applications: req.params.applicationId },
              { $pull: { applications: req.params.applicationId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Application created but no user with this id!",
            })
          : res.json({ message: "Application successfully deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $addToSet: { tags: req.body } },
      { runValidators: true, new: true }
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: "No application with this id!" })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $pull: { tags: { responseId: req.params.tagId } } },
      { runValidators: true, new: true }
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: "No application with this id!" })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
};
