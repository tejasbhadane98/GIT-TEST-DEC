import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css"

const QuizGame=()=>{

    const questions = [
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Hyderabad', isCorrect: false },
				{ answerText: 'Kolkata', isCorrect: false },
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'Indore', isCorrect: false },
			],
		},
		{
			questionText: ' Which is the coldest location in the earth?',
			answerOptions: [
				{ answerText: 'West Antarctica', isCorrect: false },
				{ answerText: 'East Antarctica', isCorrect: true },
				{ answerText: 'Nepal', isCorrect: false },
				{ answerText: 'Switzerland', isCorrect: false },
			],
		},
		
        {
			questionText: ' Which is the highest peak in India?',
			answerOptions: [
				{ answerText: 'Kamet Peak', isCorrect: false },
				{ answerText: 'Kangchenjunga Peak', isCorrect: false },
				{ answerText: 'Mount K2', isCorrect: false },
				{ answerText: 'Mount Everest', isCorrect: true },
			],
		},
        {
			questionText: 'Which is the fastest animal on land?',
			answerOptions: [
				{ answerText: 'Fox', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false },
				{ answerText: 'Tiger', isCorrect: false },
				{ answerText: 'Cheetah ', isCorrect: true },
			],
		},
        {
			questionText: 'Which is the largest state of India?',
			answerOptions: [
				{ answerText: 'Gujrat', isCorrect: false },
				{ answerText: 'Tamilnadu', isCorrect: false },
				{ answerText: 'West Bengal', isCorrect: false },
				{ answerText: 'Rajashtan', isCorrect: true },
			],
		},
        {
			questionText: ' Which is the smallest continent in the world?',
			answerOptions: [
                { answerText: 'Australia', isCorrect: true },
				{ answerText: 'Africa', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'England', isCorrect: false },
				
			],
		},
        {
			questionText: 'How many times has India won the Cricket World Cup?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '2', isCorrect: true },
			],
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    const resetQuiz=()=>{
        setCurrentQuestion(0);
        setScore(0)
        setShowScore(false)
    }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <>
                        <button type="submit" onClick={resetQuiz}>Play Again!!</button><br />
						<button> <Link to="/">
            Return to Homepage
          </Link></button>
                    </>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default QuizGame;