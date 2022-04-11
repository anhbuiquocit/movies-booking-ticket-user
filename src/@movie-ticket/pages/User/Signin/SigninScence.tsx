import React, { useEffect } from "react";
import "./style.css";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, FormikHelpers, Form } from "formik";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import i18n from "@movie-ticket/translation";
import * as Yup from "yup";
export interface SigninProps {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
}
const SigninScence = ({ onSubmit }: SigninProps): JSX.Element => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().nullable().required("Không được để trống"),
    password: Yup.string().nullable().required("Không đƯợc để trống"),
  });
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirm: false,
        }}
        // onSubmit={onSubmit}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          touched,
          setTouched,
          validateForm,
        }) => {
          console.log("Errors : ", errors);
          return (
            <Form>
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
                            value={values.username}
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
                            value={values.password}
                            type="password"
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
                          {/* <Button
                          variant="outlined"
                          onClick={async () => {
                            // console.log(
                            //   "Values in formik props state: ",
                            //   values
                            // );
                            const response = await validateForm();
                            if (Object.keys(response).length) {
                              // @ts-ignore
                              setTouched(response);
                            } else {
                              setFieldValue("confirm", true);
                            }
                          }}
                        >
                          Đăng ký
                        </Button> */}
                          <Button
                            variant="outlined"
                            type="submit"
                            id="submit"
                            name="submit"
                          >
                            {i18n.t("main.pageSignin.signin")}
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
                    {/* <ConfirmationModal
                    isSubmitting={isSubmitting}
                    values={values}
                    confirmationMessage="Bạn chắc chắn chứ?"
                    handleSubmit={handleSubmit}
                    setFieldValue={setFieldValue}
                  /> */}
                  </div>
                </div>
              </section>
            </Form>
          );
        }}
      </Formik>
      ;
    </>
  );
};

export default SigninScence;
