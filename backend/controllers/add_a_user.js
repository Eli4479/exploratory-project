const express = require('express');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');
const multer = require('multer');

const Storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, req.body.roll_number + '.jpg');
  },
});
const upload = multer({ storage: Storage }).single('testImage');

const add_user = async (req, res) => {
  const profile = await Course.findById(req.params.id);
  if (profile) {
    upload(req, res, function (err) {
      if (err) {
        return res.end('Something went wrong with server please try again later!' + err);
      }
      else {
        const { name, email, roll_number } = req.body;

        const new_user = new User({
          username: name,
          email: email,
          roll_number: roll_number,
          total_classes: profile.total_classes,
          image: {
            data: req.file.filename,
            contentType: 'image/png'
          }
        });
        new_user.save();
        profile.users.push(new_user._id);
        profile.save();
        res.status(200).json('User added in the course');
      }
    });
  }
  else {
    res.status(400).json('Course not found in database');
  }
};

exports.add_user = add_user;