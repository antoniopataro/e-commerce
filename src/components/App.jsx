import React, { useState } from "react";
import styled from "styled-components";
import "../styles/App.css";

import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Banner from "./Main/Banner";
import CategoryPicker from "./Shopping/CategoryPicker";
import ShoppingItems from "./Shopping/ShoppingItems";
import Footer from "./Footer/Footer";

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
    <AppContainer theme={currentTheme}>
      <Header />
      <Banner />
      <CategoryPicker />
      <ShoppingItems />
      <Footer />
    </AppContainer>
  );
}

export default App;
