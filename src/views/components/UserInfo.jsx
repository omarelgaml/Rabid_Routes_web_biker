import { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { useSelector } from "react-redux";
import { UserSelector } from "../../state/Selectors";

const EditUserPage = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => UserSelector(state));

  const handleFormSubmit = (values) => {
    console.log(values);
    setIsLoading(true);
  };
  return (
    <div style={{ padding: 24 }}>
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
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  { required: true, message: "Please input your title!" },
                ]}
              >
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
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Update Information
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default EditUserPage;
