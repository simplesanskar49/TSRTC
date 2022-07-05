import React from 'react';
import {Row, Col } from 'antd';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";
import Footer from './Footer';
import { Pagination } from 'antd';

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
                        <table class="ui inverted blue table">
                            <thead>
                                <tr align="center"><th colspan='3'><h2 className='efgh'>Details</h2></th></tr>
                                <tr><th>Email</th>
                                    <th>Phone</th>
                                    <th>Balance</th>
                                </tr></thead><tbody>
                                <tr>
                                    <td>xyz@gmail.com</td>
                                    <td>8978798824</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <td>xyz@gmail.com</td>
                                    <td>8978798824</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <td>xyz@gmail.com</td>
                                    <td>8978798824</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <td>xyz@gmail.com</td>
                                    <td>8978798824</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <td>xyz@gmail.com</td>
                                    <td>8978798824</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <td>yyy@gmail.com</td>
                                    <td>9603428404</td>
                                    <td>500</td>
                                </tr>
                            </tbody>
                        </table> 
                        <center><Pagination defaultCurrent={1} total={50} /></center>;
                    </Col>
                </Row></div>

            <div className="footerBottom">
                <Footer />
            </div>
        </div>
    );
}

export default Balance;