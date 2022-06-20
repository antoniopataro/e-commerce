import Image from 'next/image';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { productsList } from '../../components/Products/productsList';
import { addProduct, increaseQuantity } from '../../redux/cartSlice';

import ProductStyles from './styles';

function Product() {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cart.userCart);

  const router = useRouter();
  const queryParam = router.query.id;

  const productSlugs = productsList.map((item) => item.slug);

  if (!productSlugs.includes(queryParam)) {
    return;
  }

  const productIndex = productsList.findIndex((item) => item.slug === queryParam);
  const product = productsList[productIndex];

  function addToCart() {
    const productsIds = userCart.map(({ id }) => id);

    if (productsIds.includes(product.id)) {
      dispatch(increaseQuantity(product));
      return;
    }

    dispatch(addProduct(product));
  }

  return (
    <ProductStyles>
      <h2>{product.name}</h2>
      <div id="product-showcase">
        <div id="product-image">
          <Image src={product.image} alt={product.name} title={product.name} layout="fixed" width={225} height={200} />
        </div>
        <div id="product-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div id="checkout-info">
            <h2>{`$ ${product.price.toFixed(2)}`}</h2>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </ProductStyles>
  );
}

export default Product;
