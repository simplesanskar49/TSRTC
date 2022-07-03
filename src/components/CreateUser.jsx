import React from "react";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
} from "antd";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import { Nav } from "react-bootstrap";
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
        <div>
        <SideNavbar />
        </div>
      
        
        
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
    
  );
};

export default CreateUser;
