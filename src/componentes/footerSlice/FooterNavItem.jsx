import React from 'react';
import './footerSlice.css';

function FooterNavItem({name}) {
  return (
    <li>
        <ion-icon name="redo"></ion-icon>{''}
        <button>{name}</button>
    </li>
  )
}

export default FooterNavItem