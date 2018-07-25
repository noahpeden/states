import React, { Component } from 'react';
import {
	Title,
	QuizContainer,
	Question,
	Image,
	CitiesContainer
} from './Styles';
import cityData from './data/cities.json';
import stateCapitals from './data/state-capitals.json';
import { setTimeout } from 'core-js';

class App extends Component {
	state = {
		question: 1,
		stateName: '',
		answer: '',
		cities: '',
		questionResponse: '',
		correct: 0,
		wrong: 0,
		percentage: 0
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
						questionResponse: "You're right!",
						correct: this.state.correct + 1,
						percentage: this.state.percentage + 2
					},
					() => {
						setTimeout(() => {
							this.getStateNameAndAnswer();
							this.getStateChoices();
						}, 50);
					}
			  )
			: this.setState(
					{
						questionResponse: "You're wrong.",
						wrong: this.state.wrong + 1
					},
					() => {
						this.getStateChoices();
						this.getStateNameAndAnswer();
					}
			  );
	};

	componentDidMount() {
		this.getStateChoices();
	}

	componentWillMount() {
		this.getStateNameAndAnswer();
	}

	render() {
		const { stateName, answer, cities } = this.state;
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
					<Image src="https://source.unsplash.com/random/450x350 " />
					<h3>{this.state.questionResponse}</h3>
					<div>
						<h3>Correct:{this.state.correct}</h3>
						<h3>Incorrect:{this.state.wrong}</h3>
					</div>
					<CitiesContainer>
						<Cities
							cities={cities}
							nextQuestion={this.nextQuestion}
						/>
					</CitiesContainer>
					<h3>Your Progress</h3>
					<ProgressBar percentage={this.state.percentage} />
				</QuizContainer>
			</div>
		);
	}
}

const Cities = ({ cities, nextQuestion }) =>
	cities ? (
		cities.map(city => {
			return (
				<button value={city} key={city} onClick={nextQuestion}>
					{city}
				</button>
			);
		})
	) : (
		<div />
	);

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

export default App;
