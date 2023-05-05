import axios from "../utils/axios";

export const createParcel = async (body) => {
  const response = await axios.post("/parcels", body);
  return response.data;
};
export const editParcel = async (body, id) => {
  console.log(body, id);
  const response = await axios.put(`/parcels/${id}`, body);
  console.log(response);
  return response.data;
};
export const getsParcels = async (body) => {
  const response = await axios.get("/parcels", body);
  return response.data;
};
export const getsUnAssignedParcels = async (body) => {
  const response = await axios.get("/parcels/biker", body);
  return response.data;
};
export const deleteParcel = async (id) => {
  const response = await axios.delete(`/parcels/${id}`);
  return response.data;
};

export const getStatuses = async () => {
  const response = await axios.get(`/parcels/statuses`);
  return response.data;
};
