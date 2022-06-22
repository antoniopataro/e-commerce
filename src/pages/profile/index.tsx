import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

import ProfileStyles from './styles';

interface UserData {
  isLogged: boolean;
  userInfo: {
    name: string;
    email: string;
  };
}

function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [user, setUser] = useState<UserData>();

  /* @ts-ignore */
  const userAuth = useSelector((state) => state.auth.userAuth);
  useEffect(() => {
    setUser(userAuth);
  }, [userAuth]);

  function handleLogout() {
    dispatch(logout(''));
  }

  useEffect(() => {
    if (user?.isLogged === false) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <ProfileStyles>
      <div>
        <h2>{user?.userInfo.name}</h2>
        <p>{user?.userInfo.email}</p>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </ProfileStyles>
  );
}

export default Profile;
