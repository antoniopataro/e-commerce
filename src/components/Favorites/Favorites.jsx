import { useState } from "react";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { addProduct, increaseQuantity } from "../../redux/cartSlice";
import { removeFavorite } from "../../redux/favoritesSlice";

import { motion } from "framer-motion";

import closeIcon from "../../assets/closeIcon.svg";
import trashIcon from "../../assets/trashIcon.svg";

const FavoritesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 80vw;

  align-items: center;

  padding: 100px 0;
  gap: 100px;

  color: ${(props) => props.theme.text};

  #products-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    gap: 50px;

    .product {
      display: flex;
      flex-direction: column;

      width: 100%;
      aspect-ratio: 1;

      align-items: center;
      justify-content: space-between;

      padding: 20px;
      gap: 10px;

      background-color: ${(props) => props.theme.secondary};

      .product-top {
        display: flex;
        flex-direction: row;

        width: 100%;

        justify-content: flex-end;

        .favorite-quantity {
          color: ${(props) => props.theme.tertiary};
        }

        .product-favorite-remove {
          display: flex;

          justify-content: flex-end;

          border: none;
          outline: none;

          background-color: transparent;
          img {
            filter: ${(props) => props.theme.filter};
            cursor: pointer;
          }
        }
      }

      .product-image {
        width: 100%;
        height: 100%;
      }

      .product-name {
        font-size: 16px;
        text-align: center;
        width: 100%;
      }

      .product-price {
        font-size: 12px;
        text-align: center;
        width: 100%;
      }
    }
    .add-to-cart {
      font-size: 12px;

      width: 100%;
      height: 35px;

      padding: 5px;

      border: none;
      outline: none;

      border-radius: 0px;

      cursor: pointer;

      color: ${(props) => props.theme.invertedText};
      background-color: ${(props) => props.theme.primary};

      div {
        pointer-events: none;
      }
    }
  }

  #buy-all-favorites {
    width: 20vw;
    height: 60px;

    border: none;
    outline: none;

    cursor: pointer;

    color: ${(props) => props.theme.invertedText};
    background-color: ${(props) => props.theme.primary};
  }
`;

function Favorites() {
  const dispatch = useDispatch();

  const userCart = useSelector((state) => state.cart.userCart);
  const userFavorites = useSelector((state) => state.favorites.userFavorites);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const [wasProductAdded, setWasProductAdded] = useState(false);

  const handleRemoveFavorite = (product) => {
    dispatch(removeFavorite(product));
  };

  const handleAddToCart = (product) => {
    notifyAddition();

    const productsIds = userCart.map(({ id }) => id); // cant do it with raw product because its quantity is being changed

    if (productsIds.includes(product.id)) {
      dispatch(increaseQuantity(product));
      return;
    }

    dispatch(addProduct(product));
  };

  const notifyAddition = () => {
    setTimeout(() => {
      setWasProductAdded(false);
    }, 2500);

    setWasProductAdded(true);
  };

  const handleBuyAllFavorites = () => {
    console.log("Buy: ", userFavorites);
  };

  return (
    <FavoritesContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      theme={currentTheme}
    >
      <div id="products-container">
        {userFavorites.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="product">
              <div className="product-top">
                <button
                  className="product-favorite-remove"
                  onClick={() => handleRemoveFavorite(product)}
                >
                  <img src={trashIcon} alt="Remove Product" width={15} />
                </button>
              </div>
              <img
                src={product.image}
                alt="Product Image"
                className="product-image"
              />
              <div className="product-name">{product.name}</div>
              <div className="product-price">
                {`${product.price.toFixed(2)} $`}
              </div>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              <div>Add to Cart</div>
            </button>
          </motion.div>
        ))}
      </div>
      <button id="buy-all-favorites" onClick={() => handleBuyAllFavorites()}>
        Buy all
      </button>
      <motion.div
        animate={{ y: wasProductAdded ? -50 : 100 }}
        id="notifier-modal"
      >
        <div>Product Added</div>
        <img
          src={closeIcon}
          alt="Close Modal"
          width={20}
          onClick={() => setWasProductAdded(false)} // a little quick fix - not proud of the naming, but it closes the modal
        />
      </motion.div>
    </FavoritesContainer>
  );
}

export default Favorites;
