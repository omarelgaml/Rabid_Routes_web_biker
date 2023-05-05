import { Spin } from "antd";
import { StyledSpinner } from "./styles";
function Spinner() {
  return (
    <StyledSpinner>
      <Spin size="large" />
    </StyledSpinner>
  );
}
export default Spinner;
