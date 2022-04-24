import "../../assets/admincss/css/material-dashboard.css?v=3.0.2";
import "../../assets/admincss/css/nucleo-icons.css";
import "../../assets/admincss/css/nucleo-svg.css";
import "./styles.scss";
import React, { FC, ReactChild, ReactNode, useEffect } from "react";
import AdminLayoutScence from "./adminLayoutScence";
import { useApolloClient, useQuery } from "@apollo/client";
import Auth from "@movie-ticket/middleware/auth";
import { ADMIN_QUERY_ME } from "./adminLayout.graphql";
import Loading from "@movie-ticket/components/Loading";
import routers from "@movie-ticket/routers/router";
import i18n from "@movie-ticket/translation";
const AdminLayout: FC<{ children: ReactChild; history: any }> = ({
  history,
  children,
}) => {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(ADMIN_QUERY_ME);
  useEffect(() => {
    if (error) {
      if (error.graphQLErrors.length > 0 && error.graphQLErrors[0].message)
        Auth.signout({
          history,
          client,
          pathname: routers.adminSignin,
        });
    }
  }, [client, error, history]);
  if (loading) return <Loading />;
  const handleUserSignOut = () => {
    Auth.signout({
      history,
      client,
      pathname: routers.adminSignin,
    });
  };

  return (
    <AdminLayoutScence
      i18n={i18n}
      adminData={data?.adminQueryMe}
      handleUserSignOut={handleUserSignOut}
    >
      {children}
    </AdminLayoutScence>
  );
};

export default AdminLayout;
