import NewLater from "../NewLater";
import "./styles.scss";
export const Footer = () => {
  return (
    <footer className="footer-section">
      <NewLater />
      <div className="grid">
        <div className="footer-top">
          <div className="logo">This is logo</div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-google"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-area">
            <div className="left">
              <p>
                Copyright © 2022.All Rights Reserved By
                <a href="#">Bui Quoc Anh</a>
              </p>
            </div>
            <ul className="links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Term Of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">FeedBack</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
