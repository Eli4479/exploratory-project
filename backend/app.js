const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const { spawn } = require("child_process");
const User = require("./models/user");
const Course = require("./models/course");
const router = require("./routes/routes.js");
const { present_a_user } = require("../backend/controllers/present_a_user.js");
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", true);

app.get("/", async (req, res) => {
  res.send("login");
});

app.use("/api", router);
app.use("/api/admin/course/user/:id", async (req, res) => {
  const RollNumber = req.body.roll_number;
  const course = await Course.findById(req.params.id);
  let the_user;
  for (const userId of course.users) {
    const user = await User.findById(userId);
    if (user.roll_number === RollNumber) {
      the_user = user;
      break;
    }
  }
  if (!the_user) {
    res.status(400).json("Users roll number not found in database");
  } else {
    const new_data = await match_face(the_user.profile_pic);
    console.log(new_data);
    if (new_data == "1") {
      present_a_user(req, res);
    } else if (new_data == "2") {
      res.status(400).json("Face not matched with the given roll number");
    } else if (new_data == "0") {
      res.status(400).json("face not found please try with clear background");
    } else {
      console.log(new_data);
      res.status(400).json("server error please try again later_");
    }
  }
});
async function match_face(pic) {
  return new Promise((resolve, reject) => {
    const python = spawn("python3", ["./match.py", pic]);
    let dataToSend2 = "0";
    python.stdout.on("data", (data) => {
      console.log("Pipe data from python script ...");
      let output = data.toString().trim();
      console.log(output);
      if (output === "True") {
        dataToSend2 = "1";
      } else if (output === "False") {
        dataToSend2 = "2";
      } else {
        dataToSend2 = "0";
      }
    });
    python.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      dataToSend2 = "0";
    });

    python.on("close", (code) => {
      console.log(`child process close all stdio with code ${code}`);
      resolve(dataToSend2);
    });

    python.on("error", (err) => {
      console.error(`Error spawning Python process: ${err}`);
      dataToSend2 = "0";
      resolve(dataToSend2);
    });
  });
}
app.put("/api/admin/course/user/:id", async (req, res) => {
  const RollNumber = req.body.roll_number;
  const course = await Course.findById(req.params.id);
  let the_user;
  for (const userId of course.users) {
    const user = await User.findById(userId);
    if (user.roll_number === RollNumber) {
      the_user = user;
      break;
    }
  }
  if (!the_user) {
    res.status(400).json("Users roll number not found in database");
  } else {
    const new_data = await match_face(the_user.profile_pic);
    console.log(new_data);
    if (new_data == "1") {
      present_a_user(req, res);
    } else if (new_data == "2") {
      res.status(400).json("Face not matched with the given roll number");
    } else if (new_data == "0") {
      res.status(400).json("face not found please try with clear background");
    } else {
      console.log(new_data);
      res.status(400).json("server error please try again later_");
    }
  }
});
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
