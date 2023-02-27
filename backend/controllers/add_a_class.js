const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');

const register_class = async (req, res) => {
  try {
    const profile = await Course.findById(req.params.id);
    if (profile) {
      profile.total_classes = profile.total_classes + 1;
      await profile.save();
      res.status(200).json('Class added');
    }
    else {
      res.status(400).json('Incorrect email or password');
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.register_class = register_class;
