import React, { FC, ReactNode } from "react";
import { store } from "../app/store";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
interface PropsType {
  children: ReactNode;
}
export const CustomProvider: FC<PropsType> = ({ children }): JSX.Element => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_ENDPOINT,
    cache: new InMemoryCache(),
  });
  console.log("client: ", client);
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ReduxProvider>
  );
};
