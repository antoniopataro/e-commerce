import styled from 'styled-components';

const ToastStyles = styled.div`
  position: fixed;

  left: 30px;
  bottom: 30px;

  display: flex;
  flex-direction: row;

  align-items: center;

  padding: 16px 32px;

  border-radius: 4px;

  color: white;
  background-color: #393d45;

  transition: 0.15s ease;
  transition-property: opacity transform;
`;

export default ToastStyles;
