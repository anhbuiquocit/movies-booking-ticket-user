import React, { FC } from "react";
import "./index.scss";
import sourceImg from "./../../assets/images/banner02.jpg";
import { MoviesContainer } from "../../components/MoviesContainer";
import imageTest from "../../assets/images/banner01.jpg";
import { Banner } from "../../components/Banner";
import Search from "../../components/SearchContainer";
export const HomeScence: FC = (): JSX.Element => {
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
      <section className="movies-section padding-bottom">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__column-3">
              <div className="widget-banner">
                <a href="#">
                  <img src={require("../../assets/images/adv.jpg")} alt="" />
                </a>
              </div>
            </div>
            <div className="grid__column-9">
              <div className="artical-section padding-bottom">
                <div className="artical-header section-header-1">
                  <h2 className="title">MOVIES</h2>
                  <a href="#">View All</a>
                </div>
                <div className="grid__row">
                  <div className="col-lg-4">
                    <MoviesContainer
                      image="movie01.jpg"
                      name="Movies01"
                      love="80"
                      rate="80"
                    />
                  </div>
                  <div className="col-lg-4">
                    <MoviesContainer
                      image="movie01.jpg"
                      name="Movies01"
                      love="80"
                      rate="80"
                    />
                  </div>
                  <div className="col-lg-4">
                    <MoviesContainer
                      image="movie01.jpg"
                      name="Movies01"
                      love="80"
                      rate="80"
                    />
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
