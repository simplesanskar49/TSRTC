import React from 'react'
import Navigation from './components/Navigation';
import Login from './components/Login';
import LoginImage from './components/LoginImage';
import {Routes, Route} from 'react-router-dom'
import AdminHome from './components/AdminHome';
import CreateBank from './components/CreateBank';
import CreateGroup from './components/CreateGroup';
import ViewBank from './components/ViewBank';
import ViewGroup from './components/ViewGroup';
import ViewTransactions from './components/ViewTransactions';
import SearchByDate from './components/SearchByDate';
import FetchHistory from './components/FetchHistory';
import SearchAuditByDate from './components/SearchAuditByDate';
import CreateUser from './components/CreateUser';
import Home from './components/Home';
import Logout from './components/Logout';

import Checkbalance from './components/Checkbalance';
import Viewuser from './components/Viewuser';
import Updateuser from './components/Updateuser';
import Fetchbalance from './components/Fetchbalance';
import Forgotpassword from './components/Forgotpassword';
import RewardHistory from './components/RewardHistory';

function AppRoutes() {
  return (
    <>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<AdminHome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/bank/create'  element={<CreateBank/>}/>
            <Route path='/user/create' element={<CreateUser/>}/>
            <Route path='/bank/view' element={<ViewBank/>}/>        
            
            <Route path='/group/create' element={<CreateGroup/>}/>
            <Route path='/group/view' element={<ViewGroup/>}/>      
            <Route path='/reports/transactions/view' element={<ViewTransactions/>}/>
            <Route path='/reports/searchByDate' element={<SearchByDate/>}/>
            <Route path='/FetchHistory' element={<FetchHistory/>}/>
            <Route path='/audit/searchByDate' element={<SearchAuditByDate/>}/>
            <Route path='/Fetchbalance' element={<Fetchbalance />} />
            <Route path='/Checkbalance/' element={<Checkbalance />} />
            
            <Route path='/Viewuser' element={<Viewuser />} />
            <Route path='/Updateuser' element={<Updateuser />} />
            <Route path='/home' element={<Logout/>}/>
            <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
            <Route path='/RewardHistory/' element={<RewardHistory />} />
        </Routes> 
    </>
  )
}

export default AppRoutes;