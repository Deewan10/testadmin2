import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';
import user from './assets/Group 9.png'
import logo from './assets/Group 4.png'


function Header() {
  return (
    <header className="header">
      <div className="logo2">
        <img src={logo} alt="Logo" height="30px" width="30px" />
      </div>
      <div className="search-bar">
       <FiSearch style={{ color: '#3326AE' }}/>
        <input type="text" placeholder="Search" />
        
      </div>
      <ul className="header-links">
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <div className='noti'>
        <FiBell />
        <img src={user} height="40px" alt='' />
      </div>
      

    </header>
  );
}

export default Header;
