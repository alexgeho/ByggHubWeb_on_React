import React from 'react';
import './TitleAndSubtitle.css';

const TitleAndSubtitle = ({title, subtitle, align="left", variant = "default"}) => {

    const classes = `
            TitleAndSubtitle 
            ${align === "center" ? "centered" : ""}
            ${variant === "features" ? "features" : ""}
            `.trim();

    return (
            <div className={classes}>
                <h2 className="Title">{title}</h2>
                <p className="Subtitle">{subtitle}</p>
            </div>
        );
    }


export default TitleAndSubtitle;



