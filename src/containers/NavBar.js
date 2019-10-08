import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink style={{padding: '12px'}} to='/'>Home</NavLink> //insert playlists here
      <NavLink style={{padding: '12px'}} to='/podcasts'>Podcasts</NavLink>
      <form className="login-form">
        <label>Username: </label>
          <input type="text" name="username" placeholder="Enter username" />
          <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default NavBar;
