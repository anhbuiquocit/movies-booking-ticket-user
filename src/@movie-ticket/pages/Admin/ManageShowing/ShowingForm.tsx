import React, { FC, useEffect, useState } from "react";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import {
  Button,
  TimePicker,
  Breadcrumb,
  AutoComplete,
  Input,
  InputNumber,
} from "antd";
import Routers from "@movie-ticket/routers/router";
import { TextField, Autocomplete } from "@mui/material";
import { Link } from "react-router-dom";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";

import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index";
import Dropzone from "react-dropzone";
import * as Yup from "yup";
import { Film, Room, Showing } from "@movie-ticket/constant/modal";
import AdapterJalali from "@date-io/date-fns/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/index";
import moment from "moment";

interface ShowingFormProps {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  i18n: any;
  isCreate: boolean;
  films: Array<Film>;
  rooms: Array<Room>;
  data?: Showing;
}
const ShowingForm: FC<ShowingFormProps> = ({
  onSubmit,
  i18n,
  isCreate,
  films,
  rooms,
  data,
}) => {
  console.log("data: ", data);
  const [listFilm, setListFilm] = useState<Film[]>([]);
  const [listRoom, setListRoom] = useState<Room[]>([]);
  useEffect(() => {
    if (films) {
      let tempList: Array<Film> = [];
      for (let i = 0; i < films.length; i++) {
        let item = Object.assign({}, films[i], {
          value: films[i].id,
          label: films[i].name,
        });
        tempList.push(item);
      }
      setListFilm(tempList);
    }

    if (rooms) {
      let tempList: Array<Room> = [];
      for (let i = 0; i < rooms.length; i++) {
        let item = Object.assign({}, rooms[i], {
          value: rooms[i].id,
          label: rooms[i].name,
        });
        tempList.push(item);
      }
      setListRoom(tempList);
    }
  }, []);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>{i18n.t("main.home.home")}</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.adminHome}>DashBoard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.manageShowing}>
            {i18n.t("main.home.manager_showing")}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {/* {isDetailUser ? (
                <Link to={Routers.detailUser}>Tạo người dùng</Link>
              ) : (
                <Link to={Routers.createUser}>Tạo người dùng</Link>
              )} */}
          <Link to={Routers.createShowing}>
            {i18n.t("main.manageShowing.createShowing")}
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Màn hình tạo xuất chiếu</h2>
      <Formik
        enableReinitialize
        initialValues={{
          confirm: false,
          films: data?.FilmId
            ? listFilm.filter((item) => item.id === data?.FilmId)
            : listFilm,
          rooms: data?.RoomId
            ? rooms.filter((item) => item.id === data?.RoomId)
            : rooms,
          room: data?.RoomId || null,
          film: data?.FilmId || null,
          name: data?.name || "",
          date: data?.startDate || null,
          startTime: data?.startTime || "1000-10-10T12:00:00",
          price: data?.price || 0,
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
                      {i18n.t("main.manageShowing.nameOfFilm")}
                    </div>
                    <div className="col-sm">
                      <AutoComplete
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={150}
                        style={{ width: 150 }}
                        options={values.films}
                        value={values.films}
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
                      {i18n.t("main.manageShowing.room")}
                    </div>
                    <div className="col-sm">
                      <AutoComplete
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={150}
                        style={{ width: 150 }}
                        options={listRoom}
                        value={values.room}
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
                      {i18n.t("main.manageShowing.date")}
                    </div>
                    <div className="col-sm">
                      <LocalizationProvider dateAdapter={AdapterJalali}>
                        <div className="date-picker-birthday-container">
                          <DatePicker
                            // label="Basic example"
                            value={
                              values.date ? moment(new Date(values.date)) : null
                            }
                            onChange={(value) => {
                              setFieldValue(
                                "date",
                                moment.utc(value).toISOString()
                              );
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </div>
                      </LocalizationProvider>
                      {/* <CustomErrorComponent msg={errors.email} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.manageShowing.price")}
                    </div>
                    <div className="col-sm">
                      <InputNumber
                        placeholder="VND 1000"
                        formatter={(value) =>
                          `VND ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        step={20000}
                        min={0}
                        style={{ width: "150px" }}
                        value={values.price}
                        onChange={(e) => {
                          setFieldValue(`price`, e);
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
                      {i18n.t("main.manageShowing.startTime")}
                    </div>
                    <div className="col-sm">
                      <TimePicker
                        defaultValue={moment("12:00", "HH:mm")}
                        format="HH:mm"
                        value={moment(new Date(values.startTime))}
                        allowClear={false}
                        onChange={(e) => {
                          console.log(
                            moment(e).format("1000-10-10[T]HH:mm:ss")
                          );
                          setFieldValue(
                            "startTime",
                            moment(e).format("1000-10-10[T]HH:mm:ss")
                          );
                        }}
                      />
                      {/* <CustomErrorComponent msg={errors.email} /> */}
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

export default ShowingForm;
