import React, { FC } from "react";
import moment from "moment";
import { Film, Room, Showing } from "@movie-ticket/constant/modal";
import { Input, Pagination, Button } from "antd";
import { FORMAT_DATE, ACTION, FORMAT_TIME } from "@movie-ticket/constant";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import Routers from "@movie-ticket/routers/router";
import queryString from "query-string";
import { Link } from "react-router-dom";
interface ManageShowingScenceProps {
  data: Array<Showing>;
  i18n: any;
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  onChangePage: (history: any, search: any) => void;
  rowsPerPage?: number;
  showingCount?: number;
  history: any;
  search: any;
}
const ManageShowingScence: FC<ManageShowingScenceProps> = ({
  onChangePage,
  onSubmit,
  i18n,
  data,
  rowsPerPage,
  history,
  search,
  showingCount,
}) => {
  return (
    <div className="row">
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          confirmPassword: "",
          confirm: false,
          emailSearch: "",
          action: "",
          idUser: "",
          filmId: "",
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
                      {i18n.t("main.manageShowing.title")}
                    </h6>
                  </div>
                </div>
                <div className="card my-4">
                  <div className="p-0 mt-n4 mx-3 pt-4 pb-3 d-flex justify-content-between">
                    <div className="email-search-container d-flex justify-content-between align-items-center">
                      <Input
                        name="emailSearch"
                        placeholder="tên phim...."
                        value={values.emailSearch}
                        onChange={(e) => {
                          setFieldValue("emailSearch", e.target.value);
                        }}
                        style={{ marginBottom: "1rem" }}
                      />
                      <Link
                        to={{
                          pathname: Routers.managerFilm,
                          search: queryString.stringify({
                            emailSearch: values.emailSearch,
                          }),
                        }}
                        className="btn btn--normal"
                      >
                        {i18n.t("main.button.search")}
                      </Link>
                    </div>
                    <div className="button-create-user-container">
                      <Link
                        to={Routers.createShowing}
                        className="btn btn--normal"
                      >
                        {i18n.t("main.button.createShowing")}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            {i18n.t("main.manageShowing.nameOfFilm")}
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            {i18n.t("main.manageShowing.room")}
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            {i18n.t("main.manageShowing.date")}
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            {i18n.t("main.manageShowing.time")}
                          </th>
                          <th className="text-secondary opacity-7"></th>
                          <th className="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div className="d-flex flex-column justify-content-center">
                                  {item.film.name}
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                {item.room.name}
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              {moment(item.startDate).format(FORMAT_DATE)}
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                {`${moment(item.startTime).format(
                                  FORMAT_TIME
                                )} - ${moment(item.endTime).format(
                                  FORMAT_TIME
                                )}`}
                              </span>
                            </td>
                            <td className="align-middle">
                              <Link
                                to={Routers.get(Routers.detailShowing, {
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
                                  setFieldValue("filmId", item.id);
                                  setFieldValue("confirm", true);
                                }}
                                icon={<DeleteOutlineIcon />}
                              ></Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <ConfirmationModal
                        isSubmitting={isSubmitting}
                        values={values}
                        confirmationMessage="Bạn chắc chắn chứ?"
                        handleSubmit={handleSubmit}
                        setFieldValue={setFieldValue}
                      />
                    </table>
                    <Pagination
                      defaultCurrent={1}
                      total={showingCount}
                      pageSize={rowsPerPage}
                      className="pt-20"
                      onChange={onChangePage}
                    />
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

export default ManageShowingScence;
