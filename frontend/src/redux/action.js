import axios from "axios";
import {
  GETCOURSE,
  GETSCHEDULE,
  GETSTUDENTCOURSE,
  STUDENTCOURSE,
  SignUpData,
} from "./actionType";
const url = "http://localhost:9090";

export const signupPost = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/signup`, el);
  dispatch({ type: SignUpData, payload: res.data });
};

export const loginData = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/login`, el);
  dispatch({ type: SignUpData, payload: res.data });
};
export const courseData = (el) => async (dispatch) => {
  const res = await axios.get(`${url}/coursedetails`);
  dispatch({ type: GETCOURSE, payload: res.data });
};

export const studentData = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/student`, el);
  dispatch({ type: STUDENTCOURSE, payload: res.data });
};

export const GetstudentData = (el) => async (dispatch) => {
  const res = await axios.get(`${url}/courseGetdetails`, {
    headers: {
      email: el,
    },
  });

  dispatch({ type: GETSTUDENTCOURSE, payload: res.data });
};

export const GetscheduleData = () => async (dispatch) => {
  const res = await axios.get(`${url}/getschedule`);

  dispatch({ type: GETSCHEDULE, payload: res.data });
};
