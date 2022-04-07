import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import imgNotFound from "../../assets/images/404.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./style.scss";

const NotFoundPage = () => {
  return (
    <div className="handle-component-container">
      <div className="grid">
        <div className="container-404">
          <div className="thumb-404">
            <img src={imgNotFound} alt="404" />
          </div>
          <h3 className="title-404">Oops.. looks like you got lost :( </h3>
          <Stack direction="row" spacing={2}>
            <Button href="#">
              Bach to home
              {/* <ArrowForwardIcon color="disabled" /> */}
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
