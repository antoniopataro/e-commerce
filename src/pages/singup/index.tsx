import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { singup } from '../../redux/authSlice';

import SingupStyles from './styles';

function Singup() {
  const dispatch = useDispatch();

  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password
    };

    if (validateInput()) {
      dispatch(singup(user));

      router.push('/login');
      return;
    }
    return;
  };

  const validateInput = () => {
    if (name.length === 0) {
      setNameError(true);
      return false;
    }
    setNameError(false);

    if (!email.includes('@') || !email.includes('.')) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);

    if (password.length === 0) {
      setPasswordError(true);
      return false;
    }
    setPasswordError(false);

    return true;
  };

  return (
    <SingupStyles>
      <div id="singup-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Singup</h1>
          <div id="form-top">
            <input
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder="Your name."
              autoComplete="name"
              style={nameError ? { outlineColor: 'red' } : { outlineColor: '#393d45' }}
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your e-mail."
              autoComplete="email"
              style={emailError ? { outlineColor: 'red' } : { outlineColor: '#393d45' }}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your password."
              autoComplete="off"
              style={passwordError ? { outlineColor: 'red' } : { outlineColor: '#393d45' }}
            />
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
