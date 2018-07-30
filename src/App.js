import React, { Component } from 'react';
import { Title, QuizContainer, Question, Image, CitiesContainer } from './Styles';
import Cities from './Quiz/Choices';
import ProgressBar from './Quiz/ProgressBar';
import stateNames from './Quiz/methods';
import Response from './Quiz/Response';

const states = stateNames();

class App extends Component {
    state = {
        question: states[0].Name,
        counter: 1,
        stateName: '',
        answer: '',
        questionResponse: '',
        correct: 0,
        wrong: 0,
        percentage: 0
    };

    componentWillMount() {
        this.getStateNameAndAnswer();
    }

    getStateNameAndAnswer = () => {
        const { question } = this.state;
        states.forEach(region => {
            if (question === region.Name) {
                this.setState({
                    stateName: region['State'],
                    answer: region['Name']
                });
            }
        });
    };

    questionResponse = response => {
        this.setState({
            counter: this.state.counter + 1,
            questionResponse: response,
            percentage: this.state.percentage + 2
        });

        response === 'You are correct'
            ? this.setState(
                  {
                      question: states[this.state.counter].Name,
                      correct: this.state.correct + 1
                  },
                  () => this.getStateNameAndAnswer()
              )
            : this.setState(
                {
                    question: states[this.state.counter].Name,
                    wrong: this.state.wrong + 1
                },
                () => this.getStateNameAndAnswer()
            )
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
                <Title>How Well Do You Know State Capitals? Take This Quiz!</Title>
                {percentage === 100 ? (
                    <div>
                        <h1>The Quiz is complete.</h1>
                        Your score is {correct} / 50
                        <button onClick={this.restartGame}>Restart the Quiz</button>
                    </div>
                ) : (
                    <QuizContainer>
                        <Question>What is the capital of {this.state.stateName}?</Question>
                        <Image src="https://source.unsplash.com/random/450x350 " />
                        <Response questionResponse={this.questionResponse} correct={correct} wrong={wrong} />
                        <CitiesContainer>
                            <Cities stateName={stateName} cities={cities} nextQuestion={this.nextQuestion} />
                        </CitiesContainer>
                        <ProgressBar percentage={percentage} />
                    </QuizContainer>
                )}
            </div>
        );
    }
}

export default App;
