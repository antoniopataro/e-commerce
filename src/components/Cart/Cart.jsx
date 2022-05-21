import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/cartSlice";

import { Link } from "react-router-dom";

import styled from "styled-components";

import { motion } from "framer-motion";

import trashIcon from "../../assets/trashIcon.svg";
import applepayIcon from "../../assets/payment-options-icons/applepayIcon.svg";
import creditcardIcon from "../../assets/payment-options-icons/creditcardIcon.svg";
import paypalIcon from "../../assets/payment-options-icons/paypalIcon.svg";

import bannerImage from "../../assets/bannerImage.png";

const CartContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;

  width: 80vw;
  height: calc(100vh - 100px);

  padding-bottom: 100px;
  margin-top: 100px;

  #cart-left {
    display: flex;
    flex-direction: column;

    width: 60%;

    gap: 20px;

    overflow: scroll;

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .product-card {
      display: flex;
      flex-direction: row;

      width: 100%;
      height: 100px;

      align-items: center;
      justify-content: space-between;

      padding: 25px;

      color: ${(props) => props.theme.text};
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

          img {
            filter: ${(props) => props.theme.filter};
            pointer-events: none;
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

      gap: 50px;
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
      outline: none;

      font-size: 16px;

      cursor: pointer;

      color: ${(props) => props.theme.text};
      background-color: ${(props) => props.theme.secondary};
    }
  }
`;

function Cart() {
  const dispatch = useDispatch();

  const userCart = useSelector((state) => state.cart.userCart);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const [cartPrice, setCartPrice] = useState(0);
  const [paymentOption, setPaymentOption] = useState("Credit Card");
  const [shipTo, setShipTo] = useState();

  const getCartPrice = useEffect(() => {
    setCartPrice(0);

    userCart.map((product) => {
      setCartPrice((current) => current + product.price * product.quantity);
    });
  }, [userCart]);

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const handleCartSubmit = () => {
    console.log("Buy: ", userCart);
  };

  return (
    <CartContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      theme={currentTheme}
    >
      <div id="cart-left">
        {userCart.map((product, index) => (
          <motion.div
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="product-card"
            key={index}
          >
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
              <div className="product-quantity">
                Quantity: {product.quantity}
              </div>
              <div className="product-price">{`${product.price.toFixed(
                2
              )} $`}</div>
              <button
                className="remove-product"
                onClick={() => handleRemoveProduct(product)}
              >
                <img src={trashIcon} alt="Remove Product" width={15} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div id="cart-right">
        <div id="card-right-top">
          <h3 id="cart-right-title">Checkout</h3>
          <div id="ship-to">
            <h4 id="ship-to-title">Ship to:</h4>
            <input
              type="number"
              name="ship-to-zipcode"
              id="ship-to-input"
              placeholder="Input your ZIP Code."
              onChange={(e) => setShipTo(e.target.value)}
            />
          </div>
          <div id="payment-method">
            <div id="payment-method-title">Payment Method</div>
            <div id="payment-method-container">
              <motion.div
                style={{ backgroundColor: currentTheme.background }}
                animate={{
                  backgroundColor:
                    paymentOption === "Credit Card"
                      ? currentTheme.backgroundColor
                      : currentTheme.primary,
                }}
                className="payment-method-option"
                onClick={() => setPaymentOption("Credit Card")}
              >
                <img
                  src={creditcardIcon}
                  alt="Pay with Credit Card"
                  width={30}
                />
              </motion.div>
              <motion.div
                style={{ backgroundColor: currentTheme.background }}
                animate={{
                  backgroundColor:
                    paymentOption === "Paypal"
                      ? currentTheme.background
                      : currentTheme.primary,
                }}
                className="payment-method-option"
                onClick={() => setPaymentOption("Paypal")}
              >
                <img src={paypalIcon} alt="Pay with Paypal" width={50} />
              </motion.div>
              <motion.div
                style={{ backgroundColor: currentTheme.background }}
                animate={{
                  backgroundColor:
                    paymentOption === "Apple Pay"
                      ? currentTheme.background
                      : currentTheme.primary,
                }}
                className="payment-method-option"
                onClick={() => setPaymentOption("Apple Pay")}
              >
                <img src={applepayIcon} alt="Pay with Apple Pay" width={40} />
              </motion.div>
            </div>
          </div>
        </div>
        <Link
          style={{ textDecoration: "none", width: "100%" }}
          to={!shipTo || cartPrice === 0 ? "" : "/checkout"}
        >
          <motion.button
            animate={{
              backgroundColor: shipTo
                ? currentTheme.secondary
                : currentTheme.tertiary,
            }}
            disabled={!shipTo || cartPrice === 0}
            type="submit"
            onClick={() => handleCartSubmit()}
            id="checkout"
          >
            <div id="total-price">{`${cartPrice.toFixed(2)} $`}</div>
            <div>Pay &gt;</div>
          </motion.button>
        </Link>
      </div>
    </CartContainer>
  );
}

export default Cart;
