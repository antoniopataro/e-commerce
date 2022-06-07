import styled from "styled-components";

import { useSelector } from "react-redux";

import favicon from "../../../src/favicon.png";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 80vw;
  height: 500px;

  align-items: center;

  background-color: ${(props) => props.theme.secondary};

  #banner-left {
    display: flex;
    flex-direction: column;

    width: 50%;
    height: 100%;

    align-items: center;
    justify-content: center;

    gap: 20px;
    padding: 50px;

    #banner-title {
      text-align: center;
      color: ${(props) => props.theme.primary};
    }
    #banner-subtitle {
      text-align: center;
      color: ${(props) => props.theme.tertiary};
    }
  }

  #banner-right {
    display: flex;

    width: 50%;
    height: 100%;

    align-items: center;
    justify-content: center;

    padding: 50px;
  }
`;

function Banner() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <BannerContainer theme={currentTheme}>
      <div id="banner-left">
        <h1 id="banner-title">Let's Shop!</h1>
        <h4 id="banner-subtitle">
          Come on, man! You got buy those items. Just look at them!
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          rutrum, mauris in vehicula consequat, ligula ex feugiat elit, nec
          auctor urna mi ac velit.
        </h4>
      </div>
      <div id="banner-right">
        <img src={favicon} alt="Banner Image" width={300} />
      </div>
    </BannerContainer>
  );
}

export default Banner;
