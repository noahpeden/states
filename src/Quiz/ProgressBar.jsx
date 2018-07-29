import React from 'react';

const ProgressBar = props => {
    return (
        <div>
            <h3>Your Progress</h3>
            <div className="progress-bar">
                <Filler percentage={props.percentage} />
                <h3>{props.percentage}%</h3>
            </div>
        </div>
    );
};

const Filler = props => {
    return <div style={{ width: `${props.percentage}%` }} className="filler" />;
};

export default ProgressBar;
