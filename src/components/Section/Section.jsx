import React from "react";
import Card from "../Card/Card";
import "./Section.css"
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Section({ title, products, sectionColor }) {
  const sectionStyle = {
    backgroundColor: sectionColor,
  };

  const limitedProducts = products.slice(0,5)
  return (
    <section className="section" >
      <div className="section-header" style={sectionStyle}>
        <h2>{title}</h2>
        <Link to={`/productos/${title}`} className="button-section">
            <h4 className="button-section-title">Ver productos</h4>
            <BsArrowRight className="section-icon" />
        </Link>
        
      </div>
      <div className="card-container">
        {limitedProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Section;

