import React from 'react';
import './EmployersAds.css';

const EmployersAds = ({image, title, text}) => {
    return (
        <div className="adsContainer">
            <div className="adsLogoContainer">
                <img src={image} alt="ping" className="adsLogo" />
            </div>
            <p> {title} </p>
            <p> {text} </p>
        </div>
    )
}

export default EmployersAds;
