const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      minLength: 1,
      trim: true,
      required: true,
    },
    from: {
      type: Object,
    },
    socketId: {
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
    to: {
      type: Object,
    },
  },
  { minimize: false }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = {
  Message,
};
