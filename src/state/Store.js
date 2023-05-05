import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";
import ParcelsReducer from "./slices/ParcelsSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    parcels: ParcelsReducer,
  },
});
