import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import Button from "../../components/Button/Button";
import { registrarUsuario } from "../../api/api";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    return password.length >= 8 && password.length <= 16;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setErrors({ ...errors, password: "La contraseña debe tener entre 8 y 16 caracteres." });
      return;
    }

    try {
      const response = await registrarUsuario(formData);
      if (response.success) {
        console.log("Usuario registrado exitosamente:", response.message);
      } else {
        console.log({ ...errors, apiError: "Error al registrar el usuario." });
      }
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
    }
  };

  return (
    <section className="loginContainer">
      <div className="loginBox">
        <h3 className="loginTitle">Iniciar Sesión</h3>
        <form className="loginForm" onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInputChange}
            required
            helperText={errors.email ? "Ingrese un correo válido." : ""}
            error={!!errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Contraseña"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            helperText={errors.password || errors.apiError}
            error={!!errors.password || !!errors.apiError}
          />
          <Button className="loginButton" type="submit">Iniciar sesión</Button>
        </form>
      </div>
    </section>
  );
};

export default Login;

