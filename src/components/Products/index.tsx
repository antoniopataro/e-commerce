import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import heartIcon from '../../../public/assets/header-icons/heartIcon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/favoritesSlice';
import { addProduct, increaseQuantity } from '../../redux/cartSlice';

import { productsList } from './productsList';

import ProductsStyles from './styles';

interface Product {
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  id: string;
  quantity: number;
  slug: string;
}

function Products() {
  const dispatch = useDispatch();

  /*@ts-ignore*/
  const userCart = useSelector((state) => state.cart.userCart);
  /*@ts-ignore*/
  const userFavorites = useSelector((state) => state.favorites.userFavorites);
  /*@ts-ignore*/
  const currentCategory = useSelector((state) => state.category.currentCategory);

  const filteredProducts = productsList.filter((product: Product) => {
    if (product.category === currentCategory) {
      return product;
    }
    return;
  });

  function addToCart(product: Product) {
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
    dispatch(addFavorite(product));
  }

  const isProductInCart = (product: Product) => {
    const productIds = userCart.map((item: Product) => item.id);

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
              <h4>{product.name}</h4>
              <h5>{`$ ${product.price.toFixed(2)}`}</h5>
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
