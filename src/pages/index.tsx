import type { NextPage } from 'next';

import HomeStyles from './styles';

import Banner from '../components/Banner';
import Category from '../components/Category/';
import Products from '../components/Products/';

const Home: NextPage = () => {
  return (
    <HomeStyles>
      <Banner />
      <Category />
      <Products />
    </HomeStyles>
  );
};

export default Home;
