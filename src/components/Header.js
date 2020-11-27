import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='app-header'>
      <h2>Lorem ipsum dolor sit amet.</h2>

      <ul>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
