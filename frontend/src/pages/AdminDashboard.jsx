import { Box, CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { courseData, courseDataDelete, courseDataPost } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import App from "../courese/product/App";
import { AuthContextData } from "../authProvider/AuthContainer";

function AdminDashboard() {
  const { titles, setTitle } = useState(AuthContextData);
  const [courses, setCourses] = useState([]);
  const [check, setCheck] = useState(null);
  const [newCourse, setNewCourse] = useState({});
  console.log(check);
  const dispatch = useDispatch();
  const data = useSelector((pre) => pre.reducer);
  useEffect(() => {
    dispatch(courseData());
  }, []);
  useEffect(() => {
    setCourses(data.getCourseData);
  }, [data]);
  useEffect(() => {
    dispatch(courseDataDelete(check)).then(() => dispatch(courseData()));
  }, [check]);
  console.log(newCourse)
  useEffect(() => {
    if (
      newCourse.title &&
      newCourse.level &&
      newCourse.description &&
      newCourse.duration &&
      newCourse.instructor
    ) {
      dispatch(courseDataPost(newCourse)).then(() => dispatch(courseData()));
    }
  }, [newCourse]);
  return (
    <Box>
      {courses.length > 0 ? (
        <App
          products={courses}
          email={data.signupData.email}
          setCheck={setCheck}
          setNewCourse={setNewCourse}
        />
      ) : (
        <CircularProgress isIndeterminate color="red.500" />
      )}
    </Box>
  );
}

export default AdminDashboard;
