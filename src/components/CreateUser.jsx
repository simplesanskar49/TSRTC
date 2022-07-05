import React from "react";

import {
  Form,
  Input,
  Col,
  Radio,
  Button,
  DatePicker,
} from "antd";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";

import "../css/createUser.css";
import Footer from "./Footer";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const CreateUser = () => {
  return (
    <div className="createUser">
      <div>
        <Navigation status={true} />
      </div>
      <row type="flex" align="top" justify="start">
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SideNavbar />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Form
            className="userMainForm"
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


      </row>
      <div className="footerBottom">
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
