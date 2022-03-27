import { PageTest } from "../pages/PageTest";
import Router from "./router";

const userRouters = [
  {
    path: Router.pageTest,
    exact: true,
    isPrivate: false,
    component: PageTest,
  },
];
export default userRouters;
