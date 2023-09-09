import React, { useState } from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup';


function Card({ product }) {

  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = ()=>{

    setShowPopup(!showPopup)
  }

  const cardStyle = {
    background: product.color,
  };

  return (
    <section className="product-container product-1">
      <div className="card" style={cardStyle}>
        <div className="photo">
          <img src={product.image} alt={product.name} onClick={togglePopup}/>
        </div>
        <div className="content">
          <div className="title">{product.name}</div>
          <div className="feature">
            {"$" + product.price}
          </div>
          <Link to={`/producto/${product.name}`} className='btn-buy'>Ver Producto</Link>
        </div>
      </div>
      {showPopup && <Popup product={product} onClose={togglePopup} />}
    </section>
  );
}

export default Card;


