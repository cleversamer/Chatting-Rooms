const io = require("socket.io");
const host = require("../config/host");

module.exports = (app) => {
  const config = {
    cors: {
      origin: host.client.url,
      methods: ["GET", "POST"],
    },
  };

  io(app, config);
};
