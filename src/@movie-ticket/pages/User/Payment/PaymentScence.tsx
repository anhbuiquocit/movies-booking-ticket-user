import { Formik, FormikHelpers, Form, ErrorMessage } from "formik";
import { Input, Button } from "antd";
import { FC } from "react";
import {
  getSeatSelect,
  convertToTypeVND,
  calculateValueOfPromotionDiscount,
  calculateTotalMoneyPayment,
} from "@movie-ticket/libs";
import moment from "moment";
import { Booking } from "@movie-ticket/constant/modal";
interface PaymentProps {
  onSubmit: (values: any, helper: FormikHelpers<any>) => void;
  i18n: any;
  popup?: any;
  data: Booking;
}
const PaymentScence: FC<PaymentProps> = ({ onSubmit, i18n, data }) => {
  console.log("Data user in scence: ", data);
  const lineMatrix = JSON.parse(data.lineSeatMatrix);
  return (
    <>
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
                      <h3 className="title">
                        {data.bookingItem[0].showing.film.name}
                      </h3>
                      <div className="tags">
                        {/* <a href="#0">English</a>
                        <a href="#0">Hindi</a> */}
                      </div>
                      <a href="#0" className="button">
                        horror
                      </a>
                    </div>
                  </div>
                </div>
              </section>
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
                        <span>date container</span>
                      </div>
                      <div className="time-container">
                        <span>Time container</span>
                        {/* <CustomErrorComponent msg={errors.show} /> */}
                      </div>
                    </div>
                    <div className="item">
                      <span>Item 3</span>
                    </div>
                  </div>
                </div>
              </section>
              <div className="movie-facility padding-bottom padding-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="checkout-widget d-flex flex-wrap align-items-center justify-cotent-between">
                        <div className="title-area">
                          <h5 className="title">Bạn đã có tài khoản?</h5>
                          <p>Đăng nhập để trải nghiệm</p>
                        </div>
                        <a href="" className="sign-in-area">
                          <i className="fas fa-user"></i>
                          <span>Đăng nhập</span>
                        </a>
                      </div>
                      <div className="checkout-widget checkout-contact">
                        <h5 className="title">Thông tin của bạn</h5>
                      </div>
                      <div className="checkout-widget checkout-card mb-0">
                        <h5 className="title">Payment Option </h5>
                        <ul className="payment-option">
                          <li className="active">
                            <a href="#0">
                              <img
                                src={require("@movie-ticket/assets/images/card.png")}
                                alt="payment"
                              />
                              <span>Credit Card</span>
                            </a>
                          </li>
                        </ul>
                        <h6 className="subtitle">
                          {i18n.t("main.payment.entryTitle")}
                        </h6>
                        <form>
                          <div className="form-group w-100">
                            <div>{i18n.t("main.payment.numberCard")}</div>
                            <Input />
                          </div>
                          <div className="form-group w-100">
                            <div>{i18n.t("main.payment.cardOwner")}</div>
                            <Input />
                          </div>
                          <div className="form-group">
                            <Button className="custom-button">
                              {i18n.t("main.button.pay")}
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="booking-summery bg-one">
                        <h4 className="title">
                          {i18n.t("main.payment.bookingSummery")}
                        </h4>
                        <ul>
                          <li>
                            <h6 className="subtitle">
                              {data.bookingItem[0].showing.film.name}
                            </h6>
                            <span className="info">2d</span>
                          </li>
                          <li>
                            <h6 className="subtitle">
                              <span>{i18n.t("main.payment.date")}</span>
                              <span>
                                {" "}
                                {moment(
                                  data.bookingItem[0].showing.startDate
                                ).format("dddd, MM Do YYYY")}
                              </span>
                            </h6>
                            <h6 className="subtitle">
                              <span>{i18n.t("main.payment.time")}</span>
                              <span>
                                {" "}
                                {moment
                                  .utc(data.bookingItem[0].showing.startTime)
                                  .format("HH:mm")}
                              </span>
                            </h6>
                          </li>
                          <li>
                            <h6 className="subtitle mb-0">
                              <span>{i18n.t("main.payment.price")}</span>
                              <span>
                                {convertToTypeVND(
                                  data.bookingItem[0].showing.price
                                )}
                              </span>
                            </h6>
                          </li>
                        </ul>
                        <ul className="side-shape">
                          <li>
                            <h6 className="subtitle">
                              <span>{i18n.t("main.payment.position")}</span>
                              <span>
                                {getSeatSelect(
                                  lineMatrix[0],
                                  lineMatrix[1],
                                  lineMatrix[2],
                                  lineMatrix[3],
                                  lineMatrix[4],
                                  lineMatrix[5],
                                  lineMatrix[6],
                                  lineMatrix[7]
                                )}
                              </span>
                            </h6>
                            {/* <span className="info">
                              <span>2 Nachos Combo</span>
                            </span> */}
                          </li>
                          {/* <li>
                            <h6 className="subtitle">
                              <span>food &amp; bevarage</span>
                            </h6>
                          </li> */}
                        </ul>
                        <ul>
                          <li>
                            <span className="info">
                              <span>
                                {i18n.t("main.payment.totalTicketPrice")}
                              </span>
                              <span>{convertToTypeVND(data.price)}</span>
                            </span>
                            <span className="info">
                              <span>vat</span>
                              <span>{convertToTypeVND(0.05 * data.price)}</span>
                            </span>
                            {data && data.promotion ? (
                              <span className="info">
                                <span>{`${i18n.t("main.payment.promotion")}('${
                                  data.promotion.discount
                                }%)`}</span>
                                <span>
                                  {convertToTypeVND(
                                    calculateValueOfPromotionDiscount(
                                      data.price,
                                      data.promotion
                                    )
                                  )}
                                </span>
                              </span>
                            ) : null}
                          </li>
                        </ul>
                      </div>
                      <div className="proceed-area text-center">
                        <h6 className="subtitle">
                          <span>
                            {i18n.t("main.payment.totalMoneyPayment")}
                          </span>
                          <span>
                            {convertToTypeVND(
                              calculateTotalMoneyPayment(
                                data.price,
                                0.05,
                                data.promotion
                              )
                            )}
                          </span>
                        </h6>
                        {/* <a href="#0" className="custom-button back-button">
                          proceed
                        </a> */}
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

export default PaymentScence;
