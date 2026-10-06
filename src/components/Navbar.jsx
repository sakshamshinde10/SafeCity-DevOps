import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="nav-brand">
          <span className="brand-icon">🛡️</span>
          <span>Safe<span className="brand-highlight">City</span></span>
        </NavLink>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/emergency" 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Emergency Services
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
