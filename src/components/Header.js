import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">🎮 Do Gamers Be</Link>
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/checkout">Checkout</Link>
        <Link className="nav-link position-relative" to="#">
          🛒
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartCount}
          </span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;