const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models')

/* ===================+============== User Section ===================================== */

function getThoughts(req, res) {

}
function createThought(req, res) {

}

function getThoughtById(req, res) {

}

function updateThoughtById(req, res) {

}

function deleteThoughtById(req, res) {

}

/* ===================+============== Friend Section ===================================== */

function createReaction(req, res) {

}

function getReactionById(req, res) {

}

// Export all functions
module.exports = {
  getThoughts,
  createThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  getReactionById
}