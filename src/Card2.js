import React from 'react';
import woman from './assets/excited-amazing-young-african-woman-standing-isolated.jpg';
import video from './assets/icons8-video-24.png';
import time from './assets/icons8-time-48.png';
import star from './assets/icons8-star-30.png';

const Card2 = () => {  
  return (





    <div className="cont">
      <div className="cont-pic">
        <img src={woman} height="50px" width="50px"  />
        <div className="text">
          <h4>Lilly Donovan</h4>
          <p>Business Trainer</p>
        </div>
      </div>
      <h4>How to properly manage your personal budget?</h4>
      <div className="cont-icon">
        <div className="vid">
          <img src={video} height="15x" width="15px" />
          <p>Video</p>
        </div>
        <div className="time">
          <img src={time} height="15x" width="15px" />
          <p>15 minutes</p>
        </div>
        <div className="star">
          <img src={star} height="15x" width="15px" />
          <p>12 likes</p>
        </div>
      </div>
      <div className="cont-btn">
        <p>5 days ago</p>
        <button>Connect  &gt;</button>
      </div>
    </div>
  );
};

export default Card2;
