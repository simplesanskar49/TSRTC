import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import SideNavbar from './SideNavbar'
import "../index.css";
function AdminHome() {
  return (
    
    
    <div className="home">
        <Navigation status={true}/>
        
        <div className="footerBottom">
          HI 
          <Footer />
        </div>  
    </div>
  )
}

export default AdminHome