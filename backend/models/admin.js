const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  confirm_password: {
    type: String,
    required: true,
    trim: true,
  },
  course_code: [{
    type: String,
    required: true,
    // unique: true,
    trim: true,
  }],
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) && v.endsWith('itbhu.ac.in');
      }
    }
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;