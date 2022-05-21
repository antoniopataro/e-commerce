import styled from "styled-components";

import { motion } from "framer-motion";

import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Footer from "./Footer";

const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

function Main() {
  return (
    <MainContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Banner />
      <Category />
      <Products />
      <Footer />
    </MainContainer>
  );
}

export default Main;
