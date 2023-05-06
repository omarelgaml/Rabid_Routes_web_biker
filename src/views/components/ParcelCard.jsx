/* eslint-disable react/prop-types */
import { Col, Typography, Divider } from "antd";
const { Title, Text } = Typography;

import { useSelector } from "react-redux";
import {} from "../../state/thunks/ParcelsThunk";
import { ParcelsLoadingSelector } from "../../state/Selectors";
import { DeleteButton, StyledCard, StyledRow, labelStyle } from "./styles";
const ParcelCard = ({ parcel, edit, pickParcel, assignParcel }) => {
  const loading = useSelector((state) => ParcelsLoadingSelector(state));

  const {
    dropoffAddress,
    pickupAddress,
    sender,
    bikerNotes,
    senderNotes,
    createdAt,
    datePicked,
    dateDelivered,
    status,
  } = parcel;

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <>
      {parcel && (
        <StyledCard>
          <Title level={5}>Parcel Details</Title>

          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Dropoff Address:</Text>
              <div>{`${dropoffAddress.country}, ${dropoffAddress.city}, ${dropoffAddress.street}, ${dropoffAddress.buildingNumber}, ${dropoffAddress.floor}`}</div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Pickup Address:</Text>
              <div>{`${pickupAddress.country}, ${pickupAddress.city}, ${pickupAddress.street}, ${pickupAddress.buildingNumber}, ${pickupAddress.floor}`}</div>
            </Col>
          </StyledRow>
          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Sender Name:</Text>
              <div>
                {`${sender && sender.firstName} ${sender && sender.lastName}`}
              </div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Biker Notes:</Text>
              <div>{bikerNotes ? bikerNotes : "--"}</div>
            </Col>
          </StyledRow>
          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Sender Notes:</Text>
              <div>{senderNotes}</div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Created At:</Text>
              <div>{formatDateTime(createdAt)}</div>
            </Col>
          </StyledRow>
          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Picked Date:</Text>
              <div>
                {datePicked ? formatDateTime(datePicked) : "Not picked yet"}
              </div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Delivered Date:</Text>
              <div>
                {dateDelivered
                  ? formatDateTime(dateDelivered)
                  : "Not delivered yet"}
              </div>
            </Col>
          </StyledRow>
          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Status:</Text>
              <div>{status.name}</div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Sender phone number:</Text>
              <div>{sender.phoneNumber}</div>
            </Col>
          </StyledRow>

          <Divider />
          <StyledRow gutter={[16, 16]}>
            {pickParcel ? (
              <Col span={2} offset={22}>
                <DeleteButton
                  onClick={() => assignParcel(parcel)}
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  {`Pick`}
                </DeleteButton>
              </Col>
            ) : (
              <Col span={2} offset={22}>
                <DeleteButton
                  onClick={() => edit(parcel)}
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  {`Edit`}
                </DeleteButton>
              </Col>
            )}
            <Col span={2}></Col>
          </StyledRow>
        </StyledCard>
      )}
    </>
  );
};

export default ParcelCard;
