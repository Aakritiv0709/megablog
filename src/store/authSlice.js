import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // below login and logout is actions which is use below as export statement
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
