import React, { FC, ReactNode } from "react";
import { store } from "../app/store";
import { Provider as ReduxProvider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Auth from "@movie-ticket/middleware/auth";
import { setContext } from "@apollo/client/link/context";
interface PropsType {
  children: ReactNode;
}
export const CustomProvider: FC<PropsType> = ({ children }): JSX.Element => {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_ENDPOINT,
  });
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = Auth.getToken();
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  const client = new ApolloClient({
    // uri: process.env.REACT_APP_ENDPOINT,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ReduxProvider>
  );
};
