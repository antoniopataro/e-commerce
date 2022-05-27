import styled from "styled-components";

import { useSelector } from "react-redux";

import githubIcon from "../../assets/footer-icons/githubIcon.svg";
import instagramIcon from "../../assets/footer-icons/instagramIcon.svg";
import linkedinIcon from "../../assets/footer-icons/linkedinIcon.svg";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 80vw;
  height: 150px;

  padding-bottom: 50px;
  gap: 20px;
`;

function Footer() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <FooterContainer theme={currentTheme}>
      <a href="https://github.com/antoniopataro/e-commerce-app" target="_blank">
        <img src={githubIcon} alt="Github" width={30} />
      </a>
    </FooterContainer>
  );
}

export default Footer;