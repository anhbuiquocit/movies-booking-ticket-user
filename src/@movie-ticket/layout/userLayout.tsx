import { ReactChild, useEffect } from "react";
import { UserLayoutScence } from "./userLayoutScence";
import Auth from "@movie-ticket/middleware/auth";
import { useApolloClient, useQuery } from "@apollo/client";
import { QUERY_ME } from "./userLayout.graphql";
import i18n from "@movie-ticket/translation";
import Loading from "@movie-ticket/components/Loading";
import { popup } from "@movie-ticket/tools";
import routers from "@movie-ticket/routers/router";

interface UserLayoutProps {
  children: ReactChild;
  history: any;
}
export const UserLayout = ({ history, children }: UserLayoutProps) => {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(QUERY_ME);
  useEffect(() => {
    if (error) {
      if (error.graphQLErrors.length > 0 && error.graphQLErrors[0].message)
        Auth.signout({
          history,
          client,
          pathname: routers.home,
        });
    }
  }, [client, error, history]);
  if (loading) return <Loading />;
  const handleUserSignOut = () => {
    Auth.signout({
      history,
      client,
      pathname: routers.home,
    });
  };
  const { queryMe: userData } = data;
  
  return (
    <UserLayoutScence
      userRole={Auth.getUserType()}
      i18n={i18n}
      handleUserSignOut={handleUserSignOut}
      userData={userData}
    >
      {children}
    </UserLayoutScence>
  );
};
