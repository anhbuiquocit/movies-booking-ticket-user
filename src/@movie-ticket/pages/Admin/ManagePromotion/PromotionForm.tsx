import React, { FC } from "react";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { CustomErrorComponent } from "@movie-ticket/components/CustomErrorComponent";
import {
  Button,
  Switch,
  TimePicker,
  Breadcrumb,
  Input,
  InputNumber,
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
import { Promotion } from "@movie-ticket/constant/modal";
interface PromotionFormProps {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  i18n: any;
  data?: Promotion;
}
const PromotionForm: FC<PromotionFormProps> = ({ i18n, onSubmit, data }) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.adminHome}>DashBoard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.managePromotion}>
            {i18n.t("main.managePromotion.title")}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routers.detailUser}>
            {i18n.t("main.managePromotion.create")}
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Màn hình tạo khuyến mãi</h2>
      <Formik
        enableReinitialize
        initialValues={{
          confirm: false,
          code: data?.code || "",
          discount: data?.discount || 0,
          maxDiscount: data?.maxDiscount || 0,
          date: data?.startDate || null,
          time: [data ? data.startTime : null, data ? data.endTime : null],
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
                      {i18n.t("main.managePromotion.code")}
                    </div>
                    <div className="col-sm">
                      <Input
                        value={values.code}
                        name="code"
                        onChange={(e) => {
                          setFieldValue("code", e.target.value);
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
                      {i18n.t("main.managePromotion.discount")}
                    </div>
                    <div className="col-sm">
                      <InputNumber
                        placeholder="% 10"
                        formatter={(value) =>
                          `% ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        step={5}
                        min={0}
                        style={{ width: "150px" }}
                        value={values.discount}
                        onChange={(e) => {
                          setFieldValue(`discount`, e);
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
                      {i18n.t("main.managePromotion.maxDiscount")}
                    </div>
                    <div className="col-sm">
                      <InputNumber
                        placeholder="VND 50000"
                        formatter={(value) =>
                          `VND ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        step={20000}
                        min={0}
                        style={{ width: "150px" }}
                        value={values.maxDiscount}
                        onChange={(e) => {
                          setFieldValue(`maxDiscount`, e);
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
                      {i18n.t("main.managePromotion.rangeDate")}
                    </div>
                    <div className="col-sm">
                      <LocalizationProvider dateAdapter={AdapterJalali}>
                        <DatePicker
                          // label="Basic example"
                          value={
                            values.date ? moment(new Date(values.date)) : null
                          }
                          onChange={(value) => {
                            setFieldValue(
                              "date",
                              moment(value)
                                .startOf("day")
                                .format(FORMAT_DATE_TIME)
                            );
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                      {/* <CustomErrorComponent msg={errors.birthday} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-20">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm">
                      {i18n.t("main.managePromotion.rangeDate")}
                    </div>
                    <div className="col-sm">
                      <TimePicker.RangePicker
                        format="HH:mm"
                        value={[
                          values.time[0]
                            ? moment(new Date(values.time[0]))
                            : null,
                          values.time[1]
                            ? moment(new Date(values.time[1]))
                            : null,
                        ]}
                        onChange={(e) => {
                          if (e) {
                            console.log(
                              "value: ",
                              moment(e[0]).format("1000-10-10[T]HH:mm:ss")
                            );
                            setFieldValue("time", [
                              moment(e[0]).format("1000-10-10[T]HH:mm:ss"),
                              moment(e[1]).format("1000-10-10[T]HH:mm:ss"),
                            ]);
                          }
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
                    {i18n.t("main.button.create")}
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

export default PromotionForm;
