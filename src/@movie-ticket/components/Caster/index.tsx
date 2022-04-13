import React, { FC } from "react";
interface CasterProps {
  image?: string;
  nameInMovies?: string;
  role?: string;
  name?: string;
}
export const Caster: FC<CasterProps> = ({
  image,
  nameInMovies,
  role,
  name,
}) => {
  return (
    <div className="cast-item">
      <div className="cast-thumb">
        <a href="#0">
          <img src={image} alt="cast" />
        </a>
      </div>
      <div className="cast-content">
        <h6 className="cast-title">
          <a href="#0">{nameInMovies}</a>
        </h6>
        <span className="cate">{role}</span>
        <p>{name}</p>
      </div>
    </div>
  );
};
