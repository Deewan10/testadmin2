import React from 'react';
import { FaHome, FaChartPie, FaComments, FaWallet } from 'react-icons/fa';
import logo from './assets/Group 4.png'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" height="30px" width="30px" />
      </div>
      <div className="icons">
        <div className="icon" id='home'><FaHome /></div>
        <div className="icon"><FaChartPie /></div>
        <div className="icon"><FaComments /></div>
        <div className="icon"><FaWallet /></div>
      </div>
    </div>
  );
}

export default Sidebar;
