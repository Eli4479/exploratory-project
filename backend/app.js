const express = require("express");
require("express-async-errors");
const app = express();
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/routes.js");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8000;
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", true);
app.use("/api", router);


app.get("/", async (req, res) => {
  res.send("login");
});

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