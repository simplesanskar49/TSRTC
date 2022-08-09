import React, { useEffect, useState,   useRef } from 'react';
import { Row, Col, Descriptions, Button } from 'antd';
import SideNavbar from "./SideNavbar";
import FileDownload from 'js-file-download';
import Nav from "./Nav";
import "../css/fetch.css";
import { DownloadOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import "../components/viewUser.css";
import { Table } from 'antd';
import axios, { Axios } from "axios";
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';



var bal = "80000";
var status = ""
var email = ""
var mobile = ""

var bal1 = "1160";
var bal2 = "1230";
var bal3 = "900";
var bal4 = "400";
var bal5 = "1400";

const App = () => (
  <Descriptions title="User Information:-" layout="horizontal" width="70%" >

    <Descriptions.Item span="1" label="Status">{status}</Descriptions.Item>

    <Descriptions.Item span="2" label="Email">{email}</Descriptions.Item>

    <Descriptions.Item span="2" label="Mobile">{mobile}</Descriptions.Item>

    <Descriptions.Item span="1" label="Balance">{bal}</Descriptions.Item>

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

  const download = (e) => {
    e.preventDefault();
    axios({
      url: "/",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "download.pdf")
    })
  }
  const location = useLocation();
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
  const valu = bal5;

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
  console.log(bal5);
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <div >
          <Row type="flex" align="left" justify="start" border="2">
            
            <Col  xs={6} sm={6} md={6} lg={6} xl={6} align="right" >
              <App />  
            </Col>
            
            <Col xs={12} sm={6} md={6} lg={6} xl={6} align="right">
              <br></br>
              <div className="App">
                <div style={{ width: 400 }}>
                  <Bar data={userData} />

                </div>
              </div>
            </Col>



            <Col offset={5} xs={24} sm={24} md={17} lg={17} xl={17} >
              <div className='my-4'>
                <table style={{ height: '350px', width: '100%' }} border="0" id="maintable">
                  <tr bgcolor="#1E90FF" width="100%" >
                    <h2>
                      <font color="white"> <center>Burn/Reward Point History</center></font>
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
                    </td></tr></table>
              </div>
              <br />

              <br />
              <div >
                <div >

                  <center>
                    <Button className='mx-3' onClick={(e) => download(e)} type="primary" icon={<DownloadOutlined />}>
                      Download
                    </Button>
                    <Button type="primary" icon={<DownloadOutlined />}>Print</Button>
                   
                    
                  </center>
                </div>
              </div>

            </Col>
          
          </Row>


        </div>

        <div className="footerBottom">
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default RewardHistory;