import React, { useState} from 'react';
import "../css/navigation.css";
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import DateTime from './Datecomponent';
function Navigation (props){
  const navigate = useNavigate();
  return (    
    <nav className="navbar">
       <h1 className="navbarTitle">Rewards CMS Portal</h1>
    </nav>  
    
  )
}

export default Navigation

