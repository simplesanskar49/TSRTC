import React, { useEffect, useState } from "react";
import StyledNavigation from "./StyledComponents/StyledNavigation";
import { Pagination } from 'antd';
import Nav from "./Nav";

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
      <StyledNavigation>
        <div >
          <div>
            <Nav />
          </div>      
          <Row type="flex" align="middle" justify="center" style={{ height: '100vh' }}>
            <Col xs={20} sm={20} md={20} lg={20} xl={20} >
            <table  style={{ height: '80vh' , width:'80hh'}}  border="0" id="maintable">
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
                     <Table style={{ height: '250px', width:'90%' }} id="customers" dataSource={users} columns={columns} pagination={false}/></center>
                     </div>
                     <br />
                     </td></tr></table>
            </Col>
          </Row>
          <div>
            <Footer />
          </div>  
        </div>  
      </StyledNavigation>
    );
        // <div>

        //     <div>
        //     <Row >
                
        //         <Col span={24} style={{paddingTop:"2px"}}>
        //             {/*<Form className="xyza">*/}
        //             <br></br>
        //             <table  style={{ height: '250px' , width:'800px'}}  border="0" id="maintable">
        //                 <tr bgcolor="#1E90FF" width="100%" >
        //                     <h2>
        //                        <font color="white"> <center>User Details</center></font>
        //                     </h2>
        //                 </tr>
        //                 <tr width="100%"><br></br></tr>
        //                 <tr>
        //                  <td>
        //                 {/*<table class="ui inverted blue table" width="50%">*/}
                       
        //             <div> <center>
        //             <Table style={{ height: '250px', width:'90%' }} id="customers" dataSource={users} columns={columns} /></center>
        //             </div>
        //             <br />
        //             </td></tr></table>
        //             {/*</Form>*/}
        //             {/* <div align="right">
        //             <left><Pagination defaultCurrent={1} total={50} /></left>;
        //             </div> */}
        //         </Col>
        //     </Row>
        //     </div>
        //     <div>
        //         <Footer />
        //     </div>
        // </div>
}
export default Fetchbalance;