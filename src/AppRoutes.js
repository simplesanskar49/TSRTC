import React from 'react'
import ROUTE_PATHS from './constant';
import {Routes, Route} from 'react-router-dom'


function AppRoutes() {
  return (
       <Routes>
          {ROUTE_PATHS.routes.map((items, index) => (
            <Route key={index} path={items.path} element={items.component}/>
          ))}   
        </Routes> 
  )
}

export default AppRoutes;