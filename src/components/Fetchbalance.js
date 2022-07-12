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

function handleSubmit(){
  
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  
      'email': email,
      'mobileNumber': phone})
};
    axios.get(('http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance', requestOptions))
    .then(async(result) => {
      console.log(result);
      console.log(result.json())
      console.log(result.data);
      if (result.status === 200) {
          console.log("recieved");
          console.log(JSON.stringify(result));
      } else {
          console.log("Not received");
      }
    })
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
            <Button type="primary"  onClick={handleSubmit} >Fetch </Button>
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