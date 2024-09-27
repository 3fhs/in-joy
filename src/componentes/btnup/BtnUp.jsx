import React from 'react';
import './btnup.css';

function BtnUp({scroll}) {
    const up = () => {
        window.scrollTo(0,0);
    }
  return (
    <button className={`up ${scroll > 100 ? 'active' : undefined}`} onClick={up}>
         <h1>UP</h1> 
    </button>
  )
}

export default BtnUp