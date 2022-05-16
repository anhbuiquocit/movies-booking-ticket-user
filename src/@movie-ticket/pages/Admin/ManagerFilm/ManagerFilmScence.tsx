import { Film, User } from "@movie-ticket/constant/modal";
import React, { FC } from "react";
import moment from "moment";
import { Input, Pagination, Button } from "antd";
import { FORMAT_DATE, ACTION } from "@movie-ticket/constant";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import Routers from "@movie-ticket/routers/router";
import queryString from "query-string";
import { Link } from "react-router-dom";
interface ManagermentFilmScenceProps {
  i18n: any;
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  onChangePage: (history: any, search: any) => void;
  rowsPerPage?: number;
  history: any;
  search: any;
  data: Array<Film>;
}
const ManagerFilmScence: FC<ManagermentFilmScenceProps> = ({
  i18n,
  onSubmit,
  onChangePage,
  rowsPerPage,
  history,
  search,
  data,
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
                      {/* {i18n.t("main.managementUser.titleTable")} */}
                      Quản lý phim
                    </h6>
                  </div>
                </div>
                <div className="card my-4">
                  <div className="p-0 mt-n4 mx-3 pt-4 pb-3 d-flex justify-content-between">
                    <div className="email-search-container d-flex justify-content-between align-items-center">
                      <Input
                        name="emailSearch"
                        placeholder="email...."
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
                      <Link to={Routers.createFilm} className="btn btn--normal">
                        {i18n.t("main.button.createFilm")}
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
                            {i18n.t("main.managerFilm.name")}
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            {i18n.t("main.managerFilm.trailler")}
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            {i18n.t("main.managerFilm.actor")}
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            {i18n.t("main.managerFilm.time")}
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
                                  {item.name}
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                https://www.youtube.com/embed/{item.trailler}
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              {item.actor}
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                {/* {moment(item.createAt).format(FORMAT_DATE)} */}
                                {item.time}
                              </span>
                            </td>
                            <td className="align-middle">
                              <Link
                                to={Routers.get(Routers.updateFilm, {
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
                      // total={userCount}
                      pageSize={rowsPerPage}
                      className="pt-20"
                      // onChange={onChangePage}
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
export default ManagerFilmScence;
