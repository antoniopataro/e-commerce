import Link from 'next/link';
import Image from 'next/image';

import heartIcon from '../../../public/assets/header-icons/heartIcon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/favoritesSlice';
import { addProduct, increaseQuantity } from '../../redux/cartSlice';
import { toast } from '../../redux/toastSlice';

import { productsList, ProductInterface } from './productsList';

import ProductsStyles from './styles';

function Products() {
  const dispatch = useDispatch();

  /*@ts-ignore*/
  const userFavorites = useSelector((state) => state.favorites.userFavorites);
  /*@ts-ignore*/
  const currentCategory = useSelector((state) => state.category.currentCategory);

  const filteredProducts = productsList.filter((product: ProductInterface) => {
    if (product.category === currentCategory) {
      return product;
    }
    return;
  });

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
    <ProductsStyles>
      {filteredProducts.map((product, index) => (
        <div className="product-wrapper" key={index}>
          <button className="add-to-favorites" onClick={() => addToFavorites(product)}>
            <Image src={heartIcon} alt="Add to Favorites" width={20} />
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
    </ProductsStyles>
  );
}

export default Products;
