import React from 'react';

const Navbar = () => {
  const menuItems = ['Inicio', 'Quienes', 'Cursos', 'Situación', 'Contacto'];

  return (
    <nav className="navbar navbar-expand-lg mb-4">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {menuItems.map(item => (
              <li key={item} className="nav-item">
                <a className="nav-link" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
