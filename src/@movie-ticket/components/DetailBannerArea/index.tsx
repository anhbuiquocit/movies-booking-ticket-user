import React, { FC } from "react";
import videoButon from "@movie-ticket/assets/images/video-button.png";
import { Film } from "@movie-ticket/constant/modal";

const DetailBannerArea: FC<{ film: Film }> = ({ film }) => {
  return (
    <section
      className="details-banner bg_img"
      style={{
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
  );
};
export default DetailBannerArea;
