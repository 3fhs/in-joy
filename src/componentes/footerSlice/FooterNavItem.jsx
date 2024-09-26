import React from 'react';
import './footerSlice.css';

function FooterNavItem({name}) {
  return (
    <li>
        <ion-icon name="redo"></ion-icon>{''}
        <a href="#">{name}</a>
    </li>
  )
}

export default FooterNavItem