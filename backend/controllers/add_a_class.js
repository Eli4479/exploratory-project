const express = require('express'); // Importing express
const Admin = require('../models/admin'); // Importing the Admin schema
const Router = express.Router(); // Creating a router
const User = require('../models/user'); // Importing the User schema
const Course = require('../models/course'); // Importing the Course schema

const register_class = async (req, res) => {
  try {
    const profile = await Course.findById(req.params.id); // Finding a course with the given ID
    if (profile) { // Checking if the course exists
      profile.total_classes = profile.total_classes + 1; // Incrementing the total number of classes

      for (let i = 0; i < profile.users.length; i++) { // Looping through all the users in the course
        const user = await User.findById(profile.users[i]); // Finding the user with the given ID
        user.total_classes = profile.total_classes; // Incrementing the total number of classes
        await user.save(); // Saving the changes
      }
      await profile.save(); // Saving the changes
      res.status(200).json('Class added'); // Sending a response
    }
    else {
      res.status(400).json('Incorrect email or password'); // Sending a response
    }
  }
  catch (err) {
    res.status(400).json('Error: ' + err); // Sending a error response
  }
}

exports.register_class = register_class; // Exporting the register_class function