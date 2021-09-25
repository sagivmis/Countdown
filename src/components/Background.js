import React from "react";
import hills from "../images/pattern-hills.svg";
import stars from "../images/bg-stars.svg";

const Background = () => {
    return (
        <div>
            <img src={stars} className='bg stars' alt='logo' />
            <img src={hills} className='bg hills' alt='logo' />
        </div>
    );
};

export default Background;
