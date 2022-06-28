import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import logoIcon from '../../../../public/assets/header-icons/logoIcon.svg';
import heartIcon from '../../../../public/assets/header-icons/heartIcon.svg';
import cartIcon from '../../../../public/assets/header-icons/cartIcon.svg';

import { useSelector } from 'react-redux';

import Searchbar from '../../Searchbar';

import HeaderStyles from './styles';

interface UserData {
  isLogged: boolean;
  userInfo: {
    name: string;
    email: string;
  };
}

function Header() {
  const [user, setUser] = useState<UserData>();

  /* @ts-ignore */
  const userAuth = useSelector((state) => state.auth.userAuth);

  useEffect(() => {
    setUser(userAuth);
  }, [userAuth]);

  return (
    <HeaderStyles>
      <div id="header-left">
        <Link href="/">
          <a href="" id="logo">
            <Image src={logoIcon} alt="Logo" width={50} />
          </a>
        </Link>
        <Link href="/">
          <a>E-Commerce</a>
        </Link>
      </div>
      <Searchbar />
      <nav>
        <Link href="/favorites">
          <a>
            <Image src={heartIcon} alt="Favorites" width={20} />
          </a>
        </Link>
        <Link href="/cart">
          <a>
            <Image src={cartIcon} alt="Cart" width={20} />
          </a>
        </Link>
        {user?.isLogged ? (
          <Link href="/profile">
            <a>{user.userInfo.name.split(' ')[0]}</a>
          </Link>
        ) : (
          <Link href="/login">
            <a id="login">Login</a>
          </Link>
        )}
      </nav>
    </HeaderStyles>
  );
}

export default Header;
