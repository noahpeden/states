import React from 'react';

const ProgressBar = props => {
	return (
		<div className="progress-bar">
			<Filler percentage={props.percentage} />
			<h3>{props.percentage}%</h3>
		</div>
	);
};

const Filler = props => {
	return <div style={{ width: `${props.percentage}%` }} className="filler" />;
};

export default ProgressBar;
