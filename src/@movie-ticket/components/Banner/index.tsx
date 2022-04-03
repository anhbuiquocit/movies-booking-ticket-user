import React, { FC } from "react";
import "./styles.scss";
interface bannerProps {
  image?: string;
  title1?: string;
  title2?: string;
  description?: string;
}

export const Banner: FC<bannerProps> = (props): JSX.Element => {
  const { image, title1, title2, description } = props;
  return (
    <section className="banner-section">
      <div
        className="banner-bg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="grid">
        <div className="banner-content">
          <h1 className="title">
            <span className="d-block">{title1}</span>
            <span className="">{title2}</span>
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};
