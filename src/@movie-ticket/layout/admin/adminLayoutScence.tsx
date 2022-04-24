import { Admin } from "@movie-ticket/constant/modal";
import AdminNavMenu from "@movie-ticket/components/AdminNavMenu";
import AdminNavHeader from "@movie-ticket/components/AdminNavHeader";
import React, { FC, ReactChild } from "react";
interface AdminLayoutProps {
  children: ReactChild;
  i18n?: any;
  adminData?: Admin;
  handleUserSignOut?: () => void;
}
const AdminLayoutScence: FC<AdminLayoutProps> = ({
  children,

  i18n,
  adminData,
  handleUserSignOut,
}) => {
  return (
    <div className="g-sidenav-show bg-gray-200">
      <AdminNavMenu adminData={adminData} />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <AdminNavHeader
          adminData={adminData}
          handleUserSignOut={handleUserSignOut}
        />
        <div className="container-fluid py-4">
          <div className="row">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayoutScence;
