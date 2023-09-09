import React from "react";
import "./Footer.css"
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <section className="footer-container">
            <div className="footer">
                <div className="left-footer">
                    <Link to="/" className="footer-logo-link"><div className="footer-logo"><Logo></Logo></div></Link>
                    <ul className="footer-ul">
                        <li>Quienes somos</li>
                        <li>Política de privacidad</li>
                        <li>Programa de fidelidad</li>
                        <li>Nuestras Tiendas</li>
                        <li>Quiero ser franquicia</li>
                        <li>Anuncie aquí</li>
                </ul>
                </div> 
                <form className="footer-form">
                    <h4>Hable con nosotros</h4>
                    <input type="text" className="input-name" placeholder="Nombre..."></input>
                    <input type="text" className="input-mensaje" placeholder="Escribe tu mensaje..."></input>
                    <div className="footer-button"><Button>Enviar Mensaje</Button></div>
                </form>
            </div>
            
            
        </section>
    )
}

export default Footer