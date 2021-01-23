import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border mt-5 text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return !isEmpty(auth) ? (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
