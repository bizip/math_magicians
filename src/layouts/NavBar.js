import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavBar = () => (
  <nav>
    <h1>Math magicians</h1>
    <ul className="nav-links">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'deactive')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Calculator"
          className={({ isActive }) => (isActive ? 'active' : 'deactive')}
        >
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/quotes"
          className={({ isActive }) => (isActive ? 'active' : 'deactive')}
        >
          Quotes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
