import "./index.scss";
export const Header = () => {
  return (
    <div className="grid">
      <div className="header-container">
        <div className="header__logo">
          <h2>This is logo</h2>
        </div>
        <ul className="header_nav">
          <li className="header_nav__item">
            <a href="#">HOME</a>
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
          <li className="header_nav__item" id="custom-btn">
            <a href="#">JOIN US </a>
            {/* <i className="fa-solid fa-chevron-down icon_white-color"></i> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
