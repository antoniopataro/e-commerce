import React, { useEffect, ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';
import Toast from '../../components/Toast';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from '../../redux/toastSlice';

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  const dispatch = useDispatch();

  //@ts-ignore
  const toastContent = useSelector((state) => state.toast.toastContent);

  useEffect(() => {
    if (toastContent) {
      setTimeout(() => {
        dispatch(toast(''));
      }, 2500);
    }
  });

  return (
    <>
      <Header />
      <>{children}</>
      <Toast content={toastContent} />
      <Footer />
    </>
  );
}

export default Layout;
