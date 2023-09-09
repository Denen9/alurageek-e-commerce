import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"
import Card from '../../components/Card/Card'
import Popup from '../../components/Popup/Popup';

function ProductDetail({ products, categories }) {
  const { productName } = useParams();

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const product = products.find((product) => product.name === productName);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const similarProducts = products.filter(
    (p) => p.category === product.category && p.name !== product.name
  );

  const limitedProducts = similarProducts.slice(0, 5);

  return (
    <div className='product-detail-container'>
      <section className='product'>
        <div className='img-container'>
          <img src={product.image} alt={product.name} onClick={togglePopup} loading="lazy"/>
        </div>
        <div className='product-info'>
          <h2>{product.name}</h2>
          <p className='product-price'>{"$" + product.price}</p>
          <p className='product-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis, ipsa,
            deleniti corrupti tenetur autem excepturi, natus debitis laudantium rerum magni animi
            eveniet. Sequi deserunt nulla nobis pariatur nostrum hic.
          </p>
        </div>
      </section>
      <section className='similar-products-container'>
        <h3>Productos Similares</h3>
        <div className="similar-products">
          {limitedProducts.map(similarProduct => (
            <Card key={similarProduct.id} product={similarProduct} />
          ))}
        </div>
      </section>
      {showPopup && <Popup product={product} onClose={togglePopup} />}
    </div>
  );
}

export default ProductDetail;
