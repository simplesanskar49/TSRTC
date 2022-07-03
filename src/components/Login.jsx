
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
import Slider from "./slider/Slider";
import "./slider/Slider.js";
import NewSlider from "./NewSlider";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isIt, setIsIt] = useState(false);
  const navigate = useNavigate();
  /*const requestDetails = {
    method: "POST",
    headers: {
      Accept: "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ loginId: email, password: password }),
  };*/
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
  // const validate = (e) => {
  //   /*e.preventDefault();

  //   if (isValid) {
  //     setIsLoggedIn(true);
  //     console.log(isLoggedIn);
  //   } else {
  //     setIsLoggedIn(false);
  //   }*/
  //   if (email === "meghana" && password === "1234567890") {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // };
  if (isLoggedIn) {
    return navigate("/home");
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
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
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
          <a href="">
            Forgot password
          </a>
          </div>
        </Form.Item>
  
       
        <Form.Item>
   <div>
            <Button type="primary" htmlType="submit" className="loginButton">
            Log in
          </Button>
         </div>
        </Form.Item>
  
      </Form>
      </div>
    )
          // <div className="loginMain centered">
          //   <div className="loginTitle">Login to your account</div>
          //   <form className="loginForm">
          //     <div className="abc">
          //       <input
          //         placeholder="Email"
          //         className="inputFeild"
          //         value={email}
          //         onChange={(e) => setEmail(e.target.value)}
          //       />
          //     </div>
          //     <br></br>
          //     <div className="abc">
          //       <input
          //         type="password"
          //         placeholder="Password"
          //         value={password}
          //         onChange={(e) => setPassword(e.target.value)}
          //       />
          //     </div>
          //     <Button
          //       type="primary"
          //       className="loginButton"
          //       onClick= {validate}
          //       danger
          //     >
          //       Login
          //     </Button>
          //     <div className="forgotPassword">
          //       Forgot Password? <a href="#">Reset Password</a>
          //     </div>
          //     <div className="hide">
          //       {isValid && !isIt ? <></> : <h1>Invalid</h1>}
          //       Invalid Username or Password
          //     </div>
          //   </form>

// class NormalLoginForm extends React.Component {

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <Form.Item>
//           {getFieldDecorator('username', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Username"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input
//               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               type="password"
//               placeholder="Password"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(<Checkbox>Remember me</Checkbox>)}
//           <a className="login-form-forgot" href="">
//             Forgot password
//           </a>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </Form.Item>
//       </Form>
//     );
//   }
// }
    
  }
}

export default Login;




// const App = () => {
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   ;
// };

// export default App;