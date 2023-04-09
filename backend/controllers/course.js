const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');

const add_course = async (req, res) => {
  try {
    const { course_name, course_code } = req.body;
    console.log(req.body);
    const profile = await Admin.findById(req.params.id);
    if (profile) {
      // find if course already exists in this profile then don't add it
      const courses = profile.course;
      for (let i = 0; i < courses.length; i++) {
        const the_course = await Course.findById(courses[i]);
        if (the_course.course_code === course_code) {
          res.status(400).json('Course already exists in this profile!');
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
      res.status(200).json('Course added');
    }
    else {
      res.status(400).json('Admin not found in database');
    }
  }
  catch (err) {
    res.status(400).json('error' + err);
  }
}

exports.add_course = add_course;