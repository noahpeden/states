import React, { Component } from 'react';
import cityData from '../data/cities';

export default ({stateName, nextQuestion}) => {
	let cities = cityData.filter(x => x.state === stateName)[0].cities;
	return cities.map((city, i) => {
		if (i <= 7) {
			return (
				<button value={city} key={city} onClick={nextQuestion}>
					{city}
				</button>
			);
		}
	});
};
