import React from "react";
import "./form.css";
import Button from "./Button";

const MyForm = ({ ...props }) => {
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
    const GrabData = () => {
        let yearInput = document.getElementById("year");
        let monthInput = document.getElementById("month");
        let dayInput = document.getElementById("day");
        let hourInput = document.getElementById("hour");

        const newTarget = {
            year: parseInt(yearInput.value),
            month: parseInt(monthInput.value),
            day: parseInt(dayInput.value),
            hour: parseInt(hourInput.value),
        };
        props.setTarget(
            +new Date(
                `${newTarget.month}/${newTarget.day}/${newTarget.year} ${newTarget.hour}:00`
            )
        );
    };
    return (
        <div className='form hidden' id={"form"}>
            <Button
                text={"X"}
                onClick={ToggleHidden}
                color={"hsl(236, 21%, 26%)"}
                classN={"btn close"}
            />
            <label>Year:</label>
            <br />
            <input type='text' id='year' />
            <br />
            <label>Month:</label>
            <br />
            <input type='text' id='month' />
            <br />
            <label>Day:</label>
            <br />
            <input type='text' id='day' />
            <br />
            <label>Hour:</label>
            <br />
            <input type='text' id='hour' />
            <br />
            <br />
            <Button
                text='Generate'
                onClick={GrabData}
                color={"hsl(236, 21%, 26%)"}
            />
        </div>
    );
};

export default MyForm;
