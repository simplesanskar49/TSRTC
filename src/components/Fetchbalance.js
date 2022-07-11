import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";
import Footer from "./Footer";
import Checkbalance from "./Checkbalance";
import {
  Form,
  Input,
  Button,
  Select
} from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Fetchbalance() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);       
    navigate('/Checkbalance',{state:{values}});
  };

  const onReset = () => {
    form.resetFields();
  };
  const onCheck = () =>{

  }


  return (
    <div className="createUser">
      <div>
        <Navigation status={true} />
      </div>
      <div>
        <SideNavbar />
      </div>


      <div className="userForm1">
      <Form  className="form1"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}  form={form} name="control-hooks" onFinish={onFinish}>
            <div><center><h1>Details</h1></center></div>
            <br />  
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>      
        <Button type="primary" htmlType="submit">
          Fetch
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        
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