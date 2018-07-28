import React, { Component } from 'react';
import {
	Title,
	QuizContainer,
	Question,
	Image,
	CitiesContainer
} from './Styles';
import Cities from './Quiz/Choices';
import ProgressBar from './Quiz/ProgressBar';
import stateNames from './Quiz/methods';

class App extends Component {
	initialState = {
		stateArray: stateNames()
	};

	state = {
		question: 0,
		stateName: '',
		answer: '',
		questionResponse: '',
		correct: 0,
		wrong: 0,
		percentage: 0,
		newStateArray: this.initialState.stateArray
	};

	componentWillMount() {
		console.log(this.state.newStateArray);
		this.getStateNameAndAnswer();
	}

	getStateNameAndAnswer = () => {
		const { newStateArray, question } = this.state;
		newStateArray.forEach(region => {
			if (question === region['Number']) {
				this.setState({
					stateName: region['State'],
					answer: region['Name']
				});
			}
		});
	};

	questionResponse = response => {
		this.setState({
			question: this.state.question + 1,
			questionResponse: response,
			percentage: this.state.percentage + 2
		});
		this.getStateNameAndAnswer();
		response === 'You are correct'
			? this.setState({
					correct: this.state.correct + 1
			  })
			: this.setState({
					wrong: this.state.wrong + 1
			  });
	};

	nextQuestion = event => {
		event.target.value === this.state.answer
			? this.questionResponse('You are correct')
			: this.questionResponse('You are incorrect');
	};

	restartGame = () => {
		window.location.reload(true);
	};

	render() {
		const { stateName, cities, percentage, correct, wrong } = this.state;
		return (
			<div className="App">
				<Title>
					How Well Do You Know State Capitals? Take This Quiz!
				</Title>
				{percentage === 100 ? (
					<div>
						<h1>The Quiz is complete.</h1>
						Your score is {correct} / 50
						<button onClick={this.restartGame}>
							Restart the Quiz
						</button>
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
								stateName={stateName}
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

export default App;
