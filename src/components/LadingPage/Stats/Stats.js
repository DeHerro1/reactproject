import React from 'react';
import "./Stats.css";

const Stats = ({ Icon, number, text}) => {
    return (
        <div className="stats">
            <div>
                <Icon className="statsIcon" />
            </div>
            <div>
                <p className="statsNumber"> {number} </p>
                <p className="statsText"> {text} </p>
            </div>
        </div>
    )
}

export default Stats;
