const express = require('express');
const Router = express.Router();
module.exports = Router;

// for registration of user

Router.route('/register').get().post();

// for registration of admin
Router.route('/register/admin').get().post();

// for login of user
Router.route('/login').get().post();

// getting details of user and his attendance
Router.route('/profile/:id').get();

// get all the attendance user a specific admin and course
Router.route('/admin/:id').get();

// put attendance on a given user id
Router.route('/admin/:id').put();



