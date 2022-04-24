import { PageTest } from "@movie-ticket/pages/PageTest";
import Router from "./router";
import ManagementUser from "@movie-ticket/pages/Admin/ManagementUser";
import Signin from "@movie-ticket/pages/Admin/Signin";
import CreateUser from "@movie-ticket/pages/Admin/ManagementUser/CreateUser";
import DetailUser from "@movie-ticket/pages/Admin/ManagementUser/DetailUser";
const adminRouter = [
  {
    path: Router.adminHome,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: PageTest,
  },
  {
    path: Router.managementUser,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: ManagementUser,
  },
  {
    path: Router.adminSignin,
    exact: false,
    isPrivate: false,
    notProtected: true,
    component: Signin,
  },
  {
    path: Router.createUser,
    exact: false,
    isPrivate: false,
    notProtected: false,
    component: CreateUser,
  },
  {
    path: Router.detailUser,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: DetailUser,
  },
];
export default adminRouter;
