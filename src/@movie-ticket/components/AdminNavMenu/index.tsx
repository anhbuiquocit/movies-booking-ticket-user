import "./style.scss";
import React, { FC } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import routers from "@movie-ticket/routers/router";
import { Admin } from "@movie-ticket/constant/modal";
interface AdminNavProps {
  adminData?: Admin;
}
const AdminNavMenu: FC<AdminNavProps> = ({ adminData }) => {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a
          className="navbar-brand m-0"
          href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
          target="_blank"
        >
          <img
            // src="@mo/assets/img/logo-ct.png"
            src={`${require("@movie-ticket/assets/admincss/img/logo-ct.png")}`}
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold text-white">
            Material Dashboard 2
          </span>
        </a>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto  max-height-vh-100"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link text-white active bg-gradient-primary"
              href="./pages/dashboard.html"
            >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">dashboard</i>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link text-white " href="./pages/tables.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">table_view</i>
              </div>
              <span className="nav-link-text ms-1">Tables</span>
            </a> */}

            <Accordion
              className="accordion-container"
              style={{
                margin: "0 1rem",
                color: "#fff",
                backgroundColor: "#323237",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <Typography style={{ color: "#fff" }}>Management</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Link
                  to={routers.managementUser}
                  className="nav-link-text ms-1 color-white"
                >
                  {" "}
                  {/* <Typography></Typography> */}
                  Quản lý người dùng
                </Link>
              </AccordionDetails>
            </Accordion>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="./pages/billing.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">receipt_long</i>
              </div>
              <span className="nav-link-text ms-1">Billing</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white "
              href="./pages/virtual-reality.html"
            >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
              </div>
              <span className="nav-link-text ms-1">Virtual Reality</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="./pages/rtl.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">
                  format_textdirection_r_to_l
                </i>
              </div>
              <span className="nav-link-text ms-1">RTL</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white "
              href="./pages/notifications.html"
            >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">notifications</i>
              </div>
              <span className="nav-link-text ms-1">Notifications</span>
            </a>
          </li>
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
              Account pages
            </h6>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="./pages/profile.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">person</i>
              </div>
              <span className="nav-link-text ms-1">Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="./pages/sign-in.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">login</i>
              </div>
              <span className="nav-link-text ms-1">Sign In</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="./pages/sign-up.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">assignment</i>
              </div>
              <span className="nav-link-text ms-1">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default AdminNavMenu;
