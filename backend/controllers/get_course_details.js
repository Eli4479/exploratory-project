const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');
const get_course_details = async (req, res) => {
  try {
    const profile = await Course.findById(req.params.id);
    if (profile) {
      res.status(200).json(profile);
    }
    else {
      res.status(400).json('Incorrect email or password');
    }
  }
  catch (err) {
    console.log(err);
    res.status(400).json('Error: ' + err);
  }
}

exports.get_course_details = get_course_details;

