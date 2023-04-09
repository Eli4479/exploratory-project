const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');


const present_a_user = async (req, res) => {
  let RollNumber = req.body.roll_number;
  RollNumber = String(RollNumber);
  const course = await Course.findById(req.params.id);
  let the_user;
  for (let i = 0; i < course.users.length; i++) {
    let user = await User.findById(course.users[i]);
    if (user.roll_number == RollNumber) {
      the_user = user;
      break;
    }
  }
  console.log(the_user);
  try {
    let user_present = the_user.present;
    user_present = Number(user_present);
    user_present = user_present + 1;
    let user_total = the_user.total_classes;
    user_total = Number(user_total);
    if (user_present > user_total) {
      user_present = user_total;
    }
    user_present = String(user_present);
    the_user.present = user_present;
    the_user.save().then(() => res.json('User present updated!'));

  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.present_a_user = present_a_user;