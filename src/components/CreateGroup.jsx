import React from 'react'
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import {Row, Col } from 'antd';

const CreateGroup = () => {
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
                <center><label>Under Maintenance</label></center>
                </Col>
                </Row>
      </div>
    </div>
  )
}

export default CreateGroup