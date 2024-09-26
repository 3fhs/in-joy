import React from 'react';
import "./buttonInBunner.css";

function ButtonInBunner({icon,name,color = '#ffffff',bgColor = '#ff3700'}) {
  return (
    <a href='#' className='mainBtn' style={{background: bgColor, color: color}}>{icon}  {name}</a>
  )
}

export default ButtonInBunner