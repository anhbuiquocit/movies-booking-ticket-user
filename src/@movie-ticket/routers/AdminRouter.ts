import { PageTest } from "@movie-ticket/pages/PageTest";
import Router from "./router";
import ManagementUser from "@movie-ticket/pages/Admin/ManagementUser";
import Signin from "@movie-ticket/pages/Admin/Signin";
import CreateUser from "@movie-ticket/pages/Admin/ManagementUser/CreateUser";
import DetailUser from "@movie-ticket/pages/Admin/ManagementUser/DetailUser";
import ManagerFilm from "@movie-ticket/pages/Admin/ManagerFilm";
import CreateFilm from "@movie-ticket/pages/Admin/ManagerFilm/CreateFilm";
import ManageShowing from "@movie-ticket/pages/Admin/ManageShowing";
import CreateShowing from "@movie-ticket/pages/Admin/ManageShowing/createShowing";
import DetailFilm from "@movie-ticket/pages/User/DetailFilm";
import DetailFilmManagement from "@movie-ticket/pages/Admin/ManagerFilm/DetailFilmManagement";
import DetailShowingManagement from "@movie-ticket/pages/Admin/ManageShowing/DetailShowingManagement";
import PromotionManage from "@movie-ticket/pages/Admin/ManagePromotion";
import CreatePromotion from "@movie-ticket/pages/Admin/ManagePromotion/createPromotion";
import DetailPromotion from "@movie-ticket/pages/Admin/ManagePromotion/detailPromotion";
import Statistical from "@movie-ticket/pages/Admin/Statistical";
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
  {
    path: Router.managerFilm,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: ManagerFilm,
  },
  {
    path: Router.createFilm,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: CreateFilm,
  },
  {
    path: Router.manageShowing,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: ManageShowing,
  },
  {
    path: Router.createShowing,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: CreateShowing,
  },
  {
    path: Router.updateFilm,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: DetailFilmManagement,
  },
  {
    path: Router.detailShowing,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: DetailShowingManagement,
  },
  {
    path: Router.managePromotion,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: PromotionManage,
  },
  {
    path: Router.createPromotion,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: CreatePromotion,
  },
  {
    path: Router.detailPromotion,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: DetailPromotion,
  },
  {
    path: Router.statistical,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: Statistical,
  },
];
export default adminRouter;
