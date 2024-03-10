const express = require("express");
const { PostSigup, PostLogin } = require("../allOtherPart/sign");
const {
  courseDetails,
  getCourse,
  studentcourse,
  studentGetcourse,
  scheduleLecture,
  getscheduleLecture,
} = require("../allOtherPart/course");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.send({ msg: "get data" });
});

Router.post("/signup", PostSigup);
Router.post("/login", PostLogin);
Router.post("/course", courseDetails);
Router.post("/student", studentcourse);
Router.get("/coursedetails", getCourse);
Router.get("/courseGetdetails", studentGetcourse);
Router.post("/schedule", scheduleLecture);
Router.get("/getschedule", getscheduleLecture);
module.exports = { Router };
