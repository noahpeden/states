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
		const { stateName } = this.state;
		cityData.forEach(state => {
			if (state.state === stateName) {
				this.setState({
					cities: state.cities
				});
			}
		});
    };
    
    nextQuestion = () => {
        this.setState({
            question: this.state.question + 1
        })
        console.log(this.state.question)
        this.getStateNameAndAnswer();
        this.getStateChoices();
    }

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
                    <Cities cities={cities} nextQuestion={this.nextQuestion}/>
					<Choices />
					<ProgressTracker />
				</QuizContainer>
			</div>
		);
	}
}

const Cities = ({cities, nextQuestion}) =>
	cities ? (
		cities.map(city => {
			return (
				<ul>
					<button onClick={nextQuestion}>{city}</button>
				</ul>
			);
		})
	) : (
		<div />
	);

export default App;
