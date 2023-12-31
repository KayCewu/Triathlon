import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  intialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
