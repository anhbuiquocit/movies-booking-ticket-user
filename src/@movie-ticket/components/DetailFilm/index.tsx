import React from "react";
import "./style.scss";
import thumb from "../../assets/images/venus.jpg";
import videoButon from "../../assets/images/video-button.png";
import cake from "../../assets/images/cake2.png";
import offer01 from "../../assets/images/offer01.png";
import offer02 from "../../assets/images/offer02.png";
import offer03 from "../../assets/images/offer03.png";
import tomato from "../../assets/images/tomato2.png";
import moviedetail1 from "../../assets/images/movie-details01.jpg";
import moviedetail2 from "../../assets/images/movie-details02.jpg";
import moviedetail3 from "../../assets/images/movie-details03.jpg";
import banner from "../../assets/images/banner01 (1).jpg";
import cast from "../../assets/images/cast02.jpg";
const DetailFilm = () => {
  return (
    <>
      <section className="details-banner bg_img">
        <div className="grid">
          <div className="details-banner-wrapper">
            <div className="details-banner-thumb">
              <img src={thumb} alt="movie" />
              <a
                href="https://www.youtube.com/embed/KGeBMAgc46E"
                className="video-popup"
              >
                <img src={videoButon} alt="movie" />
              </a>
            </div>
            <div className="details-banner-content offset-lg-3">
              <h3 className="title">Venus</h3>
              <div className="tags">
                <a href="#0">English</a>
                <a href="#0">Hindi</a>
                <a href="#0">Telegu</a>
                <a href="#0">Tamil</a>
              </div>
              <a href="#0" className="button">
                horror
              </a>
              <div className="social-and-duration">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="book-section bg-one">
        <div className="grid">
          <div className="book-wrapper offset-lg-3">
            <div className="left-side">
              <div className="item">
                <div className="item-header">
                  <div className="thumb">
                    <img src={tomato} alt="movie" />
                  </div>
                  <div className="counter-area">
                    <span
                      className="counter-item odometer"
                      data-odometer-final="88"
                    >
                      0
                    </span>
                  </div>
                </div>
                <p>tomatometer</p>
              </div>
              <div className="item">
                <div className="item-header">
                  <div className="thumb">
                    <img src={cake} alt="movie" />
                  </div>
                  <div className="counter-area">
                    <span
                      className="counter-item odometer"
                      data-odometer-final="88"
                    >
                      0
                    </span>
                  </div>
                </div>
                <p>audience Score</p>
              </div>
              <div className="item">
                <div className="item-header">
                  <h5 className="title">4.5</h5>
                  <div className="rated">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                  </div>
                </div>
                <p>Users Rating</p>
              </div>
              <div className="item">
                <div className="item-header">
                  <div className="rated rate-it">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                  </div>
                  <h5 className="title">0.0</h5>
                </div>
                <p>
                  <a href="#0">Rate It</a>
                </p>
              </div>
            </div>
            <a href="#0" className="custom-button">
              book tickets
            </a>
          </div>
        </div>
      </section>
      <section className="movie-details-section padding-top padding-bottom">
        <div className="grid">
          <div className="grid__row mb--50">
            <div className="grid__column-3 mb-50">
              <div className="widget-1 widget-tags">
                <ul>
                  <li>
                    <a href="#0">2D</a>
                  </li>
                  <li>
                    <a href="#0">imax 2D</a>
                  </li>
                  <li>
                    <a href="#0">4DX</a>
                  </li>
                </ul>
              </div>
              <div className="widget-1 widget-offer">
                <h3 className="title">Applicable offer</h3>
                <div className="offer-body">
                  <div className="offer-item">
                    <div className="thumb">
                      <img src={offer01} alt="sidebar" />
                    </div>
                    <div className="content">
                      <h6>
                        <a href="#0">Amazon Pay Cashback Offer</a>
                      </h6>
                      <p>Win Cashback Upto Rs 300*</p>
                    </div>
                  </div>
                  <div className="offer-item">
                    <div className="thumb">
                      <img src={offer02} alt="sidebar" />
                    </div>
                    <div className="content">
                      <h6>
                        <a href="#0">PayPal Offer</a>
                      </h6>
                      <p>
                        Transact first time with Paypal and get 100% cashback up
                        to Rs. 500
                      </p>
                    </div>
                  </div>
                  <div className="offer-item">
                    <div className="thumb">
                      <img src={offer03} alt="sidebar" />
                    </div>
                    <div className="content">
                      <h6>
                        <a href="#0">HDFC Bank Offer</a>
                      </h6>
                      <p>
                        Get 15% discount up to INR 100* and INR 50* off on F&B
                        T&C apply
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img src={banner} alt="banner" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid__column-9 mb-50">
              <div className="movie-details">
                <h3 className="title">photos</h3>
                <div className="details-photos owl-carousel">
                  <div className="thumb">
                    <a
                      href="./assets/images/movie/movie-details01.jpg"
                      className="img-pop"
                    >
                      <img src={moviedetail1} alt="movie" />
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="./assets/images/movie/movie-details01.jpg"
                      className="img-pop"
                    >
                      <img src={moviedetail2} alt="movie" />
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="./assets/images/movie/movie-details01.jpg"
                      className="img-pop"
                    >
                      <img src={moviedetail3} alt="movie" />
                    </a>
                  </div>
                </div>
                <div className="tab summery-review">
                  <ul className="tab-menu">
                    <li className="active">summery</li>
                    <li>
                      user review <span>147</span>
                    </li>
                  </ul>
                  <div className="tab-area">
                    <div className="tab-item active">
                      <div className="item">
                        <h5 className="sub-title">Synopsis</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin vehicula eros sit amet est tincidunt
                          aliquet. Fusce laoreet ligula ac ultrices eleifend.
                          Donec hendrerit fringilla odio, ut feugiat mi
                          convallis nec. Fusce elit ex, blandit vitae mattis sit
                          amet, iaculis ac elit. Ut diam mauris, viverra sit
                          amet dictum vel, aliquam ac quam. Ut mi nisl,
                          fringilla sit amet erat et, convallis porttitor
                          ligula. Sed auctor, orci id luctus venenatis, dui
                          dolor euismod risus, et pharetra orci lectus quis
                          sapien. Duis blandit ipsum ac consectetur scelerisque.{" "}
                        </p>
                      </div>
                      <div className="item">
                        <div className="header">
                          <h5 className="sub-title">cast</h5>
                          <div className="navigation">
                            <div className="cast-prev">
                              <i className="flaticon-double-right-arrows-angles"></i>
                            </div>
                            <div className="cast-next">
                              <i className="flaticon-double-right-arrows-angles"></i>
                            </div>
                          </div>
                        </div>
                        <div className="casting-slider owl-carousel">
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img src={cast} alt="cast" />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">Bill Hader</a>
                              </h6>
                              <span className="cate">actor</span>
                              <p>As Richie Tozier</p>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img src={cast} alt="cast" />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">nora hardy</a>
                              </h6>
                              <span className="cate">actor</span>
                              <p>As raven</p>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img src={cast} alt="cast" />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">alvin peters</a>
                              </h6>
                              <span className="cate">actor</span>
                              <p>As magneto</p>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img src={cast} alt="cast" />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">josh potter</a>
                              </h6>
                              <span className="cate">actor</span>
                              <p>As quicksilver</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailFilm;
