const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Course = require("../models/course");

const get_all_user_in_course = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      const user_array = [];
      for (const userId of course.users) {
        const the_user = await User.findById(userId);
        user_array.push(the_user);
      }
      res.status(200).json(user_array);
    } else {
      res.status(400).json("Course not found in database");
    }
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.get_all_user_in_course = get_all_user_in_course;
