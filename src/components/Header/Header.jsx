import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./Header.css"
import Logo from '../Logo/Logo';
import { AiOutlineSearch, AiOutlineSend} from 'react-icons/ai';

function Header() {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para mostrar u ocultar el modal de búsqueda
  const [showSearchModal, setShowSearchModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // Obtén la ubicación actual

  // Manejar el cambio en el término de búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Manejar el envío del formulario de búsqueda
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  // Alternar la visibilidad del modal de búsqueda
  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  }

  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='header-logo'>
          <Link to="/" className='no-underline'><Logo /></Link>
          <form onSubmit={handleSearchSubmit} className="header-search-form">
            <input
              className="header-search"
              type='text'
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar productos..."
            />
            <button type="submit" className='search-button'><AiOutlineSearch className='search-button-i'/></button>
          </form>
        </div>
        {!location.pathname.includes('/login') && ( // Verifica la ubicación actual
          <Link to="/login" className='login-link'>
            <button className='header-login'>LOGIN</button>
          </Link>
        )}
        <button className='header-search-mobile' onClick={toggleSearchModal}>
          <AiOutlineSearch />
        </button>
      </nav>

      {showSearchModal && (
        <div className="header-search-modal">
          <form onSubmit={handleSearchSubmit} className='form-modal'>
            <input
              className="header-search-modal-input"
              type='text'
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar productos..."
            />
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;


