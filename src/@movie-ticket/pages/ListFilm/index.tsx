import React, { FC } from "react";
import { Banner } from "../../components/Banner";
import imageBanner02 from "../../assets/images/banner02.jpg";
import Search from "../../components/SearchContainer";
export const PageListFilm: FC = (props): JSX.Element => {
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
    </>
  );
};
