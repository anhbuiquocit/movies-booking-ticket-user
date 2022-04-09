import "./styles.scss";
import React, { FC } from "react";
import internal from "stream";
interface moviesProps {
  image?: string;
  name?: string;
  love?: string;
  rate?: string;
}
const MoviesContainer: FC<moviesProps> = ({
  image,
  name,
  love,
  rate,
}): JSX.Element => {
  return (
    <div className="movies-grid">
      <div className="movie-thumb c-thumb">
        <a href="#">
          <img src={require(`../../assets/images/${image}`)} alt="loading" />
        </a>
      </div>
      <div className="movies-content bg-one">
        <h5 className="title m-0">{name}</h5>
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
export default MoviesContainer;
