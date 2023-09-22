import React, { useState, lazy, Suspense } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./Header.css";

const Logo = lazy(() => import('../Logo/Logo'));
const AiOutlineSearch = lazy(() => import('react-icons/ai').then(module => ({ default: module.AiOutlineSearch })));
const AiOutlineSend = lazy(() => import('react-icons/ai').then(module => ({ default: module.AiOutlineSend })));

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  const navigate = useNavigate(); 
  const location = useLocation();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const isLoginPage = location.pathname === '/login';

  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='header-logo'>
          <Link to="/" className='no-underline'>
            <Suspense fallback={<div>Cargando...</div>}>
              <Logo />
            </Suspense>
          </Link>
          <form onSubmit={handleSearchSubmit} className="header-search-form">
            <input
              className="header-search"
              type='text'
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar productos..."
            />
            <button type="submit" className='search-button'>
              <Suspense fallback={<div>Cargando...</div>}>
                <AiOutlineSearch className='search-button-i' />
              </Suspense>
            </button>
          </form>
        </div>
        {!isLoginPage && ( 
          <Link to="/login" className='login-link'>
            <button className='header-login'>LOGIN</button>
          </Link>
        )}
        {isLoginPage && ( 
          <Link to="/product-add" className='admin-link'>
            <button className='header-admin'>MENU</button>
          </Link>
        )}
        <button className='header-search-mobile' onClick={toggleSearchModal}>
          <Suspense fallback={<div>Cargando...</div>}>
            <AiOutlineSearch />
          </Suspense>
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
