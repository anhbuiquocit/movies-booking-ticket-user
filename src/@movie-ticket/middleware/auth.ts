import { USER_TOKEN_KEY, ADMIN_TOKEN_KEY } from "@movie-ticket/constant";

const getUserType = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  const adminToken = localStorage.getItem(ADMIN_TOKEN_KEY);
  if (userToken) {
    return "USER";
  }
  if (adminToken) {
    return "ADMIN";
  }
  return "ANONYMOUS";
};

const getToken = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  const adminToken = localStorage.getItem(ADMIN_TOKEN_KEY);
  if (userToken) {
    return userToken;
  }
  if (adminToken) {
    return adminToken;
  }
  return null;
};

const signout = ({
  history,
  client,
  pathname,
}: {
  history: any;
  client: any;
  pathname: string;
}) => {
  client.resetStore();
  localStorage.clear();
  history.push({
    pathname,
  });
};

const Auth = {
  getUserType,
  getToken,
  signout,
};

export default Auth;
