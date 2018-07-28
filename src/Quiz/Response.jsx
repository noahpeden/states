import React from 'react';

export default ({ questionResponse, correct, wrong }) => (
	<div>
		<h3>{questionResponse}</h3>
		<h3>Correct:{correct}</h3>
		<h3>Incorrect:{wrong}</h3>
	</div>
);
