import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createParcel,
  getsParcels,
  deleteParcel,
  getStatuses,
  editParcel,
  getsUnAssignedParcels,
} from "../../network/api/parcels";

export const createParcelThunk = createAsyncThunk(
  "parcels/createParcelThunk",
  async (body, { rejectWithValue }) => {
    try {
      const res = await createParcel(body);

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const editParcelThunk = createAsyncThunk(
  "parcels/editParcelThunk",
  async (body, { rejectWithValue }) => {
    try {
      console.log(body);
      const res = await editParcel(body.body, body.id);

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getParcelsThunk = createAsyncThunk(
  "parcels/getParcelsThunk",
  async (body, { rejectWithValue }) => {
    try {
      const res = await getsParcels();

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getUnAssignedParcelsThunk = createAsyncThunk(
  "parcels/getUnAssignedParcelsThunk",
  async (body, { rejectWithValue }) => {
    try {
      const res = await getsUnAssignedParcels();

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getStatusesThunk = createAsyncThunk(
  "parcels/getStatusesThunk",
  async (body, { rejectWithValue }) => {
    try {
      const res = await getStatuses();

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const deleteParcelThunk = createAsyncThunk(
  "parcels/deleteParcelThunk",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const res = await deleteParcel(id);

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
