const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');


const present_a_user = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.present = user.present + 1;
      if (user.present > user.total) {
        user.present = user.total;
      }
      await user.save();
      res.status(200).json(user);
    }
    else {
      res.status(400).json('User not found');
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.present_a_user = present_a_user;