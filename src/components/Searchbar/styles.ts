import styled from 'styled-components';

const SearchbarStyles = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  width: 250px;
  height: 40px;

  align-items: center;

  gap: 20px;
  padding: 0 16px;

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

  #suggestions {
    position: absolute;

    transform: translateX(-16px);

    top: 44px;

    width: 250px;
    max-height: 120px;
    height: fit-content;

    vertical-align: top;

    overflow: hidden;

    background-color: white;

    transition: 0.15s ease;
    transition-property: opacity height;

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    ul {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      li {
        display: flex;
        flex-direction: row;

        width: 100%;
        height: 40px;

        :hover {
          background-color: #c2c7d2;
        }

        .product {
          display: flex;
          flex-direction: row;

          width: 100%;
          height: 40px;

          align-items: center;

          gap: 20px;
          padding: 0 20px;

          text-decoration: none;

          cursor: pointer;

          h4 {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export default SearchbarStyles;
