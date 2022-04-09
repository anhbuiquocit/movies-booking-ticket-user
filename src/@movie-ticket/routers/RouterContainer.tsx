import NotFoundPage from "../components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserRouter from "./UserRouter";
import ProtectedRoute from "./ProtectedRoute";
import Routers from "./router";
const RouterContainer = () => (
  <BrowserRouter>
    <Switch>
      {UserRouter.map((item, key) => {
        const { path, exact, isPrivate, component } = item;
        if (UserRouter[key].notProtected) {
          return <Route key={key} path={path} component={component} />;
        }
        return (
          <ProtectedRoute
            path={path}
            exact={exact}
            component={component}
            redirect={Routers.userSignin}
          />
        );
      })}
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default RouterContainer;
