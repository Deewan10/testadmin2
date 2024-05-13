import React from 'react';
import visitorsIcon from './assets/Group 5.png';
import customersIcon from './assets/Group 6 (1).png';
import ordersIcon from './assets/Group 7.png';

function Cards() {
  return (
    <div className="cards">
      <div className="card1">
        <div className="pic">
          <img src={visitorsIcon} height="40px" width="80px" alt="Visitors Icon" />
        </div>
        <div className="txt1">
          <h5>VISITORS</h5>
          <h3>10,320</h3>
        </div>
      </div>

      <div className="card1">
        <div className="pic">
          <img src={customersIcon} height="40px" width="80px" alt="Customers Icon" />
        </div>
        <div className="txt">
          <h5>CUSTOMERS</h5>
          <h3>4,628</h3>
        </div>
      </div>

      <div className="card1 red">
        <div className="pic">
          <img src={ordersIcon} height="40px" width="80px" alt="Orders Icon" />
        </div>
        <div className="txt">
          <h5>ORDERS</h5>
          <h3>2,980</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
