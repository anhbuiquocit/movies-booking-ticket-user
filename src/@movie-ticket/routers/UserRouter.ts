import { PageListFilm } from "./../pages/ListFilm/index";
import { PageTest } from "../pages/PageTest";
import Router from "./router";
import { Home } from "../pages/Home";
import Loading from "../components/Loading";
import NotFoundPage from "../components/NotFound";

const userRouters = [
  {
    path: Router.pageTest,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: PageTest,
  },
  {
    path: Router.home,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: Home,
  },
  {
    path: Router.pageListFilm,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: PageListFilm,
  },
  {
    path: "/test",
    exact: true,
    isPrivate: false,
    notProtected: true,
    component: NotFoundPage,
  },
];
export default userRouters;
