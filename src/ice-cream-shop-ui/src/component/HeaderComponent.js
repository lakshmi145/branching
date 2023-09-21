import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const HeaderComponent = () => {
  return (
  <div>
      <header>
          <nav className='header'>
            <div>
            <HomeIcon fontSize='large' color='primary' />
            <Link to='/homepage'><strong>Home</strong></Link>
            </div>
          </nav>
      </header>
  </div>
  )}

export default HeaderComponent;
