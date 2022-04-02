import AppRouter from "../routers";
import { PageTest } from "../pages/PageTest";
import { Header } from "../components/Header";
import { Row, Col } from "antd";
import { Footer } from "../components/Footer";
import NotFoundPage from "../components/NotFound";
import NotImplemented from "../components/NotImplemented";
import Loading from "../components/Loading";
export const UserLayout = () => {
  return (
    <div className="app_container">
      <div className="header">
        <Header />
      </div>
      <AppRouter />
      <div className="footer">
        <Footer />
      </div>
      {/* <div className="section-error">
        <NotFoundPage />
      </div> */}
      {/* <div className="section-error height-100">
        <NotImplemented />
      </div> */}
    </div>
  );
};
