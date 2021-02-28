const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  chapters:{
    type:Array,
    required:true
  }
});

module.exports = mongoose.model("Books", bookSchema);
