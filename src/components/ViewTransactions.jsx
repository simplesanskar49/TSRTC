import React, { useEffect, useState } from 'react'
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import Footer from './Footer';
import { Row, Col, Card, Table, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import axios, { Axios } from "axios";

var bal = "80000";
var status = ""
var email = ""
var mobile = ""

var bal1 = "1160";
var bal2 = "1230";
var bal3 = "900";
var bal4 = "400";
var bal5 = "1400";

const ViewTransactions = () => {

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
  const [users1, setUsers] = useState([]);
  const users = [];
  const loadUsers = async () => {

    const result = await axios.get("http://localhost:8092/usr/RewardsProgram/v1/100010/getReedemHistory");

    bal = result.data[0].balancePoint;
    email = result.data[0].emailId;
    status = result.data[0].status;
    mobile = result.data[0].mobileNumber;

    bal1 = result.data[0].historyBeans[0].availBalanceBeforeRedeem;
    bal2 = result.data[0].historyBeans[1].availBalanceBeforeRedeem;
    bal3 = result.data[0].historyBeans[2].availBalanceBeforeRedeem;
    bal4 = result.data[0].historyBeans[3].availBalanceBeforeRedeem;
    bal5 = result.data[0].historyBeans[4].availBalanceBeforeRedeem;


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
  const UserData = [
    {
      id: 1,
      year: "2022-05-09",
      userGain: bal1,
      userLost: 823,
    },
    {
      id: 2,
      year: "2022-04-09",
      userGain: bal2,
      userLost: 345,
    },
    {
      id: 3,
      year: "2022-04-07",
      userGain: bal3,
      userLost: 555,
    },
    {
      id: 4,
      year: "2022-04-06",
      userGain: bal4,
      userLost: 4555,
    },
    {
      id: 5,
      year: "2022-04-05",
      userGain: bal5,
      userLost: 234,
    },
  ];

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [

      {
        label: "Available Balance Before Redeem",
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        data: UserData.map((data) => data.userGain),

      },

    ],
  });

  return (
    <div>
      <div >
        <Navigation status={true} />
      </div>
      <div className="site-card-wrapper">

        <Row gutter={10}>
          <Col >
            <SideNavbar />
          </Col>

          <Col style={{
            width: '82%', paddingTop: '1%'
          }}>
            <Card bordered={true} style={{ width: '100%', border: '1px solid', }}>
              <Row gutter={150}>
                <Col style={{
                  width: '40%',
                  paddingTop: '2%',
                  border: '3px',
                }}>
                  <Card title="User Information" style={{ border: '1px solid ' }} bordered={true}>
                    <Row>
                      <Col span={10}>
                        Status : {status}
                      </Col>
                      <Col>
                        Email : {email}
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                    </Row>
                    <Row>
                      <Col span={10}>
                        Mobile : {mobile}
                      </Col>
                      <Col>
                        Balance : {bal}
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col style={{ paddingTop: '2%' }}>
                  <Card bordered={true} style={{
                    width: 400,
                    border: '1px solid ',
                  }}>
                    <Bar data={userData} />
                  </Card>
                </Col>
                <Col style={{ width: '100%', paddingTop: '5%' }}>
                  <table style={{ height: '90%', width: '100%' }} border="0" id="maintable">
                    <tr bgcolor="#1E90FF" width="100%" >
                      <h2>
                        <font color="white"> <center>Earned Point History</center></font>
                      </h2>
                    </tr>
                    <tr width="100%"><br></br></tr>
                    <tr>
                      <td>
                        {/*<table class="ui inverted blue table" width="50%">*/}

                        <div> <center>
                          <Table pagination={false} style={{ height: '300px', width: '90%' }} id="customers" dataSource={users1} columns={columns} /></center>

                        </div>

                        <br />
                      </td></tr>
                  </table>
                  <Col style={{paddingTop:'2%'}}>
                    <center>
                    <Button className='mx-3' onClick={(e) => download(e)} type="primary" icon={<DownloadOutlined />}>
                      Download
                    </Button>
                    <Button type="primary" icon={<DownloadOutlined />}>Print</Button>
                    </center>
                  </Col>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <Footer />
      </div>
    </div >
  )
}

export default ViewTransactions