import "./styles.scss";
import React, { FC } from "react";
import internal from "stream";
interface moviesProps {
  image?: string;
  name?: string;
  love?: string;
  rate?: Int16Array;
}
export const MoviesContainer: FC<moviesProps> = ({
  image,
  name,
  love,
  rate,
}): JSX.Element => {
  return (
    <div className="movies-container">
      <div className="img-container">
        <img src="../../assets/images/movie01.jpg" alt="loading" />
      </div>
      <div className="movies-content">
        <h4>{name}</h4>
        <ul className="movies-rating-percent">
          <li>
            <i className="fa-solid fa-heart"></i>
            <span className="content">{love}%</span>
          </li>
          <li>
            <i className="fa-solid fa-pizza-slice"></i>
            <span className="content">{rate}%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
