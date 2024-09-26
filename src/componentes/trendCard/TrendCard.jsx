import React from 'react';
import './trendCart.css';

function TrendCard({slide}) {
  return (
    <div className='trend-card'>
        <img src={slide.poster} alt="this is poster film" className="img-fluid" />
        <a href="#">
            Add to calendar <ion-icon name="calendar-outline" style={{fontSize:"40px"}} ></ion-icon>
        </a>
    </div>
  )
}

export default TrendCard;