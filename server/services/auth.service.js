const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");
const errors = require("../config/errors");
const userService = require("./users.service");

module.exports.createUser = async (name, email, password) => {
  try {
    const registeredUser = await User.findOne({ email });
    if (registeredUser) {
      throw new ApiError(httpStatus.BAD_REQUEST, errors.auth.emailUsed);
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashed });
    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports.signInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await userService.findUserByEmail(email);

    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, errors.auth.emailNotUsed);
    }

    if (!(await user.comparePassword(password))) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        errors.auth.incorrectCredentials
      );
    }

    user.status = "online";
    await user.save();

    return user;
  } catch (err) {
    throw err;
  }
};
