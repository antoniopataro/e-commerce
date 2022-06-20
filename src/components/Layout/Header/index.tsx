import Image from 'next/image';
import Link from 'next/link';

import HeaderStyles from './styles';

import logoIcon from '../../../../public/assets/header-icons/logoIcon.svg';
import searchIcon from '../../../../public/assets/header-icons/searchIcon.svg';
import heartIcon from '../../../../public/assets/header-icons/heartIcon.svg';
import cartIcon from '../../../../public/assets/header-icons/cartIcon.svg';
import { useSelector } from 'react-redux';

function Header() {
  /* @ts-ignore */
  const userAuth = useSelector((state) => state.auth.userAuth);

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
      <div id="searchbar">
        <input type="text" placeholder="Search for a product." />
        <button>
          <Image src={searchIcon} alt="Favorites" width={20} />
        </button>
      </div>
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
        {userAuth?.isLogged ? (
          <Link href="/profile">
            <a>{userAuth.userInfo.name.split(' ')[0]}</a>
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
