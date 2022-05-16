import { Banner } from "@movie-ticket/components/Banner";
import imageBanner02 from "@movie-ticket/assets/images/banner02.jpg";
import Search from "@movie-ticket/components/SearchContainer";
import { Input } from "antd";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { MoviesItem } from "@movie-ticket/components/MoviesItem";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import MoviesContainer from "@movie-ticket/components/MoviesContainer";
import { Film } from "@movie-ticket/constant/modal";
import { Link } from "react-router-dom";
import Routers from "@movie-ticket/routers/router";
import queryString from "query-string";
import { useState } from "react";
interface ListFilmScence {
  data: Array<Film>;
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  i18n: any;
}
const ListFilmScence = ({ data, onSubmit, i18n }) => {
  const [isRowMovies, setIsRowMovies] = useState<Boolean>(true);
  console.log("data film: ", data);
  const valueItemPerPage = [
    {
      label: "Ngày tải lên",
      value: "createdAt_asc",
    },
  ];
  return (
    <Formik
      enableReinitialize
      initialValues={{ orderBy: "", nameSearch: "" }}
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
          <>
            <Banner
              image={imageBanner02}
              title1="Hãy lựa chọn bộ phim bạn thích"
              title2=""
              description="Đặt ngay vé "
            />

            <div className="search-ticket-section">
              <Search />
            </div>
            <div className="movie-section padding-top padding-bottom">
              <div className="grid">
                <div className="grid__row">
                  <div className="grid__column-3">
                    <div className="widget-1 widget-banner">
                      <div className="widget-1-body">
                        <a href="#">
                          <img
                            src={require("@movie-ticket/assets/images/adv.jpg")}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* List film */}
                  <div className="grid__column-9 mb-50 ">
                    <div className="filter-tab tab">
                      <div className="filter-area">
                        <div className="filter-main">
                          <div className="left">
                            <div className="item">
                              <span className="show">Sắp xếp theo:</span>
                              <Autocomplete
                                className="color-white"
                                options={valueItemPerPage}
                                sx={{ width: 150 }}
                                renderInput={(params) => (
                                  <TextField {...params} label="movies" />
                                )}
                                onChange={(e, obj) => {
                                  setFieldValue("orderBy", obj?.value);
                                }}
                              />
                            </div>
                            <div className="item">
                              {/* <span className="show">:</span> */}

                              <Input
                                size="large"
                                onChange={(e) => {
                                  setFieldValue("nameSearch", e.target.value);
                                }}
                              />
                            </div>
                            <Link
                              to={{
                                pathname: Routers.pageListFilm,
                                search: queryString.stringify({
                                  // emailSearch: values.emailSearch,
                                  orderByValue: values.orderBy,
                                  nameSearch: values.nameSearch,
                                }),
                              }}
                              className="btn btn--normal"
                            >
                              {i18n.t("main.button.search")}
                            </Link>
                          </div>
                          <ul className="grid-button tab-menu">
                            <li
                              className={!isRowMovies ? "active" : ""}
                              onClick={() => {
                                setIsRowMovies(false);
                              }}
                            >
                              <i className="fas fa-th"></i>
                            </li>
                            <li
                              className={isRowMovies ? "active" : ""}
                              onClick={() => {
                                setIsRowMovies(true);
                              }}
                            >
                              <i className="fas fa-bars"></i>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="tab-area">
                        <div className="tab-item active">
                          <div className="movie-area mb-10 grid__row">
                            {/* push list film here */}
                            {data.map((item, index) => {
                              if (isRowMovies) {
                                return <MoviesItem data={item} />;
                              } else {
                                return (
                                  <div className="col-lg-4">
                                    <MoviesContainer
                                      image={item.imageUrl}
                                      id={item.id}
                                      name={item.name}
                                      love="80"
                                      rate="80"
                                    />
                                  </div>
                                );
                              }
                            })}
                            {!data && data.length === 0 ? (
                              <h4>{i18n.t("main.listFilm.noRecord")}</h4>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default ListFilmScence;
