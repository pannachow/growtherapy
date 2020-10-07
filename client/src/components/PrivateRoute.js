import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from '../helpers/Auth';


function PrivateRoute({ exact, path, component, children }) {
  let userId = Auth.getUserId();
  if (!userId) {
    return <Redirect to="/log-in" />;
  }

  return (
    <Route exact={exact} path={path} component={component}>
      {children}
    </Route>
  );
}

export default PrivateRoute;