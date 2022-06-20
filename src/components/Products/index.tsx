import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import heartIcon from '../../../public/assets/header-icons/heartIcon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, increaseQuantity } from '../../redux/cartSlice';

import { productsList } from './productsList';

import ProductsStyles from './styles';
import { addFavorite } from '../../redux/favoritesSlice';

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
  const category = useSelector((state) => state.category.currentCategory);

  const filteredProducts = productsList.filter((product: Product) => {
    if (product.category === category) {
      return product;
    }
    return;
  });

  function addToCart(product: Product) {
    /*@ts-ignore*/
    const productsIds = userCart.map(({ id }) => id);

    if (productsIds.includes(product.id)) {
      dispatch(increaseQuantity(product));
      return;
    }

    dispatch(addProduct(product));
  }

  function addToFavorites(product: Product) {
    /*@ts-ignore*/
    const productsIds = userFavorites.map(({ id }) => id);

    if (productsIds.includes(product.id)) {
      return;
    }

    dispatch(addFavorite(product));
  }

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
