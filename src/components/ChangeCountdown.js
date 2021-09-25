import React from "react";
import Button from "./Button";
import "./change.css";

const ChangeCountdown = () => {
    const ToggleHidden = () => {
        let buttonElement = document.getElementById("change-button");
        let formElement = document.getElementById("form");

        if (formElement.classList.contains("hidden")) {
            formElement.classList.remove("hidden");
            buttonElement.classList.add("hidden");
        } else {
            formElement.classList.add("hidden");
            buttonElement.classList.remove("hidden");
        }
    };

    return (
        <div className={"change-button"} id={"change-button"}>
            <Button
                text={"Change Target"}
                onClick={ToggleHidden}
                color={"hsl(236, 21%, 26%)"}
            />
        </div>
    );
};

export default ChangeCountdown;
