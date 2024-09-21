import React from 'react';
import "./navLinks.css";

function NavLinks({nav}) {
  return (
    <li key={nav._id}>
        <a href={nav.link}>{nav.name}</a>
    </li>
  )
}

export default NavLinks