import React from "react";
import styled from "styled-components";
import "../styles/App.css";

import { useSelector } from "react-redux";

import Header from "./Header";
import Main from "./Main/Main";
import Favorites from "./Favorites/Favorites";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Checkout from "./Checkout/Checkout";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  align-items: center;

  background-color: ${(props) => props.theme.background};

  #notifier-modal {
    position: fixed;

    display: flex;
    flex-direction: row;

    bottom: 0;

    width: 20vw;

    justify-content: space-between;

    padding: 20px;

    font-weight: 300;

    color: ${(props) => props.theme.invertedText};
    background-color: ${(props) => props.theme.primary};
  }
`;

function App() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const isLogged = true;

  return (
    <BrowserRouter>
      <AppContainer theme={currentTheme}>
        <Header />
        <Routes>
          <Route exact path="/e-commerce/" element={<Main />} />
          <Route path="/e-commerce/login" element={<Login />} />
          <Route path="/e-commerce/favorites" element={<Favorites />} />
          <Route path="/e-commerce/cart" element={<Cart />} />
          <Route
            path="/e-commerce/checkout"
            element={
              isLogged ? (
                <Checkout />
              ) : (
                <Navigate to="/e-commerce/login" replace />
              )
            }
          />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
