import React from 'react'
import './style.css';

function TextBox({ title, text, image }) {
    return (
        <div className="text__box colored">
            {image ? <img src={image} alt="text__box-img" /> : ""}
            <h2>{title}</h2>
            {text}
        </div>
    )
}

export default TextBox