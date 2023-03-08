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