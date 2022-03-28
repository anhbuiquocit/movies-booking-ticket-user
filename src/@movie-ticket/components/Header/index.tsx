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
            <i className="fa-solid fa-chevron-down icon_white-color"></i>
          </li>
          <li className="header_nav__item">
            <a href="#">MOVIES</a>
            <i className="fa-solid fa-chevron-down icon_white-color"></i>
          </li>
          <li className="header_nav__item">
            <a href="#">EVENTS</a>
            <i className="fa-solid fa-chevron-down icon_white-color"></i>
          </li>
          <li className="header_nav__item">
            <a href="#">PAGES</a>
            <i className="fa-solid fa-chevron-down icon_white-color"></i>
          </li>
          <li className="header_nav__item">
            <a href="#">BLOG</a>
            <i className="fa-solid fa-chevron-down icon_white-color"></i>
          </li>
          <li className="header_nav__item">
            <a href="#">CONTACT</a>
            <i className="fa-solid fa-chevron-down icon_white-color"></i>
          </li>
          <li className="header_nav__item" id="custom-btn">
            <a href="#">JOIN US</a>
            {/* <i className="fa-solid fa-chevron-down icon_white-color"></i> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
