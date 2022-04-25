const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought')

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    thoughts: [thoughtsSchema],
    friends: [this]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

userSchema.virtual('friendCount').get(
  function() {
    return this.friends.length;
  }
)

const User = model('users', userSchema);

module.exports = User;
