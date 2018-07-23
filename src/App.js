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
        question: 2,
        stateName: ''
    };
    componentDidMount({
        this.getStateName
    })

    getStateName = () => {
        stateCapitals.forEach(region => {
            if (question === region["Number"]) {
                this.setState({
                    stateName: region["State"]
                })
            }
        });
    }
	render() {
		const { question } = this.state;	
		return (
			<div className="App">
				<Title>
					How Well Do You Know State Capitals? Take This Quiz!
				</Title>
				<QuizContainer>
					<Question>{this.state.stateName}</Question>

					<Choices>
						
					</Choices>
					<ProgressTracker />
				</QuizContainer>
			</div>
		);
	}
}

export default App;
