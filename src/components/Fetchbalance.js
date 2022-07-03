import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import { Nav } from "react-bootstrap";
import "../css/fetch.css";

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
import Footer from "./Footer";
function Fetchbalance() {
    
  return (
    <div className="createUser">
        <div>
        <Navigation status={true} />
        </div>
        <div>
            <SideNavbar />
        </div>
      
    
      <div className="userForm"> 
      
      <Form
          className="userMainForm"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >        
        <h2>Check Balance</h2>
         <Form.Item label="Email">
            <Input />
          </Form.Item>      
          <Form.Item label="Mobile No">
            <Input />
          </Form.Item>      
          <Form.Item className="userCreateButton">
            <Button  a href="CheckBalance">Fetch </Button>
          </Form.Item>
        
        </Form>
      </div>

      <div>
        <Footer /> 
        </div>
      </div>
  );
}
export default Fetchbalance;