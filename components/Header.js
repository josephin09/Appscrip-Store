import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

export default function Header() {
  const [language, setLanguage] = useState('ENG'); 
  const [navbarOpen, setNavbarOpen] = useState(false); 
  const ref = useRef(); 

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setNavbarOpen((prev) => !prev); // Toggle the navbar state
  };

  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false); 
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler); 
    };
  }, [navbarOpen]);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="logotxt">LOGO</h1>
        </div>

        <button className="toggle" onClick={toggleMenu}>
          {navbarOpen ? (
            <MdClose style={{ width: '32px', height: '32px' }} />
          ) : (
            <FiMenu style={{ width: '32px', height: '32px' }} />
          )}
        </button>

        <nav ref={ref} className={`nav ${navbarOpen ? 'nav-open' : ''}`}>
          <h3>SHOP</h3>
          <h3>SKILLS</h3>
          <h3>STORIES</h3>
          <h3>ABOUT</h3>
          <h3>CONTACT US</h3>
        </nav>

        <div className="icons">
          <Image src="/assets/search-normal.png" alt="Search" width={24} height={24} />
          <Image src="/assets/heart.png" alt="Like" width={24} height={24} />
          <Image src="/assets/shopping-bag.png" alt="Cart" width={24} height={24} />
          <Image src="/assets/profile.png" alt="Profile" width={24} height={24} />

          <div className="language-dropdown">
            <select value={language} onChange={handleChange}>
              <option value="ENG">English</option>
              <option value="TAM">Tamil</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}


