import React, { FC } from "react";
import CustomModal from "@movie-ticket/components/ModalRouter";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import { Input } from "antd";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { CustomErrorComponent } from "@movie-ticket/components/CustomErrorComponent";
import {
  Button,
  Switch,
  Dropdown,
  Select,
  Breadcrumb,
  Upload,
  message,
} from "antd";
import AdapterJalali from "@date-io/date-fns/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/index";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index";
import moment from "moment";
import { Link } from "react-router-dom";
import { FORMAT_DATE_TIME } from "@movie-ticket/constant";
import Routers from "@movie-ticket/routers/router";
import * as Yup from "yup";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import { DropzoneArea } from "react-mui-dropzone";
import { User } from "@movie-ticket/constant/modal";

const { Dragger } = Upload;
interface UserFormProps {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  i18n: any;
  userData?: User;
  isDetailUser?: Boolean;
}
const { Option } = Select;
const UserForm: FC<UserFormProps> = ({
  onSubmit,
  i18n,
  userData,
  isDetailUser,
}) => {
 
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .trim()
      .nullable()
      .required(
        `${i18n.t("main.managementUser.firstname")} ${i18n.t(
          "main.validation.required"
        )}`
      ),
    lastname: Yup.string()
      .trim()
      .nullable()
      .required(
        `${i18n.t("main.managementUser.lastname")} ${i18n.t(
          "main.validation.required"
        )}`
      ),
    birthday: Yup.date().required(
      `${i18n.t("main.managementUser.birthday")} ${i18n.t(
        "main.validation.required"
      )}`
    ),
    email: Yup.string()
      .trim()
      .nullable()
      .email()
      .required(
        `${i18n.t("main.managementUser.email")} ${i18n.t(
          "main.validation.required"
        )}`
      ),
    username: Yup.string()
      .trim()
      .nullable()
      .required(
        `${i18n.t("main.managementUser.username")} ${i18n.t(
          "main.validation.required"
        )}`
      ),
  });
  const props: any = {
    action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture",
    previewFile(file) {
      // Your process logic. Here we just mock to the same file
      return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
        method: "POST",
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };
  const closeModal = () => {};
  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        // setProgress(percent);
        // if (percent === 100) {
        //   setTimeout(() => setProgress(0), 1000);
        // }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("image", file);
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        fmData,
        config
      );

      onSuccess("Ok");
    } catch (err) {
      const error = new Error("Some error");
      onError({ err });
    }
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.adminHome}>DashBoard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.managementUser}>Quản lý người dùng</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {isDetailUser ? (
            <Link to={Routers.detailUser}>Tạo người dùng</Link>
          ) : (
            <Link to={Routers.createUser}>Tạo người dùng</Link>
          )}
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Màn hình tạo người dùng</h2>
      <Formik
        enableReinitialize
        initialValues={{
          confirm: false,
          firstname: userData?.firstname || "",
          lastname: userData?.lastname || "",
          birthday: userData?.birthday || "",
          email: userData?.email || "",
          username: userData?.username || "",
          active: userData && userData.active ? userData.active : true,
          role: userData?.role || "user",
          password: "",
          fileImage: [],
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
            <div className="container pt-50">
              <div className="row">
                <div className="col-sm">
                  {i18n.t("main.managementUser.firstname")}
                </div>
                <div className="col-sm">
                  <Input
                    name="fistname"
                    value={values.firstname}
                    onChange={(e) => {
                      setFieldValue("firstname", e.target.value);
                    }}
                  />
                  <CustomErrorComponent msg={errors.firstname} />
                </div>
                <div className="col-sm">
                  {i18n.t("main.managementUser.lastname")}
                </div>
                <div className="col-sm">
                  <Input
                    value={values.lastname}
                    name="lastname"
                    onChange={(e) => {
                      setFieldValue("lastname", e.target.value);
                    }}
                  />
                  <CustomErrorComponent msg={errors.lastname} />
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">Ngày sinh</div>
                    <div className="col-sm">
                      <LocalizationProvider dateAdapter={AdapterJalali}>
                        <DatePicker
                          // label="Basic example"
                          value={moment(values.birthday)}
                          onChange={(value) => {
                            setFieldValue(
                              "birthday",
                              moment(value).format(FORMAT_DATE_TIME)
                            );
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                      <CustomErrorComponent msg={errors.birthday} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managementUser.email")}
                    </div>
                    <div className="col-sm">
                      <Input
                        value={values.email}
                        name="email"
                        onChange={(e) => {
                          setFieldValue("email", e.target.value);
                        }}
                      />
                      <CustomErrorComponent msg={errors.email} />
                    </div>
                  </div>
                </div>
              </div>
              {isDetailUser ? null : (
                <div className="row pt-20">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-sm">
                        {i18n.t("main.managementUser.username")}
                      </div>
                      <div className="col-sm">
                        <Input
                          value={values.username}
                          name="username"
                          onChange={(e) => {
                            setFieldValue("username", e.target.value);
                          }}
                        />
                        <CustomErrorComponent msg={errors.username} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isDetailUser ? null : (
                <div className="row pt-20">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-sm">
                        {i18n.t("main.managementUser.password")}
                      </div>
                      <div className="col-sm">
                        <Input.Password
                          name="password"
                          onChange={(e) => {
                            setFieldValue("password", e.target.value);
                          }}
                        />
                        <CustomErrorComponent msg={errors.password} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managementUser.active")}
                    </div>
                    <div className="col-sm">
                      <Switch
                        checked={Boolean(values.active)}
                        onChange={(e) => {
                          setFieldValue("active", e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managementUser.role")}
                    </div>
                    <div className="col-sm">
                      <Select
                        defaultValue={"user"}
                        value={values.role}
                        style={{ width: 120 }}
                        onChange={(e) => {
                          setFieldValue("role", e);
                        }}
                      >
                        <Option value="user">Người dùng</Option>
                        <Option value="userPremium">Người dùng cao cấp</Option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {/* {i18n.t("main.managementUser.role")} */}
                      Ảnh đại diện
                    </div>
                    <div className="col-sm">
                      <input
                        type="file"
                        name="fileimage"
                        onChange={(file) => {
                          setFieldValue("fileImage", file.target.files);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end pt-20">
                <div className="button-container">
                  <Button
                    onClick={async () => {
                      const response = await validateForm();
                      if (Object.keys(response).length) {
                        // @ts-ignore
                        setTouched(response);
                      } else {
                        setFieldValue("confirm", true);
                      }
                    }}
                  >
                    {isDetailUser
                      ? i18n.t("main.button.update")
                      : i18n.t("main.button.create")}
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
          );
        }}
      </Formik>
    </>
  );
};
export default UserForm;
