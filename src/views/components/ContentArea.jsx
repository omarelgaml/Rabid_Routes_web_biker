/* eslint-disable react/prop-types */
import CreateParcel from "./EditParcel";
import UserInfo from "./UserInfo";
import ShowParcels from "./ShowParcels";
import { useState } from "react";
function ContentArea(props) {
  // eslint-disable-next-line react/prop-types
  const [editParcelMode, setEditParcelMode] = useState(false);

  const [parcelToEdit, setParcelToEdit] = useState();

  const parcelClickEdit = (parcel) => {
    setEditParcelMode(true);
    setParcelToEdit(parcel);
  };
  const doneEditing = () => {
    setEditParcelMode(false);
    setParcelToEdit();
  };

  const { selectedTab } = props;

  if (selectedTab === 3 && !editParcelMode) {
    return <ShowParcels editClicked={(parcel) => parcelClickEdit(parcel)} />;
  } else if (selectedTab === 3 && editParcelMode) {
    return (
      <CreateParcel parcel={parcelToEdit} editDone={() => doneEditing()} />
    );
  } else {
    switch (selectedTab) {
      case 1:
        return <UserInfo />;
      case 2:
        return <ShowParcels pickParcel={true} />;
      default:
        return null;
    }
  }
}

export default ContentArea;
