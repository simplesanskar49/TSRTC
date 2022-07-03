import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import SideNavbar from './SideNavbar'
import "../index.css";
function AdminHome() {
  return (
    
    
    <div className="home">
        <Navigation status={true}/>
        <SideNavbar />
        <div className="footerBottom">
          <Footer />
        </div>  
    </div>
  )
}

export default AdminHome