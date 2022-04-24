import React, { RefAttributes } from "react";
import {
  RouteComponentProps,
  Link,
  withRouter,
  LinkProps,
} from "react-router-dom";

interface ModalLinkProps {
  children?: React.ReactNode;
  to: string;
  state?: any;
  id?: string;
}

const ModalLink = ({
  to,
  match: { url },
  location: { search },
  children,
  state,
  id,
}: RouteComponentProps &
  ModalLinkProps &
  LinkProps<any> &
  RefAttributes<HTMLAnchorElement>) => (
  <Link
    id={id}
    to={{
      pathname: `${url}${to}`,
      search,
      state,
    }}
  >
    {children}
  </Link>
);

export default withRouter(ModalLink);
