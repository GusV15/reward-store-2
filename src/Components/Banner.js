import React from 'react';
import bannerImg from "../assets/header-x1.png";

const Banner = () => {
    return (
        <div className="banner__container">
            <h2>Electronics</h2>
            <img src={bannerImg} alt="banner" />
        </div>
    )
}

export default Banner;
