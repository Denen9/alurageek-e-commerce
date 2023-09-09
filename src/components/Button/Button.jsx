import React from "react";
import "./Button.css"

function Button({onClick, children}) {
    return (
        <button className="button" onClick={onClick}><span className="button-span">{children}</span></button>
    )
}

export default Button;