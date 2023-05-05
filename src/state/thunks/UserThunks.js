import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout, getPlatFormRole } from "../../network/api/auth";
import { getCurrentUser, updateUser } from "../../network/api/user";

export const logoutThunk = createAsyncThunk("user/logout", async () => {
  await logout();
});

export const getCurrentUserThunk = createAsyncThunk(
  "user/getCurrentUser",
  async () => {
    const response = await getCurrentUser();
    return response;
  }
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await login(body);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const getRoleThunk = createAsyncThunk(
  "user/getRoleThunk",
  async (body, { rejectWithValue }) => {
    try {
      const response = await getPlatFormRole();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUserThunk",
  async (body, { rejectWithValue }) => {
    try {
      const response = await updateUser(body.body, body.id);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
