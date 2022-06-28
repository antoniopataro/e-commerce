import styled from 'styled-components';

const CartStyles = styled.main`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  justify-content: center;

  gap: 20px;

  margin: 0 auto;
  padding: 20px 12.5vw;

  background-color: #d9d9d9;

  #cart {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 20px;

    .product {
      display: flex;
      flex-direction: row;

      height: 100px;

      align-items: center;
      justify-content: space-between;

      padding: 20px;

      border-radius: 4px;

      background-color: white;

      a {
        text-decoration: none;
        color: inherit;
      }

      .product-left {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 20px;
      }

      .product-right {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 20px;

        button {
          display: grid;
          place-items: center;

          border: none;
          outline: none;

          padding: 10px;
          border-radius: 4px;

          cursor: pointer;
          background-color: transparent;

          transition: background-color 0.15s ease;

          :hover {
            background-color: #d9d9d9;
          }
        }
      }
    }
  }

  #checkout {
    display: flex;
    flex-direction: column;

    width: 50%;
    height: 50vh;

    align-items: center;
    justify-content: space-between;

    padding: 50px 20px;

    border-radius: 4px;

    color: white;
    background-color: #393d45;

    #checkout-top {
      display: flex;
      flex-direction: column;

      width: 100%;

      align-items: center;

      gap: 20px;

      ul {
        display: flex;
        flex-direction: column;

        width: 100%;
        max-height: 175px;

        align-items: flex-start;

        margin-left: 40px;

        overflow: scroll;

        ::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        li {
          font-weight: 300;
          font-size: 14px;
        }
      }
    }

    #checkout-bottom {
      display: flex;
      flex-direction: column;

      align-items: center;

      gap: 10px;

      button {
        display: grid;
        place-items: center;

        border: none;
        outline: none;

        padding: 6px 18px;

        border-radius: 4px;

        cursor: pointer;

        color: #393d45;
        background-color: white;
      }
    }
  }
`;

export default CartStyles;
