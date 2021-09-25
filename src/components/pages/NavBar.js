import React from "react";
import "./style/navbar.css";
import Button from "./Button";
import InputName from "./InputName";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [name, setName] = useState();
    const GoHome = () => {
        setName();
    };
    return (
        <div className='navbar'>
            <label id='greet'>
                {name ? `Hello ${name}` : <InputName setName={setName} />}
            </label>
            <div className='navbar-buttons'>
                <Button
                    text={"Home"}
                    onClick={GoHome}
                    color={"rgba(44, 44, 84,1.0)"}
                    classN={"btn"}
                />
                <Button
                    text={"About"}
                    onClick={() => {}}
                    color={"rgba(44, 44, 84,1.0)"}
                    classN={"btn"}
                />
                <Button
                    text={"Website"}
                    onClick={() => {}}
                    color={"rgba(44, 44, 84,1.0)"}
                    classN={"btn"}
                />
            </div>
        </div>
    );
};

export default NavBar;
