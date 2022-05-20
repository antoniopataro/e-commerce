import styled from "styled-components";

import { useSelector } from "react-redux";

import bannerImage from "../../assets/bannerImage.png";

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

    align-items: flex-end;
    justify-content: center;

    padding: 50px;
  }
`;

function Banner() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <BannerContainer theme={currentTheme}>
      <div id="banner-left">
        <h1 id="banner-title">Winter 21'</h1>
        <h4 id="banner-subtitle">
          Winter layer season is here. Check out our trendy new winter
          collection to stay warm in style.
        </h4>
      </div>
      <div id="banner-right">
        <img src={bannerImage} alt="Banner Image" width={400} />
      </div>
    </BannerContainer>
  );
}

export default Banner;
