import { createSlice } from '@reduxjs/toolkit';

function userAuthInitialState() {
  if (typeof window === 'undefined') {
    return {
      isLogged: false,
      userInfo: {}
    };
  }

  const storagedAuth = JSON.parse(localStorage.getItem('userAuth'));
  if (storagedAuth) {
    return storagedAuth;
  }
  return {
    isLogged: false,
    userInfo: {}
  };
}

function usersDatabaseInitialState() {
  if (typeof window === 'undefined') {
    return;
  }

  const storagedUsers = JSON.parse(localStorage.getItem('usersDatabase'));

  if (storagedUsers) {
    return storagedUsers;
  }
  return [];
}

export const slice = createSlice({
  name: 'userAuth',
  initialState: {
    userAuth: userAuthInitialState(),
    usersDatabase: usersDatabaseInitialState()
  },
  reducers: {
    login: (state, { payload }) => {
      const storagedUsers = JSON.parse(localStorage.getItem('usersDatabase'));

      if (!storagedUsers) {
        return;
      }

      const storagedUsersEmails = storagedUsers.map((user) => {
        return user.email;
      });
      const index = storagedUsersEmails.indexOf(payload.email);

      if (storagedUsers[index].email === payload.email) {
        if (storagedUsers[index].password === payload.password) {
          localStorage.setItem(
            'userAuth',
            JSON.stringify({
              isLogged: true,
              userInfo: storagedUsers[index]
            })
          );

          return {
            ...state,
            userAuth: {
              isLogged: true,
              userInfo: storagedUsers[index]
            }
          };
        }
      }
    },
    logout: (state, { payload }) => {
      localStorage.setItem(
        'userAuth',
        JSON.stringify({
          isLogged: false,
          userInfo: {}
        })
      );

      return {
        ...state,
        userAuth: {
          isLogged: false,
          userInfo: {}
        }
      };
    },
    singup: (state, { payload }) => {
      const storagedUsers = JSON.parse(localStorage.getItem('usersDatabase'));
      const storagedUsersEmails = storagedUsers?.map((user) => user.email);

      if (storagedUsersEmails?.includes(payload.email)) {
        return;
      }

      localStorage.setItem('usersDatabase', JSON.stringify([...state.usersDatabase, payload]));
      return { ...state, usersDatabase: [...state.usersDatabase, payload] };
    }
  }
});

export const { login, logout, singup } = slice.actions;

export const selectContent = (state) => state.userAuth;

export default slice.reducer;
