const { Int32 } = require("bson");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const componentScheme = new Schema({
  heading: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Component", componentScheme);
