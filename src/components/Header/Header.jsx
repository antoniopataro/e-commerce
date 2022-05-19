import styled from "styled-components";
import { useSelector } from "react-redux";

import menuIcon from "../../assets/header-icons/menuIcon.svg";
import searchIcon from "../../assets/header-icons/searchIcon.svg";
import heartIcon from "../../assets/header-icons/heartIcon.svg";
import cartIcon from "../../assets/header-icons/cartIcon.svg";
import returnIcon from "../../assets/header-icons/returnIcon.svg";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const HeaderContainer = styled.div`
  position: fixed;

  z-index: 10;

  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100px;

  justify-content: space-between;

  padding-right: 10vw;

  background-color: ${(props) => props.theme.background};

  #menu {
    display: flex;

    width: 10vw;
    height: 100%;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: ${(props) => props.theme.primary};
  }

  #header-left {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 20px;

    #menu {
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      color: red;

      #menu-wrapper {
        position: relative;
        display: flex;

        width: 10vw;

        align-items: center;
        justify-content: center;
      }

      .menu-option {
        position: absolute;
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.text};
    }
  }

  #e-commerce-label {
    display: flex;
    flex-direction: row;

    gap: 20px;
  }

  #header-right {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 20px;

    .nav-bar-icon,
    #cart-link {
      display: flex;

      width: 40px;
      height: 40px;

      align-items: center;
      justify-content: center;

      border-radius: 50px;

      :hover {
        background-color: ${(props) => props.theme.secondary};
      }

      #cart-link img {
        pointer-events: none;
      }
    }

    #login-button {
      display: flex;

      height: 40px;
      width: 100px;

      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.invertedText};
      background-color: ${(props) => props.theme.primary};
    }
  }

  button {
    border: none;
    outline: none;

    cursor: pointer;

    background-color: transparent;
  }

  img {
    pointer-events: none;
  }
`;

function Header() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("/");

  const handleMenuToggle = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  const menuToggle = useEffect(() => {
    return;
  }, [isMenuOpen]);

  const Menu = ({ isOpen }) => {
    const menu = isOpen ? (
      <motion.menu
        id="menu-wrapper"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut" }}
      >
        <Link to="/cart" className="menu-option" style={{ top: "75px" }}>
          Cart
        </Link>
        <Link to="/favorites" className="menu-option" style={{ top: "150px" }}>
          Favorites
        </Link>
        <Link to="/login" className="menu-option" style={{ top: "225px" }}>
          Login
        </Link>
      </motion.menu>
    ) : (
      <motion.div
        id="menu-wrapper"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -50, opacity: 0 }}
        transition={{ ease: "easeOut" }}
      >
        <Link to="/cart" className="menu-option" style={{ top: "75px" }}>
          Cart
        </Link>
        <Link to="/favorites" className="menu-option" style={{ top: "150px" }}>
          Favorites
        </Link>
        <Link to="/login" className="menu-option" style={{ top: "225px" }}>
          Login
        </Link>
      </motion.div>
    );

    return <div>{menu}</div>;
  };

  const HeaderLabel = ({ path }) => {
    const label =
      path === "/cart" ? (
        <div id="e-commerce-label">
          <img src={returnIcon} />
          <div>Voltar</div>
        </div>
      ) : (
        <div id="e-commerce-label">E-Commerce</div>
      );

    return <div>{label}</div>;
  };

  return (
    <HeaderContainer theme={currentTheme}>
      <div id="header-left">
        <div id="menu" onClick={() => handleMenuToggle()}>
          <img src={menuIcon} alt="collapsed-menu" width={30} />
          <Menu isOpen={isMenuOpen} />
        </div>
        <Link to="/" onClick={() => setActivePage("/")}>
          <HeaderLabel path={activePage} />
        </Link>
      </div>

      <div id="header-right">
        <button className="nav-bar-icon">
          <img src={searchIcon} alt="Search" width={20} />
        </button>
        <button className="nav-bar-icon">
          <img src={heartIcon} alt="Favorites" width={20} />
        </button>
        <button className="nav-bar-icon">
          <Link
            id="cart-link"
            to="/cart"
            onClick={() => setActivePage("/cart")}
          >
            <img src={cartIcon} alt="Cart" width={20} />
          </Link>
        </button>
        <button id="login-button">Login</button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
