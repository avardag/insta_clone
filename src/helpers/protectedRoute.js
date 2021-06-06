import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: {
                from: location,
              } /*<from: location> for Login page to redirect where user tried to reach*/,
            }}
          />
        );
      }}
    />
  );
}
