const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    // 
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('users', userSchema);

module.exports = Student;
