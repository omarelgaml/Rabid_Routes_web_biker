export const UserSelector = (state) => state.user.user;
export const UserLoadingSelector = (state) => state.user.loading;
export const ParcelsSelector = (state) => state.parcels.parcels;
export const ParcelsLoadingSelector = (state) => state.parcels.loading;
export const ParcelsStatusesSelector = (state) => state.parcels.statuses;
export const ParcelsUnAssignedSelector = (state) =>
  state.parcels.unAssignedParcels;

export const UserRoleSelector = (state) => state.user.platFormRole;
