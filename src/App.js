
import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {
	const initialState = {
		choosenLevel: ''
	}
	const [choosenLevel, setChoosenLevel] = useState(initialState.choosenLevel)
	const [words, setWords] = useState()
	const [correctAnswers, setCorrectAnswers] = useState([])
	const [wrongAnswers, setWrongAnswers] = useState([])
	const [clicked, setclicked] = useState([])
	const [score, setScore] = useState(0)

	useEffect(() => {
		if(choosenLevel === '')
			return;

		const options = {
			method: 'GET',
			url: 'http://localhost:8000/results',
			params: { level: choosenLevel, area: 'sat' },
		};

		 axios.request(options).then((response) => {
		   setWords(response.data)
		 }).catch((error) => {
		   console.error(error);
		});

	}, [choosenLevel])

	const romanNumber = (num) => {
		var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
		var romanized = "";
		for (var index = 0; index < decimalValue.length; index++) {
			while (decimalValue[index] <= num) {
				romanized += romanNumeral[index];
				num -= decimalValue[index];
			}
		}

		return romanized;
	}

	const checkAnswer = (qIndex, optionIndex, answerIndex) => {
		if (wrongAnswers.includes(qIndex) || correctAnswers.includes(qIndex)) {
			return;
		}
		else if (optionIndex === answerIndex) {
			setCorrectAnswers([...correctAnswers, qIndex])
			setScore((score) => score + 1)
		} else {
			setWrongAnswers([...wrongAnswers, qIndex])
			setScore((score) => score - 1)
		}
		setclicked([...clicked, qIndex])
	}



	return (
		<div className="app">
			{!choosenLevel && <div className='level-selector'>
				<h1>Word Association App</h1>
				<p>Select Your level to start</p>
				<select
					name="levels"
					id="levels"
					value={choosenLevel}
					onChange={(e) => setChoosenLevel(e.target.value)}>
					<option value={null}>Select a Level</option>
					<option value="1">Level 1</option>
					<option value="2">Level 2</option>
					<option value="3">Level 3</option>
					<option value="4">Level 4</option>
					<option value="5">Level 5</option>
					<option value="6">Level 6</option>
					<option value="7">Level 7</option>
					<option value="8">Level 8</option>
					<option value="9">Level 9</option>
					<option value="10">Level 10</option>
				</select>
			</div>}

			{choosenLevel && <div className='question-area'>
				<h1>Welcome to level : {romanNumber(choosenLevel)}</h1>
				<h3>Your Score is: {score} | Correct : {correctAnswers.length} | Wrong : {wrongAnswers.length}</h3>
				<div className='questions'>
					{words?.quizlist.map((question, _qIndex) => (
						<div key={_qIndex}
							className={correctAnswers.includes(_qIndex) ? 'question-box-correct' : wrongAnswers.includes(_qIndex) ? 'question-box-wrong' : 'question-box'}>
							{question.quiz.map((tip, _tIndex) => (
								<p key={_tIndex}>{tip}</p>
							))}
							<div className='question-buttons'>
								{question.option.map((option, _oIndex) => (
									<div key={_oIndex} className='question-button'>
										<button
											disabled={clicked.includes(option)}
											onClick={() => checkAnswer(_qIndex, _oIndex + 1, question.correct)}
										>{option}
										</button>

									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<button onClick={() => { setChoosenLevel(initialState.choosenLevel); setCorrectAnswers([]); setWrongAnswers([]); }}>Go Back</button>
			</div>}
		</div>
	);
}

export default App;
