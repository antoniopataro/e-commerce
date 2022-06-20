import styled from 'styled-components';

const ProductStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 20px;
  margin: 0 auto;
  padding: 20px 12.5vw;

  background-color: #d9d9d9;

  #product-showcase {
    display: flex;
    flex-direction: row;

    width: 100%;

    align-items: center;

    #product-image {
      display: grid;
      place-items: center;

      width: 100%;
      height: 50%;
      aspect-ratio: 1;

      border-radius: 4px;
      background-color: white;
    }

    #product-info {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 50%;
      aspect-ratio: 1;

      align-items: center;
      justify-content: space-between;

      p {
        padding: 20px;
      }

      #checkout-info {
        display: flex;
        flex-direction: column;

        align-items: center;

        button {
          display: grid;
          place-items: center;

          width: 150px;

          padding: 8px 0;

          border: none;
          outline: none;

          border-radius: 4px;

          cursor: pointer;

          color: white;
          background-color: #393d45;
        }
      }
    }
  }
`;

export default ProductStyles;
