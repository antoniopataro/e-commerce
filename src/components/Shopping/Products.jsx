import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

import { productsList } from "./ProductsList";

import { motion } from "framer-motion";

import bannerImage from "../../assets/bannerImage.png";

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

    justify-content: space-between;

    padding: 20px;

    background-color: ${(props) => props.theme.secondary};

    h4 {
      color: ${(props) => props.theme.tertiary};
    }

    .procuct-card-bottom {
      display: flex;
      flex-direction: row;

      align-items: flex-end;
      justify-content: space-between;

      .add-to-cart {
        font-size: 12px;

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
  }
`;

function Products() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );

  const categoryFilter = productsList.filter((product) => {
    if (product.category === currentCategory) {
      return product;
    }
    return;
  });

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <ProductsContainer theme={currentTheme}>
      {categoryFilter.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="product"
        >
          <div className="product-name">{product.name}</div>
          <img
            src={bannerImage /*product.image*/}
            alt="Product Image"
            className="product-img"
            width={100}
          />
          <div className="procuct-card-bottom">
            <div className="product-price">
              <h4>Price:</h4>
              {`${product.price.toFixed(2)} $`}
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              <div>Add to Cart</div>
            </button>
          </div>
        </motion.div>
      ))}
    </ProductsContainer>
  );
}

export default Products;
