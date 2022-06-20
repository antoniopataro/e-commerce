import styled from 'styled-components';

const FavoritesStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 100%;

  align-items: center;
  justify-content: space-between;

  gap: 50px;
  margin: 0 auto;
  padding: 20px 12.5vw;

  .product-wrapper {
    position: relative;

    display: flex;
    flex-direction: column;

    transition: transform 0.15s ease;

    :hover {
      transform: scale(1.05);
    }

    .remove-from-favorites {
      position: absolute;

      top: 10px;
      right: 10px;

      border: none;
      outline: none;

      cursor: pointer;

      background-color: transparent;
    }

    .product {
      display: flex;
      flex-direction: column;

      width: 100%;
      aspect-ratio: 1;

      align-items: center;
      justify-content: center;

      cursor: pointer;
      background-color: white;
    }

    .add-to-cart {
      display: grid;
      place-items: center;

      width: 100%;

      padding: 8px 0;

      border: none;
      outline: none;

      cursor: pointer;

      color: white;
      background-color: #393d45;
    }
  }
`;

export default FavoritesStyles;
