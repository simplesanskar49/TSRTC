import React, { useEffect, useState } from 'react';
import { Row, Col,Descriptions } from 'antd';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import "../components/viewUser.css";
import { Table } from 'antd';
import axios from "axios"
var bal="";
var status=""
var email=""
var mobile=""

const App = () => (
  <Descriptions title="User Information:-" layout="horizontal">
    <Descriptions.Item label="Status">{status}</Descriptions.Item>
    <Descriptions.Item label="Email">{email}</Descriptions.Item>
    <Descriptions.Item label="Mobile">{mobile}</Descriptions.Item>
    <Descriptions.Item label="present Balance point">{bal}</Descriptions.Item>
  </Descriptions>
);

const columns = [

  {
    title: 'Date-Time',
    dataIndex: 'dateTime',
    key: 'dateTime',

  },
  {
    title: 'Reedem Points',
    dataIndex: 'redeemPoints',
    key: 'redeemPoints',
  },
  {
    title: 'Balance',
    dataIndex: 'availBalanceBeforeRedeem',
    key: 'availBalanceBeforeRedeem',
  },

];

function RewardHistory() {
  const location = useLocation();
  const [users1, setUsers] = useState([]);
  const users = [];
  const loadUsers = async () => {

    const result = await axios.get("http://localhost:8092/usr/RewardsProgram/v1/100010/getReedemHistory");
    
    bal=result.data[0].balancePoint;
    email=result.data[0].emailId;
    status=result.data[0].status;
    mobile=result.data[0].mobileNumber;

    
    for (var i = 0; i < result.data[0].historyBeans.length; i++) {
     // if(result.data[i].email === location.state.values.email ){
      {
        users.push(result.data[0].historyBeans[i]);
      }
    }
    setUsers(users);
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
            <br></br>
            <App />
            <table style={{ height: '250px', width: '950px' }} border="0" id="maintable">
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
                    <Table style={{ height: '250px', width: '90%' }} id="customers" dataSource={users1} columns={columns} /></center>

                  </div>

                  <br />
                </td></tr></table>

            <br />

            <br />
            <div class="container">
              <div class="btn-holder">
                <button type="button">Download</button>
                <hr />
                <button type="button">Print</button>
              </div>
            </div>
          </Col>
        </Row>
        </div>

      <div className="footerBottom">
        <Footer />
      </div>
    </div>
  );
}


export default RewardHistory;