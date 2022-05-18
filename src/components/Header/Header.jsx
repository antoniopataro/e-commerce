import styled from "styled-components";
import { useSelector } from "react-redux";

import menuIcon from "../../assets/header-icons/menuIcon.svg";
import searchIcon from "../../assets/header-icons/searchIcon.svg";
import heartIcon from "../../assets/header-icons/heartIcon.svg";
import cartIcon from "../../assets/header-icons/cartIcon.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100px;

  justify-content: space-between;

  padding-right: 10vw;

  #menu {
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

    gap: 20px;
  }

  #header-right {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 20px;

    .nav-bar-icon {
      width: 40px;
      height: 40px;

      border-radius: 50px;

      :hover {
        background-color: ${(props) => props.theme.secondary};
      }
    }

    #login-button {
      display: flex;

      height: 40px;
      width: 100px;

      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.text};
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

  return (
    <HeaderContainer theme={currentTheme}>
      <div id="header-left">
        <menu id="menu">
          <img src={menuIcon} alt="collapsed-menu" width={30} />
        </menu>
        <div id="e-commerce-name">E-Commerce</div>
      </div>

      <div id="header-right">
        <button className="nav-bar-icon">
          <img src={searchIcon} alt="Search" width={20} />
        </button>
        <button className="nav-bar-icon">
          <img src={heartIcon} alt="Favorites" width={20} />
        </button>
        <button className="nav-bar-icon">
          <img src={cartIcon} alt="Cart" width={20} />
        </button>
        <button id="login-button">Login</button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
