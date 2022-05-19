import React from "react";
import styled from "styled-components";
import "../styles/App.css";

import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Main from "./Main";
import Cart from "./Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  align-items: center;

  background-color: ${(props) => props.theme.background};
`;

function App() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <BrowserRouter>
      <Header />
      <AppContainer theme={currentTheme}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
