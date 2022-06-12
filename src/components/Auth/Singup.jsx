import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { singup } from "../../redux/authSlice";

import styled from "styled-components";

const SingupContainer = styled.section`
  display: grid;
  place-items: center;

  min-height: 100vh;
  width: 80vw;

  gap: 100px;

  color: ${(props) => props.theme.text};

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

      #form-top {
        display: flex;
        flex-direction: column;

        width: 100%;

        gap: 10px;

        input {
          width: 100%;

          border: 1px solid ${(props) => props.theme.primary};
          outline: none;

          padding: 8px 12px;

          border-radius: 4px;

          font-family: "Poppins", sans-serif;

          color: ${(props) => props.theme.text};
          background-color: ${(props) => props.theme.secondary};
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

          color: ${(props) => props.theme.invertedText};
          background-color: ${(props) => props.theme.primary};
        }

        a {
          width: fit-content;

          font-size: 14px;

          color: ${(props) => props.theme.primary};
        }
      }
    }
  }
`;

function Singup() {
  const dispatch = useDispatch();

  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    dispatch(singup(user));
  };

  return (
    <SingupContainer theme={currentTheme}>
      <div id="singup-wrapper">
        <h1>Singup</h1>
        <form onSubmit={handleSubmit}>
          <div id="form-top">
            <input
              ref={name}
              type="name"
              placeholder="Your name."
              autoComplete="name"
            />
            <input
              ref={email}
              type="email"
              placeholder="Your ae-mail."
              autoComplete="email"
            />
            <input
              ref={password}
              type="password"
              placeholder="Your apassword."
              autoComplete="password"
            />
          </div>
          <div id="form-bottom">
            <button type="submit">Singup</button>
          </div>
        </form>
      </div>
    </SingupContainer>
  );
}

export default Singup;
