import React from "react";
import App from "routes/index";
import { useRouteMatch } from "react-router-dom";


const MainApp = () => {

  const match = useRouteMatch();



  return (
    <App match={match} />

  )
};
export default MainApp;

