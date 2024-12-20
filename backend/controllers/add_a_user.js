const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Course = require("../models/course");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const cloud_name = process.env.cloud_name;
const api_key = process.env.api_key;
const api_secret = process.env.api_secret;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const Storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, req.body.roll_number + ".jpg");
  },
});

const upload = multer({ storage: Storage }).single("testImage");

const mongo_add_user = async (req, res, url, profile) => {
  try {
    const { name, email, roll_number } = req.body;
    if (!name || !email || !roll_number || !url) {
      res.status(400).json("All fields are required!");
      return;
    }
    const users = profile.users;
    for (const userId of users) {
      const user = await User.findById(userId);
      if (user.roll_number === roll_number) {
        res.status(400).json("User already exists in this profile!!");
        return;
      }
    }
    const user = new User({
      username: name,
      email: email,
      roll_number: roll_number,
      total_classes: profile.total_classes,
      profile_pic: url,
    });
    await user.save();
    profile.users.push(user);
    await profile.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json("Something went wrong with server please try again later!" + err);
  }
};

const img_cloudinary = async (req, res, course) => {
  try {
    cloudinary.uploader.upload(
      "uploads/" + req.file.filename,
      function (error, result) {
        if (error) {
          console.log(error);
          res
            .status(400)
            .json(
              "Something went wrong with server please try again later!" + error
            );
        } else {
          mongo_add_user(req, res, result.secure_url, course);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const add_user = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    upload(req, res, function (err) {
      if (err) {
        return res
          .status(400)
          .json(
            "Something went wrong with server please try again later!" + err
          );
      } else {
        img_cloudinary(req, res, course);
      }
    });
  } else {
    res.status(400).json("Course not found in database");
  }
};

exports.add_user = add_user;
