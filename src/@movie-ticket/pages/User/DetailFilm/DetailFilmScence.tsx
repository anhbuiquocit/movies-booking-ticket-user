import React, { FC } from "react";
import thumb from "@movie-ticket/assets/images/venus.jpg";
import videoButon from "@movie-ticket/assets/images/video-button.png";
import cake from "@movie-ticket/assets/images/cake2.png";
import offer01 from "@movie-ticket/assets/images/offer01.png";
import offer02 from "@movie-ticket/assets/images/offer02.png";
import offer03 from "@movie-ticket/assets/images/offer03.png";
import tomato from "@movie-ticket/assets/images/tomato2.png";
import moviedetail1 from "@movie-ticket/assets/images/movie-details01.jpg";
import moviedetail2 from "@movie-ticket/assets/images/movie-details02.jpg";
import moviedetail3 from "@movie-ticket/assets/images/movie-details03.jpg";
import banner from "@movie-ticket/assets/images/banner01 (1).jpg";
import cast from "@movie-ticket/assets/images/cast02.jpg";
import { Film } from "@movie-ticket/constant/modal";
import { Caster } from "@movie-ticket/components/Caster";

export const DetailFilmScence: FC<{ film: Film; i18n: any }> = ({
  film,
  i18n,
}): JSX.Element => {
  console.log("Filmmm: ", film);
  return (
    <>
      <section
        className="details-banner bg_img"
        style={{
          // backgroundImage: `url(${require(`@movie-ticket/assets/images${film?.image}`)})`,
          backgroundImage: `url(${require(`@movie-ticket/assets/images/banner03.jpg`)})`,
        }}
      >
        <div className="grid">
          <div className="details-banner-wrapper">
            <div className="details-banner-thumb">
              <img
                src={require(`@movie-ticket/assets/images/${film?.image}`)}
                alt="movie"
              />
              <a
                href="https://www.youtube.com/embed/KGeBMAgc46E"
                className="video-popup"
              >
                <img src={videoButon} alt="movie" />
              </a>
            </div>
            <div className="details-banner-content offset-lg-3">
              <h3 className="title">{film?.name}</h3>
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
                      href="@movie-ticket/assets/images/movie/movie-details01.jpg"
                      className="img-pop"
                    >
                      <img src={moviedetail1} alt="movie" />
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="@movie-ticket/assets/images/movie/movie-details01.jpg"
                      className="img-pop"
                    >
                      <img src={moviedetail2} alt="movie" />
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="@movie-ticket/assets/images/movie/movie-details01.jpg"
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
                        <h5 className="sub-title">
                          {i18n.t("main.film.description")}
                        </h5>
                        <p>{film?.description}</p>
                      </div>
                      <div className="item">
                        <div className="header">
                          <h5 className="sub-title">
                            {i18n.t("main.film.cast")}
                          </h5>
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
                          <Caster
                            image={cast}
                            nameInMovies="David"
                            name="Bui Quoc Anh"
                            role="Actor"
                          />
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
