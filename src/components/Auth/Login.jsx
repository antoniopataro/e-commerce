import React, { useRef } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";

import styled from "styled-components";
import { useEffect } from "react";

const LoginContainer = styled.section`
  display: grid;
  place-items: center;

  min-height: 100vh;
  width: 80vw;

  gap: 100px;

  color: ${(props) => props.theme.text};

  #login-wrapper {
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

function Login() {
  const dispatch = useDispatch();

  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
    };

    dispatch(login(user));
  };

  return (
    <LoginContainer theme={currentTheme}>
      <div id="login-wrapper">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div id="form-top">
            <input
              ref={email}
              type="email"
              placeholder="Your account's e-mail."
              autoComplete="email"
            />
            <input
              ref={password}
              type="password"
              placeholder="Your account's password."
              autoComplete="password"
            />
          </div>
          <div id="form-bottom">
            <button type="submit">Login</button>
            <Link to="/e-commerce/singup">Create an account.</Link>
          </div>
        </form>
      </div>
    </LoginContainer>
  );
}

export default Login;
