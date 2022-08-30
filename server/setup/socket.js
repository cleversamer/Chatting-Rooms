const host = require("../config/host");
const { usersService, messagesService } = require("../services");
const socketIo = require("socket.io");

module.exports = (server) => {
  const options = {
    cors: {
      origin: host.client.url,
      methods: ["GET", "POST"],
    },
  };

  const io = socketIo(server, options);

  io.on("connection", (socket) => {
    socket.on("new-user", async () => {
      const members = await usersService.getAllUsers();

      io.emit("new-user", members);
    });

    socket.on("join-room", async (room) => {
      socket.join(room);
      let roomMessages = await messagesService.getLastMessagesFromRoom(room);
      roomMessages = messagesService.sortRoomMessagesByDate(roomMessages);

      socket.emit("room-messages", roomMessages);
    });
  });
};
