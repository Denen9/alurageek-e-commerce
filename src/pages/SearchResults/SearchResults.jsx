import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import "./SearchResults.css"

function SearchResults({ products }) {
  const { searchTerm } = useParams();

  // Verifica si el termino coincide
  const matchingCategory = products.find(
    (product) => product.category.toLowerCase() === searchTerm.toLowerCase()
  );

  // Filtra los productos segun la busqueda o categoria
  const filteredProducts = matchingCategory
    ? products.filter((product) => product.category.toLowerCase() === searchTerm.toLowerCase())
    : products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div>
      <Banner />
      <div className='search-results-container'>
        <h2 className='search-results-title'>Resultados de búsqueda para: {searchTerm}</h2>
        <div className="card-container">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default SearchResults;


