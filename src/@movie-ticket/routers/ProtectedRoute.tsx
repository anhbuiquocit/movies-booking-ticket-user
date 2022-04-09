import { Redirect, Route } from "react-router-dom";
import { UserLayout } from "../layout/userLayout";
import Routers from "./router";
interface ProtectedRoute {
  component: any;
  redirect: string;
  permissionId?: string;
  [x: string]: any;
}
const ProtectedRoute = ({
  component: Component,
  redirect,
  permissionId,
  ...rest
}: ProtectedRoute) => {
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        const props = { ...rest, ...routerProps };
        if (redirect === Routers.userLogin) {
          return (
            <UserLayout>
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
