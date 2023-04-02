const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();

const login_admin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const profile = await Admin.findOne(
      {
        email: email,
        password: password,
      }
    )
    if (profile) {
      res.status(200).json(profile._id);
      console.log(profile._id);
    }
    else {
      res.status(400).json('Incorrect email or password');
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
}

exports.login_admin = login_admin;
