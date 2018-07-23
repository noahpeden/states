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
		cities: [],
		wrongAnswer: ''
	};
	getStateNameAndAnswer = () => {
		stateCapitals.forEach(region => {
			if (this.state.question === region['Number']) {
				this.setState({
					stateName: region['State'],
					answer: region['Name']
				});
			}
		});
	};

	getStateChoices = () => {
		const { stateName } = this.state;
		cityData.forEach(state => {
			if (state.state === stateName) {
				this.setState({
					cities: state.cities
				});
			}
		});
	};

	nextQuestion = event => {
		event.target.value === this.state.answer
			? this.setState(
					{
						question: this.state.question + 1,
						wrongAnswer: "You're right!"
					},
					() => {
						this.getStateChoices();
						this.getStateNameAndAnswer();
					}
			  )
			: this.setState(
					{
						wrongAnswer: "You're wrong."
					},
					() => {
						this.getStateChoices();
						this.getStateNameAndAnswer();
					}
			  );
	};

	componentDidMount() {
		this.getStateChoices();
		this.getStateNameAndAnswer();
	}

	componentWillMount() {
		this.getStateChoices();
		this.getStateNameAndAnswer();
	}

	// componentWillReceiveProps() {
	// 	if (this.state.question !== this.prevState.question) {
	// 		this.getStateChoices().then(this.getStateNameAndAnswer());
	// 	}
	// }

	render() {
		const { question, stateName, answer, cities } = this.state;
		// console.log('Answer', answer);
		// console.log('State', stateName);
		// console.log('cities', cities);
		return (
			<div className="App">
				<Title>
					How Well Do You Know State Capitals? Take This Quiz!
				</Title>
				<QuizContainer>
					<Question>
						What is the capital of {this.state.stateName}?
					</Question>
					<Cities cities={cities} nextQuestion={this.nextQuestion} />
					{this.state.wrongAnswer}
					<ProgressTracker />
				</QuizContainer>
			</div>
		);
	}
}

const Cities = ({ cities, nextQuestion }) =>
	cities ? (
		cities.map(city => {
			return (
				<ul key={city}>
					<button value={city} onClick={nextQuestion}>
						{city}
					</button>
				</ul>
			);
		})
	) : (
		<div />
	);

export default App;
