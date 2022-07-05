import React, { Component } from "react";
import image from "./image3.png";
import NewSlider from "./NewSlider";
import Login from "./Login";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../css/home.css";
import { Col, Row } from 'antd';
export class Home extends Component 
{
  render() {
    return (
      <div className="home">
        <div>
          <Row>
            <Col span={24}><Navigation /></Col>
          </Row>
          <Row>
         
            {/* <Col span={12} align='center'><div><NewSlider /></div></Col> */}
            <Col span={12} align="center">
              <img style={{width: "140%", height: "120%"}} src={image} alt="image 3" />
            </Col> 
            <Col  style={{paddingTop: "80px"}} span={12} ><div className="login" ><Login /></div></Col>
          </Row>
          
        </div>
        <div className="home">
        <Row>
      <Footer />
        </Row>
        </div>
        </div>
 );
}
}

export default Home;
