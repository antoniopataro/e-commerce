import styled from 'styled-components';

const ProfileStyles = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 20px;
  padding: 200px 12.5vw;

  text-align: center;

  color: #393d45;
  background-color: #d9d9d9;

  button {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    width: fit-content;
    height: 50px;

    padding: 6px 18px;

    border: none;
    outline: none;

    font-size: 16px;

    cursor: pointer;

    border-radius: 4px;

    color: white;
    background-color: #393d45;
  }
`;

export default ProfileStyles;
