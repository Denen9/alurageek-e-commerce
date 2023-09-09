import React from 'react';
import "./Popup.css"; 
import { AiOutlineClose } from 'react-icons/ai';

function Popup({ product, onClose }) {
  return (
    <div className="product-popup">
      <div className="popup-content">
      <AiOutlineClose className="close-icon" onClick={onClose} />
        <img src={product.image} alt={product.name}></img>
      </div>
    </div>
  );
}

export default Popup;
