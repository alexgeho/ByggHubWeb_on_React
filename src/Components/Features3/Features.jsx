import React from 'react';
import './Features.css';

const Features = ({image, title, subtitle}) => {
        return (
            <div className="Features">
                <img src={image} alt="Feature" className="Image"/>
                <h3 className="Title">{title}</h3>
                <p className="Subtitle">{subtitle}</p>
            </div>
        );
}

export default Features;