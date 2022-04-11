import { USER_TOKEN_KEY, ADMIN_TOKEN_KEY } from "@movie-ticket/constant";

const isUser = () => localStorage.getItem(USER_TOKEN_KEY);

const isAdmin = () => localStorage.getItem(ADMIN_TOKEN_KEY);

export default {
  isUser,
  isAdmin,
};
