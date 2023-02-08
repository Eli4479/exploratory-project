const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema({
  roll_number: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  attendance: {
    type: Number,
    required: true,
    trim: true,
  },
  lab_attendance: {
    type: Number,
    required: true,
    trim: true,
  },
  class_attendance: {
    type: Number,
    required: true,
    trim: true,
  },
  tutorial_attendance: {
    type: Number,
    required: true,
    trim: true,
  },
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
});