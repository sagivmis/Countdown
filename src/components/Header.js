import React from "react";
import "./header.css";
import ChangeCountdown from "./ChangeCountdown";
import MyForm from "./MyForm";
import NavBar from "./NavBar";

const Header = ({ setTarget }) => {
    return (
        <div className='header'>
            <NavBar />
            <ChangeCountdown />

            <MyForm setTarget={setTarget} />
        </div>
    );
};

export default Header;
