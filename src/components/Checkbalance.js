import React from 'react';
import {Row, Col, Form} from 'antd';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";
import { Pagination } from 'antd';
import Footer from './Footer';
import "../components/viewUser.css";

import axios from "axios"
import { PropertySafetyFilled } from '@ant-design/icons';



function Balance(email, phone) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": email, "mobileNumber":phone})
        };
        fetch('http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ email: data.email ,lastUpdateDateTime:data.lastUpdateDateTime}));




    /*console.log(axios.get("http://localhost:8080/usr/RewardsProgram/v1/100010/getBalance"))*/

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
                        {/* <Form className='xyz'>
                            <h2 className='abcd'><center>User Details</center></h2>
                            <hr className='line'></hr>
                            <table class="ui inverted blue table">
                            <thead>
                                <tr><th>Email</th>
                                    <th>Phone</th>
                                    <th>Balance</th>
                                </tr></thead><tbody>
                                <tr>
                                    <td>xyz@gmail.com</td>
                                    <td>8978798824</td>
                                    <td>10000</td>
                                </tr>
                               
                            </tbody>
                        </table> 
                        </Form> */}
                        <br></br>
                    <table width="100%" border="0" id="maintable">
                        <tr bgcolor="#1E90FF" width="100%" >
                            <h1>
                               <font color="white"> <center>Details</center></font>
                            </h1>
                        </tr>
                        <tr width="100%"><br></br></tr>
                        <tr>
                         <td>                        
                       <table id="customers">
                        <thead>
                            <tr><th>Email</th>
                                <th>Phone</th>
                                <th>Balance</th>
                            </tr></thead><tbody>
                            <tr>
                                <td>props.email</td>
                                <td>props.phone</td>
                                <td>props.bal</td>
                            </tr>
                            
                        </tbody>
                    </table></td></tr></table><br>
                    </br>
                    
                    </Col>
                </Row></div>

            <div className="footerBottom">
                <Footer />
            </div>
        </div>
    );
}

export default Balance;