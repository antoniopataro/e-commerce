import { useRouter } from 'next/router';

import Link from 'next/link';

import Image, { StaticImageData } from 'next/image';

import { productsList } from '../../components/Products/productsList';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, increaseQuantity } from '../../redux/cartSlice';
import { addFavorite } from '../../redux/favoritesSlice';

import { toast } from 'react-toastify';

import ProductStyles from './styles';

interface Product {
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  id: string;
  quantity: number;
  slug: string;
}

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

  function addToCart(product: Product) {
    toast('Added Product');

    if (isProductInCart(product)) {
      dispatch(increaseQuantity(product));
      return;
    }
    dispatch(addProduct(product));
  }

  function addToFavorites(product: Product) {
    if (isProductInCart(product)) {
      return;
    }
    toast('Favorited Product');
    dispatch(addFavorite(product));
  }

  const isProductInCart = (product: Product) => {
    const productIds = userFavorites.map((item: Product) => item.id);

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
