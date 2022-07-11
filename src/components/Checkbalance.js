import React,{useEffect,useState}from 'react';
import {Row, Col, Form,Button} from 'antd';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";
import {useLocation} from 'react-router-dom';
import { Pagination } from 'antd';
import Footer from './Footer';
import "../components/viewUser.css";
import {Table} from 'antd';
import axios from "axios"
import { PropertySafetyFilled } from '@ant-design/icons';


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
  
    // console.log(this.props.location.state.employee);
    //     // Simple POST request with a JSON body using fetch
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ "email": email, "mobileNumber":phone})
    //     };
    //     fetch('http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance', requestOptions)
    //         .then(response => response.json())
    //         .then(data => this.setState({ email: data.email ,lastUpdateDateTime:data.lastUpdateDateTime}));


    const [users1, setUsers] = useState([]);    
    const users = [];
    const loadUsers = async () => {

      const result = await axios.get("http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance");
      
      for(var i=0;i<result.data.length;i++){        
        if(result.data[i].email === location.state.values.email ){
          
          users.push(result.data[i]);          
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
                    <Table style={{ height: '250px', width:'90%' }} id="customers" dataSource={users1} columns={columns} /></center>
                    
                    </div>
                    
                    <br />
                    </td></tr></table>
                    
                    </Col>
                </Row></div>

            <div className="footerBottom">
                <Footer />
            </div>
        </div>
    );
}

export default Balance;