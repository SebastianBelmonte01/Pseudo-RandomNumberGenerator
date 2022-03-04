import React from "react";
import './header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <h2>Números Pseudoaleatorios</h2>
            </div>
            <div className="tool-bar">
                
                <a href="./CuadradosMedios">Cuadrados Medios</a>
                <a>Productos Medios</a>
                <a>Algoritmo Lineal</a>
                <a>Algoritmo Multiplicativo</a>

            </div>
            
        </div>
    );
    
}

export default Header;

