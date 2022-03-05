import React from "react";
import './input.css';

const Input = (props) => {
    return(
        <div>
            <div className="container">
                <label htmlFor="input">{props.message}</label>
                <input type="text" placeholder={props.message} className="input"/>
            </div>
            
        </div>
    );
}

export default Input;