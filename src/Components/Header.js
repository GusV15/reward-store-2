import React from 'react';
import UserInfo from "./UserInfo";
import Banner from "./Banner";
import aerolabLogo from '../assets/aerolab-logo.svg';

const Header = () => {
    return (
        <div className="header__container">
            <div className="user__info">    
                <img src={aerolabLogo} alt="reward-store"/>
                <UserInfo />
            </div>
            <Banner />
        </div>
    )
}

export default Header;
