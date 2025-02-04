import React from 'react';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="d-flex align-items-center mb-4">
      <h1 className="text-light col-lg-9">ZUBIRI MANTEO</h1>
      <div className="col-lg-3 ms-auto">
        <img src={logo} className="rounded-circle header-img" alt="Logo Zubiri Manteo" />
      </div>
    </header>
  );
};

export default Header;
