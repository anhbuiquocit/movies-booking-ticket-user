import "./index.scss";
import sourceImg from "./../../assets/images/banner02.jpg";
import { MoviesContainer } from "../../components/MoviesContainer";
export const Home = () => {
  return (
    <>
      <section className="banner-section">
        <div className="banner-bg"></div>
        <div className="grid">
          <div className="banner-content">
            <h1 className="title">
              <span className="d-block">BOOK YOUR TICKETS</span>
              <span className="">FOR MOVIES</span>
            </h1>
            <p>
              Safe, secure, reliable ticketing. Your ticket to live
              entertainment!
            </p>
          </div>
        </div>
      </section>
      <section className="movies-section">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__column-3">
              <div className="widget-banner">
                <a href="#">
                  <img src={sourceImg} alt="" />
                </a>
              </div>
            </div>
            <div className="grid__column-9">
              <div className="artical-section">
                <div className="artical-header">
                  <h2 className="title">MOVIES</h2>
                  <a href="#">View All</a>
                </div>
                <div className="grid__row">
                  <MoviesContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
