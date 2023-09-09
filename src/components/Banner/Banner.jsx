import React, { useState, useEffect } from "react";
import "./Banner.css";
import Button from "../Button/Button";
import { format } from "date-fns";


const images = [
  "/images/EikUsWkXYAE1Sct.jpg",
  "/images/hero.png",
  "/images/ULTRA-BlogIMG2003-1.jpg"
];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImageIndex);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const currentDate = new Date();
  const currentMonth = format(currentDate, "MMMM");

  return (
    <div className="banner">
      <div className="image-container">
        <img
          className={`banner-img`}
          src={images[currentImageIndex]}
          alt="Banner de la página"
        />
      </div>
      <div className="banner-content">
        <h1>{currentMonth} Promocional</h1>
        <p>Productos selecionados con 33% de descuento</p>
        <Button>Ver Productos</Button>
      </div>
    </div>
  );
}

export default Banner;




