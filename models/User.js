const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought')

// Schema to create Student model
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
      validate: {
        validator: function(v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        }
      }
    },
    thoughts: [thoughtsSchema],
    friends: [this]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual('friendCount').get(
  function() {
    return this.friends.length;
  }
)

const Student = model('users', userSchema);

module.exports = Student;
