import React from "react";
import { useSelector } from "react-redux";

import { Redirect, Route, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const loggedIn = useSelector((state) => state.productReducer.loggedIn);
  return (
    <Route {...rest}>
      {loggedIn === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default ProtectedRoute;
