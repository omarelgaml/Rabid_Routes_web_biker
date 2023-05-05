import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  getCurrentUserThunk,
  getRoleThunk,
  updateUserThunk,
} from "../thunks/UserThunks";
import { message } from "antd";

const initialState = {
  user: {},
  loading: false,
  platFormRole: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      localStorage.setItem("accessToken", action.payload.user.accessToken);
      localStorage.setItem("refreshToken", action.payload.user.refreshToken);
      window.location.href = "/";
    });

    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      message.error(action.payload);
    });
    //////////////////
    builder.addCase(getCurrentUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(getCurrentUserThunk.pending, (state) => {
      state.loading = true;
    });
    /////////////////
    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      message.success("User Updated");
    });
    builder.addCase(updateUserThunk.rejected, (state, action) => {
      state.loading = false;
      message.error(action.payload);
    });
    builder.addCase(updateUserThunk.pending, (state) => {
      state.loading = true;
    });
    //////////////////
    builder.addCase(getRoleThunk.fulfilled, (state, action) => {
      state.platFormRole = action.payload.role;
    });

    /////////
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = {};
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    });
  },
});
export default userSlice.reducer;
