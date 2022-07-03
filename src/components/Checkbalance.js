import React from 'react';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import { Nav } from "react-bootstrap";
import "../css/fetch.css";
import DateTime from "./Datecomponent";
import BalanceTab from './BalanceTab';
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
import Footer from './Footer';

function Balance(){
    return(
        <div className="createUser">
           
        <div>
        <Navigation status={true} />
        </div>
        <div></div>
        <div  width="60%" align="center">  <br></br><DateTime /></div>
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
            <h2>Balance</h2>
                <Form.Item label="Email">
                    <Input />
                </Form.Item>     
                <Form.Item label="Mobile">
                    <Input />
                </Form.Item>     
                <Form.Item label="Balance">
                    <Input />
                </Form.Item>
                
                </Form>
                
            </div>
            
        
        <div>
        <Footer /> 
        </div>
        </div>
    );
}

export default Balance;