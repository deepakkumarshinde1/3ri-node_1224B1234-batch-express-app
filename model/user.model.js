/**
 * {
 *  username
 * password
 * email
 * image
 * mobile
 * gender
 * role => user, admin
 * }
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});
const UserModel = mongoose.model("User", userSchema, "users");
module.exports = UserModel;
