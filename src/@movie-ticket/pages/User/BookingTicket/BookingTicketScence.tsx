import React, { FC } from "react";
import { Film } from "@movie-ticket/constant/modal";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SeatLine from "@movie-ticket/components/SeatLine";
import { getSeatSelect } from "@movie-ticket/libs";
import { Checkbox, Stack, TextField } from "@mui/material";
import AdapterJalali from "@date-io/date-fns/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index";
import { Input, AutoComplete } from "antd";
import moment from "moment";
import { FORMAT_DATE } from "@movie-ticket/constant";

interface BookintTIcketScenceProps {
  film?: Film;
  onSubmit: (values: any, helper: FormikHelpers<any>) => void;
}
const BookingTicketScence: FC<BookintTIcketScenceProps> = ({
  film,
  onSubmit,
}): JSX.Element => {
  console.log("process.env: ", process.env);
  const listLine = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const options = [
    {
      label: "09:00",
      value: "09:00",
    },
    {
      label: "10:00",
      value: "10:00",
    },
    {
      label: "13:00",
      value: "13:00",
    },
  ];
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          confirm: false,
          date: null,
          time: null,
          lineSeat0: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          lineSeat1: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          lineSeat2: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          lineSeat3: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          lineSeat4: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          lineSeat5: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          lineSeat6: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          lineSeat7: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
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
          console.log("Values: ", values);
          return (
            <>
              <section
                className="details-banner hero-area bg_img seat-plan-banner"
                style={{
                  backgroundImage: `url(${require(`${process.env.REACT_APP_IMG_SRC}banner04.jpg`)})`,
                }}
              >
                <div className="grid">
                  <div className="details-banner-wrapper">
                    <div className="details-banner-content offset-lg-3">
                      {/* <h3 className="title">{film?.name}</h3> */}
                      <div className="tags">
                        <a href="#0">English</a>
                        <a href="#0">Hindi</a>
                      </div>
                      <a href="#0" className="button">
                        horror
                      </a>
                      {/* <div className="social-and-duration">
                        <div className="duration-area">
                          <div className="item">
                            <i className="fas fa-calendar-alt"></i>
                            <span>06 Dec, 2020</span>
                          </div>
                          <div className="item">
                            <i className="far fa-clock"></i>
                            <span>2 hrs 50 mins</span>
                          </div>
                        </div>
                        <ul className="social-share">
                          <li>
                            <a href="#0">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-pinterest-p"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-google-plus-g"></i>
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Page title */}
              <section className="page-title bg-one">
                <div className="container">
                  <div className="page-title-area">
                    <div className="item md-order-1">
                      <a href="#">Button Back</a>
                    </div>
                    <div className="item date-item">
                      <div className="date-container">
                        <LocalizationProvider dateAdapter={AdapterJalali}>
                          <div className="date-picker-birthday-container">
                            <DatePicker
                              // label="Basic example"
                              value={moment(values?.date)}
                              onChange={(value) => {
                                console.log(
                                  "value: ",
                                  moment(value).format(FORMAT_DATE)
                                );
                                setFieldValue(
                                  "date",
                                  moment(value).format(FORMAT_DATE)
                                );
                              }}
                              renderInput={(params) => (
                                <TextField {...params} sx={{ width: 150 }} />
                              )}
                            />
                          </div>
                        </LocalizationProvider>
                      </div>
                      <div className="time-container">
                        <AutoComplete
                          dropdownClassName="certain-category-search-dropdown"
                          dropdownMatchSelectWidth={150}
                          style={{ width: 150 }}
                          options={options}
                          onChange={(e) => {
                            console.log("value select time: ", e);
                          }}
                        >
                          <Input.Search
                            size="large"
                            placeholder="HH:mm"
                            // style={{ height: 50 }}
                          />
                        </AutoComplete>
                      </div>
                    </div>
                    <div className="item">Item 3</div>
                  </div>
                </div>
              </section>
              {/* Seat plan section */}
              <div className="seat-plan-section padding-bottom padding-top">
                <div className="container">
                  <div className="screen-area">
                    <h4 className="screen">Screen</h4>
                    <div className="screen-thumb">
                      <img
                        src={`${require(`${process.env.REACT_APP_IMG_SRC}screen-thumb.png`)}`}
                        alt=""
                      />
                    </div>
                    <h5 className="subtitle">silver plus</h5>
                    <div className="screen-wrapper">
                      <ul className="seat-area">
                        {listLine.map((item, index) => (
                          <li className="seat-line">
                            <span>{item}</span>
                            <SeatLine
                              lineCode={item}
                              values={values}
                              setFieldValue={setFieldValue}
                              name={`lineSeat${index}`}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <div className="subtitle"></div> */}
                    {/* <div className="screen-wrapper"></div> */}
                  </div>
                  <div
                    className="proceed-book bg_img"
                    style={{
                      backgroundImage: `url(${require(`${process.env.REACT_APP_IMG_SRC}movie-bg-proceed.jpg`)})`,
                    }}
                  >
                    <div className="proceed-to-book">
                      <div className="book-item">
                        {getSeatSelect(
                          values.lineSeat0,
                          values.lineSeat1,
                          values.lineSeat2,
                          values.lineSeat3,
                          values.lineSeat4,
                          values.lineSeat5,
                          values.lineSeat6,
                          values.lineSeat7
                        ) === "" ? (
                          <span>select seat</span>
                        ) : (
                          <>
                            <span>You have Choosed Seat</span>
                            <h3 className="title">
                              {getSeatSelect(
                                values.lineSeat0,
                                values.lineSeat1,
                                values.lineSeat2,
                                values.lineSeat3,
                                values.lineSeat4,
                                values.lineSeat5,
                                values.lineSeat6,
                                values.lineSeat7
                              )}
                            </h3>
                          </>
                        )}
                      </div>
                      <div className="book-item">
                        <span>total price</span>
                        <h3 className="title">$150</h3>
                      </div>
                      <div className="book-item">
                        <a href="#" className="custom-button">
                          Book
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
};
export default BookingTicketScence;
