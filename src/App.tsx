import React from "react";
import "./App.css";
import { CustomProvider } from "./@movie-ticket/provider";
import RouterContainer from "./@movie-ticket/routers/RouterContainer";
function App() {
  console.log("variable process.env: ", process.env);
  return (
    <CustomProvider>
      <RouterContainer />
    </CustomProvider>
  );
}

export default App;
