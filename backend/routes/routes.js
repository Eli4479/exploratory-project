const express = require('express');
const Router = express.Router();
module.exports = Router;

const { register_admin } = require('../controllers/register');
const { login_admin } = require('../controllers/login');
const { add_course } = require('../controllers/course');
const { login_details } = require('../controllers/login_details');
const { get_course_details } = require('../controllers/get_course_details');
const { register_class } = require('../controllers/add_a_class.js');
const { add_user } = require('../controllers/add_a_user.js');
const { present_a_user } = require('../controllers/present_a_user.js');
const { get_all_user_in_course } = require('../controllers/get_all_user_in_course.js');
const { user_details_in_a_course } = require('../controllers/user_details _in_a_course.js');
// register admin
Router.route('/register/admin').post(register_admin);
// login admin
Router.route('/login/admin').get(login_admin);

// get admin details
Router.route('/admin/:id').get(login_details);

// get particular user details in that course
Router.route('/admin/course/user/:id').get(user_details_in_a_course);

// update course code in admin
Router.route('/admin/:id').put(add_course);

// get all user under a course
Router.route('/admin/course/:id').get(get_course_details);

// register a class in a course
Router.route('/admin/course/:id').post(register_class);

// add a user to a course
Router.route('/admin/course/:id').put(add_user);

// present a user in a course
Router.route('/admin/course/user/:id').put(present_a_user);

// get all user under a course
Router.route('/admin/course/users/:id').get(get_all_user_in_course);