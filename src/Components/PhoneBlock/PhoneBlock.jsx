import React from "react";
import './PhoneBlock.css';

const PhoneBlock = ({ image, title, text, reverse = false }) => {
    return (
        <div className={`PhoneBlock ${reverse ? "reverse" : ""}`}>
            <img src={image} alt={title} className="PhoneImage" />
            <div className="PhoneText">
                <h3>{title}</h3>
                <p>{text}</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default PhoneBlock;
