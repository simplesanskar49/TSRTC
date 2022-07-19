
import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import LoginImage from './components/LoginImage';
import {Routes, Route} from 'react-router-dom'
import AdminHome from './components/AdminHome';
import AppRoutes from './AppRoutes';
import 'antd/dist/antd.css';
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div>
      <AppRoutes />
      </div>
  );
}

export default App;
reportWebVitals();
