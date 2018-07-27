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
	constructor(props) {
		super(props);
		this.shuffleArray(stateCapitals);
	}
	state = {
		question: 0,
		stateName: '',
		answer: '',
		cities: '',
		questionResponse: '',
		correct: 0,
		wrong: 0,
		percentage: 0,
		newStateArray: []
	};

	getStateNameAndAnswer = () => {
		const { newStateArray, question } = this.state;
		console.log(newStateArray);

		newStateArray.forEach(region => {
			if (question === region['Number']) {
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

	updateCounter = () => {
		this.setState({
			counter: this.state.counter + 1
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
						question: this.state.question + 1,
						questionResponse: "You're wrong.",
						wrong: this.state.wrong + 1,
						percentage: this.state.percentage + 2
					},
					() => {
						setTimeout(() => {
							this.getStateNameAndAnswer();
							this.getStateChoices();
						}, 50);
					}
			  );
	};

	shuffleArray = array => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
		}

		array.forEach((state, i) => {
			state.Number = i;
		});
		this.setState({
			newStateArray: array.forEach(element => {
				this.state.newStateArray.push(element);
			})
		});
	};

	componentDidMount() {
		this.getStateChoices();
		console.log(stateCapitals.length);
	}
	componentWillMount() {
		this.getStateNameAndAnswer();
	}

    restartGame = () => {
        window.location.reload(true)
    }

	render() {
		const {
			stateName,
			answer,
			cities,
			percentage,
			correct,
			wrong
		} = this.state;
		console.log('Answer', answer);
		console.log('State', stateName);
		console.log('cities', cities);
		return (
			<div className="App">
				<Title>
					How Well Do You Know State Capitals? Take This Quiz!
				</Title>
				{percentage === 100 ? (
					<div>
						<h1>The Quiz is complete.</h1>
						Your score is {correct} / 50
                        <button onClick={this.restartGame}>Restart the Quiz</button>
					</div>
				) : (
					<QuizContainer>
						<Question>
							What is the capital of {this.state.stateName}?
						</Question>
						<Image src="https://source.unsplash.com/random/450x350 " />
						<h3>{this.state.questionResponse}</h3>
						<div>
							<h3>Correct:{correct}</h3>
							<h3>Incorrect:{wrong}</h3>
						</div>
						<CitiesContainer>
							<Cities
								cities={cities}
								nextQuestion={this.nextQuestion}
							/>
						</CitiesContainer>
						<h3>Your Progress</h3>
						<ProgressBar percentage={percentage} />
					</QuizContainer>
				)}
			</div>
		);
	}
}

const Cities = ({ cities, nextQuestion }) =>
	cities ? (
		cities.map((city, i) => {
			if (i <= 7) {
				return (
					<button value={city} key={city} onClick={nextQuestion}>
						{city}
					</button>
				);
			}
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
