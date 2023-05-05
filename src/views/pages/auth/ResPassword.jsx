import { Form, Input } from "antd";
import {
  StyledContainer,
  StyledForm,
  StylesButton,
  StyledTitle,
} from "./styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { resetPassword } from "../../../network/api/auth";
const ResetPasswordPage = () => {
  const location = useLocation();
  const [token, setToken] = useState("");
  const onFinish = async (values) => {
    await resetPassword({ password: values.password, token });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const inputToken = queryParams.get("token");
    setToken(inputToken);
  }, [location]);
  return (
    <StyledContainer>
      <StyledForm
        name="reset-password"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <StyledTitle>Reset Password</StyledTitle>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="New Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm New Password" />
        </Form.Item>
        <Form.Item>
          <StylesButton type="primary" htmlType="submit">
            Reset Password
          </StylesButton>
        </Form.Item>
      </StyledForm>
    </StyledContainer>
  );
};

export default ResetPasswordPage;
