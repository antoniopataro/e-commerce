import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import ProfileStyles from './styles';

function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();

  /* @ts-ignore */
  const userAuth = useSelector((state) => state.auth.userAuth);

  function handleLogout() {
    dispatch(logout(''));
  }

  useEffect(() => {
    if (!userAuth.isLogged) {
      router.push('/');
    }
  }, [userAuth, router]);

  return (
    <ProfileStyles>
      <div>
        <h2>{userAuth.userInfo.name}</h2>
        <p>{userAuth.userInfo.email}</p>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </ProfileStyles>
  );
}

export default Profile;
