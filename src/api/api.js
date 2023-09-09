import axios from "axios";

const api = axios.create({
  baseURL: "https://alura-geek-fake-api-nine.vercel.app/",
});

export const obtenerProductos = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registrarUsuario = async (datosUsuario) => {
  try {
    const response = await api.post("/users", datosUsuario);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const subirProducto = async (nuevoProducto) => {
  try {
    const response = await api.post("/products", nuevoProducto);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const eliminarProducto = async (productId) => {
  try {
    await api.delete(`/products/${productId}`);
  } catch (error) {
    throw error;
  }
};
