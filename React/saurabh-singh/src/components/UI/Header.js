import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <nav className='blue lighten-2'>
      <div className='nav-wrapper container'>
        <Link to='/' className='brand-logo left'>
          {title}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
