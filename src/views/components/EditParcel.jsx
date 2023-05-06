/* eslint-disable react/prop-types */
import { Form, Input, Button, Space, Row, Col, DatePicker } from "antd";
import {
  editParcelThunk,
  getParcelsThunk,
  getStatusesThunk,
} from "../../state/thunks/ParcelsThunk";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  ParcelsLoadingSelector,
  ParcelsStatusesSelector,
} from "../../state/Selectors";
import moment from "moment";
import Spinner from "./Spinner";

const CreateParcelPage = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => ParcelsLoadingSelector(state));
  const statuses = useSelector((state) => ParcelsStatusesSelector(state));

  const { parcel, editDone } = props;
  useEffect(() => {
    if (statuses && !statuses.length) dispatch(getStatusesThunk());
  }, [statuses, dispatch]);
  const handleFormSubmit = async (values) => {
    try {
      const id = parcel._id;
      const body = {};

      if (values.datePicked && !parcel.datePicked) {
        body.datePicked = values.datePicked.toISOString();

        body.status = statuses.filter((stat) => stat.code === 2)[0]._id;
      }

      if (values.dateDelivered && !parcel.dateDelivered) {
        body.dateDelivered = values.datePicked.toISOString();
        body.status = statuses.filter((stat) => stat.code === 3)[0]._id;
      }
      body.bikerNotes = values.Notes;
      await dispatch(editParcelThunk({ body, id }));
      await dispatch(getParcelsThunk());

      editDone();

      form.resetFields();
    } catch (Err) {
      console.log(Err);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      {loading && Spinner}

      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        autoComplete="off"
        initialValues={
          parcel && {
            datePicked: parcel.datePicked && moment(parcel.datePicked),
            dateDelivered: parcel.dateDelivered && moment(parcel.dateDelivered),
            Notes: parcel.bikerNotes,
          }
        }
      >
        <h2>update parcel</h2>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="pickup date" name="datePicked">
              <DatePicker
                disabled={!!parcel.dateDelivered || !!parcel.datePicked}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Delivery date" name="dateDelivered">
              <DatePicker disabled={parcel.dateDelivered} />
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
