import { createSlice } from "@reduxjs/toolkit";
import {
  getParcelsThunk,
  createParcelThunk,
  deleteParcelThunk,
  getStatusesThunk,
  editParcelThunk,
} from "../thunks/ParcelsThunk";
import { message } from "antd";

const initialState = {
  parcels: null,
  loading: false,
  unAssignedParcels: [],
  statuses: [],
};

export const userSlice = createSlice({
  name: "parcels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getParcelsThunk.fulfilled, (state, action) => {
      state.loading = false;

      state.parcels = action.payload.parcels;
    });

    builder.addCase(getParcelsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getParcelsThunk.rejected, (state, action) => {
      state.loading = false;
      message.error(action.payload);
    });

    builder.addCase(getStatusesThunk.fulfilled, (state, action) => {
      state.loading = false;

      state.statuses = action.payload.statuses;
    });

    builder.addCase(getStatusesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStatusesThunk.rejected, (state, action) => {
      state.loading = false;
      message.error(action.payload);
    });
    /*************** */

    builder.addCase(createParcelThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createParcelThunk.rejected, (state, action) => {
      state.loading = false;
      message.error(action.payload);
    });
    builder.addCase(editParcelThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editParcelThunk.rejected, (state, action) => {
      state.loading = false;
      message.error(action.payload);
    });
    builder.addCase(deleteParcelThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteParcelThunk.rejected, (state, action) => {
      state.loading = false;

      message.error(action.payload);
    });
  },
});
export default userSlice.reducer;
