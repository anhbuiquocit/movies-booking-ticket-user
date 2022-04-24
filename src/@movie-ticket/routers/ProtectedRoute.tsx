import { Redirect, Route } from "react-router-dom";
import { UserLayout } from "../layout/userLayout";
import AdminLayout from "@movie-ticket/layout/admin/adminLayout";
import middleware from "@movie-ticket/middleware";
import Routers from "./router";
import ModalRoutes from "@movie-ticket/layout/ModalRouters/ModalRoutes";
import { ModalRouteConfig } from "./models/route.model";
import { Modal } from "antd";
interface ProtectedRoute {
  component: any;
  redirect: string;
  permissionId?: string;
  baseModals?: ModalRouteConfig[];
  modals?: ModalRouteConfig[];
  [x: string]: any;
}
const ProtectedRoute = ({
  component: Component,
  modals = [],
  redirect,
  permissionId,
  baseModals,
  ...rest
}: ProtectedRoute) => {
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        const props = { ...rest, ...routerProps };
        if (middleware.isAdmin() && redirect === Routers.adminSignin) {
          return (
            <AdminLayout {...props}>
              <>
                <Component {...props} />
                
              </>
            </AdminLayout>
          );
        }
        if (middleware.isUser() && redirect === Routers.userSignin) {
          return (
            <UserLayout {...props}>
              <Component {...props} />
            </UserLayout>
          );
        }
        return <Redirect to={redirect} />;
      }}
    />
  );
};

export default ProtectedRoute;
