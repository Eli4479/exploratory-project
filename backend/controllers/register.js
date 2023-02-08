const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();

const register_admin = async (req, res) => {
  try {
    const { username, password, confirm_password, course_code, email } = req.body;
    console.log(req.body);
    // create a new admin in the database
    const newAdmin = new Admin({
      username,
      password,
      confirm_password,
      course_code,
      email,
    });
    // see if confirm password matches password
    if (password !== confirm_password) {
      return res.status(400).json('Passwords do not match');
    }
    await newAdmin.save();
    res.status(200).json('Admin registered');

    // make admin a constructor

  }
  catch (err) {

    res.status(400).json('Errorsss: ' + err);
  }
}

exports.register_admin = register_admin;