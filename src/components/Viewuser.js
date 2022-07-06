import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import { Pagination } from 'antd';
import "../css/fetch.css";
import "../components/viewUser.css"

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
            <div>
            <Row type="flex" align="top" justify="start">
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <SideNavbar />
                </Col>
                <Col xs={24} sm={24} md={17} lg={17} xl={17} className='abcd'>
                    {/*<Form className="xyza">*/}
                        <br></br>
                    <table width="100%" border="0" id="maintable">
                        <tr bgcolor="#1E90FF" width="100%" >
                            <h1>
                               <font color="white"> <center>User Details</center></font>
                            </h1>
                        </tr>
                        <tr width="100%"><br></br></tr>
                        <tr>
                         <td>
                        {/*<table class="ui inverted blue table" width="50%">*/}
                       <table id="customers">
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
                    </table></td></tr></table><br>
                    </br>
                    {/*</Form>*/}
                    <div align="right">
                    <left><Pagination defaultCurrent={1} total={50} /></left>;
                    </div>
                </Col>
            </Row>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default Fetchbalance;