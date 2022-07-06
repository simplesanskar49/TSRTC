import React from 'react';
import {Row, Col, Form} from 'antd';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";
import Footer from './Footer';

function Balance() {
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
                        <Form className='xyz'>
                            <h2><center>User details</center></h2>
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
                        </Form>
                    </Col>
                </Row></div>

            <div className="footerBottom">
                <Footer />
            </div>
        </div>
    );
}

export default Balance;