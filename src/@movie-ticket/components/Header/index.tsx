import { FC } from "react";
import "./index.scss";
import { USER_ROLE } from "@movie-ticket/constant";
import { Avatar, Image } from "antd";
import i18n from "@movie-ticket/translation";
import { Link } from "react-router-dom";
interface HeaderProps {
  userRole?: string;
  i18n?: any;
  lastname?: string;
  handleUserSignOut?: () => void;
}
export const Header: FC<HeaderProps> = ({
  userRole,
  i18n,
  lastname,
  handleUserSignOut,
}) => {
  return (
    <div className="grid">
      <div className="header-container">
        <div className="header__logo">
          <h2>This is logo</h2>
        </div>
        <ul className="header_nav">
          <li className="header_nav__item">
            <a href="#">{i18n.t("main.header.homePage")}</a>
          </li>
          <li className="header_nav__item">
            <a href="#">
              MOVIES{" "}
              <i className="fa-solid fa-chevron-down icon_white-color"></i>
            </a>
            <ul className="sub_nav">
              <li className="sub_nav_item">
                <a href="#">Movies list</a>
              </li>
              <li className="sub_nav_item">
                <a href="#">Ticket Plan</a>
              </li>
              <li className="sub_nav_item">
                <a href="#">Seat plan</a>
              </li>
              <li className="sub_nav_item">
                <a href="#">Movies checkout</a>
              </li>
              <li className="sub_nav_item">
                <a href="#">Movies Food</a>
              </li>
            </ul>
          </li>
          <li className="header_nav__item">
            <a href="#">
              EVENTS{" "}
              <i className="fa-solid fa-chevron-down icon_white-color"></i>
            </a>
            <ul className="sub_nav">
              <li className="sub_nav_item">
                <a href="#">List event</a>
              </li>
              <li className="sub_nav_item">
                <a href="#">Speaker</a>
              </li>
              <li className="sub_nav_item">
                <a href="#">Event ticket</a>
              </li>
              <li className="sub_nav_item">
                <a href="#">Event Checkout</a>
              </li>
            </ul>
          </li>
          <li className="header_nav__item">
            <a href="#">
              ABOUT US{" "}
              <i className="fa-solid fa-chevron-down icon_white-color"></i>
            </a>
          </li>
          <li className="header_nav__item">
            <a href="#">
              BLOG <i className="fa-solid fa-chevron-down icon_white-color"></i>
            </a>
          </li>
          <li className="header_nav__item">
            <a href="#">
              CONTACT{" "}
              <i className="fa-solid fa-chevron-down icon_white-color"></i>
            </a>
          </li>
          {userRole === USER_ROLE.USER ? (
            <li className="header_nav__item">
              <span className="header_nav__item-avartar">
                <Avatar
                // src={
                //   <Image
                //     src="https://joeschmoe.io/api/v1/random"
                //     style={{ width: 32 }}
                //   />
                // }
                >
                  U
                </Avatar>
                <p>Xin chào {lastname}</p>
              </span>
              <ul className="user-submenu">
                <li className="user-submenu-item">
                  <a href="#">User detail</a>
                </li>
                <li className="user-submenu-item" onClick={handleUserSignOut}>
                  <a href="#">Signout</a>
                </li>
                {/* <li className="user-submenu-item">
                    <a href=""></a>
                  </li> */}
              </ul>
              {/* <i className="fa-solid fa-chevron-down icon_white-color"></i> */}
            </li>
          ) : (
            <li className="header_nav__item" id="custom-btn">
              <Link to="/user/signin">{i18n.t("main.header.signin")} </Link>
              {/* <i className="fa-solid fa-chevron-down icon_white-color"></i> */}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
