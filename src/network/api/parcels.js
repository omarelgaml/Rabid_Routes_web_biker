import axios from "../utils/axios";

export const editParcel = async (body, id) => {
  const response = await axios.put(`/parcels/${id}`, body);

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

export const getStatuses = async () => {
  const response = await axios.get(`/parcels/statuses`);
  return response.data;
};
