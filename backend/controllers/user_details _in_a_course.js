const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');

const user_details_in_a_course = async (req, res) => {
  const { roll_number } = req.body;
  try {
    const profile = await Course.findById(req.params.id);
    if (profile) {
      const user_array = [];
      for (let i = 0; i < profile.users.length; i++) {
        const the_user = await User.findById(profile.users[i]);
        user_array.push(the_user);
      }
      for (let i = 0; i < user_array.length; i++) {
        if (user_array[i].roll_number === roll_number) {
          res.status(200).json(user_array[i]);
        }
      }
    }
    else {
      res.status(400).json('Incorrect email or password');
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.user_details_in_a_course = user_details_in_a_course;