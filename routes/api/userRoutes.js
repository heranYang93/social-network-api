const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// /api/users/
router.route("/").post(createUser);

// /api/users/:userId
router.route("/:userId").put(updateUser);

// /api/users/:userId
router.route("/:userId").delete(deleteUser);

// /api/users/:userId/:friendId
router.route("/:userId/:friendId").post(addFriend);

// /api/users/:userId/:friendId
router.route("/:userId/:friendId").delete(removeFriend);

module.exports = router;
