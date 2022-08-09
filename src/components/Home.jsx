import React, { Component } from "react";
import image from "./image3.jpg";
import NewSlider from "./NewSlider";
import Login from "./Login";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../css/home.css";
import { Layout, Image, View } from 'antd'
import { Col, Row } from 'antd';
const { Header} = Layout;
export class Home extends Component 
{
  render() {
    return (
      <div className="home">
        <div>
          <Row>
            <Col span={24}>
            <Layout>
                <Header style={{ backgroundColor: "white" }}>
                <Row>
                    <Col span={12} offset={9}>
                        <img
                                    src="https://static.abhibus.com/ap_tg/ts/oprs-web/_assets/images/new/logo.png"
                                    alt="LOGO"
                                    style={{ height: "73px", width: "408px", paddingTop: "10px", paddingBottom: "10px" }}
                                />
                    </Col>
                </Row>
                </Header>
                </Layout>
            </Col>
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
       
        </div>
        </div>
 );
}
}

export default Home;
