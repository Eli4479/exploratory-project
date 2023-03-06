const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');
const multer = require('multer');

const Storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    // make the file name as the roll number
    cb(null, req.body.roll_number + '.jpg');

  },

});

const upload = multer({ storage: Storage }).single('testImage');

const add_user = async (req, res, data) => {
  // try {
  //   // data = data.replace('[', '');
  //   // data = data.replace(']', '');
  //   // let data1 = [];
  //   // // split data into array of strings
  //   // data1 = data.split(' ');
  //   // // remove '' from data1
  //   // data1 = data1.filter(function (el) {
  //   //   return el != '';
  //   // });
  //   // // if the element has /n, remove it
  //   // for (let i = 0; i < data1.length; i++) {
  //   //   if (data1[i].includes('\n')) {
  //   //     data1[i] = data1[i].replace('\n', '');
  //   //   }
  //   // }

  //   // console.log(data1);


  // }

  const profile = await Course.findById(req.params.id);
  // // const { name, email, roll_number } = req.body;
  if (profile) {
    upload(req, res, function (err) {
      if (err) {
        return res.end('Something went wrong!' + err);
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
        profile.users.push(new_user);
        profile.save();
        res.status(200).json('User added successfully');
      }
    });
  }
  else {
    res.status(400).json('Incorrect email or password');
  }
};

exports.add_user = add_user;