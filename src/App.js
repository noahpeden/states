import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 30px;
	font-weight: 500;
	font-family: oswald, sans-serif;
	text-align: center;
	color: #2e4a9e;
`;

const QuizContainer = styled.div`
	border: 1px solid black;
	width: 600px;
	height: 600px;
	margin: 0 auto;
`;

const Question = styled.p`
	text-align: center;
	font-weight: 600;
	font-size: 24px;
	padding: 0;
`;

const Choices = styled.li`
	list-style: none;
`;
const Image = styled.img`
	border: 1px dotted red;
	margin: 5%;
	max-height: 630px;
	width: auto;
`;

const ProgressTracker = styled.div`
	width: 95%;
	border: 1px dotted green;
	height: 20px;
`;
class App extends Component {
	render() {
		return (
			<div className="App">
				<Title>
					How Well Do You Know State Capitals? Take This Quiz!
				</Title>
				<QuizContainer>
					<Question />
					<Image src="https://images.definition.org/wp-content/uploads/2017/03/37626_28.jpg?tr=w-1000,dpr-2,h-630,c-at_max" />
					<Choices>Choice 1</Choices>
					<Choices>Choice 2</Choices>
					<Choices>Choice 3</Choices>
					<Choices>Choice 4</Choices>
					<ProgressTracker />
				</QuizContainer>
			</div>
		);
	}
}

export default App;
