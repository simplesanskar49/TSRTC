import { BankOutlined,UserOutlined, TransactionOutlined, AuditOutlined,PlusOutlined,SearchOutlined,UsergroupAddOutlined, EyeOutlined,HistoryOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import "../css/sideNavbar.css"
import {useNavigate } from "react-router-dom";
import 'antd/dist/antd.css'; 

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label,
    path
  };
}

const SideNavbar = () => {
  const navigate=useNavigate();
  const items = [
    
    getItem('User Manager', 'sub2',<UserOutlined />, [
      getItem('Create User', '5',<PlusOutlined />),
      getItem('View User', '6',<UserOutlined />),
      getItem('Create Group','7',<UsergroupAddOutlined />),
      getItem('View Group','8', <EyeOutlined />)
    ]),
    getItem('Balance', 'sub1', <BankOutlined/>, [
      getItem('Check Balance', 'g1',<PlusOutlined />),
      getItem('Redeemed Points', 'g2',<EyeOutlined />),
      getItem('Redeemed History', 'g3',<EyeOutlined />),
    ]),
    getItem('Reports', 'sub4', <TransactionOutlined />, [
      getItem('View Transactions', '9',<EyeOutlined />),
      getItem('Search By Date', '10',<SearchOutlined />),
      getItem('View/Display History Report', '11', <HistoryOutlined />), 
    ]),
    getItem('Audit Trail', 'sub5',<AuditOutlined />, [
      getItem('Search By Date', '12', <SearchOutlined />)
    ]),
    getItem('Logout', 'sub6',<UserOutlined />, [
      getItem('Logout', '13', <UserOutlined />)
    ])
  ];
  const onClick = (e) => {

    console.log(e.key);

    switch(e.key){
      case 'g1':
        navigate('/fetchbalance');
        break;
        
    
      case 'g2':
        navigate('/bank/view');
        break;
    
      case '5':
        navigate('/user/create');
        break;
    
      case '6':
        navigate('/Viewuser');
        break;
    
      case '7':
        navigate('/group/create');
        break;
    
      case '8':
        navigate('/group/view');
        break;
      case '9':
        navigate('/reports/transactions/view');
        break;
      case '10':
        navigate('/reports/searchByDate');
        break;
      case '11':
        navigate('/reports/history');
        break;
      case '12':
        navigate('/audit/searchByDate');
        break;
      case '13':
        navigate('/');
        break;
    }
  };

  return (
    <div className='kuchvi'>
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      
    />
    </div>
  );
}


export default SideNavbar ;