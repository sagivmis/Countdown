import React from "react";
import instagram from "../../assets/images/icon-instagram.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import discord from "../../assets/images/icon-discord.svg";
import "./style/footer.css";
const Footer = () => {
    return (
        <div className='footer'>
            <img src={instagram} alt='instagram' id='instagram' />
            <img src={facebook} alt='facebook' id='facebook' />
            <img
                src={discord}
                alt='discord'
                id='discord'
                className='filter-purple'
            />
        </div>
    );
};

export default Footer;
