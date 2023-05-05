import axios from "../utils/axios";
import { message } from "antd";
export const refreshToken = async () => {
  const response = await axios.post("/auth/refresh");

  localStorage.setItem("accessToken", response.data.accessToken);
};
export const register = async (body) => {
  try {
    const response = await axios.post("/auth/register", body);
    await message.success(response.data.message);
    window.location.href = "/login";
  } catch (err) {
    message.error(err.response.data.message);
  }
};
export const login = async (body) => {
  const response = await axios.post("/auth/login", body);
  return response.data;
};
export const logout = async () => {
  try {
    await axios.post("/auth/logout");
  } catch (err) {
    message.error(err.response.data.message);
  }
};
export const resetPassEmail = async (body) => {
  try {
    const response = await axios.post("/auth/send-reset-password-email", body);

    await message.success(response.data.message);
    window.location.href = "/login";

    return response.data;
  } catch (err) {
    message.error(err.response.data.message);
  }
};

export const resetPassword = async (body) => {
  try {
    const response = await axios.put("/auth/reset-password", body);

    await message.success(response.data.message);
    window.location.href = "/login";

    return response.data;
  } catch (err) {
    message.error(err.response.data.message);
  }
};
export const getPlatFormRole = async () => {
  try {
    const response = await axios.get("/auth/role/2");

    return response.data;
  } catch (err) {
    message.error(err.response.data.message);
  }
};
//http://localhost:3000/reset-password
