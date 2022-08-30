const httpStatus = require("http-status");
const data = require("../public/data.json");

module.exports.getAllRomms = async (req, res, next) => {
  try {
    res.status(httpStatus.OK).json(data.rooms);
  } catch (err) {
    next(err);
  }
};
