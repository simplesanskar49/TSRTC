import React from 'react';
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";

import "../css/fetch.css";
import DateTime from "./Datecomponent";

import Footer from './Footer';

function Updateuser(){
    return(
        <div className="createUser">
           
        <div>
        <Navigation status={true} />
        </div>
        <div></div>
        <div  width="60%" align="center">  <br></br><DateTime /></div>
        <div>
            <SideNavbar />
        </div>
        <div>Hi</div>
        <Footer />
        </div>
        
    );
} 
export default Updateuser;