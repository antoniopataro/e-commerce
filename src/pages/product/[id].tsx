import { useRouter } from 'next/router';

import Link from 'next/link';

import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, increaseQuantity } from '../../redux/cartSlice';
import { addFavorite } from '../../redux/favoritesSlice';
import { toast } from '../../redux/toastSlice';

import { productsList, ProductInterface } from '../../components/Products/productsList';

import ProductStyles from './styles';

function Product() {
  const dispatch = useDispatch();

  const router = useRouter();
  const queryId = router.query.id! as string;

  /*@ts-ignore*/
  const userFavorites = useSelector((state) => state.favorites.userFavorites);

  const productIndex = productsList.findIndex((item) => item.slug === queryId);
  const product = productsList[productIndex];

  const productSlugs = productsList.map((item) => item.slug);

  if (!productSlugs.includes(queryId)) {
    return (
      <ProductStyles>
        <div id="not-found">
          <h3>
            <strong>404</strong> | This page does not exist.
          </h3>
          <Link href="/">Homepage</Link>
        </div>
      </ProductStyles>
    );
  }

  function addToCart(product: ProductInterface) {
    dispatch(toast('Added Product'));

    if (isProductInCart(product)) {
      dispatch(increaseQuantity(product));
      return;
    }
    dispatch(addProduct(product));
  }

  function addToFavorites(product: ProductInterface) {
    if (isProductInCart(product)) {
      return;
    }
    dispatch(toast('Favorited Product'));
    dispatch(addFavorite(product));
  }

  const isProductInCart = (product: ProductInterface) => {
    const productIds = userFavorites.map((item: ProductInterface) => item.id);

    if (productIds.includes(product.id)) {
      return true;
    }
    return false;
  };

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
            <button id="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button id="add-to-favorites" onClick={() => addToFavorites(product)}>
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </ProductStyles>
  );
}

export default Product;
