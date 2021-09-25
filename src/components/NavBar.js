import React from "react";
import "./navbar.css";
import Button from "./Button";
import InputName from "./InputName";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [name, setName] = useState();
    return (
        <div className='navbar'>
            <label id='greet'>
                {name ? `Hello ${name}` : <InputName setName={setName} />}
            </label>
            <Button
                text={"Home"}
                onClick={() => {}}
                color={"hsl(236, 21%, 26%)"}
                classN={"btn"}
            />
            <Button
                text={"About"}
                onClick={() => {}}
                color={"hsl(236, 21%, 26%)"}
                classN={"btn"}
            />
            <Button
                text={"Website"}
                onClick={() => {}}
                color={"hsl(236, 21%, 26%)"}
                classN={"btn"}
            />
        </div>
    );
};

export default NavBar;
