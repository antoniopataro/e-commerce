import styled from "styled-components";

import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

function Main() {
  return (
    <MainContainer>
      <Banner />
      <Category />
      <Products />
    </MainContainer>
  );
}

export default Main;
