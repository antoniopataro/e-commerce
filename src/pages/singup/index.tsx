import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { singup } from '../../redux/authSlice';

import SingupStyles from './styles';

function Singup() {
  const dispatch = useDispatch();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      name: name.current?.value,
      email: email.current?.value,
      password: password.current?.value
    };

    dispatch(singup(user));
  };

  return (
    <SingupStyles>
      <div id="singup-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Singup</h1>
          <div id="form-top">
            <input ref={name} type="name" placeholder="Your name." autoComplete="name" />
            <input ref={email} type="email" placeholder="Your e-mail." autoComplete="email" />
            <input ref={password} type="password" placeholder="Your password." autoComplete="off" />
          </div>
          <div id="form-bottom">
            <button type="submit">Singup</button>
          </div>
        </form>
      </div>
    </SingupStyles>
  );
}

export default Singup;
