const { ObjectId } = require('mongoose').Types;
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
    return res.json(newThought)
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
    const updThought = await Thought.updateOne(
      { _id: req.params.thoughtId},
      req.body,
      {runValidators: true, new: true}
    )
    return res.json(updThought)
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function deleteThoughtById(req, res) {
  try {
    const delThought = await Thought.deleteOne({ _id: req.params.thoughtId })
    return res.json(delThought)
  } catch (err) {
    return res.status(500).json(err)
  }
}

/* ===================+============== Reactions Section ===================================== */

async function createReaction(req, res) {
  try {
    const thought = await Thought.findByIdAndUpdate({ _id: req.params.thoughtId})
    await thought.reactions.push(req.body)
    await thought.save((err) => console.error(err))
    return res.json(thought)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function deleteReactionById(req, res) {
  try {
    const thought = await Thought.findById({ _id: req.params.thoughtId})
    await thought.reactions.id(req.params.reactionId).remove()
    await thought.save((err) => console.error(err))
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