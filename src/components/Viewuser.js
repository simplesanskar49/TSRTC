import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import { Pagination } from 'antd';
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


    },
    {
        key: '1',
        UserName: 'dd0@dd.com',
        Telephone: '999912339',
        Live: 'Live',
        Address: 1000,

    },
    {
        key: '2',
        UserName: 'dd0@dd.com',
        Telephone: '999912339',
        Live: 'Live',
        Address: 1000,

    },
]


function Fetchbalance() {

    return (

        // <div>
        //     <div>
        //         <Navigation status={true} />
        //     </div>
        //     <div>
        //         <Row type="flex" align="top" justify="start">
        //             <Col xs={24} sm={24} md={24} lg={24} xl={24}>

        //                 <Form
        //                     labelCol={{ span: 4 }}
        //                     wrapperCol={{ span: 14 }}
        //                     layout="horizontal"
        //                 >
        //                     <Row type="flex" align="top" justify="start">
        //                         <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        //                             <SideNavbar />
        //                         </Col>
        //                         <Col xs={24} sm={24} md={18} lg={18} xl={18}>
        //                         <h1><center>User Details</center></h1>
        //                             <Table
        //                                 dataSource={data}
        //                                 columns={columns}
        //                             />

        //                         </Col>
        //                     </Row>
        //                 </Form>
        //             </Col>
        //         </Row>
        //     </div>
        <div>

            <div>
                <Navigation status={true} />
            </div>
            <Row type="flex" align="top" justify="start">
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <SideNavbar />
                </Col>
                <Col xs={24} sm={24} md={17} lg={17} xl={17} className='abcd'>
                    <table class="ui inverted blue table">
                        <thead>
                            <tr align="center"><th colspan='3'><h2 className='efgh'>User Details<br /></h2></th></tr>
                        </thead>
                        </table>
                    <table class="ui inverted blue table">
                        <thead>
                            <tr><th>UserName</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr></thead><tbody>
                            <tr>
                                <td>xyz@gmail.com</td>
                                <td>8978767824</td>
                                <td>Hyd</td>
                            </tr>
                            <tr>
                                <td>xyz@gmail.com</td>
                                <td>8978798824</td>
                                <td>mp</td>
                            </tr>
                            <tr>
                                <td>xyz@gmail.com</td>
                                <td>8978798824</td>
                                <td>assam</td>
                            </tr> <tr>
                                <td>xyz@gmail.com</td>
                                <td>8978798824</td>
                                <td>egypt</td>
                            </tr> <tr>
                                <td>xyz@gmail.com</td>
                                <td>8978798824</td>
                                <td>banglore</td>
                            </tr>
                        </tbody>
                    </table>
                    <center><Pagination defaultCurrent={1} total={50} /></center>;
                </Col>
            </Row>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default Fetchbalance;