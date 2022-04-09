import { ReactChild } from "react";
import { UserLayoutScence } from "./userLayoutScence";
interface UserLayoutProps {
  children: ReactChild;
}
export const UserLayout = ({ children }: UserLayoutProps) => {
  return <UserLayoutScence>{children}</UserLayoutScence>;
};
