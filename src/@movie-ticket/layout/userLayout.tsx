import AppRouter from "../routers";
import { PageTest } from "../pages/PageTest";
import { Header } from "../components/Header";
import { Row, Col } from "antd";
export const UserLayout = () => {
  return (
    <div className="app_container">
      <div className="header">
        <Header />
      </div>
      <AppRouter />
    </div>
  );
};
