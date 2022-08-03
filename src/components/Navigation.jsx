import React from 'react';
import { Layout,Col, Row, Button} from 'antd'


import { useNavigate } from 'react-router-dom';
import SideNavbar from './SideNavbar';
const { Header, Footer, Sider, Content } = Layout;
function Navigation(props) {
    const navigate = useNavigate();
    return (
        <div >
             <Row type="flex" align="middle" justify="center">
                <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                <img
                                    src="https://static.abhibus.com/ap_tg/ts/oprs-web/_assets/images/new/logo.png"
                                    alt="LOGO"
                                    style={{ height: "73px", width: "408px", paddingTop: "10px", paddingBottom: "10px" }}
                                />
                </Col>                
            </Row>
            <Row type="flex" align="middle" justify="center" style={{backgroundColor: "#19bc9c", height: "50px"}}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <SideNavbar/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button >Submit</Button>
                </Col>
            </Row>
            {/* <Layout>
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
            
                <SideNavbar />
                {/* <Header style={{ backgroundColor: "#19bc9c" , height:"25px"}}>


                </Header> */}
            
        </div>


    )
}

export default Navigation

