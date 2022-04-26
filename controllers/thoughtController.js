const { User, Thought } = require('../models')

/* ===================+============== Thought Section ===================================== */

async function getThoughts(req, res) {
  try {
    const allThoughts = await Thought.find()
    return res.json(allThoughts)
  } catch (err) {
    console.error(err);
    return res.status(500).json(err)
  }
}
async function createThought(req, res) {
  try {
    const newThought = await Thought.create(req.body)
    const updUser = await User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { thoughts: newThought } },
      { new: true, runValidators: true }
    )
    return res.json({newThought, updUser})
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function getThoughtById(req, res) {
  try {
    const thought = await Thought.findById(req.params.thoughtId)
    return res.json(thought)
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function updateThoughtById(req, res) {
  try {
    const updThought = await Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId},
      req.body,
      {runValidators: true, new: true}
    )
    const updUser = await User.findOne({username: updThought.username})
    await updUser.thoughts.id(req.params.thoughtId).remove()
    await updUser.thoughts.push(updThought)
    await updUser.save((err) => console.error(err))
    return res.json({updThought, updUser})
  } catch (err) {
    console.error(err);
    return res.status(500).json(err)
  }
}

async function deleteThoughtById(req, res) {
  try {
    const delThought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId })
    const updUser = await User.findOne({username: delThought.username})
    await updUser.thoughts.id(req.params.thoughtId).remove()
    await updUser.save((err) => console.error(err))
    return res.json({delThought, updUser})
  } catch (err) {
    console.error(err);
    return res.status(500).json(err)
  }
}

/* ===================+============== Reactions Section ===================================== */

async function createReaction(req, res) {
  try {
    const thought = await Thought.findByIdAndUpdate({ _id: req.params.thoughtId})
    await thought.reactions.push(req.body)
    await thought.save((err) => console.error(err))

    // Reset The thoughts inside the user
    const updUser = await User.findOne({username: thought.username})
    await updUser.thoughts.id(req.params.thoughtId).remove()
    await updUser.thoughts.push(thought)
    await updUser.save((err) => console.error(err))

    return res.json(thought)
  } catch (err) {
    console.error(err);
    res.status(500).json(err)
  }
}

async function deleteReactionById(req, res) {
  try {
    const thought = await Thought.findById({ _id: req.params.thoughtId})
    await thought.reactions.id(req.params.reactionId).remove()
    await thought.save((err) => console.error(err))

    // Reset The thoughts inside the user
    const updUser = await User.findOne({username: thought.username})
    await updUser.thoughts.id(req.params.thoughtId).remove()
    await updUser.thoughts.push(thought)
    await updUser.save((err) => console.error(err))
    
    return res.json(thought)
  } catch (err) {
    res.status(500).json(err)
  }
}

// Export all functions
module.exports = {
  getThoughts,
  createThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReactionById
}