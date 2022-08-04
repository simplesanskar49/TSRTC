import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import StyledNavigation from './StyledComponents/StyledNavigation';
import DateTime from './Datecomponent';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nav() {
    return (
        <StyledNavigation>
            <Row type="flex" align="middle" justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="text-center">
                    <img src="https://static.abhibus.com/ap_tg/ts/oprs-web/_assets/images/new/logo.png" alt="tg" className="padding-1" />
                </Col>
            </Row>
            <Row type="flex" align="middle" justify="center" gutter={12} className="nav-bg">
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    {/* <nav>
                        <ul className="nav-ul">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/create-user">Create User</Link></li>
                            <li><Link to="/fetch-balance">Balance</Link></li>
                            <li><Link to="/">Reports</Link></li>
                            <li><Link to="/">Logout</Link></li>
                        </ul>
                    </nav> */}
                    <NavDropdown title="User" >
                        <NavDropdown.Item >
                            <Link to='/create-user'>Create User</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item > 
                            <Link to='/view-user'>View User</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ textAlign: 'right' }}>
                    {/* <Button></Button> */}
                    <DateTime />
                </Col>
            </Row>
        </StyledNavigation>
    );

}

export default Nav