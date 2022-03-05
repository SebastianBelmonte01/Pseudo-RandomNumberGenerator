import React from "react";
import './header.css';

const Header = ({pos}) => {

    return (
        <div>
            <div className="header">
                <h2>Números Pseudoaleatorios</h2>
            </div>
            <div className="tool-bar">
                
                <a href="./CuadradosMedios" id={pos === '1' ? "activo":''}>Cuadrados Medios</a>
                <a id={pos === '2' ? "activo":''}>Productos Medios</a>
                <a id={pos === '3' ? "activo":''}>Algoritmo Lineal</a>
                <a id={pos === '4' ? "activo":''}>Algoritmo Multiplicativo</a>

            </div>
            
        </div>
    );
    
}

export default Header;

