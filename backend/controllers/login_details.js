const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');

const login_details = async (req, res) => {
  try {
    const profile = await Admin.findById(req.params.id);
    if (profile) {
      const all_course_in_user = [];
      for (let i = 0; i < profile.course.length; i++) {
        const course = await Course.findById(profile.course[i]);
        all_course_in_user.push(course);
      }
      res.status(200).json(all_course_in_user);
    }
    else {
      res.status(400).json('Admin not found in database');
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.login_details = login_details;
