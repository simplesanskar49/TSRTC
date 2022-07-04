import React from 'react';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";

import "../css/fetch.css";
import DateTime from "./Datecomponent";

import {
    Form,
    Descriptions
} from "antd";
import Footer from './Footer';


function Balance() {
    return (
        <div className="createUser">

            <div>
                <Navigation status={true} />
            </div>
            <div></div>
            <div width="60%" align="center">  <br></br><DateTime /></div>
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
                  <div className="form-inline C_cx" >
                  <h2><center><font color="white">Balance</font></center></h2>
             </div> 
                    <Form.Item label="Email">
                        <Descriptions.Item label="Email">abc@zaggle.in</Descriptions.Item>
                    </Form.Item>
                    <Form.Item label="Mobile">
                        <Descriptions.Item label="Mobile">1810000000</Descriptions.Item>
                    </Form.Item>
                    <Form.Item label="Balance">
                        <Descriptions.Item label="Balance">100000</Descriptions.Item>
                    </Form.Item>

                    <table class="ui celled table">
                        <thead>
                            <tr><th>Name</th>
                                <th>Age</th>
                                <th>Balance</th>
                            </tr></thead>
                        <tbody>
                            <tr>
                                <td data-label="Name">James</td>
                                <td data-label="Age">24</td>
                                <td data-label="Balance">100000</td>
                            </tr>

                        </tbody>
                    </table>
                </Form>

            </div>


            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Balance;