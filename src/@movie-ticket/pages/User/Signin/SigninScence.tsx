import React from "react";
import "./style.css";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, FormikHelpers } from "formik";
import Inputs from "./index";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
export interface SigninProps {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => Promise<void>;
}
const SigninScence = ({ onSubmit }: SigninProps): JSX.Element => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          touched,
        }) => {
          return (
            <section className="account-section bg_img">
              <div className="container">
                <div className="padding-top padding-bottom">
                  <div className="account-area">
                    <div className="section-header-3">
                      <span className="cate">Hello</span>
                      <h2 className="title">WELCOME BACK </h2>
                    </div>
                    <div className="account-form">
                      <div className="form-group">
                        {" "}
                        <TextField
                          helperText="Please enter your username"
                          label="username"
                          name="username"
                          size="small"
                          className="mui-textfield-signin"
                          onChange={(e) => {
                            setFieldValue("username", e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        {" "}
                        <TextField
                          helperText="Please enter your password"
                          label="password"
                          name="password"
                          size="small"
                          className="mui-textfield-signin"
                          onChange={(e) => {
                            setFieldValue("password", e.target.value);
                          }}
                        />
                      </div>
                      <div
                        className="form-group checkgroup"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <input type="checkbox" id="bal" required checked />
                          <label htmlFor="bal">Remember Password</label>
                        </div>
                        <div>
                          <label>Forget Password</label>
                        </div>
                      </div>
                      <div
                        className="form-group text-center button-signin"
                        style={{ display: "flex" }}
                      >
                        <Button
                          variant="outlined"
                          onClick={() => {
                            console.log(
                              "Values in formik props state: ",
                              values
                            );
                          }}
                        >
                          Đăng ký
                        </Button>
                      </div>
                    </div>
                    <div className="option">
                      Don't have an account?{" "}
                      <a href="sign-in.html">Sign up now</a>
                    </div>
                    <div className="or">
                      <span>Or</span>
                    </div>
                    <ul className="social-icons">
                      <li>
                        <a href="#0">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="active">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="fab fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </section>
          );
        }}
      </Formik>
      ;
    </>
  );
};

export default SigninScence;
