import styled from 'styled-components';

const BannerStyles = styled.section`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 400px;

  justify-content: space-between;

  padding: 20px;

  border-radius: 4px;
  background-color: white;

  #banner-left {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    justify-content: center;

    padding: 20px;

    text-align: center;

    p {
      color: #c2c7d2;
    }
  }

  #banner-right {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;

    padding: 20px;
  }
`;

export default BannerStyles;
