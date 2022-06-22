import type { AppProps } from 'next/app';

import store from '../redux/store';
import { Provider } from 'react-redux';

import Layout from '../components/Layout';

import '../styles/globals.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastContainer progressClassName="toastProgress" autoClose={2000} position={'bottom-left'} limit={3} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
