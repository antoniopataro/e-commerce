import styled from "styled-components";

import { useSelector } from "react-redux";

const CheckoutContainer = styled.div`
  display: flex;

  width: 80vw;
  min-height: 100vh;

  align-items: center;
  justify-content: center;

  padding: 100px 0;

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;

function Checkout() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <CheckoutContainer theme={currentTheme}>
      <div>(payment)</div>
    </CheckoutContainer>
  );
}

export default Checkout;
