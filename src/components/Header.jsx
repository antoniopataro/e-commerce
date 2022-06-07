import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import logoIcon from "../assets/header-icons/logoIcon.svg";
import searchIcon from "../assets/header-icons/searchIcon.svg";
import heartIcon from "../assets/header-icons/heartIcon.svg";
import cartIcon from "../assets/header-icons/cartIcon.svg";
import returnIcon from "../assets/header-icons/returnIcon.svg";
import themeIcon from "../assets/themeIcon.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";
import { changeTheme } from "../redux/themeSlice";
import { useEffect } from "react";

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

  #status {
    position: absolute;
    top: 100px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 10vw;
    height: calc(100vh - 100px);

    color: ${(props) => props.theme.text};
    background-color: transparent;

    .status-indicator-bar {
      width: 2px;
      height: 100px;

      margin: 20px 0;

      background-color: ${(props) => props.theme.tertiary};
    }

    .status-indicator-bar-motion {
      position: absolute;

      width: 2px;

      background-color: green;
    }
  }

  #logo {
    display: flex;

    width: 10vw;
    height: 100%;

    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.primary};
  }

  #header-left {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 50px;

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
    filter: ${(props) => props.theme.filter};
    pointer-events: none;
  }
`;

function Header() {
  const dispatch = useDispatch();

  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const userCart = useSelector((state) => state.cart.userCart);

  const [activePage, setActivePage] = useState("/e-commerce/");
  const [activeTheme, setActiveTheme] = useState("light");

  const HeaderLabel = ({ path }) => {
    const label =
      path !== "/e-commerce/" ? (
        <div id="e-commerce-label">
          <img src={returnIcon} />
          <div>Back</div>
        </div>
      ) : (
        <div id="e-commerce-label">E-Commerce</div>
      );

    return <div>{label}</div>;
  };

  const handleThemeChange = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
  };

  const updateTheme = useEffect(() => {
    dispatch(changeTheme(activeTheme));
  }, [activeTheme]);

  return (
    <HeaderContainer theme={currentTheme}>
      <div id="status">
        01
        <div className="status-indicator-bar">
          <motion.div
            style={{ backgroudColor: "green" }}
            initial={{ height: 0 }}
            animate={{ height: userCart[0] === undefined ? 0 : 100 }}
            className="status-indicator-bar-motion"
          ></motion.div>
        </div>
        02
        <div className="status-indicator-bar">
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height:
                window.location.pathname === "/cart" &&
                userCart[0] !== undefined
                  ? 100
                  : 0,
            }}
            className="status-indicator-bar-motion"
          ></motion.div>
        </div>
        03
      </div>

      <div id="header-left">
        <Link
          to="/e-commerce/"
          onClick={() => setActivePage("/e-commerce/")}
          id="logo"
        >
          <img src={logoIcon} alt="Logo" width={75} />
        </Link>
        <Link to="/e-commerce/" onClick={() => setActivePage("/e-commerce/")}>
          <HeaderLabel path={activePage} />
        </Link>
      </div>

      <div id="header-right">
        <button className="nav-bar-icon">
          <img src={searchIcon} alt="Search" width={20} />
        </button>
        <Link
          to="/e-commerce/favorites"
          onClick={() => setActivePage("/favorites")}
          className="nav-bar-icon"
        >
          <img src={heartIcon} alt="Favorites" width={20} />
        </Link>
        <Link
          id="cart-link"
          className="nav-bar-icon"
          to="/e-commerce/cart"
          onClick={() => setActivePage("/cart")}
        >
          <img src={cartIcon} alt="Cart" width={20} />
        </Link>
        <Link
          id="login-link"
          to="/e-commerce/login"
          onClick={() => setActivePage("/e-commerce/login")}
          style={{ textDecoration: "none" }}
        >
          <button id="login-button">Login</button>
        </Link>
        <button
          id="cart-link"
          className="nav-bar-icon"
          onClick={() => handleThemeChange()}
        >
          <img src={themeIcon} alt="Cart" width={20} />
        </button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
