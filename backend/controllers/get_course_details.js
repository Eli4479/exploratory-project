const express = require("express");
const Admin = require("../models/admin");
const Router = express.Router();
const User = require("../models/user");
const Course = require("../models/course");
const get_course_details = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(400).json("course not found in database");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("Error: " + err);
  }
};

exports.get_course_details = get_course_details;
