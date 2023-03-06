const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  roll_number: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^([a-zA-Z0-9_\-\.]+)@itbhu\.ac\.in$/.test(v);
      },
    },
  },
  present: {
    type: Number,
    required: true,
    trim: true,
    default: 0,
  },
  total_classes: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    data: Buffer,
    contentType: String
  }


});

const User = mongoose.model("User", userSchema);

module.exports = User;