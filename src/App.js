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
		cityData.forEach(state => {
            this.state.stateName === state['state'] &&
                console.log('state', state.cities)
                this.setState({
                    cities: state.cities
                })
				// state['cities'].forEach(city => <p>{city}</p>);
		});
	};

	componentDidMount() {
        this.getStateNameAndAnswer();
        this.getStateChoices()
    }
    
    renderCities = () => {
        
        this.state.cities.map((city) => {
            <ul>
                <li>{city}</li>
            </ul>
        })
    }

	render() {
		const { question, stateName, answer } = this.state;
        console.log('Answer', answer);
        console.log('city', this.state.cities)
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
                        {this.state.cities.map((city)=> {
                            return <div>{city}</div>
                        })}
                    </Choices>
					<ProgressTracker />
				</QuizContainer>
			</div>
		);
	}
}

export default App;
