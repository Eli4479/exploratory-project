const express = require('express');
const Admin = require('../models/admin');
const Router = express.Router();
const User = require('../models/user');

const login_details = async (req, res) => {
  try {
    const profile = await Admin.findById(req.params.id);
    if (profile) {
      res.status(200).json(profile);
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

