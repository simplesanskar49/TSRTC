import React, { Component } from 'react'
import StyledNavigation from '../StyledComponents/StyledNavigation';
import imgMain from './images/mainLogo.png'
import { Row, Col, Button } from 'antd';
function Four() {
  
    return (
        <StyledNavigation>
            <Row type="flex" align="middle" justify="center">
                {/* className="text-center" */}
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{backgroundColor:"#e6fff5" ,textAlign:"left"}}>
                    <img style={{width: "20%", height: "10%"}} src={imgMain} alt="tg"  />
                </Col>
                
                    <h2>*Welcome to Pushpak Prepaid Card System*</h2>
                
            </Row>
        </StyledNavigation>
      );
  
};

export default Four;