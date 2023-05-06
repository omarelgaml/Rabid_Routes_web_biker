import { Button, Select, Card, Row } from "antd";
import styled from "styled-components";
export const StyledSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .ant-spin {
    color: #fff;
  }
`;
export const ParcelsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ParcelPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const DeleteButton = styled(Button)`
  width: 100%;
`;
export const StyledSelect = styled(Select)`
  width: 100%;
  margin-bottom: 40px;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 40px;
  boarder-radius: 10px;
`;

export const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;

export const labelStyle = {
  fontWeight: "bold",
};
