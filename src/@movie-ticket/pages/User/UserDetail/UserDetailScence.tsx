import React, { FC } from "react";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import { Avatar, Image, Input } from "antd";
import Button from "@mui/material/Button";
import { CustomErrorComponent } from "@movie-ticket/components/CustomErrorComponent";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import AdapterJalali from "@date-io/date-fns/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/index";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index";
import { User } from "@movie-ticket/constant/modal";
import moment from "moment";
import * as Yup from "yup";

interface UserDetailProps {
  onSubmit: (values: any, helper: FormikHelpers<any>) => void;
  i18n: any;
  userData: User;
}
export const UserDetailScence: FC<UserDetailProps> = ({
  onSubmit,
  i18n,
  userData,
}): JSX.Element => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(
      `${i18n.t("main.userDetail.firstname")} ${i18n.t(
        "main.validation.required"
      )}`
    ),
    lastname: Yup.string().required(
      `${i18n.t("main.userDetail.lastname")} ${i18n.t(
        "main.validation.required"
      )}`
    ),
    // username: Yup.string().required(
    //   `${i18n.t("main.userDetail.username")} ${i18n.t(
    //     "main.validation.required"
    //   )}`
    // ),
    birthday: Yup.string().required(
      `${i18n.t("main.userDetail.birthday")} ${i18n.t(
        "main.validation.required"
      )}`
    ),
    email: Yup.string()
      .email(i18n.t("main.validation.isMail"))
      .required(
        `${i18n.t("main.userDetail.email")} ${i18n.t(
          "main.validation.required"
        )}`
      ),
    phone: Yup.string().required(
      `${i18n.t("main.userDetail.phone")} ${i18n.t("main.validation.required")}`
    ),
    address: Yup.string().required(
      `${i18n.t("main.userDetail.address")} ${i18n.t(
        "main.validation.required"
      )}`
    ),
  });
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          firstname: userData?.firstname,
          lastname: userData?.lastname,
          username: userData?.username,
          birthday: userData?.birthday,
          email: userData?.email,
          phone: userData?.phone,
          point: userData?.phone,
          address: userData?.address,
          role: userData?.phone,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
            <Form>
              <div className="container pt-200 pb-50">
                <div className="main-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-column align-items-center text-center" />
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            alt="Admin"
                            className="rounded-circle p-1 bg-primary"
                            width="110"
                          />
                          {/* <Avatar
                          src={
                            <Image
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              style={{ width: 32 }}
                            />
                          }
                        /> */}
                          <div className="mt-3">
                            <h4>{`${userData?.firstname} ${userData?.lastname}`}</h4>
                            {/* <p className="text-secondary mb-1">
                              Full Stack Developer
                            </p> */}
                            <p className="text-muted font-size-sm">
                              {userData?.address}
                            </p>
                            {/* <button className="btn btn-primary">Follow</button>
                            <button className="btn btn-outline-primary">
                              Message
                            </button> */}
                          </div>
                        </div>
                        <hr className="my-4" />
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-globe me-2 icon-inline"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                              </svg>
                              Website
                            </h6>
                            <span className="text-secondary">
                              https://bootdey.com
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-github me-2 icon-inline"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                              Github
                            </h6>
                            <span className="text-secondary">bootdey</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-twitter me-2 icon-inline text-info"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                              Twitter
                            </h6>
                            <span className="text-secondary">@bootdey</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-instagram me-2 icon-inline text-danger"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                  x1="17.5"
                                  y1="6.5"
                                  x2="17.51"
                                  y2="6.5"
                                ></line>
                              </svg>
                              Instagram
                            </h6>
                            <span className="text-secondary">bootdey</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-facebook me-2 icon-inline text-primary"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                              Facebook
                            </h6>
                            <span className="text-secondary">bootdey</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="card">
                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">
                                {i18n.t("main.userDetail.firstname")}
                              </h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <Input
                                name="firstname"
                                value={values.firstname}
                                onChange={(e) => {
                                  setFieldValue("firstname", e.target.value);
                                }}
                              />
                              <CustomErrorComponent msg={errors.firstname} />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">
                                {i18n.t("main.userDetail.lastname")}
                              </h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <Input
                                name="lastname"
                                value={values.lastname}
                                onChange={(e) => {
                                  setFieldValue("lastname", e.target.value);
                                }}
                              />
                              <CustomErrorComponent msg={errors.lastname} />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">
                                {i18n.t("main.userDetail.email")}
                              </h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <Input
                                name="email"
                                value={values.email}
                                onChange={(e) => {
                                  setFieldValue("email", e.target.value);
                                }}
                              />
                              <CustomErrorComponent msg={errors.email} />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">
                                {i18n.t("main.userDetail.birthday")}
                              </h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <LocalizationProvider dateAdapter={AdapterJalali}>
                                <div className="date-picker-birthday-container">
                                  <DatePicker
                                    label={i18n.t("main.userDetail.birthday")}
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
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">
                                {i18n.t("main.userDetail.username")}
                              </h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <Input
                                name="username"
                                value={values.username}
                                onChange={(e) => {
                                  setFieldValue("username", e.target.value);
                                }}
                                disabled
                              />
                              {/* <CustomErrorComponent msg={errors.lastname}/> */}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">
                                {i18n.t("main.userDetail.address")}
                              </h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <Input
                                name="address"
                                value={values.address}
                                onChange={(e) => {
                                  setFieldValue("address", e.target.value);
                                }}
                              />
                              <CustomErrorComponent msg={errors.lastname} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                              <Button
                                variant="outlined"
                                onClick={async () => {
                                  const response = await validateForm();
                                  if (Object.keys(response).length) {
                                    // @ts-ignore
                                    setTouched(response);
                                  } else {
                                    setFieldValue("confirm", true);
                                    // handleSubmit();
                                  }
                                }}
                              >
                                {i18n.t("main.userDetail.update")}
                              </Button>
                            </div>
                          </div>
                          <ConfirmationModal
                            isSubmitting={isSubmitting}
                            values={values}
                            confirmationMessage="Bạn chắc chắn chứ?"
                            handleSubmit={handleSubmit}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
