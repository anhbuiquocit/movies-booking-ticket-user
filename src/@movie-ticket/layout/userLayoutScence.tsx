import "./styles.scss";
import AppRouter from "../routers";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ReactChild } from "react";

interface UserLayoutProps {
  children: ReactChild;
}
export const UserLayoutScence = ({ children }: UserLayoutProps) => {
  return (
    <div className="app_container">
      <div className="header-section header-active">
        <Header />
      </div>
      <section className="app-body">{children}</section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
