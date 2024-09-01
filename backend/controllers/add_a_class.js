const express = require("express"); // Importing express
const Admin = require("../models/admin"); // Importing the Admin schema
const Router = express.Router(); // Creating a router
const User = require("../models/user"); // Importing the User schema
const Course = require("../models/course"); // Importing the Course schema

const register_class = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id); // Finding a course with the given ID
    if (course) {
      // Checking if the course exists
      course.total_classes = course.total_classes + 1; // Incrementing the total number of classes
      for (const userId of course.users) {
        // Looping through all the users in the course
        const user = await User.findById(userId); // Finding the user with the given ID
        user.total_classes = course.total_classes; // Incrementing the total number of classes
        await user.save(); // Saving the changes
      }
      await course.save(); // Saving the changes
      res.status(200).json("Class registered"); // Sending a response
    } else {
      res.status(400).json("course not found in database"); // Sending a response
    }
  } catch (err) {
    res.status(400).json("Error:" + err); // Sending a error response
  }
};

exports.register_class = register_class; // Exporting the register_class function
