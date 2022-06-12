import React from "react";
import "../styles/App.css";

import Header from "../components/Header";

import Main from "../components/Main/Main";
import Favorites from "../components/Main/Favorites";
import Cart from "../components/Cart/Cart";
import Login from "../components/Auth/Login";
import Singup from "../components/Auth/Singup";
import Checkout from "../components/PrivateRoutes/Checkout";
import Profile from "../components/PrivateRoutes/Profile";

import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/e-commerce/" element={<Main />} />
        <Route path="/e-commerce/favorites" element={<Favorites />} />
        <Route path="/e-commerce/cart" element={<Cart />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/e-commerce/checkout" element={<Checkout />} />
          <Route path="/e-commerce/profile" element={<Profile />} />
        </Route>

        <Route path="/" element={<AuthRoutes />}>
          <Route path="/e-commerce/login" element={<Login />} />
          <Route path="/e-commerce/singup" element={<Singup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
