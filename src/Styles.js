import styled from 'styled-components'

export const Title = styled.h1`
	font-size: 30px;
	font-weight: 500;
	font-family: oswald, sans-serif;
	text-align: center;
	color: #2e4a9e;
`;

export const QuizContainer = styled.div`
	border: 1px solid black;
	width: 600px;
	height: 600px;
	margin: 0 auto;
`;

export const Question = styled.p`
	text-align: center;
	font-weight: 600;
	font-size: 24px;
	padding: 0;
`;

export const Choices = styled.li`
	list-style: none;
`;
export const Image = styled.img`
	border: 1px dotted red;
	margin: 5%;
	max-height: 630px;
	width: auto;
`;

export const ProgressTracker = styled.div`
	width: 95%;
	border: 1px dotted green;
	height: 20px;
`;
