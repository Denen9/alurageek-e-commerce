import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./ProductCategory.css";

function ProductCategory({ products }) {
  const { category } = useParams();
  const categoryProducts = products.filter((product) => product.category === category);

  const [isSaberOpened, setIsSaberOpened] = useState(true);

  const toggleSaber = () => {
    setIsSaberOpened(!isSaberOpened);
  };

  return (
    <div className="productCategoryContainer">
      <div className="productCategory">
        <div className="productCategoryTitle">{category}</div>
        <div className="lightsaber">
        {category === "Star Wars" && (
          <>
            <img className="lightsaberImg" src="/images/star-wars-2369317_1920.png" alt="Sable de luz" onClick={toggleSaber} />
            <span className={`lightsaberSpan ${isSaberOpened ? "lightsaberSpanOpened" : ""}`}></span>
          </>
          )}
        </div>
        {category === "Star Wars" &&(<span className="lightsaberClick">Haz Click en el Lightsaber!</span>)}
      </div>
      <div className="card-container">
        {categoryProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;
