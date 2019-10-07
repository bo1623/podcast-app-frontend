import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink style={{padding: '12px'}} to='/podcasts'>Podcasts</NavLink>
    </div>
  );
};

export default NavBar;
