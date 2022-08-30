const { Message } = require("../models/message.model");

module.exports.getLastMessagesFromRoom = async (roomId) => {
  try {
    const roomMessages = await Message.aggregate([
      { $match: { to: roomId } },
      { $group: { _id: "$date", messagesByDate: { $push: "$$ROOT" } } },
    ]);

    return roomMessages;
  } catch (err) {
    throw err;
  }
};

module.exports.sortRoomMessagesByDate = (messages = []) => {
  try {
    return messages.sort((a, b) => {
      let date1 = a._id.split("/");
      let date2 = b._id.split("/");

      date1 = date1[2] + date1[0] + date1[1];
      date2 = date2[2] + date2[0] + date2[1];

      return date1 < date2 ? -1 : 1;
    });
  } catch (err) {
    throw err;
  }
};
