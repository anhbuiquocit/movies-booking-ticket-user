import React, { FC } from "react";
import moment from "moment";
import { convertToTypeVND } from "@movie-ticket/libs";
import { Input, Pagination, Button, Avatar, Image } from "antd";
import { FORMAT_DATE, ACTION, FORMAT_TIME } from "@movie-ticket/constant";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import { format } from "date-fns";
import Routers from "@movie-ticket/routers/router";
import ReactHighcharts from "react-highcharts";
import queryString from "query-string";
import { Link } from "react-router-dom";
import data from "./data";

interface StatisticalScenceProps {
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  i18n: any;
}
const mapped = data.data.backlogHistory.map(({ date, number }) => ({
  x: format(parseInt(date), "dd-MMM"),
  y: number,
  label: number,
  data: { y: number, color: "rgba(144, 202, 249, 0.75)" },
}));
const StatisticalScence: FC<StatisticalScenceProps> = ({ onSubmit, i18n }) => {
  console.log("mapped: ", mapped);
  const options = { style: "currency", currency: "USD" };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  const config = {
    chart: {
      type: "column",
      style: {
        fontFamily: "Arial",
      },
    },
    xAxis: { categories: mapped },
    series: [
      {
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          295.6, 454.4,
        ],
        dataLabels: { enabled: true },
      },
    ],
  };
  return (
    <div className="row">
      <Formik
        enableReinitialize
        initialValues={{}}
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
          setTouched,
          validateForm,
          setErrors,
        }) => {
          return (
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">
                      {i18n.t("main.home.statistical")}
                    </h6>
                  </div>
                </div>
                {/* <div className="card my-4">
                  <div className="p-0 mt-n4 mx-3 pt-4 pb-3 d-flex justify-content-between">
                    <div className="email-search-container d-flex justify-content-between align-items-center">
                      <Input
                        name="emailSearch"
                        placeholder="email...."
                        // value={values.emailSearch}
                        onChange={(e) => {
                          setFieldValue("emailSearch", e.target.value);
                        }}
                        style={{ marginBottom: "1rem" }}
                      />
                      <Link
                        to={{
                          pathname: Routers.managementUser,
                          search: queryString.stringify({
                            // emailSearch: values.emailSearch,
                          }),
                        }}
                        className="btn btn--normal"
                      >
                        Tìm kiếm
                      </Link>
                    </div>
                    <div className="button-create-user-container">
                      <Link
                        to={Routers.createPromotion}
                        className="btn btn--normal"
                      >
                        {i18n.t("main.managePromotion.create")}
                      </Link>
                    </div>
                  </div>
                </div> */}
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        {/* <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            {i18n.t("main.managePromotion.code")}
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            {i18n.t("main.managePromotion.discount")}
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            {i18n.t("main.managePromotion.maxDiscount")}
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            {i18n.t("main.managePromotion.rangeDate")}
                          </th>
                          <th className="text-secondary opacity-7"></th>
                          <th className="text-secondary opacity-7"></th>
                        </tr> */}
                      </thead>
                      <tbody>
                        {/* 
                        {data?.map((item, index) => (
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <Avatar
                                src={
                                  <Image
                                    src={`${
                                      item.imageUrl ? item.imageUrl : ""
                                    }`}
                                    style={{ width: 32, padding: "3px 0" }}
                                  />
                                }
                              ></Avatar>
                                <div className="d-flex flex-column justify-content-center">
                                  <p className="text-xs text-secondary mb-0">
                                    {item.code}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                {item.role}
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                {item.discount}%
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <p className="text-xs text-secondary mb-0">
                                {convertToTypeVND(item.maxDiscount)}
                              </p>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                {`${moment(item.startDate).format(
                                  FORMAT_DATE
                                )} - ${moment(item.endDate).format(
                                  FORMAT_DATE
                                )} ${moment(item.startTime).format(
                                  FORMAT_TIME
                                )}-${moment(item.endTime).format(FORMAT_TIME)}`}
                              </span>
                            </td>
                            <td className="align-middle">
                              <Link
                                to={Routers.get(Routers.detailPromotion, {
                                  id: item.id,
                                })}
                                className="text-secondary font-weight-bold text-xs"
                              >
                                {i18n.t("main.button.update")}
                              </Link>
                            </td>
                            <td className="align-middle">
                              <Button
                                onClick={() => {
                                  setFieldValue("action", ACTION.DELETE);
                                  setFieldValue("idUser", item.id);
                                  setFieldValue("confirm", true);
                                }}
                                icon={<DeleteOutlineIcon />}
                              ></Button>
                            </td>
                          </tr>
                        ))} */}
                        <ReactHighcharts data={mapped} config={config} />
                      </tbody>
                      <ConfirmationModal
                        isSubmitting={isSubmitting}
                        values={values}
                        confirmationMessage="Bạn chắc chắn chứ?"
                        handleSubmit={handleSubmit}
                        setFieldValue={setFieldValue}
                      />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
export default StatisticalScence;
