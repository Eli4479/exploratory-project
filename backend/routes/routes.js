const express = require('express');
const Router = express.Router();
module.exports = Router;

const { register_admin } = require('../controllers/register');
const { login_admin } = require('../controllers/login');

// register admin
Router.route('/register/admin').post(
  (req, res) => {
    console.log(req.body);
    register_admin(req, res)
  }
);
// login admin
Router.route('/login/admin').get(login_admin);

// get admin details
Router.route('/admin/:id').get();

// add user details
Router.route('/admin/:id').post();

// get user details
Router.route('/user/:id').get();

// update course code in admin
Router.route('/admin/:id').put();

// update attendance in user
Router.route('/user/:id').put();

// get all user under a course
Router.route('/admin/:id').get();
