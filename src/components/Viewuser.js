import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";

import "../css/fetch.css";

import {
    Form,
    Button,
    Col,
    Descriptions,
    Row, Table,
} from "antd";
import Footer from "./Footer";



const columns = [
    {
        title: 'UserName',
        dataIndex: 'UserName',
        key: 'UserName', 
    },
    {
        title: 'Telephone',
        dataIndex: 'Telephone',
        key: 'Telephone', 
    },
    {
        title: 'Live',
        dataIndex: 'Live',
        key: 'Live', 
    },
    {
        title: 'Address',
        dataIndex: 'Address',
        key: 'Address', 
    },
    
]

const data = [
   { 
    key: '0',
    UserName: 'dd0@dd.com',
    Telephone: '999912339',
    Live:'Live',
    Address: 1000,
   
  },
  { 
    key: '1',
    UserName: 'dd0@dd.com',
    Telephone: '999912339',
    Live:'Live',
    Address: 1000,
   
  },
  { 
    key: '2',
    UserName: 'dd0@dd.com',
    Telephone: '999912339',
    Live:'Live',
    Address: 1000,
   
  },
]


function Fetchbalance() {

    return (
        <div className="createUser">
            <div>
                <Navigation status={true} />
            </div>
            <Row type="flex" align="top" justify="start">
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <SideNavbar />
                </Col>
    
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                   
                        <Form
                            className="userMainForm"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 14 }}
                            layout="horizontal"
                        >
                            <h1><center>User Details</center></h1>

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
                            </Row>  
                        </Form>
                    { /*
                            <Descriptions>
                                <Descriptions.Item label="UserName">abc</Descriptions.Item>
                                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                                <Descriptions.Item label="Address">
                                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                </Descriptions.Item>
                            </Descriptions>
                            <Form.Item className="userCreateButton">
                                <Button type="primary" a href="UpdateUser">Update </Button>
    </Form.Item> --></Col>}
                      
                    </div> */}
                </Col>
            </Row>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default Fetchbalance;