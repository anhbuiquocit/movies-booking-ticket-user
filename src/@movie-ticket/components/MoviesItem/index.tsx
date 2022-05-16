import "./styles.scss";
import React, { FC } from "react";
import { Film } from "@movie-ticket/constant/modal";
interface MoviesItemProps {
  data: Film;
}
export const MoviesItem: FC<MoviesItemProps> = ({ data }) => {
  console.log("data firlm in movies item: ", data);
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
          <img src={data.imageUrl} alt="Loading" className="img-item m-0" />
        </a>
      </div>
      <div className="movie-content">
        <h5 className="title">
          <a href="#">{data.name}</a>
        </h5>
        <p className="duration">{`${data.time ? data.time : ""}`}</p>
        <div className="movie-tags">
          <a href="">action</a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="release">
          <span>Đạo diễn: </span>
          <a href="#">{data.director}</a>
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
