import React, { useState } from 'react';
import Cards from './Card';
import Card2 from './Card2.js';
import BarChart from './BarChart';
import Circle from './Circle.js';
import MyCard from './MyCard.js';
import AtmCard1 from './DebitCard.js';
import taxi from './assets/icons8-finish-flag-25.png';
import shopping from './assets/icons8-shopping-bag-50.png';
import netflix from './assets/icons8-netflix-30.png';

function Main() {
  const [activeTab, setActiveTab] = useState('main-left');
  const isMobile = window.innerWidth <= 508; 

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="main">
      {isMobile && (
        <div className="tab-buttons">
          <button onClick={() => switchTab('main-left')} className={activeTab === 'main-left' ? 'active' : ''}>Main Left</button>
          <button onClick={() => switchTab('tabb')} className={activeTab === 'tabb' ? 'active' : ''}>Main Right</button>
        </div>
      )}

      <div className={activeTab === 'main-left' ? 'main-left' : 'hidden'}>
        <Cards/>
        <BarChart/>
        <Card2 />
      </div>

      <div className="main-right">
        <div className={activeTab === 'tabb' ? 'tabb' : 'hidden'}>
          <Circle />
          <MyCard />
          <AtmCard1 />
          <div className="transaction">
            <p>Transaction</p>
            <h4>+</h4>
          </div>
          <div className="details">
            <div className="item">
             <div className="pix">
                <img src={taxi} height="30px" width="30px" alt='' />
              </div>
              <div className="txt3">
                <h4>Taxi</h4>
                <p>01:22PM</p>
              </div>
              <h3>-$9,20</h3>
            </div>
            <div className="item">
              <div className="pix">
                <img src={shopping} height="30px" width="30px" alt='' />
              </div>
              <div className="txt3">
                <h4>Shopping</h4>
                <p>11:15AM</p>
              </div>
              <h3>-$142.00</h3>
            </div>
            <div className="item">
              <div className="pix">
                <img src={netflix} height="30px" width="30px" alt='' />
              </div>
              <div className="txt3">
                <h4>Netflix</h4>
                <p>Jan 10, 2020.</p>
              </div>
              <h3>-$24.99</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
