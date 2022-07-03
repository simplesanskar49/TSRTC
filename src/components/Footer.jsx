import React from "react";
import zaggle_logo from "./zaggle_logo.png";
import "../css/footer.css";
import { Tooltip } from 'antd';

const Footer = () => {
  return (
    <div className="footerBottom" >
      <Tooltip title="https://zaggle.in" placement="topRight">
        <span>
        <b><a href="https://zaggle.in" target="_blank"><p>© Zaggle 2022 | All rights reserved.</p></a></b>
        </span>
 
      </Tooltip>
      </div>

  );
};

export default Footer;
