import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    font-family: oswald, sans-serif;
    text-align: center;
    color: #2e4a9e;
`;

export const QuizContainer = styled.div`
    font-family: oswald, sans-serif;
    width: 900px;
    height: 600px;
    margin: 0 auto;
    text-align: center;
    .progress-bar {
        margin: 20px auto;
        position: relative;
        height: 20px;
        width: 350px;
        border-radius: 50px;
        border: 1px solid #333;
    }
    .filler {
        background: #1da598;
        height: 100%;
        border-radius: inherit;
        transition: width 0.2s ease-in;
    }
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
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const ProgressTracker = styled.div`
    width: 95%;
    border: 1px dotted green;
    height: 20px;
`;

export const CitiesContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    button {
        width: 20%;
        color: white;
        border: 2px solid #2e4a9e;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        background-color: #2e4a9e;
        font-size: 18px;
    }
    button:hover {
        cursor: pointer;
        color: #2e4a9e;
        background: white;
    }
`;
