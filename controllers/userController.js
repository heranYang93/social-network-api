const { User, Thought, Reaction } = require("../models");

module.exports = {
  // localhost:3001/api/users
  // GET
  // get all users
  getUsers(req, res) {
    User.find()
      .then((allUsers) => res.json(allUsers))
      .catch((err) => res.status(500).json(err));
  },
  // localhost:3001/api/users/:userId
  // GET
  // get user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // localhost:3001/api/users
  // POST
  // create a new user
  // {username, email}
  createUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(500).json(err));
  },
  // localhost:3001/api/users/:userId
  // PUT
  // update a user by id
  // {username, email, friend, thoughts}
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((updatedUser) =>
        !updatedUser
          ? res
              .status(404)
              .json({ message: "No user associated with this id!" })
          : res.json(updatedUser)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // localhost:3001/api/users/:userId
  // DELETE
  // Delete a user and associated thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "No user associated with this id!" });
        } else {
          Thought.deleteMany({ thoughtId: { $in: user.thoughts } });
        }
      })
      .then(() =>
        res.json({ message: "User and associated thoughts deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },

  // localhost:3001/api/users/:userId/:friendId
  // POST
  // add a friend (friendId) to a user's friend list (userId)
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((userData) =>
        !userData
          ? res
              .status(404)
              .json({ message: "No user associated with this id!" })
          : res.json(userData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // localhost:3001/api/users/:userId/:friendId
  // DELETE
  // remove a friend (friendId) from a user's friend list (userId)
  // {username, email, friend, thoughts}
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((userData) =>
        !userData
          ? res
              .status(404)
              .json({ message: "No user associated with this id!" })
          : res.json(userData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
