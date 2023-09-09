import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Contacto from './pages/Contacto';
import SearchResults from './pages/SearchResults/SearchResults';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Rodapie from './components/Rodapie/Rodapie';
import { obtenerProductos } from './api/api';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import ProductCategory from './pages/ProductCategory/ProductCategory';
import Login from './pages/Login/Login';
import ProductAdd from './pages/ProductsAdd/ProductAdd';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProductos()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <ParticleBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<SearchResults products={products} />} />
        <Route path="/producto/:productName" element={<ProductDetail products={products} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos/:category" element={<ProductCategory products={products}/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/product-add" element={<ProductAdd />}/>
      </Routes>
      <Footer/>
      <Rodapie />
    </Router>
  );
}

export default App;