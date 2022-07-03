import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";

import {
    Form,
    Button,
    Descriptions
} from "antd";
import Footer from "./Footer";
function Fetchbalance() {

    return (
        <div className="createUser">
            <div>
                <Navigation status={true} />
            </div>
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
                    <h2>User Details</h2>
                    <Descriptions>
                        <Descriptions.Item label="UserName">abc</Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>                        
                        <Descriptions.Item label="Address">
                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                    </Descriptions>
                    <Form.Item className="userCreateButton">
                        <Button a href="UpdateUser">Update </Button>
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