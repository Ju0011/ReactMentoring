import React from "react";

import './Input.css';

const Input = ({ id, title, required, type, placeholder, HandleChange }) => {
    
    return (
        <div className="input-wrapper">
            <div>
                <label>{title}</label>
                {required && (<div className="input-required">필수 <span style={{ color: 'red' }}>*</span></div>)}
            </div>
            <input id={id} className="input" required={required} type={type} placeholder={title+ " 입력하시오"} onChange={HandleChange} />
        </div>
    );
};

export default Input;