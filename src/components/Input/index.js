import React from "react";
import './input.css';

const Input = ({message,onChange}) => {
    return(
        <div>
            <div className="container">
                <label htmlFor="input">{message}</label>
                <input type="text" placeholder={message} onChange={onChange}className="input"/>
            </div>
            
        </div>
    );
}

export default Input;