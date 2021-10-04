import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 834) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/triada-logo.png" alt="Cetav Logo"></img>
            <p>Bolsa de empleo</p>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <img src="/images/home.png" alt="Home Logo"></img>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <img src="/images/card_travel.png" alt="Jobs Logo"></img>
                Puestos Disponibles
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <img src="/images/ic_baseline-post-add.png" alt="Jobs Logo"></img>
                Publicar Puestos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
