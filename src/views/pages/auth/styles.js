import { Form, Button, Typography } from "antd";
const { Title } = Typography;
import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
export const StyledForm = styled(Form)`
  max-width: 400px;
  width: 100%;
`;
export const StylesButton = styled(Button)`
  width: 100%;
`;
export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 97vh;
`;
export const StyledTitle = styled(Title)`
  text-align: center;
`;
export const SignupLink = styled.a`
  float: right;
`;

export const ForgotPasswordLink = styled.a`
  float: left;
`;
