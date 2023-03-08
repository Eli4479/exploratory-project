const express = require('express');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');

const get_all_user_in_course = async (req, res) => {
  try {
    const profile = await Course.findById(req.params.id);
    if (profile) {
      const user_array = [];
      for (let i = 0; i < profile.users.length; i++) {
        const the_user = await User.findById(profile.users[i]);
        user_array.push(the_user);
      }
      res.status(200).json(user_array);
    }
    else {
      res.status(400).json('Course not found in database');
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.get_all_user_in_course = get_all_user_in_course;

