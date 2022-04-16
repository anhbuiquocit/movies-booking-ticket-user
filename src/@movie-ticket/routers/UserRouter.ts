import { PageListFilm } from "@movie-ticket/pages/User/ListFilm/index";
import { PageTest } from "@movie-ticket/pages/PageTest";
import Router from "./router";
import { Home } from "../pages/User/Home";
import NotFoundPage from "@movie-ticket/components/NotFound";
import Signin from "@movie-ticket/pages/User/Signin";
import Signup from "@movie-ticket/pages/User/Signup/Signup";
import DetailFilm from "@movie-ticket/pages/User/DetailFilm";
import Modal from "@movie-ticket/components/Modal";
import UserDetail from "@movie-ticket/pages/User/UserDetail";
import BookingTicket from "@movie-ticket/pages/User/BookingTicket";

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
  {
    path: Router.userSignin,
    exact: true,
    isPrivate: false,
    notProtected: true,
    component: Signin,
  },
  {
    path: Router.userSignup,
    exact: true,
    isPrivate: false,
    notProtected: true,
    component: Signup,
  },
  {
    path: Router.detailFilm,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: DetailFilm,
  },
  {
    path: Router.testModal,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: Modal,
  },
  {
    path: Router.userDetail,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: UserDetail,
  },
  {
    path: Router.bookingTicket,
    exact: true,
    isPrivate: false,
    notProtected: false,
    component: BookingTicket,
  },
];
export default userRouters;
