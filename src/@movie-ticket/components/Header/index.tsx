import "./styles.css";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header__logo">
        <h2>This is logo</h2>
      </div>
      {/* <div className="header_nav-container">
      </div> */}
      <nav className="header_nav">
        {/* <li className="header_nav__item">
          <a href="#">Logo</a>
        </li> */}
        <li className="header_nav__item">
          <a href="#">HOME</a>
        </li>
        <li className="header_nav__item">
          <a href="#">MOVIES</a>
        </li>
        <li className="header_nav__item">
          <a href="#">EVENTS</a>
        </li>
        <li className="header_nav__item">
          <a href="#">PAGES</a>
        </li>
        <li className="header_nav__item">
          <a href="#">BLOG</a>
        </li>
        <li className="header_nav__item">
          <a href="#">CONTACT</a>
        </li>
      </nav>
    </div>
  );
};
