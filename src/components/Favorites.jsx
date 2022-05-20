import { useEffect, useState } from "react";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";

import { motion } from "framer-motion";

import trashIcon from "../assets/trashIcon.svg";

const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 80vw;

  align-items: center;

  padding: 100px 0;
  gap: 100px;

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

        align-items: center;
        justify-content: space-between;

        .favorite-quantity {
          color: ${(props) => props.theme.tertiary};
        }

        .product-favorite-remove {
          display: flex;

          width: 100%;
          justify-content: flex-end;

          border: none;
          outline: none;

          background-color: transparent;
          img {
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

  const userFavorites = useSelector((state) => state.favorites.userFavorites);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const handleRemoveFavorite = (product) => {
    dispatch(removeFavorite(product));
  };

  return (
    <FavoritesContainer theme={currentTheme}>
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
                <div className="favorite-quantity">{product.quantity}</div>
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
      <button id="buy-all-favorites">Buy all</button>
    </FavoritesContainer>
  );
}

export default Favorites;
