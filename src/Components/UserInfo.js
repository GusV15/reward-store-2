import React from 'react';
import coin from "../assets/icons/coin.svg";

const UserInfo = ({userName}) => {
    return (
        <div className="user__info__container">
            <span>Gustavo Velasquez</span>
            <div className="coin__container">
                <span>6000</span>
                <img src={coin} alt="coin" />
            </div>
        </div>
    )
}

export default UserInfo;
