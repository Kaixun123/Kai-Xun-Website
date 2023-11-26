import React from 'react';
import { Link } from 'react-scroll'; // Assuming you'll use react-scroll for smooth scrolling
import './header.css';

const Navbar = () => {
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
            About Me
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
            Achievements
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
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
