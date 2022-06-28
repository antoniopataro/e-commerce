import styled from 'styled-components';

const LoginStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 60vh;

  align-items: center;

  gap: 20px;

  #login-wrapper {
    display: flex;
    flex-direction: column;

    width: 100%;

    align-items: center;

    gap: 20px;
    padding: 20px 12.5vw;

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

          border: 2px solid #393d45;
          outline: none;

          padding: 8px 12px;

          border-radius: 4px;

          font-family: 'Poppins', sans-serif;

          color: inherit;
          background-color: white;
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

        a {
          width: fit-content;

          font-size: 14px;

          color: inherit;
        }
      }
    }
  }
`;

export default LoginStyles;
