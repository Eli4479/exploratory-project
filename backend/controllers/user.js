const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');


const add_user = async (req, res) => {
  try {
    const { email, roll_number, name } = req.body;
    console.log(req.body);
    const profile = await Admin.findById(req.params.id);
    if (profile) {
      // make a new user then add it to admin
      const userss = new User({
        email,
        roll_number,
        username: name,
        professor: req.params.id,
      });
      await userss.save();
      profile.users.push(userss);
      await profile.save();
      res.status(200).json('User added');
    }
  }
  catch (err) {
    res.status(400).json('errors: ' + err);
  }
}

exports.add_user = add_user;