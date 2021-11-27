import { Form, Input, Switch } from "antd";
import React from "react";

type Props = {
  onFinish: (values: Object) => void;
  form: any;
};

const AddForm = ({ onFinish, form }: Props) => {
  return (
    <Form
      form={form}
      layout='vertical'
      style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
      onFinish={onFinish}
    >
      <Form.Item
        name='title'
        label='Title'
        rules={[{ required: true, message: "Please input your task!" }]}
      >
        <Input size='large' placeholder='Task' style={{ width: 380 }} />
      </Form.Item>
      <Form.Item
        name='description'
        label='Description'
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input.TextArea
          size='large'
          placeholder='Task'
          style={{ width: 380 }}
        />
      </Form.Item>
    </Form>
  );
};

export default AddForm;
