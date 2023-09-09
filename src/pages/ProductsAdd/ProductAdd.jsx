import React, { useState } from 'react';
import "./ProductAdd.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { subirProducto } from '../../api/api';

const ProductAdd = () => {
  const [product, setProduct] = useState({
    category: '',
    color: '',
    id: '',
    name: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await subirProducto(product);
      if (response.status === 201) {
        console.log('Producto agregado con éxito:', response.data);
        setProduct({
          category: '',
          color: '',
          id: '',
          name: '',
          price: '',
          image: '',
        });
      } else {
        console.error('Error al agregar el producto:', response.data);
      }
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

  return (
    <div className='productAddContainer'>
      <h2 className='productAddTitle'>Agregar Nuevo Producto</h2>
      <form className="productAddForm" onSubmit={handleSubmit}>
        <TextField
          label="Categoría"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <TextField
          label="Color"
          name="color"
          value={product.color}
          onChange={handleChange}
          required
        />
        <TextField
          label="ID"
          name="id"
          value={product.id}
          onChange={handleChange}
          required
        />
        <TextField
          label="Nombre"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Precio"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          required
        />
        <TextField
          label="URL de la Imagen"
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        />
        <Button type="submit">
          Agregar Producto
        </Button>
      </form>
    </div>
  );
};

export default ProductAdd;
