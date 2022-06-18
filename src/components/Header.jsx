import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => (
  <header className="navbar">
    <h1 className="logo">Bookstore CMS</h1>
    <nav className="nav-items">
      <Link to="/" className="nav-item">
        Books
      </Link>
      <Link to="/categories" className="nav-item">
        Categories
      </Link>
    </nav>
    <span><FaRegUserCircle /></span>
  </header>
);

export default Header;
