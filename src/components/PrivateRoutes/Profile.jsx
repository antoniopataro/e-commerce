import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

import styled from "styled-components";

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 80vw;
  min-height: 100vh;

  align-items: center;
  justify-content: center;

  gap: 50px;
  padding: 100px 0;

  text-align: center;

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};

  button {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    width: fit-content;
    height: 50px;

    padding: 10px 20px;

    border: none;
    outline: none;

    font-size: 16px;

    cursor: pointer;

    color: ${(props) => props.theme.invertedText};
    background-color: ${(props) => props.theme.primary};
  }
`;

function Profile() {
  const dispatch = useDispatch();

  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const userAuth = useSelector((state) => state.auth.userAuth);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <ProfileContainer theme={currentTheme}>
      <div>
        <h2>{userAuth.userInfo.name}</h2>
        <p>{userAuth.userInfo.email}</p>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </ProfileContainer>
  );
}

export default Profile;
