const mongoose = require("mongoose");
const host = require("../config/host");

module.exports = () => {
  const mongoURI = process.env["MONGODB_URI"] || host.server.db;

  mongoose
    .connect(mongoURI)
    .then((value) => {
      console.log(`Connected to MongoDB Server: ${mongoURI}`);
    })
    .catch((err) => {
      console.log(`Failed to connect to MongoDB: ${err.message}`);
    });
};
