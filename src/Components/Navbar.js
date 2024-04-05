import React from 'react';

function Navbar() {
  return (
    <div className='Nav'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Note">Note</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;