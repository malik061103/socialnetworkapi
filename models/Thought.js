const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs')
function formatdate (currentDate){
  return dayjs(currentDate).format('DD/MM/YYYY hh:ss')
}

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length:1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:currentDate => formatdate(currentDate),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
