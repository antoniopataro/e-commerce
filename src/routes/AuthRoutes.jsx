import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";

function AuthRoutes() {
  const userAuth = useSelector((state) => state.auth.userAuth);
  const isLogged = userAuth.isLogged;

  return isLogged ? <Navigate to="/e-commerce/" /> : <Outlet />;
}

export default AuthRoutes;
