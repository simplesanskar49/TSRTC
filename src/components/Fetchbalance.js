import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";

import {
    Form,
    Input,
    Button,
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
      
    
      <div className="userForm1"> 
      
     <Form
          className="userMainForm"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >        
        <h1><center>Check Balance</center></h1>
         <Form.Item label="Email">
            <Input />
          </Form.Item>      
          <Form.Item label="Mobile No">
            <Input />
          </Form.Item>      
          <Form.Item className="userCreateButton">
            <Button type="primary" a href="CheckBalance">Fetch </Button>
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