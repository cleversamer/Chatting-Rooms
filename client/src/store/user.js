import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {
    auth: null,
    notifications: [],
  },
  reducers: {
    userLoggedIn: (user, payload) => {
      user.auth = payload;
    },
    userLoggedOut: (user, payload) => {
      user.auth = null;
    },
    notificationsAdded: (user, payload) => {},
    notificationReset: (user, payload) => {},
  },
});

const { actions } = slice;

export const login = (user) => actions.userLoggedIn(user);

export const logout = () => actions.userLoggedOut();

export const selectUser = createSelector(
  (state) => state.user,
  (user) => user.auth
);

export default slice.reducer;
