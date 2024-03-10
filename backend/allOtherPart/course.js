const ScheduleModel = require("../models/Schedule");
const { CourseModel } = require("../models/courseModel");
const { StudentModel } = require("../models/studentmodel");

exports.courseDetails = (req, res) => {};

exports.getCourse = async (req, res) => {
  const data = await CourseModel.find();
  res.send({ msg: data });
};

exports.studentcourse = async (req, res) => {
  const data = await StudentModel(req.body);
  data.save();
  res.send({ msg: data });
};
exports.studentGetcourse = async (req, res) => {
  const { email } = req.headers;
  console.log(email);
  const data = await StudentModel.findOne({ email });
  console.log(data);
  res.send({ msg: data });
};

exports.scheduleLecture = async (req, res) => {
  const data = await ScheduleModel(req.body);
  data.save();
  res.send({ msg: data });
};

exports.getscheduleLecture = async (req, res) => {
  const data = await ScheduleModel.find();

  res.send({ msg: data });
};
