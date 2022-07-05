/*import React from 'react'
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import {Row, Col } from 'antd';
const Forgotpassword = () => {
  return (
    <div>
      <div>
          <Navigation status={true} />
      </div>
      <div>
          <Row type="flex" align="top" justify="start">
              <Col xs={24} sm={24} md={17} lg={17} xl={17} className='abcd'>

                </Col>
                </Row>
      </div>
    </div>
  )
}

export default Forgotpassword;*/
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import "../css/createUser.css"

const Forgotpassword = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
    <div>
          <Navigation status={true} />
      </div>
    <div>
    <Form className="userMainFormforgotpassword"
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
    > <h2>Reset your password here</h2>
    <br></br>
    
      <Form.Item
        label="Enter code"
        name="Number"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Enter new Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please confirm the password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <center><Button type="primary" htmlType="submit" href="/">
          Submit
        </Button></center>
      </Form.Item>
    </Form>
    </div>
    <div className="home">
      <Footer />
        </div>
    </div>
  );
};

export default Forgotpassword;