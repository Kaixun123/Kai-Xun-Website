import React from 'react';
import { Link } from 'react-scroll'; // Assuming you'll use react-scroll for smooth scrolling
import './header.css';
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
      const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if (window.pageYOffset > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <nav className="navbar">
    
      <ul className="nav-list">
        <li className="nav-item">
          <Link
            to="section1"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset if needed to account for fixed header
            duration={500}
          >
          <div className="me-container gap-1">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            <p>About Me</p>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          <div className="me-container gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
          </svg>
            <p>Achievements</p>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="me-container gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
              <p>Contact</p>
            </div>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
