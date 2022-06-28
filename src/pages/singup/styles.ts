import styled from 'styled-components';

const SingupStyles = styled.main`
  display: flex;
  flex-direction: column;

  gap: 20px;

  #singup-wrapper {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 20px;

    form {
      display: flex;
      flex-direction: column;

      width: 300px;

      align-items: center;

      gap: 20px;
      padding: 200px 0;

      #form-top {
        display: flex;
        flex-direction: column;

        width: 100%;

        gap: 10px;

        input {
          width: 100%;

          border: none;

          outline: 2px solid transparent;
          outline-color: transparent;

          padding: 8px 12px;

          border-radius: 4px;

          font-family: 'Poppins', sans-serif;

          color: #393d45;
          background-color: white;

          transition: 0.15s ease;
          transition-property: outline-color;
        }
      }

      #form-bottom {
        display: flex;
        flex-direction: column;

        align-items: center;

        gap: 10px;

        button {
          width: fit-content;

          border: none;
          outline: none;

          padding: 8px 24px;

          border-radius: 4px;

          cursor: pointer;

          color: white;
          background-color: #393d45;
        }
      }
    }
  }
`;

export default SingupStyles;
