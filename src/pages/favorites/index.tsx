import Image, { StaticImageData } from 'next/image';

import trashIcon from '../../../public/assets/trashIcon.svg';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, increaseQuantity } from '../../redux/cartSlice';

import { toast } from 'react-toastify';

import FavoritesStyles from './styles';
import { removeFavorite } from '../../redux/favoritesSlice';

interface Product {
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  id: string;
  quantity: number;
  slug: string;
}

function Favorites() {
  const dispatch = useDispatch();

  /*@ts-ignore*/
  const userCart = useSelector((state) => state.cart.userCart);
  /*@ts-ignore*/
  const favorites = useSelector((state) => state.favorites.userFavorites);

  function addToCart(product: Product) {
    toast('Added Product');

    /*@ts-ignore*/
    const productsIds = userCart.map(({ id }) => id);

    if (productsIds.includes(product.id)) {
      dispatch(increaseQuantity(product));
      return;
    }

    dispatch(addProduct(product));
  }

  function removeFromFavorites(product: Product) {
    toast('Removed Product');

    dispatch(removeFavorite(product));
  }

  return (
    <FavoritesStyles>
      {favorites.map((product: Product, index: number) => (
        <div className="product-wrapper" key={index}>
          <button className="remove-from-favorites" onClick={() => removeFromFavorites(product)}>
            <Image src={trashIcon} alt="Remove from Favorites" width={20} />
          </button>
          <Link href={`/product/${product.slug}`}>
            <div className="product">
              <Image src={product.image} alt={product.name} width={100} height={100} title={product.name} />
              <div className="product-info">
                <h4>{product.name}</h4>
                <h5>{`$ ${product.price.toFixed(2)}`}</h5>
              </div>
            </div>
          </Link>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            <h4>Add to Cart</h4>
          </button>
        </div>
      ))}
    </FavoritesStyles>
  );
}

export default Favorites;
