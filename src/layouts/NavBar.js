import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavBar = () => (
  <nav>
    <h1>Math magicians</h1>
    <ul className="nav-links">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/Calculator">Calculator</NavLink></li>
      <li><NavLink to="/quotes">Quotes</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
