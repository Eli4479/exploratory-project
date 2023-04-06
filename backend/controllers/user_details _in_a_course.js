const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');

const user_details_in_a_course = async (req, res) => {
  const { roll_number } = req.body;
  // const id = req.params.id;
  try {
    const profile = await Course.findById(req.params.id);
    if (profile) {
      let user_array = [];
      for (let i = 0; i < profile.users.length; i++) {
        const the_user = await User.findById(profile.users[i]);
        // console.log(the_user);
        user_array.push(the_user);
      }
      console.log(user_array);
      let flag = 0;
      for (let i = 0; i < user_array.length; i++) {
        if (user_array[i].roll_number == roll_number) {
          flag = 1;
          res.status(200).json(user_array[i]);
        }
      }
      if (flag == 0)
        res.status(400).json('User not found in database');
    }
    else {
      res.status(400).json('Course not found in database');
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.user_details_in_a_course = user_details_in_a_course;