import React from "react";

import {
  Form,
  Input,
  Col,
  Radio,
  Row,
  Button,
  DatePicker,
} from "antd";
import Nav from "./Nav";

import "../css/createUser.css";
import Footer from "./Footer";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const CreateUser = () => {
  return (
    <div >
      <div>
        <Nav />
      </div>
      <Row type="flex" align="middle" justify="center" style={{ height: '100vh' }}>
        
        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
            layout="horizontal"
          >
            <h1><center>Create User</center></h1>
            <Form.Item label="First Name">
              <Input />
            </Form.Item>

            <Form.Item label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item label="PAN">
              <Input />
            </Form.Item>
            <Form.Item label="Gender">
              <Radio.Group>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Address">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item label="Contact Number">
              <Input type="number" />
            </Form.Item>

            <Form.Item className="userCreateButton">
              <Button type="primary">Create</Button>
            </Form.Item>
          </Form>
        </Col>


      </Row>
      <div >
        <Footer />
      </div>
    </div>

    /*         
            
            <Form
              className="userMainForm"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              <h2>Create User</h2>
              <Form.Item label="First Name">
                <Input />
              </Form.Item>
    
              <Form.Item label="Last Name">
                <Input />
              </Form.Item>
              <Form.Item label="PAN">
                <Input />
              </Form.Item>
              <Form.Item label="Gender">
                <Radio.Group>
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Address">
                <TextArea rows={4} />
              </Form.Item>
    
              <Form.Item label="Contact Number">
                <Input type="number" />
              </Form.Item>
              <Form.Item label="Email ID">
                <Input />
              </Form.Item>
    
              <Form.Item label="Password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="Confirm Password">
                <Input.Password />
              </Form.Item>
              <Form.Item className="userCreateButton">
                <Button type="danger">Create</Button>
              </Form.Item>
            </Form>
            <div className="footerBottom">
              <Footer />
            </div>
          </div>
         */
  );
};

export default CreateUser;
