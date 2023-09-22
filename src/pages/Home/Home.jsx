import React, { useEffect, useState, lazy} from "react";
import { obtenerProductos } from "../../api/api";
import Banner from "../../components/Banner/Banner";

const Section = lazy(() => import("../../components/Section/Section"));

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    obtenerProductos()
      .then((data) => {
        const categoriasUnicas = [...new Set(data.map((producto) => producto.category))];
        const productosAgrupados = {};
        categoriasUnicas.forEach((categoria) => {
          const productosCategoria = data.filter((producto) => producto.category === categoria);
          productosAgrupados[categoria] = productosCategoria;
        });
        setProducts(productosAgrupados);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <div>Cargando productos...</div>
      ) : error ? (
        <div>Error al cargar los productos: {error.message}</div>
      ) : (
        <>
            <Banner />
            {Object.keys(products).map((categoria) => (
              <Section
                key={categoria}
                title={categoria}
                products={products[categoria]}
                sectionColor={products[categoria][0].color}
              />
            ))}
        </>
      )}
    </div>
  );
}

export default Home;
