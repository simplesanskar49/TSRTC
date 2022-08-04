import React from "react";
import zaggle_logo from "./zaggle_logo.png";
import "../css/footer.css";
import { Tooltip } from 'antd';
import { Layout, Image, Col, Row, View } from 'antd'
import StyledNavigation from './StyledComponents/StyledNavigation';
const { Header, Footer, Sider, Content } = Layout;
const Foot = () => {
  return (
    <div>
        <StyledNavigation>
            <Footer className="ftr">
                <div id="footer">
                    <Row justify="center">
                        <Col justify="center" span={68}>
                            <div className="left">
                                <a href="/oprs-web/home/faq.do" title="FAQs">FAQs</a> |
                                <a href="/oprs-web/home/privacy.do" title="Privacy Policy">Privacy Policy</a> |
                                <a href="/oprs-web/home/terms.do" title="Terms &amp; Conditions">Terms &amp; Conditions</a> |

                                <a href="/oprs-web/home/contactus.do" title="Contact Us">Contact Us</a> |

                                <a href="/oprs-web/home/aboutus.do" title="About Us">About Us</a><br></br>

                                &nbsp;Version 5.2.3 | Copyright © 2011 tsrtconline.in, All rights reserved.
                            </div>
                        </Col>
                        <Col justify="center" span={5} offset={3}>
                            <div >
                                <div >
                                    Follow us on:
                                </div>
                                <div className="fb_image" onClick="window.open('http://www.facebook.com/TSRTCHQ');return false;" title="TSRTC on Facebook">
                                </div>
                                <div className="twtr_image" onClick="window.open('http://twitter.com/TSRTCHQ'); return false;" title="TSRTC on Twitter">
                                </div>
                            </div>
                        </Col>
                        <Col justify="center" span={8}>
                            <div className="right">
                                <div className="poweredByCSS" style={{ textAlign: 'right' }}>
                                    Our Official website - <a href="https://www.tsrtc.telangana.gov.in/" target="_blank">www.tsrtc.telangana.gov.in</a>
                                </div>
                                <div className="poweredByCSS" style={{ textAlign: 'right' }}>
                                    Our Parcel &amp; Cargo website - <a href="https://www.tsrtcparcel.in" target="_blank">www.tsrtcparcel.in</a>
                                </div>
                                <div className="poweredByCSS" style={{ textAlign: 'right' }}>
                                    Our Buspass website - <a href="https://online.tsrtcpass.in" target="_blank">online.tsrtcpass.in</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Footer>
            </StyledNavigation>
        </div>

  );
};

export default Foot;
