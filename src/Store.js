import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username_slice: "" },
  reducers: {
    login_slice: (state, action) => {
      state.username_slice = action.payload.username_slice;
    },
    logout_slice: (state) => {
      state.username_slice = "";
    },
  },
});
export const { login_slice, logout_slice } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
