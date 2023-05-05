import { Form, Input } from "antd";

import {
  SignupContainer,
  StyledForm,
  StylesButton,
  StyledTitle,
} from "./styles";
import { register } from "../../../network/api/auth";
import { useEffect } from "react";
import { UserRoleSelector } from "../../../state/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { getRoleThunk } from "../../../state/thunks/UserThunks";

const SignupPage = () => {
  const dispatch = useDispatch();
  const platFormRole = useSelector((state) => UserRoleSelector(state));

  useEffect(() => {
    if (!platFormRole) dispatch(getRoleThunk());
  }, [dispatch, platFormRole]);
  const onFinish = async (values) => {
    const body = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      password: values.password,
      title: values.title,
      role: platFormRole._id,
    };

    await register(body);
  };

  return (
    <SignupContainer>
      <StyledTitle>Welcome to Rapid Routes!</StyledTitle>
      <StyledForm
        name="signup"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
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
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="title">
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input placeholder="Phone Number" />
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
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
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
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <StylesButton type="primary" htmlType="submit">
            Sign Up
          </StylesButton>
        </Form.Item>
      </StyledForm>
    </SignupContainer>
  );
};

export default SignupPage;
