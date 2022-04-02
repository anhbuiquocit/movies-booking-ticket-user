import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import imgNotFound from "../../assets/images/404.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./style.scss";

const NotImplemented = () => {
  return (
    <>
      <div className="grid">
        <div className="container-501">
          <div className="thumb-501">
            {/* <img src={imgNotFound} alt="501" /> */}
          </div>
          <h3 className="title-501">501 Not Implemented...</h3>
          <Stack direction="row" spacing={2}>
            <Button href="#">
              Back to home
              {/* <ArrowForwardIcon color="disabled" /> */}
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default NotImplemented;
