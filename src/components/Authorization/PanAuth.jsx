import React from 'react'
import OtpInput from "react-otp-input";
import { Button, Checkbox, Form, Input } from 'antd';
const PanAuth = () => {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="PAN"
        name="pan"
        rules={[
          {
            required: true,
            message: 'Please input your PAN Number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <OtpInput
          onChange={otp => console.log(otp)}
          numInputs={8}
          separator={<span>-</span>}
        />
        <Button type="success"></Button>

    </Form>
  );
};


export default PanAuth;