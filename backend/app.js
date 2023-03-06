const express = require("express");
require("express-async-errors");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const PORT = process.env.PORT || 8000;
const { spawn } = require("child_process");
const Admin = require('./models/admin');
const Router = express.Router();
const User = require('./models/user');
const Course = require('./models/course');




const { register_admin } = require('../backend/controllers/register');
const { login_admin } = require('../backend/controllers/login');
const { add_course } = require('../backend/controllers/course');
const { login_details } = require('../backend/controllers/login_details');
const { get_course_details } = require('../backend/controllers/get_course_details');
const { register_class } = require('../backend/controllers/add_a_class.js');
const { add_user } = require('../backend/controllers/add_a_user.js');
const { present_a_user } = require('../backend/controllers/present_a_user.js');
const { get_all_user_in_course } = require('../backend/controllers/get_all_user_in_course.js');
const { user_details_in_a_course } = require('../backend/controllers/user_details _in_a_course.js');
let dataToSend2;


app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", true);
app.get("/", async (req, res) => {
  res.send("login");
});

app.get("/api/register/admin", register_admin);
app.get("/api/login/admin", login_admin);
app.get("/api/admin/:id", login_details);
app.get("/api/admin/course/user/:id", user_details_in_a_course);
app.put("/api/admin/:id", add_course);
app.get("/api/admin/course/:id", get_course_details);
app.post("/api/admin/course/:id", register_class);
app.put("/api/admin/course/:id", async (req, res) => {
  add_user(req, res);
});


async function match_face(RollNumber) {
  const python = spawn("python", ["./match.py", RollNumber]);
  return new Promise((resolve, reject) => {
    python.stdout.on("data", function (data) {
      console.log("Pipe data from python script ...");
      dataToSend2 = data.toString();
    });
    python.on("close", (code) => {
      console.log(`child process close all stdio with code ${code}`);
      resolve(dataToSend2);
    });
    return dataToSend2;
  }
  );
}
app.put("/api/admin/course/user/:id", async (req, res) => {

  const profile = await Course.findById(req.params.id);
  const RollNumber = req.body.roll_number;
  const selected_user = await User.find({ roll_number: RollNumber });
  if (selected_user.length == 0) {
    res.status(400).json('User not found');
  }
  else {
    let new_data = await match_face(RollNumber);
    if (new_data == "[True]\n") {
      present_a_user(req, res, profile, selected_user);
    }
    else if (new_data == "[False]\n") {
      res.status(400).json('Face not matched');
    }
    else if (new_data == "0\n") {
      res.status(400).json('face cannot be found try with clear background');
    }
    else {
      res.status(400).json('try again');
    }
  }
});
app.get("/api/admin/course/users/:id", get_all_user_in_course);


mongoose.connect(process.env.MONGO_URI).then(() => { });
const start = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(PORT, () => {
        console.log("Connected to database");
        console.log(`Listening on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
start();