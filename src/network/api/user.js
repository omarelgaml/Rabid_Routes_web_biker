import axios from "../utils/axios";

export const getCurrentUser = async () => {
  try {
    const response = await axios.get("/user");

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
