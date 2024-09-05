const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs')
function formatdate (currentDate){
  return dayjs(currentDate).format('DD/MM/YYYY hh:ss')
}

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
     max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:currentDate => formatdate(currentDate),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
