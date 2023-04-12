import React from "react";

import './Input.css';

const Input = ({ title, required, type, placeholder }) => {
    return (
        <div className="input-wrapper">
            <div>
                <label>{title}</label>
                {required && (<div className="Input-required">필수 <span style={{ color: 'red' }}>*</span></div>)}
            </div>
            <input className="input" required={required} type={type} placeholder={placeholder+ " 입력하시오"} />
        </div>
    );
};

export default Input;