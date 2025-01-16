import React from 'react';
import SearchBar from './SearchBar';
import '../css/NavBar.css';

const NavBar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <h1>Google Book Shelf</h1>
      </div>
      <div className="navbar-right">
        <SearchBar onSearch={onSearch} /> 
      </div>
    </nav>
  );
};

export default NavBar;