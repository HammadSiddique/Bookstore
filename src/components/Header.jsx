import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="logo">Bookstore</h1>
    <nav>
      <Link to="/" className="nav-item">
        Books
      </Link>
      <Link to="/categories" className="nav-item">
        Categories
      </Link>
    </nav>
  </header>
);

export default Header;
