const express = require("express");
const Admin = require("../models/admin");
const Router = express.Router();
const User = require("../models/user");
const Course = require("../models/course");

const user_details_in_a_course = async (req, res) => {
  const { roll_number } = req.body;
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      for (const userId of course.users) {
        const the_user = await User.findById(userId);
        if (the_user && the_user.roll_number == roll_number)
          return res.status(200).json(the_user);
      }
      res.status(400).json("Course not found in database");
    }
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.user_details_in_a_course = user_details_in_a_course;
