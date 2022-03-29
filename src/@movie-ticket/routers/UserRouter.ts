import { PageTest } from "../pages/PageTest";
import Router from "./router";
import { Home } from "../pages/Home";

const userRouters = [
  {
    path: Router.pageTest,
    exact: true,
    isPrivate: false,
    component: PageTest,
  },
  {
    path: Router.home,
    exact: true,
    isPrivate: false,
    component: Home,
  },
];
export default userRouters;
