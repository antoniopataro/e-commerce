import styled from 'styled-components';

const HeaderStyles = styled.main`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 20px 12.5vw;

  background-color: #d9d9d9;

  #header-left {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    a {
      text-decoration: none;
      color: #393d45;
    }

    #logo {
      display: grid;
      place-items: center;

      width: 75px;
      height: 75px;

      border-radius: 4px;

      background-color: #393d45;
    }
  }

  #searchbar {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;
    padding: 0 16px;

    border: 2px solid #393d45;

    border-radius: 4px;

    background-color: white;

    button {
      display: grid;
      place-items: center;

      border: none;
      outline: none;

      cursor: pointer;

      background-color: transparent;
    }

    input {
      padding: 8px 0;

      border: none;
      outline: none;

      font-family: 'Poppins', sans-serif;
    }
  }

  a {
    color: inherit;
  }

  nav {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    a {
      display: grid;
      place-items: center;
    }

    #login {
      text-decoration: none;

      padding: 6px 18px;

      border-radius: 4px;

      color: white;
      background-color: #393d45;
    }
  }
`;

export default HeaderStyles;
