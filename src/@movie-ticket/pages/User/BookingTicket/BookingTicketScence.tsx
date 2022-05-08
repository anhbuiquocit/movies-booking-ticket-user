import React, { FC, useEffect, useState } from "react";
import { Film, Room, Showing } from "@movie-ticket/constant/modal";
import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useApolloClient, useLazyQuery } from "@apollo/client";
import { FORMAT_TIME } from "@movie-ticket/constant";
import { CustomErrorComponent } from "@movie-ticket/components/CustomErrorComponent";
import { FORMAT_DATE_TIME_UTC } from "@movie-ticket/constant";
import SeatLine from "@movie-ticket/components/SeatLine";
import {
  getSeatSelect,
  calculateMoney,
  convertLineSeatToArray,
} from "@movie-ticket/libs";
import { TextField, Autocomplete, Button } from "@mui/material";
import AdapterJalali from "@date-io/date-fns/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index";
import { Link } from "react-router-dom";
import ConfirmationModal from "@movie-ticket/components/ConfirmModal/ConfirmModalScence";
import {
  SHOWING_CONNECTION,
  GET_AVAILABLE_BOOKING_TICKET,
} from "./BookingTicket.graphql";
import { Input, AutoComplete } from "antd";
import moment from "moment";
import { FORMAT_DATE } from "@movie-ticket/constant";
import Routers from "@movie-ticket/routers/router";
import queryString from "query-string";

interface BookintTIcketScenceProps {
  film?: Film;
  roomData: Array<Room>;
  onSubmit: (values: any, helper: FormikHelpers<any>) => void;
  i18n: any;
}
const BookingTicketScence: FC<BookintTIcketScenceProps> = ({
  film,
  onSubmit,
  roomData,
  i18n,
}): JSX.Element => {
  const client = useApolloClient();
  const [listShow, setListShow] = useState<Showing[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [getShowingByDate] = useLazyQuery(SHOWING_CONNECTION);
  const [getAvailableBookingTicket] = useLazyQuery(
    GET_AVAILABLE_BOOKING_TICKET
  );
  useEffect(() => {
    const templist: any[] = [];
    for (let i = 0; i < roomData.length; i++) {
      const item1 = Object.assign({}, roomData[i], {
        // label: roomData[i].name,
        value: roomData[i].name,
      });
      templist.push(item1);
    }

    setRooms(templist);
    if (film && film.Showing && film.Showing.length > 0) {
      let listItem: any[] = [];
      for (let i = 0; i < film.Showing.length; i++) {
        let item = Object.assign({}, film.Showing[i], {
          rangeTime: `${moment
            .utc(film.Showing[i].startTime)
            .format(FORMAT_TIME)} - ${moment
            .utc(film.Showing[i].endTime)
            .format(FORMAT_TIME)}`,
          date: `${moment.utc(film.Showing[i].startDate).format(FORMAT_DATE)}`,
        });
        listItem.push(item);
      }
      setListShow(listItem);
    }
  }, []);
  const listLine = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const validationSchema = Yup.object().shape({
    show: Yup.object().required(
      `${i18n.t("main.bookingTicket.time")} ${i18n.t(
        "main.validation.required"
      )}`
    ),
    room: Yup.object().required(
      `${i18n.t("main.bookingTicket.room")} ${i18n.t(
        "main.validation.required"
      )}`
    ),
    date: Yup.string().required(
      `${i18n.t("main.bookingTicket.date")} ${i18n.t(
        "main.validation.required"
      )}`
    ),
  });
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          confirm: false,
          date: null,
          rooms,
          room: { id: "" },
          show: { price: 0 },
          listShowing: [
            {
              id: "",
              rangeTime: "",
            },
          ],
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
          //Line seat Process
          lineSeatProcess0: [
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
          lineSeatProcess1: [
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
          lineSeatProcess2: [
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
          lineSeatProcess3: [
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
          lineSeatProcess4: [
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
          lineSeatProcess5: [
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
          lineSeatProcess6: [
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
          lineSeatProcess7: [
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
                        {i18n.t("main.button.back")}
                      </a>
                    </div>
                    <div className="item date-item">
                      <div className="date-container">
                        <LocalizationProvider dateAdapter={AdapterJalali}>
                          <div className="date-picker-birthday-container">
                            <DatePicker
                              // label="Basic example"
                              value={moment(values?.date)}
                              onChange={async (value) => {
                                setFieldValue(
                                  "date",
                                  moment(value).format(FORMAT_DATE)
                                );
                                if (values.room && values.room.id) {
                                  await getShowingByDate({
                                    variables: {
                                      where: {
                                        startDate: {
                                          equals: moment(value)
                                            .startOf("day")
                                            .format(FORMAT_DATE_TIME_UTC),
                                        },
                                        RoomId: {
                                          equals: values.room.id,
                                        },
                                      },
                                    },
                                  })
                                    .then((res) => {
                                      if (
                                        res &&
                                        res.data &&
                                        res.data.showingConnection &&
                                        res.data.showingConnection.length > 0
                                      ) {
                                        let tempList: Showing[] = [];
                                        for (
                                          let i = 0;
                                          i < res.data.showingConnection.length;
                                          i += 1
                                        ) {
                                          const item =
                                            res.data.showingConnection[i];
                                          const tempObj = Object.assign(
                                            {},
                                            item,
                                            {
                                              rangeTime: `${moment
                                                .utc(item.startTime)
                                                .format(FORMAT_TIME)} - ${moment
                                                .utc(item.endTime)
                                                .format(FORMAT_TIME)}`,
                                            }
                                          );
                                          tempList.push(tempObj);
                                        }
                                        setFieldValue("listShowing", tempList);
                                      } else {
                                        setFieldValue("listShowing", []);
                                      }
                                    })
                                    .catch((err) => {
                                      console.log("error: ", err);
                                    });
                                }
                              }}
                              renderInput={(params) => (
                                <TextField {...params} sx={{ width: 150 }} />
                              )}
                            />
                            {/* <CustomErrorComponent msg={errors.date} /> */}
                          </div>
                        </LocalizationProvider>
                      </div>
                      <div className="time-container">
                        <Autocomplete
                          limitTags={2}
                          id="multiple-limit-tags"
                          options={values.listShowing}
                          getOptionLabel={(option) => option.rangeTime}
                          onChange={async (event, value) => {
                            setFieldValue("show", value);
                            await getAvailableBookingTicket({
                              variables: {
                                where: {
                                  bookingItem: {
                                    every: {
                                      ShowingId: {
                                        equals: value?.id,
                                      },
                                      seat: {
                                        is: {
                                          room: {
                                            is: {
                                              id: {
                                                equals: values.room.id,
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            }).then((res) => {
                              if (
                                res.data.bookingConnection &&
                                res.data.bookingConnection.length > 0
                              ) {
                                const availableSeat = JSON.parse(
                                  res.data.bookingConnection[0].lineSeatMatrix
                                );
                                setFieldValue("lineSeat0", availableSeat[0]);
                                setFieldValue("lineSeat1", availableSeat[1]);
                                setFieldValue("lineSeat2", availableSeat[2]);
                                setFieldValue("lineSeat3", availableSeat[3]);
                                setFieldValue("lineSeat4", availableSeat[4]);
                                setFieldValue("lineSeat5", availableSeat[5]);
                                setFieldValue("lineSeat6", availableSeat[6]);
                                setFieldValue("lineSeat7", availableSeat[7]);

                                // set for list seat process
                                setFieldValue(
                                  "lineSeatProcess0",
                                  availableSeat[0]
                                );
                                setFieldValue(
                                  "lineSeatProcess1",
                                  availableSeat[1]
                                );
                                setFieldValue(
                                  "lineSeatProcess2",
                                  availableSeat[2]
                                );
                                setFieldValue(
                                  "lineSeatProcess3",
                                  availableSeat[3]
                                );
                                setFieldValue(
                                  "lineSeatProcess4",
                                  availableSeat[4]
                                );
                                setFieldValue(
                                  "lineSeatProcess5",
                                  availableSeat[5]
                                );
                                setFieldValue(
                                  "lineSeatProcess6",
                                  availableSeat[6]
                                );
                                setFieldValue(
                                  "lineSeatProcess7",
                                  availableSeat[7]
                                );
                              }
                            });
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={i18n.t("main.bookingTicket.time")}
                              placeholder={i18n.t(
                                "main.bookingTicket.placeHolder.selectTime"
                              )}
                            />
                          )}
                          sx={{
                            width: "250px",
                            bgcolor: "#fff",
                            color: "#fff",
                          }}
                        />
                        {/* <CustomErrorComponent msg={errors.show} /> */}
                      </div>
                    </div>
                    <div className="item">
                      <AutoComplete
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={150}
                        style={{ width: 150 }}
                        options={values.rooms}
                        onChange={async (e, value) => {
                          setFieldValue("room", value);
                          if (values.date) {
                            await getShowingByDate({
                              variables: {
                                where: {
                                  startDate: {
                                    equals: moment(values.date)
                                      .startOf("day")
                                      .format(FORMAT_DATE_TIME_UTC),
                                  },
                                  RoomId: {
                                    equals: value["id"],
                                  },
                                },
                              },
                            })
                              .then((res) => {
                                if (
                                  res &&
                                  res.data &&
                                  res.data.showingConnection &&
                                  res.data.showingConnection.length > 0
                                ) {
                                  let tempList: Showing[] = [];
                                  for (
                                    let i = 0;
                                    i < res.data.showingConnection.length;
                                    i += 1
                                  ) {
                                    const item = res.data.showingConnection[i];
                                    const tempObj = Object.assign({}, item, {
                                      rangeTime: `${moment
                                        .utc(item.startTime)
                                        .format(FORMAT_TIME)} - ${moment
                                        .utc(item.endTime)
                                        .format(FORMAT_TIME)}`,
                                    });
                                    tempList.push(tempObj);
                                  }
                                  setFieldValue("listShowing", tempList);
                                } else {
                                  setFieldValue("listShowing", []);
                                }
                              })
                              .catch((err) => {
                                console.log("error: ", err);
                              });
                          }
                        }}
                      >
                        <Input.Search
                          size="large"
                          placeholder="Chọn phòng"
                          // style={{ height: 50 }}
                        />
                      </AutoComplete>
                      {/* <CustomErrorComponent msg={errors.room} /> */}
                      <Link
                        to={{
                          pathname: `${Routers.bookingTicketRouter}${film?.id}`,
                          search: queryString.stringify({
                            date: values.date,
                            room: values.room,
                          }),
                        }}
                        className="custom-button"
                      >
                        Tìm kiếm
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Seat plan section */}
              <div className="seat-plan-section padding-bottom padding-top">
                <div className="container">
                  <div className="screen-area">
                    <h4 className="screen">
                      {i18n.t("main.bookingTicket.screen")}
                    </h4>
                    <div className="screen-thumb">
                      <img
                        src={`${require(`${process.env.REACT_APP_IMG_SRC}screen-thumb.png`)}`}
                        alt=""
                      />
                    </div>
                    <h5 className="subtitle">
                      {i18n.t("main.bookingTicket.silverPlus")}
                    </h5>
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
                              nameProcess={`lineSeatProcess${index}`}
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
