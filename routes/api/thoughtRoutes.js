const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

// /api/thoughts/
router.route("/").post(createThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").put(updateThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/:reactionId
router.route("/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
