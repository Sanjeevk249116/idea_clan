

import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./signUpForm.css";
import { useContext, useEffect, useState } from "react";
import { CircularProgress, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginData, signupPost } from "../../redux/action";
import { AuthContextData } from "../../authProvider/AuthContainer";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Password must be at least 2 characters")
    .required("Required"),

 
});

function SigninForm() {
  const toast = useToast();
  const {setAuthentication}=useContext(AuthContextData)
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const resData = useSelector((pre) => pre.reducer);

  const [signin, SetSignin] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (resData.status >= 400 && resData.status<500) {
      toast({
        title: "Email is not exist or wrong password ",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (resData.status === 200) {
      toast({
        title: "Login successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setAuthentication(resData.signupData)
      navigate("/home")
    }
     else if(resData.status >= 600 && resData.status<700)  {
      toast({
        title: "something wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      
    }
 
  }, [resData.status]);
  return (
    <div className="signup-container">
      <div className="flex flex-center flex-col">
        {/* <img src="../../../public/assets/images/logo.svg" alt="signLogo" /> */}
        <p className="text-2xl md:text-2xl font-bold text-center py-5">
  Login Your Account
</p>
      </div>
      <Formik
        initialValues={{
          Name: "",
          email: "",
          password: "",
         }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          setLoading(true);
          // SetSignup({...signup,email:values.email,name:values.Name,password:values.password})
          dispatch(
            loginData({
              email: values.email,
              name: values.Name,
              password: values.password,
            })
          )
            .then(() => SetSignin(values))
            .then(() => setLoading(false));
        }}
      >
        {({ errors, touched }) => (
          <Form className="signup-form">
            <div className="form-group">
              <label>Name:</label>
              <Field
                name="Name"
                placeholder="First Name"
                className="form-control"
              />
              {errors.Name && touched.Name ? (
                <div className="error">{errors.Name}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label>Email:</label>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <Field
                name="password"
                type="password"
                placeholder="password"
                className="form-control"
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
            
            <button type="submit" className="btn btn-primary">
              {loading ? (
                <CircularProgress isIndeterminate size="35px" color="red.500" />
              ) : (
                <> Submit</>
              )}
            </button>
          </Form>
        )}
      </Formik>
      <div className="mt-3 text-center">
        <p>
          Create a new Acoount ?{" "}
          <Link to={"/"}>
            <span className="text-blue-400 underline ">Signup</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default SigninForm;

