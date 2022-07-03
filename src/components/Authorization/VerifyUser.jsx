import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SubNav from './SubNav';

export class VerifyUser extends Component {
  render() {
    return (
        <div>
          <Row>
            <Col span={24}><Navigation /></Col>
          </Row>
          <SubNav/>

          <Footer />
        </div>
    )
  }
}

export default VerifyUser;