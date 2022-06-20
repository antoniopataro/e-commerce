import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import trashIcon from '../../../public/assets/trashIcon.svg';

import { useSelector } from 'react-redux';
import CartStyles from './styles';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../redux/cartSlice';
import { useRouter } from 'next/router';

interface Product {
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  id: string;
  quantity: number;
  slug: string;
}

function Cart() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [cartPrice, setCartPrice] = useState(0);

  /* @ts-ignore */
  const userCart = useSelector((state) => state.cart.userCart);

  useEffect(() => {
    setCartPrice(0);

    userCart.map((product: Product) => {
      setCartPrice((current) => current + product.price * product.quantity);
    });
  }, [userCart]);

  function removeFromCart(product: Product) {
    dispatch(removeProduct(product));
  }

  function handleCheckout() {
    if (cartPrice !== 0) {
      router.push('/checkout');
    }
  }

  return (
    <CartStyles>
      <div id="cart">
        {userCart.map((product: Product, index: number) => (
          <div className="product" key={index}>
            <Link href={`/product/${product.slug}`}>
              <a>
                <div className="product-left">
                  <Image src={product.image} alt={product.name} width={60} height={60} />
                  <div>{product.name}</div>
                </div>
              </a>
            </Link>
            <div className="product-right">
              <div>{`Quantity: ${product.quantity}`}</div>
              <button className="remove-button" onClick={() => removeFromCart(product)}>
                <Image src={trashIcon} alt="Remove Product|" width={15} height={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <aside id="checkout">
        <div id="checkout-top">
          <h3>Checkout</h3>

          <ul>
            {userCart.map((product: Product, index: number) => (
              <li key={index}>
                {product.name} ({product.quantity}) - {`$ ${product.price.toFixed(2)}`}
              </li>
            ))}
          </ul>
        </div>

        <div id="checkout-bottom">
          <h3>{`$ ${cartPrice.toFixed(2)}`}</h3>
          <button onClick={handleCheckout}>Proceed to Payment</button>
        </div>
      </aside>
    </CartStyles>
  );
}

export default Cart;
