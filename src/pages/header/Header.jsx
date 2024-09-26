import React, { useState } from 'react';
import NavLinks from '../../componentes/headerSlice/NavLinks';
import navLinksData from '../../data/navLinksData';
import "./header.css";
import Search from '../../componentes/headerSlice/Search';
import ButtonInBunner from '../../componentes/buttonInBanner/ButtonInBunner';

function Header({scroll}) {

  const [navSelect, setNavSelect] = useState(navLinksData);
  const [openClip, setOpenClip] = useState(false);

  const handelSelect = id => {
    const newNav = navSelect.map(nav => {
      nav.active = false;
      if(nav._id === id) nav.active = true;
      return nav;
    })

    setNavSelect(newNav)
  }

  return (
    <header className={`${scroll > 100 ? 'scrolled' : ''}`}>
        <div className='in-sml'>
          <a href='/' className='logo'>
              In-Joy
          </a>
          <div className="open-list" onClick={() => setOpenClip(prev=> !prev)}>
            <ion-icon name="list"></ion-icon>
          </div>
        </div>
        <ul className='nav' style={{ clipPath: openClip ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "",
          }}>
            {navSelect.map(nav => 
                <NavLinks key={nav._id} nav={nav} navOnClick={handelSelect} />
            )}
        </ul>
        <div className='in-sm'>
          <Search/>
          <ButtonInBunner icon={<ion-icon name="log-in"></ion-icon>} name="Sign In"/>
        </div>
    </header>
  )
}

export default Header