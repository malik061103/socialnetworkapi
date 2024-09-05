const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
  updateThought,
} = require('../../controllers/thoughtController');

// /api/students
router.route('/').get(getThoughts).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/students/:studentId/assignments
router.route('/:thoughtsId/thoughts').post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtsId/thoughts/:thoughtsId').delete(removeReaction);

module.exports = router;
