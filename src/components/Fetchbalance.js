import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";
import Footer from "./Footer";
import {
  Form,
  Input,
  Button,
  
} from "antd";
import axios from "axios";
 var email;
 var phone;
 function setPhone(val){
  phone = val.target.value;
}

function setEmail(val){
 email = val.target.value;
}


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
          className="form1"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >        
        <h1><center>Check Balance</center></h1>
         <Form.Item label="Email" name="email" 
          onChange={setEmail} >
            <Input />
          </Form.Item>      
          <Form.Item label="Mobile No" name="phone" onChange={setPhone}>
            <Input />
          </Form.Item>      
          <Form.Item className="userCreateButton">
            <Button type="primary"  href="Checkbalance">Fetch </Button>
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