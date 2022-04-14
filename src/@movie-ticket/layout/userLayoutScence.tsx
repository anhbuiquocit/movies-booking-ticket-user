import "./styles.scss";
import AppRouter from "../routers";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ReactChild } from "react";
import { User } from "@movie-ticket/constant/modal";

interface UserLayoutProps {
  children: ReactChild;
  userRole?: string;
  i18n?: any;
  userData?: User;
  handleUserSignOut?: () => void;
}
export const UserLayoutScence = ({
  children,
  userRole,
  i18n,
  userData,
  handleUserSignOut,
}: UserLayoutProps) => {
  console.log("xxx: ", userData);
  return (
    <div className="app_container">
      <div className="header-section header-active">
        <Header
          userRole={userRole}
          i18n={i18n}
          handleUserSignOut={handleUserSignOut}
          lastname={userData?.lastname}
        />
      </div>
      <section className="app-body">{children}</section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
