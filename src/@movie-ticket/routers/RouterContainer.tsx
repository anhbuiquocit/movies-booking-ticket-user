import NotFoundPage from "../components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserRouter from "./UserRouter";
import AdminRouter from "./AdminRouter";
import ProtectedRoute from "./ProtectedRoute";
import { ModalContainer } from "react-router-modal";

import Routers from "./router";
const RouterContainer = () => (
  <>
    <BrowserRouter>
      <Switch>
        {AdminRouter.map((item: any, key) => {
          const { path, exact, isPrivate, component, modals, baseModals } =
            item;
          if (AdminRouter[key].notProtected) {
            return <Route key={key} path={path} component={component} />;
          }
          return (
            <ProtectedRoute
              path={path}
              exact={exact}
              component={component}
              redirect={Routers.adminSignin}
              baseModals={baseModals}
              modals={modals}
            />
          );
        })}
        {UserRouter.map((item: any, key) => {
          const { path, exact, isPrivate, component, modals, baseModals } =
            item;
          if (UserRouter[key].notProtected) {
            return <Route key={key} path={path} component={component} />;
          }
          return (
            <ProtectedRoute
              path={path}
              exact={exact}
              component={component}
              redirect={Routers.userSignin}
              baseModals={baseModals}
              modals={modals}
            />
          );
        })}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
    <ModalContainer />
  </>
);
export default RouterContainer;
