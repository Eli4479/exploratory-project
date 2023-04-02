const express = require('express');
const Admin = require('../models/admin');
const { validate } = require('../models/user');
const Router = express.Router();

const register_admin = async (req, res) => {
  try {
    const { username, password, confirm_password, email } = req.body;
    if (password !== confirm_password) {
      return res.status(400).json('Passwords do not match');
    }
    else {
      const newAdmin = new Admin({
        username,
        password,
        confirm_password,
        email,
      });
      await newAdmin.save();
      res.status(200).json('Admin registered');
    }
  }
  catch (err) {
    res.status(400).json(err);
  }
}
exports.register_admin = register_admin;