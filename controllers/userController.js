const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models')

/* ===================+============== User Section ===================================== */

function getUsers(req, res) {

}

function createUser(req, res) {

}

function getUserById(req, res) {

}

function updateUserById(req, res) {

}

function deleteUserById(req, res) {

}

/* ===================+============== Friend Section ===================================== */

function addFriendById(req, res) {

}

function deleteFriendById(req, res) {

}

// Export all functions
module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriendById,
  deleteFriendById
}