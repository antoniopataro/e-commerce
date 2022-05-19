import { useEffect, useState } from "react";

import styled from "styled-components";

import { useSelector } from "react-redux";

import trashIcon from "../assets/trashIcon.svg";
import applepayIcon from "../assets/payment-options-icons/applepayIcon.svg";
import creditcardIcon from "../assets/payment-options-icons/creditcardIcon.svg";
import paypalIcon from "../assets/payment-options-icons/paypalIcon.svg";

import bannerImage from "../assets/bannerImage.png";

const CartContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 80vw;
  height: calc(100vh - 100px);

  padding-bottom: 100px;

  #cart-left {
    display: flex;
    flex-direction: column;

    width: 60%;

    gap: 20px;

    overflow: scroll;

    ::-webkit-scrollbar {
      width: 5px;
      height: 0;

      background-color: ${(props) => props.theme.secondary};
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 1000px;

      background-color: ${(props) => props.theme.tertiary};
    }

    .product-card {
      display: flex;
      flex-direction: row;

      width: 100%;
      height: 100px;

      align-items: center;
      justify-content: space-between;

      padding: 25px;

      background-color: ${(props) => props.theme.secondary};

      .product-card-left {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 20px;
      }
      .product-card-right {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 20px;

        .product-quantity {
          color: ${(props) => props.theme.tertiary};
        }

        .product-price {
          text-align: right;
          width: fit-content;
        }

        .remove-product {
          display: flex;

          width: 30px;
          height: 30px;

          align-items: center;
          justify-content: center;

          border: none;
          outline: none;

          cursor: pointer;

          border-radius: 50%;

          background-color: transparent;

          :hover {
            background-color: ${(props) => props.theme.tertiary};
          }
        }
      }
    }
  }

  #cart-right {
    display: flex;
    flex-direction: column;

    width: 40%;

    align-items: center;
    justify-content: space-between;

    padding: 75px;

    background-color: ${(props) => props.theme.primary};

    #card-right-top {
      display: flex;
      flex-direction: column;

      width: 100%;

      align-items: center;

      gap: 75px;
    }

    #cart-right-title {
      color: ${(props) => props.theme.tertiary};
    }

    #ship-to {
      display: flex;
      flex-direction: column;

      width: 100%;

      gap: 20px;

      #ship-to-title {
        font-size: 16px;
        color: ${(props) => props.theme.tertiary};
      }

      #ship-to-input {
        font-size: 16px;
        font-weight: 300;
        font-family: "Poppins", sans-serif;

        border: none;
        outline: none;

        border-bottom: 1px solid ${(props) => props.theme.tertiary};

        color: ${(props) => props.theme.invertedText};
        background-color: transparent;

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    #payment-method {
      display: flex;
      flex-direction: column;

      width: 100%;

      gap: 20px;

      #payment-method-title {
        color: ${(props) => props.theme.tertiary};
      }

      #payment-method-container {
        display: flex;
        flex-direction: row;

        width: 100%;

        gap: 20px;
      }

      .payment-method-option {
        display: flex;

        width: 100%;
        aspect-ratio: 1;

        align-items: center;
        justify-content: center;

        cursor: pointer;

        border: 1px solid ${(props) => props.theme.tertiary};

        :hover {
          box-shadow: 0 4px 8px ${(props) => props.theme.shadow};
        }
      }
    }

    #checkout {
      display: flex;
      flex-direction: row;

      align-items: center;
      justify-content: space-between;

      width: 100%;
      height: 50px;

      padding: 0 20px;

      border: none;

      font-size: 16px;

      background-color: ${(props) => props.theme.secondary};
    }
  }
`;

function Cart() {
  const userCart = useSelector((state) => state.cart.userCart);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const [cartPrice, setCartPrice] = useState(0);

  const getCartPrice = () => {};

  useEffect(() => {
    setCartPrice(0);

    userCart.map((product) => {
      setCartPrice((price) => price + product.price);
    });
  }, [userCart]);

  return (
    <CartContainer theme={currentTheme}>
      <div id="cart-left">
        {userCart.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-card-left">
              <img
                src={bannerImage}
                alt="Product Image"
                width={50}
                height={50}
              />
              <div>{product.name}</div>
            </div>

            <div className="product-card-right">
              <div className="product-quantity">Quantity: 1</div>
              <div className="product-price">{`${product.price.toFixed(
                2
              )} $`}</div>
              <button className="remove-product">
                <img src={trashIcon} alt="Remove Product" width={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div id="cart-right">
        <div id="card-right-top">
          <h3 id="cart-right-title">Checkout</h3>
          <div id="ship-to">
            <h4 id="ship-to-title">Ship to:</h4>
            <input type="number" name="ship-to-zipcode" id="ship-to-input" />
          </div>
          <div id="payment-method">
            <div id="payment-method-title">Payment Method</div>
            <div id="payment-method-container">
              <div className="payment-method-option">
                <img
                  src={creditcardIcon}
                  alt="Pay with Credit Card"
                  width={30}
                />
              </div>
              <div className="payment-method-option">
                <img src={paypalIcon} alt="Pay with Paypal" width={50} />
              </div>
              <div className="payment-method-option">
                <img src={applepayIcon} alt="Pay with Apple Pay" width={40} />
              </div>
            </div>
          </div>
        </div>
        <button id="checkout">
          <div id="total-price">{`${cartPrice.toFixed(2)} $`}</div>
          <div>Pay &gt;</div>
        </button>
      </div>
    </CartContainer>
  );
}

export default Cart;
