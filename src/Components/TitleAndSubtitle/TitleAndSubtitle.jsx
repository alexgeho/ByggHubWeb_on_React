import React from 'react';
import './TitleAndSubtitle.css';

const TitleAndSubtitle = ({title, subtitle}) => {
        return (

            <div>
                <h2 className="Title">{title}</h2>
                <p className="Subtitle">{subtitle}</p>
            </div>
        );
    }


export default TitleAndSubtitle;



