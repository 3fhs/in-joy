import React from 'react';
import NavLinks from '../../componentes/headerSlice/NavLinks';
import navLinksData from '../../data/navLinksData';
import "./header.css";
import Search from '../../componentes/headerSlice/Search';

function Header() {
  return (
    <header>
        <a href='/' className='logo'>
            In-Joy
        </a>
        <ul className='nav'>
            {navLinksData.map(nav => 
                <NavLinks nav={nav} />
            )}
        </ul>
        <Search/>
    </header>
  )
}

export default Header