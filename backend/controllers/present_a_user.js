const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');


const present_a_user = async (req, res) => {

  const RollNumber = req.body.roll_number;
  const course = await Course.findById(req.params.id);
  // find the user in the course only
  const the_user = await User.findOne({ roll_number: RollNumber, course: course._id });
  try {
    the_user.present = the_user.present + 1;
    User.updateOne({ roll_number: RollNumber }, the_user, function (err, result) {
      let presents = the_user.present;
      let total = the_user.total_classes;
      presents = presents + 1;
      if (presents > total) {
        presents = total;
      }
      the_user.present = presents;
      the_user.total_classes = total;
      if (err) {
        res.status(400).json("users roll number not found in database");
      }
      else {
        res.status(200).json('User present is marked');
      }
    });
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.present_a_user = present_a_user;