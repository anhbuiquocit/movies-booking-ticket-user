import React, { FC, useEffect, useState } from "react";
import { Film, Room, Showing } from "@movie-ticket/constant/modal";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FORMAT_TIME } from "@movie-ticket/constant";
import SeatLine from "@movie-ticket/components/SeatLine";
import { getSeatSelect, calculateMoney } from "@movie-ticket/libs";
import { TextField, Autocomplete, Button } from "@mui/material";
import AdapterJalali from "@date-io/date-fns/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import { Input, AutoComplete } from "antd";
import moment from "moment";
import { FORMAT_DATE } from "@movie-ticket/constant";

interface BookintTIcketScenceProps {
  film?: Film;
  roomData: Array<Room>;
  onSubmit: (values: any, helper: FormikHelpers<any>) => void;
}
const BookingTicketScence: FC<BookintTIcketScenceProps> = ({
  film,
  onSubmit,
  roomData,
}): JSX.Element => {
  const [listShow, setListShow] = useState<Showing[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    const templist = [];
    for (let i = 0; i < roomData.length; i++) {
      const item = Object.assign({}, roomData[i], {
        // label: roomData[i].name,
        value: roomData[i].name,
      });
      templist.push(item);
    }
    setRooms(templist);
    if (film && film.Showing && film.Showing.length > 0) {
      let listItem = [];
      for (let i = 0; i < film.Showing.length; i++) {
        let item = Object.assign({}, film.Showing[i], {
          rangeTime: `${moment
            .utc(film.Showing[i].startTime)
            .format(FORMAT_TIME)} - ${moment
            .utc(film.Showing[i].endTime)
            .format(FORMAT_TIME)}`,
        });
        listItem.push(item);
      }
      setListShow(listItem);
    }
  }, []);
  const listLine = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const validationSchema = Yup.object().shape({
    show: Yup.object().required("Chọn giờ"),
    room: Yup.object().required("Chọn phòng"),
  });
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          confirm: false,
          date: null,
          time: null,
          rooms,
          room: {},
          show: { price: 0 },
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
        validationSchema={validationSchema}
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
              <section
                className="details-banner hero-area bg_img seat-plan-banner"
                style={{
                  backgroundImage: `url(${require(`${process.env.REACT_APP_IMG_SRC}banner04.jpg`)})`,
                }}
              >
                <div className="grid">
                  <div className="details-banner-wrapper">
                    <div className="details-banner-content offset-lg-3">
                      <h3 className="title">{film?.name}</h3>
                      <div className="tags">
                        <a href="#0">English</a>
                        <a href="#0">Hindi</a>
                      </div>
                      <a href="#0" className="button">
                        horror
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              {/* Page title */}
              <section className="page-title bg-one">
                <div className="container">
                  <div className="page-title-area">
                    <div className="item md-order-1">
                      <a href="#" className="custom-button">
                        Button Back
                      </a>
                    </div>
                    <div className="item date-item">
                      <div className="date-container">
                        <LocalizationProvider dateAdapter={AdapterJalali}>
                          <div className="date-picker-birthday-container">
                            <DatePicker
                              // label="Basic example"
                              value={moment(values?.date)}
                              onChange={(value) => {
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
                        <Autocomplete
                          // multiple
                          limitTags={2}
                          id="multiple-limit-tags"
                          options={listShow}
                          getOptionLabel={(option) => option.rangeTime}
                          onChange={(event, value) => {
                            setFieldValue("show", value);
                            console.log("Values Shwo: ", value);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="showing"
                              placeholder="Chọn giờ chiếu"
                            />
                          )}
                          sx={{
                            width: "250px",
                            bgcolor: "#fff",
                            color: "#fff",
                          }}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <AutoComplete
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={150}
                        style={{ width: 150 }}
                        options={values.rooms}
                        onChange={(e, value) => {
                          setFieldValue("room", value);
                        }}
                      >
                        <Input.Search
                          size="large"
                          placeholder="Chọn phòng"
                          // style={{ height: 50 }}
                        />
                      </AutoComplete>
                    </div>
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
                        <h3 className="title">
                          {calculateMoney(
                            values.show.price,
                            values.lineSeat0,
                            values.lineSeat1,
                            values.lineSeat2,
                            values.lineSeat3,
                            values.lineSeat4,
                            values.lineSeat5,
                            values.lineSeat6,
                            values.lineSeat7
                          )}
                          Đ
                        </h3>
                      </div>
                      <div className="book-item">
                        <Button
                          variant="outlined"
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
                          Đặt
                        </Button>
                      </div>
                    </div>
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
            </>
          );
        }}
      </Formik>
    </>
  );
};
export default BookingTicketScence;
