import React, { useState } from "react";
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
  Row,
} from "antd";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import { Nav } from "react-bootstrap";
import "../css/createBank.css";
import "../index.css";
import Footer from "./Footer";
import "../css/footer.css"
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const CreateBank = () => {
  return (
    <div className="home">
      <div className="createBank">
        <div>
          <Navigation status={true} />
          <SideNavbar />
        </div>
        <div className="home">
          <div className="bankForm home">
            
            <Form
              className="bankMainForm"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              <br></br>
              <h2>Create Bank</h2><br></br>
              <Form.Item label="Bank Name">
                <Input />
              </Form.Item>

              <Form.Item label="IFSC Code">
                <Input />
              </Form.Item>
              <Form.Item label="Branch Name">
                <Input />
              </Form.Item>
              <Form.Item label="Address">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="District">
                <Input />
              </Form.Item>
              <Form.Item label="City">
                <Input />
              </Form.Item>

              <Form.Item label="Contact Number">
                <Input type="number" />
              </Form.Item>

              <Form.Item label="Pincode">
                <Input type="number" />
              </Form.Item>
              {/* <Form.Item label="Bank ID">
                <Input />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="Confirm Password">
                <Input.Password />
              </Form.Item>*/}
              <Form.Item className="bankCreateButton">
                <Button type="danger">Create</Button>
              </Form.Item> 
            </Form>
            <Row>
            <div className="newFooter bottom">
          {/* <div style={{display: 'flex', bottom: '0', marginTop: "100%"}}> */}
            <Footer />
          </div>
          </Row>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateBank;
