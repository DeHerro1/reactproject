import React from 'react';
import './ToSign.css';

const ToSign = ({Sign, text}) => {
    return (
        <div className="toSign">
            <div className="signIconContainer">
                <Sign className="signIcon" />
            </div>
            <button className="toSignBtn"> {text} </button>
        </div>
    )
}

export default ToSign;
