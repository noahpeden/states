import stateCapitals from '../data/state-capitals';

export default () => {
	let array = shuffleArray(stateCapitals);
	return array;
};

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
	}
	array.forEach((state, i) => {
		state.Number = i;
	});
	return array;
};
