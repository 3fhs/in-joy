import React from 'react';
import "./buttonInBunner.css";

function ButtonInBunner({icon,name,color = '#ffffff',bgColor = '#ff3700'}) {
  return (
    <button className='mainBtn' style={{background: bgColor, color: color}}>{icon}  {name}</button>
  )
}

export default ButtonInBunner