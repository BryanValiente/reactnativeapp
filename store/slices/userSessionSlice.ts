import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
};

export type UserSessionState = {
  user: null | User;
  theme: string; // add theme to our model - we specify the only two valid values
};

// initial state for current user session
const initialState: UserSessionState = {
  user: null,
  // user: {
  //   firstName: 'Roberto',
  //   lastName: 'Sanchez',
  //   email: 'robb1772@gmail.com',
  //   profileImage:
  //   "https://ca.slack-edge.com/T17R4TFAM-U1JV6Q8G5-8bf2a9512d7b-512",
  // }, // user profile
  theme: "", // get local storage value for theme
};

export const userSessionSlice = createSlice({
  name: "session",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // updates user session data
    setUser: (state: UserSessionState, action: PayloadAction<User>) => {
      if (action.payload) {
        state.user = action.payload;
      }
    },
  },
});

export const { setUser } = userSessionSlice.actions;

// accessor for admin user
export const getUser = (state: RootState) => state.user.user;

// get color theme
export const getColorTheme = (state: RootState) => state.user.theme;

export default userSessionSlice.reducer;
