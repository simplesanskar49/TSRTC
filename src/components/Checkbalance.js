import React from 'react';
import { Table, Row, Col } from 'antd';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";

import "../css/fetch.css";
import DateTime from "./Datecomponent";

import {
    Form,
    Descriptions
} from "antd";
import Footer from './Footer';




const columns = [
    {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email', 
    },
    {
        title: 'Phone',
        dataIndex: 'Phone',
        key: 'Phone', 
    },
    {
        title: 'Balance',
        dataIndex: 'Balance',
        key: 'Balance', 
    },
    
]

const data = [
   { 
    key: '0',
    Email: 'dd0@dd.com',
    Phone: '999912339',
    Balance: 1000,
   
  },
  { 
    key: '1',
    Email: 'dd1@dd.com',
    Phone: '989912339',
    Balance: 2000,
   
  },
  { 
    key: '2',
    Email: 'dd2@dd.com',
    Phone: '97712339',
    Balance: 3000,
   
  },
]


function Balance() {
    return (
        <div>
        <Row type="flex" align="top" justify="start">
            <Col xs ={24} sm={24} md={6} lg={6} xl={6}>
                <SideNavbar />
            </Col>
            <Col xs ={24} sm={24} md={18} lg={18} xl={18}>
            <Table
                    dataSource={data}
                    columns={columns}
                    />
            </Col>
        </Row></div>

        
        // <div className="createUser">

        //     <div>
        //         <Navigation status={true} />
        //     </div>
        //     <div></div>
        //     <div width="60%" align="center">  <br></br><DateTime /></div>
        //     <div>
        //         <SideNavbar />
        //     </div>
        //     {/* <Row type="flex" align="middle" justify="center">
            //     <Col xs ={24} sm={24} md={24} lg={24} xl={24}>
            //         <Card>

            //         </Card>
            //     </Col>
            // </Row>
            // <div className="userForm">
            //     <Form
            //         className="userMainForm"
            //         labelCol={{ span: 4 }}
            //         wrapperCol={{ span: 14 }}
            //         layout="horizontal"
            //     >
            //       <div className="form-inline C_cx" >
            //       <h2><center><font color="white">Balance</font></center></h2>
            //  </div> 
            //         <Form.Item label="Email">
            //             <Descriptions.Item label="Email">abc@zaggle.in</Descriptions.Item>
            //         </Form.Item>
            //         <Form.Item label="Mobile">
            //             <Descriptions.Item label="Mobile">1810000000</Descriptions.Item>
            //         </Form.Item>
            //         <Form.Item label="Balance">
            //             <Descriptions.Item label="Balance">100000</Descriptions.Item>
            //         </Form.Item>

                

                    /* <table class="ui celled table">
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
                    </table> */
                /* </Form>
                <Table
                    dataSource={data}
                    columns={columns}
                    />

            </div>


            <div>
                <Footer />
            </div>
        </div> */
    );
}

export default Balance;