import React from "react";
import hills from "../../assets/images/pattern-hills.svg";
import stars from "../../assets/images/bg-stars.svg";

const Background = () => {
    return (
        <div>
            <img src={stars} className='bg stars' alt='logo' />
            <img src={hills} className='bg hills' alt='logo' />
        </div>
    );
};

export default Background;
