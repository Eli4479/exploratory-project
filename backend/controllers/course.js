const express = require("express");
const Admin = require("../models/admin");
const Router = express.Router();
const User = require("../models/user");
const Course = require("../models/course");

const add_course = async (req, res) => {
  try {
    const { course_name, course_code } = req.body;
    const profile = await Admin.findById(req.params.id);
    if (profile) {
      const courses = profile.course;
      for (const courseId of courses) {
        const the_course = await Course.findById(courseId);
        if (the_course.course_code === course_code) {
          res.status(400).json("Course already exists in this profile!");
          return;
        }
      }
      const course = new Course({
        course_code: course_code,
        course_name: course_name,
        users: [],
      });
      await course.save();
      profile.course.push(course._id);
      await profile.save();
      res.status(200).json("Course added");
    } else {
      res.status(400).json("Admin not found in database");
    }
  } catch (err) {
    res.status(400).json("error" + err);
  }
};

exports.add_course = add_course;
