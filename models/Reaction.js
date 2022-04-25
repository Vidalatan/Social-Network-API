const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    timestamps: true
  }
);

const User = model('users', userSchema);

module.exports = User;
