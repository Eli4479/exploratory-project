const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');

const add_user = async (req, res) => {
  try {
    const { name, email, roll_number } = req.body;
    const profile = await Course.findById(req.params.id);
    if (profile) {
      const user = new User({
        username: name,
        email: email,
        roll_number: roll_number,
        total_classes: profile.total_classes,
      });
      await user.save();
      profile.users.push(user);
      await profile.save();
      res.status(200).json('User added');
    }
    else {
      res.status(400).json('Incorrect email or password');
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.add_user = add_user;