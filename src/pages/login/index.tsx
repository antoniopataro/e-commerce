import React, { useEffect, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authSlice';

import LoginStyles from './styles';

function Login() {
  const dispatch = useDispatch();

  /* @ts-ignore */
  const userAuth = useSelector((state) => state.auth.userAuth);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = {
      email: email.current?.value,
      password: password.current?.value
    };

    dispatch(login(user));
  }

  useEffect(() => {
    if (userAuth.isLogged) {
      router.push('/');
    }
  }, [userAuth, router]);

  return (
    <LoginStyles>
      <div id="login-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div id="form-top">
            <input ref={email} type="email" placeholder="Your account's e-mail." autoComplete="email" />
            <input ref={password} type="password" placeholder="Your account's password." autoComplete="password" />
          </div>
          <div id="form-bottom">
            <button type="submit">Login</button>
            <Link href="/singup">Create an account.</Link>
          </div>
        </form>
      </div>
    </LoginStyles>
  );
}

export default Login;
