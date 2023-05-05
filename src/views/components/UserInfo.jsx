import { Form, Input, Button, Row, Col } from "antd";
import { UserSelector } from "../../state/Selectors";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";

import { UserLoadingSelector } from "../../state/Selectors";
import { updateUserThunk } from "../../state/thunks/UserThunks";
const EditUserPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => UserLoadingSelector(state));

  const user = useSelector((state) => UserSelector(state));

  const handleFormSubmit = (values) => {
    console.log(values);
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      title: values.title,
      phoneNumber: values.phoneNumber,
    };
    dispatch(updateUserThunk({ body, id: user._id }));
  };
  return (
    <div style={{ padding: 24 }}>
      {loading && Spinner}

      <h1>User Information</h1>
      {Object.keys(user).length > 0 && (
        <Form
          form={form}
          onFinish={handleFormSubmit}
          layout="vertical"
          autoComplete="off"
          initialValues={{
            firstName: user.firstName,
            lastName: user.lastName,
            title: user.title,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role.name,
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="Email" name="email">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Title" name="title">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Role" name="role">
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Update Information
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default EditUserPage;
