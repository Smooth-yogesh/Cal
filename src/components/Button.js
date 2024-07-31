import React from 'react';
import './Button.css';

const Button = ({ value, handleClick, className = '' }) => {
    return (
        <button className={`button ${className}`} onClick={() => handleClick(value)}>
            {value}
        </button>
    );
};

export default Button;
