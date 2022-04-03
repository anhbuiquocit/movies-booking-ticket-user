import React, { FC } from "react";
import "./index.scss";
import sourceImg from "./../../assets/images/banner02.jpg";
import { MoviesContainer } from "../../components/MoviesContainer";
import imageTest from "../../assets/images/banner01.jpg";
import { Banner } from "../../components/Banner";
import Search from "../../components/SearchContainer";
export const Home: FC = (): JSX.Element => {
  return (
    <>
      <Banner
        image={imageTest}
        title1="BOOK YOUR TICKETS"
        title2="FOR MOVIES"
        description=" Safe, secure, reliable ticketing. Your ticket to live
        entertainment!"
      />
      <div className="search-ticket-section">
        <Search />
      </div>
      <section className="movies-section">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__column-3">
              <div className="widget-banner">
                <a href="#">
                  <img src='' alt="" />
                </a>
              </div>
            </div>
            <div className="grid__column-9">
              <div className="artical-section">
                <div className="artical-header">
                  <h2 className="title">MOVIES</h2>
                  <a href="#">View All</a>
                </div>
                <div className="grid__row">
                  <MoviesContainer
                    image={`./../../assets/images/movie01.jpg`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
