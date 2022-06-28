import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';

import CheckoutStyles from './styles';

function Checkout() {
  const router = useRouter();

  /*@ts-ignore*/
  const userAuth = useSelector((state) => state.auth.userAuth);
  /*@ts-ignore*/
  const userCart = useSelector((state) => state.cart.userCart);

  useEffect(() => {
    if (!userAuth.isLogged) {
      router.push('/login');
      return;
    }

    if (userCart?.length === 0) {
      router.push('/');
      return;
    }
  }, [router, userAuth, userCart]);

  return (
    <CheckoutStyles>
      <div>Payment API</div>
    </CheckoutStyles>
  );
}

export default Checkout;
