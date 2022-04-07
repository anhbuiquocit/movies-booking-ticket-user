import "./styles.scss";
import React, { FC } from "react";
export const MoviesItem: FC = () => {
  return (
    <div className="movie-list">
      <div className="movie-thumb">
        <a
          href="#"
          className="w-100 bg_img h-100 image-item"
          // style={{
          //   backgroundImage: `url(${require("../../assets/images/movie01.jpg")})`,
          // }}
        >
          <img
            src={require("../../assets/images/movie01.jpg")}
            alt=""
            className="img-item m-0"
          />
        </a>
      </div>
      <div className="movie-content">
        <h5 className="title">
          <a href="#">Alone</a>
        </h5>
        <p className="duration">2hrs 50 min</p>
        <div className="movie-tags">
          <a href="">action</a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="release">
          <span>Release Date: </span>
          <a href="#">November 8, 2020</a>
        </div>
        <ul className="movie-rating-percent">
          <li>
            <i className="fa-solid fa-heart"></i>
            <span className="content">88%</span>
          </li>
          <li>
            <i className="fa-solid fa-pizza-slice"></i>
            <span className="content">70%</span>
          </li>
        </ul>
        <div className="book-area">
          <div className="book-ticket">
            <div className="react-item">
              <a href="#">
                <div className="thumb">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </a>
            </div>
            <div className="react-item mr-auto">
              <a href="#">
                <div className="thumb">
                  <i className="fa-solid fa-ticket"></i>
                </div>
                <span>Book ticket</span>
              </a>
            </div>

            <div className="react-item">
              <a href="#">
                <div className="thumb">
                  <i className="fa-solid fa-video"></i>
                </div>
                  <span>Watching viedeo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
