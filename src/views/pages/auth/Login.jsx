import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import {
  StyledContainer,
  StyledForm,
  StylesButton,
  StyledTitle,
  SignupLink,
  ForgotPasswordLink,
} from "./styles";

import { loginThunk, getRoleThunk } from "../../../state/thunks/UserThunks";
import { useEffect } from "react";
import { UserRoleSelector } from "../../../state/Selectors";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const platFormRole = useSelector((state) => UserRoleSelector(state));

  const onFinish = (values) => {
    const body = {
      email: values.email,
      password: values.password,
      role: platFormRole._id,
    };
    dispatch(loginThunk(body));
  };

  useEffect(() => {
    if (!platFormRole) dispatch(getRoleThunk());
  }, [dispatch, platFormRole]);

  return (
    <StyledContainer>
      <StyledForm
        name="login"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <StyledTitle level={2}>Login to Rapid Routes</StyledTitle>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <StylesButton type="primary" htmlType="submit">
            Login
          </StylesButton>
          <Link to="/register">
            <SignupLink>Signup</SignupLink>
          </Link>
          <Link to="/reset-password-email">
            <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
          </Link>
        </Form.Item>
      </StyledForm>
    </StyledContainer>
  );
};

export default LoginPage;
