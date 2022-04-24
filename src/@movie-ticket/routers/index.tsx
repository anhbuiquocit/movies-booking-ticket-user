import { ComponentType, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from "./../components/Header/index";
import userRouter from "./UserRouter";
const AppRouter = ({
  history,
  localtion,
  match,
}: {
  history: any;
  localtion: any;
  match: any;
}) => {
  return (
    <>
      <Router>
        {/* <Suspense fallback={<div>loading</div>}> */}
        {/* <Route>
          {userRouter.map((route, key) => {
            const { path, exact, component, isPrivate } = route;

            const props = {
              path,
              exact,
              // component: lazy(() => component),
              component,
            };
          })}
        </Route> */}

        <Switch>
          {userRouter.map((route: any, key) => (
            <Route
              key={key}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
        {/* </Suspense> */}
      </Router>
    </>
  );
};

export default AppRouter;
