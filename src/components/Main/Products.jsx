import { useState, useEffect } from "react";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, increaseQuantity } from "../../redux/cartSlice";
import { addFavorite } from "../../redux/favoritesSlice";

import { productsList } from "../ProductsList";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import heartIcon from "../../assets/header-icons/heartIcon.svg";
import closeIcon from "../../assets/closeIcon.svg";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  width: 80vw;
  height: fit-content;

  gap: 50px;

  padding: 50px 0;

  justify-content: space-between;

  .product {
    display: flex;
    flex-direction: column;

    width: 100%;
    aspect-ratio: 1;

    align-items: center;
    justify-content: space-between;

    padding: 20px;
    gap: 10px;

    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.secondary};

    .product-favorite-icon {
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

    img {
      filter: ${(props) => props.theme.filter};
      pointer-events: none;
    }
  }
`;

function Products() {
  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);

  const dispatch = useDispatch();

  const userCart = useSelector((state) => state.cart.userCart);
  const userFavorites = useSelector((state) => state.favorites.userFavorites);
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );

  const [wasProductAdded, setWasProductAdded] = useState(false);

  const categoryFilter = productsList.filter((product) => {
    if (product.category === currentCategory) {
      return product;
    }
    return;
  });

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

  const handleFavorite = (product) => {
    notifyAddition();

    const favoritesIds = userFavorites.map(({ id }) => id);

    if (favoritesIds.includes(product.id)) {
      return;
    }

    dispatch(addFavorite(product));
  };

  return (
    <>
      <ProductsContainer theme={currentTheme} data-aos="fade-up">
        {categoryFilter.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="product">
              <button
                className="product-favorite-icon"
                onClick={() => handleFavorite(product)}
              >
                <img src={heartIcon} alt="Favorite Product" width={15} />
              </button>
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
      </ProductsContainer>
      <motion.div
        animate={{ y: wasProductAdded ? -50 : 100 }}
        id="notifier-modal"
        style={{ zIndex: 100 }}
      >
        <div>Product Added</div>
        <img
          src={closeIcon}
          alt="Close Modal"
          width={20}
          onClick={() => setWasProductAdded(false)} // a little quick fix - not proud of the naming, but it closes the modal
        />
      </motion.div>
    </>
  );
}

export default Products;
