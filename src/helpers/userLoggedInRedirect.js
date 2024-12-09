import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function UserLoggedInRedirect({
  user,
  redirectpath,
  children,
  ...props
}) {
  return (
    <Route
      {...props}
      render={({ location }) => {
        return user ? <Redirect to={redirectpath} /> : children;
      }}
    />
  );
}
