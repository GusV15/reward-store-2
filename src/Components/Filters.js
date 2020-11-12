import React from 'react';
import arrowRightImg from "../assets/icons/arrow-right.svg"

const Filters = () => {
    return (
        <div className="filters__container">
            <div className="filters">
                <p>16 of 32 products<span>| Sort by:</span></p>
                <ul>
                    <li >Most recent</li>
                    <li>Lowest price</li>
                    <li>Highest price</li>
                </ul>
            </div>
            <div className="arrow__left">
                <img src={arrowRightImg} alt="next" />
            </div>
        </div>
    )
}

export default Filters;
