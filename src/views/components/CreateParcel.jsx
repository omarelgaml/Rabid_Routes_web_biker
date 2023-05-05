/* eslint-disable react/prop-types */
import { Form, Input, Button, Space, Row, Col, message } from "antd";
import {
  createParcelThunk,
  editParcelThunk,
  getParcelsThunk,
} from "../../state/thunks/ParcelsThunk";
import { useDispatch, useSelector } from "react-redux";
import { ParcelsLoadingSelector } from "../../state/Selectors";
import Spinner from "./Spinner";

const CreateParcelPage = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => ParcelsLoadingSelector(state));
  const { parcel, editDone } = props;
  const handleFormSubmit = async (values) => {
    try {
      const dropoffAddress = {
        country: values.dropOffCountry,
        city: values.dropOffCity,
        street: values.dropOffStreet,
        buildingNumber: values.dropOffBuildingNumber,
        floor: values.dropOffFloorNumber,
      };
      const pickupAddress = {
        country: values.pickupCountry,
        city: values.pickupCity,
        street: values.pickupStreet,
        buildingNumber: values.pickupBuildingNumber,
        floor: values.pickupFloorNumber,
      };
      const senderNotes = values.Notes;
      const body = { pickupAddress, dropoffAddress, senderNotes };
      if (parcel) {
        //update
        console.log(parcel);
        const id = parcel._id;
        await dispatch(editParcelThunk({ body, id }));
        await dispatch(getParcelsThunk());
        message.success("Parcel Updated");

        editDone();
      } else {
        await dispatch(createParcelThunk(body));
        await dispatch(getParcelsThunk());
        message.success("Parcel Created");
      }
      form.resetFields();
    } catch (Err) {
      console.log(Err);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      {loading && Spinner}
      <h1>Create Parcel</h1>

      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        autoComplete="off"
        initialValues={
          parcel && {
            dropOffCountry: parcel.dropoffAddress.country,
            dropOffCity: parcel.dropoffAddress.city,
            dropOffStreet: parcel.dropoffAddress.street,
            dropOffBuildingNumber: parcel.dropoffAddress.buildingNumber,
            dropOffFloorNumber: parcel.dropoffAddress.floor,
            pickupCountry: parcel.pickupAddress.country,
            pickupCity: parcel.pickupAddress.city,
            pickupStreet: parcel.pickupAddress.street,
            pickupBuildingNumber: parcel.pickupAddress.buildingNumber,
            pickupFloorNumber: parcel.pickupAddress.floor,
            Notes: parcel.senderNotes,
          }
        }
      >
        <h2>Pick-up Address</h2>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="pickupCountry"
              rules={[{ required: true, message: "Please input the country!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="City"
              name="pickupCity"
              rules={[{ required: true, message: "Please input the city!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Street"
              name="pickupStreet"
              rules={[{ required: true, message: "Please input the street!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Building Number"
              name="pickupBuildingNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the building number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Floor Number"
              name="pickupFloorNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the building number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        {/************************************************************** */}
        <h2>Drop-off Address</h2>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="dropOffCountry"
              rules={[{ required: true, message: "Please input the country!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="City"
              name="dropOffCity"
              rules={[{ required: true, message: "Please input the city!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Street"
              name="dropOffStreet"
              rules={[{ required: true, message: "Please input the street!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Building Number"
              name="dropOffBuildingNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the building number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Floor Number"
              name="dropOffFloorNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the floor number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="Notes" name="Notes">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              {`${parcel ? "Edit" : " Create"} Parcel`}
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateParcelPage;
