import React, { useEffect, useState } from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import { Pagination } from 'antd';
import "../css/fetch.css";
import "../components/viewUser.css"
import {
    Table,
    Col,    
    Row,
    Space,
    
} from "antd";
import Footer from "./Footer";
import axios from 'axios';

const columns = [

    {
      title: 'Mobile Number',
      dataIndex: 'mobile',
      key: 'mobileNumber',
      
    },
    {
      title: 'Email Id',
      dataIndex: 'email',
      key: 'emailId',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'amount',
    },
  ];

function Fetchbalance() {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance")
      setUsers(result.data);
      console.log(result.data);
      //console.log(result.data.amount);
    }
    
  
    useEffect(() => {
      loadUsers()
    }, [])
  

    return (

       
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
                    <table  style={{ height: '250px' , width:'950px'}}  border="0" id="maintable">
                        <tr bgcolor="#1E90FF" width="100%" >
                            <h2>
                               <font color="white"> <center>User Details</center></font>
                            </h2>
                        </tr>
                        <tr width="100%"><br></br></tr>
                        <tr>
                         <td>
                        {/*<table class="ui inverted blue table" width="50%">*/}
                       
                    <div> <center>
                    <Table style={{ height: '250px', width:'90%' }} id="customers" dataSource={users} columns={columns} /></center>
                    </div>
                    <br />
                    </td></tr></table>
                    {/*</Form>*/}
                    {/* <div align="right">
                    <left><Pagination defaultCurrent={1} total={50} /></left>;
                    </div> */}
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