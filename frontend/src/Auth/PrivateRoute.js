import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./authentication/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);

  // If the user not log in -> open login page
  return (
    <Route {...rest}>{!user ? <Navigate to="/signIn" /> : children}</Route>
  );
};

export default PrivateRoute;
