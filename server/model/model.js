const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

var schema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("usermanagement", schema);

module.exports = Userdb;
