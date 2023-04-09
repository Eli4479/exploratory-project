const mongoose = require("mongoose");
const user = require('./user');

const courseSchema = new mongoose.Schema({
  course_code: {
    type: String,
    required: true,
    trim: true,
  },
  course_name: {
    type: String,
    required: true,
    trim: true,
  },
  users:
    [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    ],
  total_classes: {
    type: Number,
    required: true,
    trim: true,
    default: 0,
  }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

