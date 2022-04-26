const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    // reactionId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId()     Excluding this because reactions already includes a unique Id
    // },                                        If you wanted to include this, make sure to require 'Types' from mongoose
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

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    timestamps: true
  }
);

thoughtSchema.virtual('reactionCount').get(
  function() {
    return this.reactions.length
  }
)


const Thought = model('thought', thoughtSchema);

module.exports = {thoughtSchema, Thought};
