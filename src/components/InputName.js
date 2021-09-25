import React from "react";
import "./name-change.css";

const InputName = ({ setName, name }) => {
    const OnChange = (e) => {
        if (e.keyCode === 13) {
            let nameInput = document.getElementById("name-input");
            console.log(nameInput.value);
            setName(nameInput.value);
        }
    };
    return (
        <div>
            <label>Name:</label>
            <input
                type='text'
                id='name-input'
                onKeyUp={OnChange}
                maxLength={9}
            />
            <br />
        </div>
    );
};

export default InputName;
