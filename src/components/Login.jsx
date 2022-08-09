
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


function Login() {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isValid, setIsValid] = useState(false);
  // const [isIt, setIsIt] = useState(false);
  // const navigate = useNavigate();
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
  // console.log("username", loginId);
  // console.log(password);
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
  // const validate = (e) => { 
  //   e.preventDefault();

  //   if (isValid) {
  //     setIsLoggedIn(true);
  //     console.log(isLoggedIn);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  //   if (username == "admin" && password == "") {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // };
  // if (isLoggedIn) {
  //   return navigate("/home");
  // } else {
    const [emp, setEmp] = useState({
      loginId: "",

      password: "",
      


    });
    const onInputChange = e => {
      setEmp({ ...emp, [e.target.id]: e.target.value })
    };

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emp.loginId);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({"loginId": emp.loginId, "password": emp.password})
    };
    const response = await fetch("http://192.168.1.168:8989/prepaid/usermanager/v1/login", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);

         
 
    });
  }
     
        return (
          <div className="loginMain">
            <div className="loginTitle">Login to your account</div>
            <Form
              name="normal_login"
              className="loginForm"
              
              initialValues={{
                remember: true,
              }}              
              // onFinish={validate}
            >
              <Form.Item
                name="loginId"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}

              >
                <div className="abc">
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" id="loginId" value={emp.loginId} onChange={e => onInputChange(e)} />
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

              >
                <div className="abc">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={emp.password}
                    onChange={e => onInputChange(e)}
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
                  <Button type="primary" htmlType="submit" className="loginButton"  onClick={(e)=>{handleSubmit(e);}}>
                    Log in
                  </Button>
                </div>
              </Form.Item>

            </Form>
          </div>
        )
      }
  export default Login;