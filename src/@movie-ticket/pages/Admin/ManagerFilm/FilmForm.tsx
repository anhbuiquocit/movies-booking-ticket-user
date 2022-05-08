import React, { FC } from "react";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import { CustomErrorComponent } from "@movie-ticket/components/CustomErrorComponent";
import {
  Button,
  Switch,
  Dropdown,
  Select,
  Breadcrumb,
  Upload,
  message,
  Input,
} from "antd";
import Routers from "@movie-ticket/routers/router";
import { Link } from "react-router-dom";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index";
import Dropzone from "react-dropzone";
import * as Yup from "yup";
interface FilmForm {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  i18n: any;
  isCreate: boolean;
}
const FilmForm: FC<FilmForm> = ({ onSubmit, i18n, isCreate }) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.adminHome}>DashBoard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.managerFilm}>Quản lý phim</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {/* {isDetailUser ? (
            <Link to={Routers.detailUser}>Tạo người dùng</Link>
          ) : (
            <Link to={Routers.createUser}>Tạo người dùng</Link>
          )} */}
          <Link to={Routers.createFilm}>Tạo phim</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Màn hình tạo phim</h2>
      <Formik
        enableReinitialize
        initialValues={{
          confirm: false,
          name: "",
          trailler: "",
          director: "",
          actor: "",
          description: "",
          time: "",
          image: [],
          image1: [],
          image2: [],
          image3: [],
        }}
        // validationSchema={validationSchema}
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
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managerFilm.name")}
                    </div>
                    <div className="col-sm">
                      <Input
                        // value={values.email}
                        name="name"
                        onChange={(e) => {
                          setFieldValue("name", e.target.value);
                        }}
                      />
                      {/* <CustomErrorComponent msg={errors.email} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managerFilm.trailler")}
                    </div>
                    <div className="col-sm">
                      <Input
                        // value={values.email}
                        name="trailler"
                        onChange={(e) => {
                          setFieldValue("trailler", e.target.value);
                        }}
                      />
                      {/* <CustomErrorComponent msg={errors.email} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managerFilm.description")}
                    </div>
                    <div className="col-sm">
                      <Input
                        // value={values.email}
                        name="description"
                        onChange={(e) => {
                          setFieldValue("description", e.target.value);
                        }}
                      />
                      {/* <CustomErrorComponent msg={errors.email} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managerFilm.director")}
                    </div>
                    <div className="col-sm">
                      <Input
                        // value={values.email}
                        name="director"
                        onChange={(e) => {
                          setFieldValue("director", e.target.value);
                        }}
                      />
                      {/* <CustomErrorComponent msg={errors.email} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managerFilm.actor")}
                    </div>
                    <div className="col-sm">
                      <Input
                        // value={values.email}
                        name="actor"
                        onChange={(e) => {
                          setFieldValue("actor", e.target.value);
                        }}
                      />
                      {/* <CustomErrorComponent msg={errors.email} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managerFilm.time")}
                    </div>
                    <div className="col-sm">
                      <Input
                        // value={values.email}
                        name="time"
                        onChange={(e) => {
                          setFieldValue("time", e.target.value);
                        }}
                      />
                      {/* <CustomErrorComponent msg={errors.email} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managerFilm.image")}
                    </div>
                    <div className="col-sm">
                      <Dropzone
                        onDrop={(files) => {
                          if (files.length > 0) {
                            setFieldValue("image", files[0]);
                          }
                        }}
                        multiple={false}
                      >
                        {({ getRootProps, getInputProps, acceptedFiles }) => (
                          <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            {acceptedFiles.length === 0 ? (
                              <p>Chọn ảnh</p>
                            ) : (
                              <ul>
                                {acceptedFiles && acceptedFiles.length > 0
                                  ? acceptedFiles.map((file) => (
                                      <img
                                        alt="loading"
                                        src={`${
                                          values.image
                                            ? URL.createObjectURL(file)
                                            : null
                                        }`}
                                      />
                                    ))
                                  : values.image &&
                                    values.image.length > 0 && (
                                      <img
                                        alt="loading"
                                        src={`${
                                          values.image ? values.image : ""
                                        }`}
                                      />
                                    )}
                              </ul>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {/* {i18n.t("main.managementUser.role")} */}
                      {i18n.t("main.managerFilm.image1")}
                    </div>
                    <div className="col-sm">
                      <Dropzone
                        onDrop={(files) => {
                          if (files.length > 0) {
                            setFieldValue("image1", files[0]);
                          }
                        }}
                        multiple={false}
                      >
                        {({ getRootProps, getInputProps, acceptedFiles }) => (
                          <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            {acceptedFiles.length === 0 ? (
                              <p>Chọn ảnh</p>
                            ) : (
                              <ul>
                                {acceptedFiles && acceptedFiles.length > 0
                                  ? acceptedFiles.map((file) => (
                                      <img
                                        alt="loading"
                                        src={`${
                                          values.image
                                            ? URL.createObjectURL(file)
                                            : null
                                        }`}
                                      />
                                    ))
                                  : values.image1 &&
                                    values.image1.length > 0 && (
                                      <img
                                        alt="loading"
                                        src={`${
                                          values.image1 ? values.image1 : ""
                                        }`}
                                      />
                                    )}
                              </ul>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {/* {i18n.t("main.managementUser.role")} */}
                      {i18n.t("main.managerFilm.image2")}
                    </div>
                    <div className="col-sm">
                      <Dropzone
                        onDrop={(files) => {
                          if (files.length > 0) {
                            setFieldValue("image2", files[0]);
                          }
                        }}
                        multiple={false}
                      >
                        {({ getRootProps, getInputProps, acceptedFiles }) => (
                          <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            {acceptedFiles.length === 0 ? (
                              <p>Chọn ảnh</p>
                            ) : (
                              <ul>
                                {acceptedFiles && acceptedFiles.length > 0
                                  ? acceptedFiles.map((file) => (
                                      <img
                                        alt="loading"
                                        src={`${
                                          values.image2
                                            ? URL.createObjectURL(file)
                                            : null
                                        }`}
                                      />
                                    ))
                                  : values.image2 &&
                                    values.image2.length > 0 && (
                                      <img
                                        alt="loading"
                                        src={`${
                                          values.image2 ? values.image2 : ""
                                        }`}
                                      />
                                    )}
                              </ul>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {/* {i18n.t("main.managementUser.role")} */}
                      {i18n.t("main.managerFilm.image3")}
                    </div>
                    <div className="col-sm">
                      <Dropzone
                        onDrop={(files) => {
                          if (files.length > 0) {
                            setFieldValue("image3", files[0]);
                          }
                        }}
                        multiple={false}
                      >
                        {({ getRootProps, getInputProps, acceptedFiles }) => (
                          <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            {acceptedFiles.length === 0 ? (
                              <p>Chọn ảnh</p>
                            ) : (
                              <ul>
                                {acceptedFiles && acceptedFiles.length > 0
                                  ? acceptedFiles.map((file) => (
                                      <img
                                        alt="loading"
                                        src={`${
                                          values.image3
                                            ? URL.createObjectURL(file)
                                            : null
                                        }`}
                                      />
                                    ))
                                  : values.image3 &&
                                    values.image3.length > 0 && (
                                      <img
                                        alt="loading"
                                        src={`${
                                          values.image3 ? values.image3 : ""
                                        }`}
                                      />
                                    )}
                              </ul>
                            )}
                          </div>
                        )}
                      </Dropzone>
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
                    {isCreate
                      ? i18n.t("main.button.create")
                      : i18n.t("main.button.update")}
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

export default FilmForm;
