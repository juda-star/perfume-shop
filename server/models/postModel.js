const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    postName: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      required: true,
      default: Date.now,
      index: { expires: '40d' }
    },
    createBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("event", postSchema);
module.exports = Event;
