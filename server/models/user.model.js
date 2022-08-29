const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    maxLength: 64,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchema.methods.genAuthToken = function () {
  const body = { sub: this._id.toHexString(), email: this.email };
  const token = jwt.sign(body, process.env["JWT_PRIVATE_KEY"], {
    expiresIn: "1d",
  });

  return token;
};

userSchema.methods.comparePassword = async function (candidate) {
  return await bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
