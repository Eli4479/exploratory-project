const express = require("express");
const router = express.Router();
const { register_admin } = require("../controllers/register");
const { login_admin } = require("../controllers/login");
const { add_course } = require("../controllers/course");
const { login_details } = require("../controllers/login_details");
const { get_course_details } = require("../controllers/get_course_details");
const { register_class } = require("../controllers/add_a_class.js");
const { add_user } = require("../controllers/add_a_user.js");
const { present_a_user } = require("../controllers/present_a_user.js");
const {
  get_all_user_in_course,
} = require("../controllers/get_all_user_in_course.js");
const {
  user_details_in_a_course,
} = require("../controllers/user_details _in_a_course.js");

router.route("/register/admin").post(register_admin);
router.route("/login/admin").post(login_admin);
router.route("/admin/:id").get(login_details);
router.route("/admin/:id").put(add_course);
router.route("/admin/course/:id").get(get_course_details);
router.route("/admin/course/users/:id").get(get_all_user_in_course);
router.route("/admin/course/:id").post(register_class);
router.route("/admin/course/:id").put(add_user);
router.route("/admin/course/user/:id").post(user_details_in_a_course);
module.exports = router;
