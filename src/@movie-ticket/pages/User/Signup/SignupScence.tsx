import React from "react";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import {
  InfoCircleOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Router from "@movie-ticket/routers/router";
import Button from "@mui/material/Button";
import { CustomErrorComponent } from "@movie-ticket/components/CustomErrorComponent";
import AdapterJalali from "@date-io/date-fns/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index";
import moment from "moment";
import * as Yup from "yup";
import { Input, Tooltip } from "antd";
import { ValuesOfCorrectTypeRule } from "graphql";
interface SignupProps {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  i18n: any;
}
export const SignupScence = ({ onSubmit, i18n }: SignupProps): JSX.Element => {
  const validationSchema = Yup.object()
    .shape({
      firstname: Yup.string()
        .nullable()
        .required(
          `${i18n.t("main.pageSignup.firstname")} ${i18n.t(
            "main.validation.required"
          )}`
        ),
      lastname: Yup.string()
        .nullable()
        .required(
          `${i18n.t("main.pageSignup.lastname")} ${i18n.t(
            "main.validation.required"
          )}`
        ),
      username: Yup.string()
        .nullable()
        .required(
          `${i18n.t("main.pageSignup.username")} ${i18n.t(
            "main.validation.required"
          )}`
        ),
      password: Yup.string()
        .nullable()
        .required(
          `${i18n.t("main.pageSignup.password")} ${i18n.t(
            "main.validation.required"
          )}`
        ),
      birthday: Yup.string()
        .nullable()
        .required(
          `${i18n.t("main.pageSignup.birthday")} ${i18n.t(
            "main.validation.required"
          )}`
        ),
      email: Yup.string()
        .email()
        .required(
          `${i18n.t("main.pageSignup.email")} ${i18n.t(
            "main.validation.required"
          )}`
        ),
      confirmPassword: Yup.string()
        .nullable()
        .required(
          `${i18n.t("main.pageSignup.confirmPassword")} ${i18n.t(
            "main.validation.required"
          )}`
        ),
    })
    .test("validate_password", "Kiểm tra lại mật khẩu", (val) => {
      if (val.password === val.confirmPassword) {
        return true;
      }
      return false;
    });
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          firstname: "",
          lastname: "",
          username: "",
          password: "",
          birthday: "",
          email: "",
          confirmPassword: "",
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
            <section className="account-section bg_img">
              <div className="container">
                <div className="padding-top padding-bottom">
                  <div className="account-area">
                    <div className="section-header-3">
                      <span className="cate">Chào mừng bạn</span>
                      <h2 className="title">đến với alpha </h2>
                    </div>
                    <Form className="account-form">
                      <div className="form-group">
                        <p>{i18n.t("main.pageSignup.firstname")}</p>
                        <Input
                          placeholder={i18n.t(
                            "main.pageSignup.placeHolder.firstname"
                          )}
                          value={values.firstname}
                          onChange={(e) => {
                            setFieldValue("firstname", e.target.value);
                          }}
                          style={{ color: "#000" }}
                          suffix={
                            <Tooltip title="Extra information">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                        />
                        <CustomErrorComponent msg={errors.firstname} />
                      </div>
                      <div className="form-group">
                        <p>{i18n.t("main.pageSignup.lastname")}</p>
                        <Input
                          placeholder={i18n.t(
                            "main.pageSignup.placeHolder.lastname"
                          )}
                          value={values.lastname}
                          onChange={(e) => {
                            setFieldValue("lastname", e.target.value);
                          }}
                          suffix={
                            <Tooltip title="Extra information">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                        />
                        <CustomErrorComponent msg={errors.lastname} />
                      </div>
                      <div className="form-group">
                        <p>{i18n.t("main.pageSignup.username")}</p>
                        <Input
                          placeholder={i18n.t(
                            "main.pageSignup.placeHolder.username"
                          )}
                          value={values.username}
                          onChange={(e) => {
                            setFieldValue("username", e.target.value);
                          }}
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Extra information">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                        />
                        <CustomErrorComponent msg={errors.username} />
                      </div>
                      <div className="form-group">
                        <p>{i18n.t("main.pageSignup.email")}</p>
                        <Input
                          placeholder={i18n.t(
                            "main.pageSignup.placeHolder.email"
                          )}
                          value={values.email}
                          onChange={(e) => {
                            setFieldValue("email", e.target.value);
                          }}
                          prefix={
                            <MailOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Extra information">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                        />
                        <CustomErrorComponent msg={errors.email} />
                      </div>
                      <div className="form-group">
                        <p>Ngày sinh</p>
                        <LocalizationProvider dateAdapter={AdapterJalali}>
                          <div className="date-picker-birthday-container">
                            <DatePicker
                              // label="Basic example"
                              value={values?.birthday}
                              onChange={(value) => {
                                setFieldValue(
                                  "birthday",
                                  moment.utc(value).toISOString()
                                );
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </div>
                        </LocalizationProvider>
                        <CustomErrorComponent msg={errors.birthday} />
                      </div>
                      <div className="form-group">
                        <p>{i18n.t("main.pageSignup.password")}</p>
                        <Input.Password
                          name="password"
                          value={values.password}
                          onChange={(e) => {
                            setFieldValue("password", e.target.value);
                            if (e.target.value !== values.confirmPassword) {
                              setErrors({
                                confirmPassword: "Kiểm tra lại mật khẩu",
                              });
                            }
                          }}
                          placeholder={i18n.t(
                            "main.pageSignup.placeHolder.username"
                          )}
                        />
                        <CustomErrorComponent msg={errors.password} />
                      </div>
                      <div className="form-group">
                        <p>{i18n.t("main.pageSignup.confirmPassword")}</p>
                        <Input.Password
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={(e) => {
                            setFieldValue("confirmPassword", e.target.value);
                            if (e.target.value !== values.password) {
                              setErrors({
                                password: "Kiểm tra lại mật khẩu",
                              });
                            }
                          }}
                          placeholder={i18n.t(
                            "main.pageSignup.placeHolder.confirmPassword"
                          )}
                        />
                        <CustomErrorComponent msg={errors.confirmPassword} />
                      </div>
                      <div className="form-group checkgroup">
                        <input type="checkbox" id="bal" required checked />
                        <label htmlFor="bal">
                          I agree to the <a href="#0">Terms, Privacy Policy</a>{" "}
                          and <a href="#0">Fees</a>
                        </label>
                      </div>
                      <div
                        className="form-group text-center"
                        style={{ display: "flex" }}
                      >
                        {/* <input type="submit" value="Sign Up" /> */}
                        <Button
                          variant="outlined"
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
                          {i18n.t("main.pageSignup.button.signup")}
                        </Button>
                      </div>
                    </Form>
                    <div className="option">
                      Bạn đã có tài khoản? <a href={Router.userSignin}>Đăng nhập</a>
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
    </>
  );
};
