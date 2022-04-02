import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme } from "@mui/system";
import { text } from "stream/consumers";
import "./style.scss";
import ticket_tab1 from "./../../assets/images/ticket-tab01.png";
import ticket_tab2 from "./../../assets/images/ticket-tab02.png";
import ticket_tab3 from "./../../assets/images/ticket-tab03.png";
import city from "./../../assets/images/city.png";
import date from "./../../assets/images/date.png";
import cinema from "./../../assets/images/cinema.png";

const Search = () => {
  const theme = createTheme({
    palette: {
      text: {
        white: "#fff",
      },
    },
  });
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
  ];
  const cities = ["Hanoi", "HCM"];
  return (
    <div className="grid">
      <div className="search-container">
        <div className="topbar">
          <div className="title">
            <h3>WELCOME TO BOLETO</h3>
            <h2>WHAT ARE YOU LOOKING FOR</h2>
          </div>
          <div className="tab-menu">
            <ul>
              <li>
                <img src={ticket_tab1} alt="movie" />
                <span>movie</span>
              </li>
              <li className="active">
                <img src={ticket_tab2} alt="events" />
                <span>events</span>
              </li>
              <li>
                <img src={ticket_tab3} alt="sports" />
                <span>sports</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-area">
          <form>
            <div className="form-group">
              <Autocomplete
                disablePortal
                id="combo-box"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField variant="outlined" {...params} label="Movie" />
                )}
              />
            </div>
            <div className="form-group">
              <div className="thumb">
                <img src={city} alt="" />
              </div>
              <Autocomplete
                disablePortal
                id="combo-box"
                options={cities}
                sx={{ width: 150 }}
                renderInput={(params) => (
                  <TextField variant="outlined" {...params} label="City" />
                )}
              />
            </div>
            <div className="form-group">
              <div className="thumb">
                <img src={date} alt="" />
              </div>
              <Autocomplete
                disablePortal
                id="combo-box"
                options={cities}
                sx={{ width: 150 }}
                renderInput={(params) => (
                  <TextField variant="outlined" {...params} label="City" />
                )}
              />
            </div>
            <div className="form-group">
              <div className="thumb">
                <img src={cinema} alt="" />
              </div>
              <Autocomplete
                disablePortal
                id="combo-box"
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField variant="outlined" {...params} label="Movie" />
                )}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
