import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  const userAuth = useSelector((state) => state.auth.userAuth);
  const isLogged = userAuth.isLogged;

  return isLogged ? <Outlet /> : <Navigate to="/e-commerce/login" />;
}

export default PrivateRoutes;
