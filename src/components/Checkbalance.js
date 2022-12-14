import React,{useEffect,useState}from 'react';
import {Row, Col, Form,Button} from 'antd';
import SideNavbar from "./SideNavbar";
import Nav from './Nav';
import "../css/fetch.css";
import {useLocation} from 'react-router-dom';
import { Pagination } from 'antd';
import Footer from './Footer';
import "../components/viewUser.css";
import {Table} from 'antd';
import axios from "axios"



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
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'bal',
    },
  ];

function Balance() {
  const location = useLocation();
    const [users1, setUsers] = useState([]);    
    const users = [];
    const loadUsers = async () => {

      const result = await axios.get("http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance");
      
      for(var i=0;i<result.data.length;i++){        
       // if(result.data[i].email === location.state.values.email ){
          
          users.push(result.data[i]);          
        
      }      
      setUsers(users);
    }
    
    useEffect(() => {
      
      loadUsers()
      
    }, [])
  

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
            <Row type="flex" align="middle" justify="center" style={{ height: '100vh' }}>
            <Col xs={20} sm={20} md={20} lg={20} xl={20} >                    
                    <table   style={{ height: '250px' }}  border="0" id="maintable">
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
                    <Table pagination={false} style={{ height: '250px', width:'90%' }} id="customers" dataSource={users1} columns={columns} /></center>
                    
                    </div>
                    
                    <br />
                    </td></tr></table>
                    
                    </Col>
                   
                </Row></div>

            <div >
                <Footer />
            </div>
        </div>
    );
}

export default Balance;