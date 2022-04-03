import { PageListFilm } from "./../pages/ListFilm/index";
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
  {
    path: Router.pageListFilm,
    exact: true,
    isPrivate: false,
    component: PageListFilm,
  },
];
export default userRouters;
