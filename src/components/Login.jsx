
import { LockOutlined, RadiusBottomrightOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form } from 'antd';
import { Icon } from 'antd';
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import "../css/login.css";

import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";

import "antd/dist/antd.css";
import Footer from "./Footer";


function Login() {
  const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isIt, setIsIt] = useState(false);
  const navigate = useNavigate();
  // const requestDetails = {
  //   method: "POST",
  //   headers: {
  //     Accept: "*",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ loginId: email, password: password }),
  // };
  // var errorClass = "hide";
  // useEffect(() => {
  //   fetch("http://192.168.1.168:8989/prepaid/usermanager/v1/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  //     },
  //     body: JSON.stringify({
  //       loginId: email,
  //       password: password,
  //     }),
  //   })
  //     .then((response) => {
  //       response.json();
  //       console.log(response.json());
  //       //response.set('Access-Control-Allow-Origin':'*');
  //     })
  //     .then((result) => {
  //       if (result.status === "success") {
  //         setIsValid(true);
  //         //set class name of error
  //         //setIsLoggedIn(true);
  //       } else {
  //         setIsValid(false);
  //         setIsIt(true);
  //         //setIsLoggedIn(false);
  //       }
  //       console.log(result.status);
  //       console.log(JSON.stringify(result));
  //     })
  //     .catch((rejected) => {
  //       console.log(rejected);
  //     });
  // }, []);
  const validate = (e) => {
    /*e.preventDefault();

    if (isValid) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    } else {
      setIsLoggedIn(false);
    }*/
    if (username == "admin" && password == "admin") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };
  if (isLoggedIn) {
    return navigate("/fetch-balance");
  } else {
    return (
      <div className="loginMain">
        <div className="loginTitle">Login to your account</div>
      <Form
        name="normal_login"
        className="loginForm"

        initialValues={{
          remember: true,
        }}
        onFinish={validate}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
          onChange={(e) => setUsername(e.target.value)}
        >
          <div className="abc">
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </div>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
          onChange={(e) => setPassword(e.target.value)}
        >
          <div className="abc">
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
          </div>
        </Form.Item>
        <br></br>
    
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div className="forgotPassword">
          <a href="Forgotpassword">
            Forgot password
          </a>
          </div>
        </Form.Item>
  
       
        <Form.Item>
   <div>
            <Button type="primary" htmlType="submit" className="loginButton" >
            Log in
          </Button>
         </div>
        </Form.Item>
  
      </Form>
      <div>
        <Footer />
      </div>
      </div>
    )
  }
}
export default Login;