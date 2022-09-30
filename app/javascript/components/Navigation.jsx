import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink exact="true" className="nav-link"  to="/">Home</NavLink>
      </li>

      <li className="nav-item">
        <NavLink exact="true" className="nav-link" to="/sentences">Sentences</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
