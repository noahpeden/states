import React, { Component } from 'react';
import {
	Title,
	QuizContainer,
	Question,
	Choices,
	Image,
	ProgressTracker
} from './Styles';
import cityData from './data/cities.json';
import stateCapitals from './data/state-capitals.json';

class App extends Component {
	state = {
		question: 1,
		stateName: '',
		answer: '',
		cities: []
	};
	getStateNameAndAnswer = () => {
		stateCapitals.forEach(region => {
			this.state.question === region['Number'] &&
				this.setState({
					stateName: region['State'],
					answer: region['Name']
				});
		});
	};

	getStateChoices = () => {
		const { stateName, cities } = this.state;
		cityData.forEach(state => {
			if (state.state === stateName) {
				this.setState({
					cities: state.cities
				});
			}
		});
	};

	componentDidMount() {
		this.getStateChoices();
	}

	componentWillMount() {
		this.getStateNameAndAnswer();
	}

	render() {
		const { question, stateName, answer, cities } = this.state;
		console.log('Answer', answer);
		console.log('State', stateName);
		console.log('cities', cities);
		return (
			<div className="App">
				<Title>
					How Well Do You Know State Capitals? Take This Quiz!
				</Title>
				<QuizContainer>
					<Question>
						What is the capital of {this.state.stateName}?
					</Question>
					<Choices>
						{cities ? (
							cities.map(city => {
								return (
									<ul>
										<li>{city}</li>
									</ul>
								);
							})
						) : (
							<div />
						)}
					</Choices>
					<ProgressTracker />
				</QuizContainer>
			</div>
		);
	}
}

export default App;
