import React, { FC, useState } from "react";
import { Banner } from "@movie-ticket/components/Banner";
import imageBanner02 from "@movie-ticket/assets/images/banner02.jpg";
import Search from "@movie-ticket/components/SearchContainer";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { MoviesItem } from "@movie-ticket/components/MoviesItem";
export const PageListFilm: FC = (props): JSX.Element => {
  // const [numberPerPage, setNumberPerPage] = useState([12, 24, 48 92])
  const valueItemPerPage = [
    {
      label: 12,
      value: 12,
    },
    {
      label: 24,
      value: 12,
    },
    {
      label: 48,
      value: 12,
    },
  ];
  return (
    <>
      <Banner
        image={imageBanner02}
        title1="GET MOVIE TICKETS"
        title2="Test banner"
        description="Buy movie tickets in advance, find movie times watch trailer, read movie reviews and much more"
      />

      <div className="search-ticket-section">
        <Search />
      </div>
      <div className="movie-section padding-top padding-bottom">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__column-3">
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#">
                    <img src={require("@movie-ticket/assets/images/adv.jpg")} alt="" />
                  </a>
                </div>
              </div>
            </div>

            {/* List film */}
            <div className="grid__column-9 mb-50 ">
              <div className="filter-tab tab">
                <div className="filter-area">
                  <div className="filter-main">
                    <div className="left">
                      <div className="item">
                        <span className="show">Show</span>
                        <Autocomplete
                          options={valueItemPerPage}
                          renderInput={(params) => (
                            <TextField {...params} label="movies" />
                          )}
                        />
                      </div>
                      <div className="item">
                        <span className="show">Sort By:</span>
                        <Autocomplete
                          options={valueItemPerPage}
                          renderInput={(params) => (
                            <TextField {...params} label="movies" />
                          )}
                        />
                      </div>
                    </div>
                    <ul className="grid-button tab-menu">
                      <li>
                        <i className="fas fa-th"></i>
                      </li>
                      <li>
                        <i className="fas fa-bars"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="tab-area">
                  <div className="tab-item active">
                    <div className="movie-area mb-10">
                      {/* push list film here */}
                      <MoviesItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
