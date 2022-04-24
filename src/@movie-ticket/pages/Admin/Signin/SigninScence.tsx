import React, { FC } from "react";
import moment from "moment";
import * as Yup from "yup";
import { Input, Button } from "antd";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import { CustomErrorComponent } from "@movie-ticket/components/CustomErrorComponent";
interface SigininAdminProps {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
}
const SigninScence: FC<SigininAdminProps> = ({ onSubmit }): JSX.Element => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().nullable().required("Nhập username"),
    password: Yup.string().nullable().required("Nhập password"),
  });
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          username: "",
          password: "",
          confirm: false,
        }}
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
          setErrors,
        }) => {
          return (
            <main className="main-content  mt-0">
              <div
                className="page-header align-items-start min-vh-100"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
                }}
              >
                <span className="mask bg-gradient-dark opacity-6"></span>
                <div className="container my-auto">
                  <div className="row">
                    <div className="col-lg-4 col-md-8 col-12 mx-auto">
                      <div className="card z-index-0 fadeIn3 fadeInBottom">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                          <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                              Sign in
                            </h4>
                            <div className="row mt-3">
                              <div className="col-2 text-center ms-auto">
                                <a
                                  className="btn btn-link px-3"
                                  href="javascript:;"
                                >
                                  <i className="fa fa-facebook text-white text-lg"></i>
                                </a>
                              </div>
                              <div className="col-2 text-center px-1">
                                <a
                                  className="btn btn-link px-3"
                                  href="javascript:;"
                                >
                                  <i className="fa fa-github text-white text-lg"></i>
                                </a>
                              </div>
                              <div className="col-2 text-center me-auto">
                                <a
                                  className="btn btn-link px-3"
                                  href="javascript:;"
                                >
                                  <i className="fa fa-google text-white text-lg"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <Form>
                            <div className="input-group input-group-outline my-3">
                              <label className="form-label">Email</label>
                              <Input
                                name="username"
                                onChange={(e) => {
                                  setFieldValue("username", e.target.value);
                                }}
                              />
                              <CustomErrorComponent msg={errors.username} />
                            </div>
                            <div className="input-group input-group-outline mb-3">
                              <label className="form-label">Password</label>
                              <Input.Password
                                name="password"
                                value={values.password}
                                onChange={(e) => {
                                  setFieldValue("password", e.target.value);
                                }}
                                // placeholder={i18n.t(
                                //   "main.pageSignup.placeHolder.confirmPassword"
                                // )}
                              />
                              <CustomErrorComponent msg={errors.password} />
                            </div>
                            <div className="form-check form-switch d-flex align-items-center mb-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="rememberMe"
                              />
                              <label className="form-check-label mb-0 ms-2">
                                Remember me
                              </label>
                            </div>
                            <div className="text-center">
                              {/* <button
                                type="button"
                                className="btn bg-gradient-primary w-100 my-4 mb-2"
                              >
                                Sign in
                              </button> */}

                              <Button
                                className="btn bg-gradient-primary w-100 my-4 mb-2"
                                onClick={async () => {
                                  const response = await validateForm();
                                  if (Object.keys(response).length) {
                                    // @ts-ignore
                                    setTouched(response);
                                  } else {
                                    setFieldValue("confirm", true);
                                    handleSubmit();
                                  }
                                }}
                              >
                                Sign in
                              </Button>
                            </div>
                            <p className="mt-4 text-sm text-center">
                              Don't have an account?
                              <a
                                href="../pages/sign-up.html"
                                className="text-primary text-gradient font-weight-bold"
                              >
                                Sign up
                              </a>
                            </p>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="footer position-absolute bottom-2 py-2 w-100">
                  <div className="container">
                    <div className="row align-items-center justify-content-lg-between">
                      <div className="col-12 col-md-6 my-auto">
                        <div className="copyright text-center text-sm text-white text-lg-start">
                          made with{" "}
                          <i className="fa fa-heart" aria-hidden="true"></i> by
                          <a
                            href="https://www.creative-tim.com"
                            className="font-weight-bold text-white"
                            target="_blank"
                          >
                            Creative Tim
                          </a>
                          for a better web.
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                          <li className="nav-item">
                            <a
                              href="https://www.creative-tim.com"
                              className="nav-link text-white"
                              target="_blank"
                            >
                              Creative Tim
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="https://www.creative-tim.com/presentation"
                              className="nav-link text-white"
                              target="_blank"
                            >
                              About Us
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="https://www.creative-tim.com/blog"
                              className="nav-link text-white"
                              target="_blank"
                            >
                              Blog
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="https://www.creative-tim.com/license"
                              className="nav-link pe-0 text-white"
                              target="_blank"
                            >
                              License
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </main>
          );
        }}
      </Formik>
    </>
  );
};

export default SigninScence;
