import React from 'react';
import "./navLinks.css";

function NavLinks({nav, navOnClick}) {
  return (
    <li>
        <a key={nav._id} href={nav.link} onClick={() => {navOnClick(nav._id)}}
          className={`${nav.active ? 'active' : ''}`} >
            {nav.name}
        </a>
    </li>
  )
}

export default NavLinks;