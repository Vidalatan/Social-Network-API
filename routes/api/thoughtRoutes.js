const router = require('express').Router();

const C = require('../../controllers/thoughtController')

router.route('/').get(C.getThoughts)

router.route('/create/:userId').post(C.createThought)

router.route('/:thoughtId').get(C.getThoughtById).put(C.updateThoughtById).delete(C.deleteThoughtById)

router.route('/:thoughtId/reactions').post(C.createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(C.getReactionById)

module.exports = router;
