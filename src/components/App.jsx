import React from "react";
import styled from "styled-components";
import "../styles/App.css";

import { useSelector } from "react-redux";

import Header from "./Header";
import AppRoutes from "../routes/AppRoutes";

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

  return (
    <AppContainer theme={currentTheme}>
      <AppRoutes />
    </AppContainer>
  );
}

export default App;
