import React from "react";
import Block from "./Block";
import { useEffect, useState } from "react";
import "./style/countdown.css";

const Countdown = ({ target }) => {
    const calculateTimeLeft = () => {
        const difference = target - +new Date();
        if (difference <= 0) return {};
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
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
