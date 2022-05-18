import styled from "styled-components";

import { useSelector } from "react-redux";

const ShoppingItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80vw;
  height: fit-content;

  gap: 50px;

  padding: 50px 0;

  justify-content: space-between;

  .shopping-items-line {
    display: flex;
    flex-direction: row;

    width: 100%;

    gap: 50px;
  }

  .product {
    width: 100%;
    aspect-ratio: 1;

    background-color: ${(props) => props.theme.secondary};
  }
`;

function ShoppingItems() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <ShoppingItemsContainer theme={currentTheme}>
      <div className="shopping-items-line">
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
      </div>
      <div className="shopping-items-line">
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
      </div>
    </ShoppingItemsContainer>
  );
}

export default ShoppingItems;
