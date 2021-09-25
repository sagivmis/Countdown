import React from "react";
import Block from "./Block";
import { useEffect, useState } from "react";
import "./countdown.css";

const Countdown = ({ target }) => {
    const calculateTimeLeft = () => {
        const difference = target - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            // console.log(+new Date("10/10/10 10:00"));
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] < 0) return;
        timerComponents.push(<span key={interval}>{timeLeft[interval]}</span>);
    });
    const MapComponents = () => {
        return (
            <div className='block-grid-continer'>
                <div className='block-grid'>
                    {timerComponents.map((component) => (
                        <Block component={component} key={component.key} />
                    ))}
                </div>
            </div>
        );
    };
    return (
        <div>
            {timerComponents.length ? MapComponents() : <span>Time's up!</span>}
        </div>
    );
};

export default Countdown;
