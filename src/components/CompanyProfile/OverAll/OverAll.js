import React from 'react';
import './OverAll.css'

const OverAll = ({ number, name}) => {
    return (
        <div className="overAll">
            <p> {number} </p>
            <p> {name} </p>
        </div>
    )
}

export default OverAll;
