const routers = {
  home: "/",
  //User router
  moviesList: "/movies_list",
  pageTest: "/admin/test",
  pageListFilm: "/list_film",
  userSignup: "/user/signup",
  userSignin: "/user/signin",
  detailFilm: "/film/detail/:id",
  testModal: "/admin/modal",
  userDetail: "/user/detail",
  bookingTicket: "/booking_ticket/:filmId",
  bookingTicketRouter: "/booking_ticket/",

  // Admin router
  adminHome: "/admin",
  adminSignin: "/admin/signin",
  managementUser: "/admin/management_user",
  createUser: "/admin/management_user/create_user",
  // createUser: "/create_user",
  detailUser: "/admin/management_user/detail/:id",
};
const Router = {
  ...routers,
  get: (pathInput, params) => {
    let path = pathInput;
    if (params) {
      Object.keys(params).forEach((paramKey) => {
        path = path.replace(`:${paramKey}`, params[paramKey]);
      });
    }
    return path;
  },
};

export default Router;
