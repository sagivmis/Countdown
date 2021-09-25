import React from "react";
import "./style/block.css";

const Block = ({ component }) => {
    return (
        <div className='block-container'>
            <p className='block-key'>{component.key}</p>
            <div className='block'>{component}</div>
            <div className='down-block'></div>
        </div>
    );
};

export default Block;
