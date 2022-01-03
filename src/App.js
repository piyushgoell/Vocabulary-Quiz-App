
import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {
	const [choosenLevel, setChoosenLevel] = useState('')
	const [words, setWords] = useState()
	const [correctAnswers, setCorrectAnswers] = useState([])
	const [wrongAnswers, setWrongAnswers] = useState([])
	const [clicked, setclicked] = useState([])
	const [score, setScore] = useState(0)

	useEffect(() => {
		if(choosenLevel === '')
			return;
		/*
			const options = {
				method: 'GET',
				url: 'http://localhost:8000/results',
				params: { level: choosenLevel, area: 'sat' },
			};

			axios.request(options).then((response) => {
			setWords(stub.level)
			}).catch((error) => {
			console.error(error);
			});
		*/

		const stub = {
			"1" : {"area":"sat","level":1,"quizlist":[{"quiz":["issue","item","subject"],"option":["appear","matter"],"correct":2},{"quiz":["class","training","program"],"option":["course","taking"],"correct":1},{"quiz":["same","like","related"],"option":["similar","make"],"correct":1},{"quiz":["correct","general","relevant"],"option":["appropriate","act"],"correct":1},{"quiz":["certain","sure","fixed"],"option":["city","positive"],"correct":2},{"quiz":["basic","update","database"],"option":["least","version"],"correct":2},{"quiz":["move","each","independent"],"option":["free","picture"],"correct":1},{"quiz":["positive","impact","result"],"option":["living","effect"],"correct":2},{"quiz":["space","long","distance"],"option":["further","helpful"],"correct":1},{"quiz":["authority","management","power"],"option":["control","path"],"correct":1}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"2" : {"area":"sat","level":2,"quizlist":[{"quiz":["data","exact","reliable"],"option":["yesterday","accuracy"],"correct":2},{"quiz":["handle","manage","function"],"option":["operate","expansion"],"correct":1},{"quiz":["extra","over","plus"],"option":["excess","slow"],"correct":1},{"quiz":["communication","disease","infection"],"option":["transmission","reducing"],"correct":1},{"quiz":["huge","large","big"],"option":["massive","climate"],"correct":1},{"quiz":["service","job","staff"],"option":["personnel","balance"],"correct":1},{"quiz":["bear","keep","hold"],"option":["trademark","maintain"],"correct":2},{"quiz":["line","mass","array"],"option":["matrix","soft"],"correct":1},{"quiz":["over","pass","better"],"option":["exceed","approximately"],"correct":1},{"quiz":["data","exact","reliable"],"option":["accuracy","rain"],"correct":1}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"3" : {"area":"sat","level":3,"quizlist":[{"quiz":["test","investigation","examine"],"option":["graph","probe"],"correct":2},{"quiz":["credit","truth","reliability"],"option":["perception","integrity"],"correct":2},{"quiz":["gas","tight","press"],"option":["compression","cooking"],"correct":1},{"quiz":["allow","enable","permit"],"option":["blind","facilitate"],"correct":2},{"quiz":["intense","extreme","ultimate"],"option":["acute","erotic"],"correct":1},{"quiz":["prepare","setup","organize"],"option":["liquid","arrange"],"correct":2},{"quiz":["do","task","work"],"option":["hi","accomplish"],"correct":2},{"quiz":["plan","project","scheme"],"option":["mathematical","arrangement"],"correct":2},{"quiz":["job","career","occupation"],"option":["profession","curious"],"correct":1},{"quiz":["authorities","government","society"],"option":["regime","chocolate"],"correct":1}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"4" : {"area":"sat","level":4,"quizlist":[{"quiz":["explain","story","describe"],"option":["complementary","narrative"],"correct":2},{"quiz":["inadequate","lacking","deficiency"],"option":["frustration","insufficient"],"correct":2},{"quiz":["hit","damage","collapse"],"option":["collision","pioneer"],"correct":1},{"quiz":["pick","choice","option"],"option":["selective","wiring"],"correct":1},{"quiz":["extract","obtain","get"],"option":["derive","cow"],"correct":1},{"quiz":["forecast","expect","weather"],"option":["predict","celebrated"],"correct":1},{"quiz":["authorization","statutory","right"],"option":["olive","mandate"],"correct":2},{"quiz":["frequency","happen","occurrence"],"option":["incidence","stake"],"correct":1},{"quiz":["contemporary","concurrent","same"],"option":["homework","simultaneous"],"correct":2},{"quiz":["own","have","take"],"option":["stationary","possess"],"correct":2}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"5" : {"area":"sat","level":5,"quizlist":[{"quiz":["mutual","interactive","together"],"option":["rim","reciprocal"],"correct":2},{"quiz":["convert","switch","change"],"option":["diversion","enthusiastic"],"correct":1},{"quiz":["distinguish","figure","know"],"option":["claimant","discriminate"],"correct":2},{"quiz":["viable","possible","feasible"],"option":["practicable","organizer"],"correct":1},{"quiz":["three","choir","third"],"option":["vegetarian","trio"],"correct":2},{"quiz":["lung","disease","infection"],"option":["stirring","pulmonary"],"correct":2},{"quiz":["earnings","salary","wage"],"option":["canonical","remuneration"],"correct":2},{"quiz":["foreign","embassy","ambassador"],"option":["viability","diplomatic"],"correct":2},{"quiz":["fine","outstanding","good"],"option":["excel","forehead"],"correct":1},{"quiz":["increase","rise","surge"],"option":["accelerate","ginger"],"correct":1}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"6" : {"area":"sat","level":6,"quizlist":[{"quiz":["native","traditional","tribe"],"option":["aboriginal","shady"],"correct":1},{"quiz":["therapy","counseling","mental"],"option":["temper","psychotherapy"],"correct":2},{"quiz":["aggressive","extreme","movement"],"option":["drastic","weekday"],"correct":1},{"quiz":["wonder","curiosity","interest"],"option":["poisonous","marvel"],"correct":2},{"quiz":["rescue","save","redemption"],"option":["salvage","vault"],"correct":1},{"quiz":["continued","unlimited","infinite"],"option":["fungi","indefinitely"],"correct":2},{"quiz":["careless","violent","foolish"],"option":["synchronous","reckless"],"correct":2},{"quiz":["genetic","parent","gene"],"option":["hereditary","quake"],"correct":1},{"quiz":["wet","fog","cloudy"],"option":["misty","derivation"],"correct":1},{"quiz":["performance","again","applause"],"option":["narrowed","encore"],"correct":2}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"7" : {"area":"sat","level":7,"quizlist":[{"quiz":["loss","asset","bloody"],"option":["iceberg","hemorrhage"],"correct":2},{"quiz":["unacceptable","intolerable","crazy"],"option":["homestead","unbearable"],"correct":2},{"quiz":["infringement","unfair","blasphemy"],"option":["libel","degrade"],"correct":1},{"quiz":["poem","rhyme","verse"],"option":["acoustics","stanza"],"correct":2},{"quiz":["connection","particular","occasion"],"option":["juncture","blockbuster"],"correct":1},{"quiz":["nice","happy","glad"],"option":["pleasurable","unarmed"],"correct":1},{"quiz":["biased","prejudice","racist"],"option":["intolerant","iniquity"],"correct":1},{"quiz":["nature","seismic","ripple"],"option":["improbable","wavelet"],"correct":2},{"quiz":["language","hear","sound"],"option":["propriety","phonetic"],"correct":2},{"quiz":["careful","scholarly","diligent"],"option":["unconventional","conscientious"],"correct":2}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"8" : {"area":"sat","level":8,"quizlist":[{"quiz":["advantage","convenience","necessity"],"option":["expediency","lacing"],"correct":1},{"quiz":["little","gradual","slow"],"option":["piecemeal","exaggerate"],"correct":1},{"quiz":["chapter","introductory","narrator"],"option":["prologue","tantamount"],"correct":1},{"quiz":["drug","illegal","prohibit"],"option":["contraband","sublimation"],"correct":1},{"quiz":["benefit","favour","mercy"],"option":["splint","prerogative"],"correct":2},{"quiz":["terrible","awful","dreadful"],"option":["unspeakable","anathema"],"correct":1},{"quiz":["generous","charity","benevolence"],"option":["wean","benefactor"],"correct":2},{"quiz":["former","precede","priority"],"option":["posse","antecedent"],"correct":2},{"quiz":["gene","subordinate","trait"],"option":["negotiator","recessive"],"correct":2},{"quiz":["committed","taint","stain"],"option":["madam","tarnish"],"correct":2}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"9" : {"area":"sat","level":9,"quizlist":[{"quiz":["standard","responsibility","focus"],"option":["fiducial","macroeconomics"],"correct":1},{"quiz":["harmless","decent","innocent"],"option":["bromine","inoffensive"],"correct":2},{"quiz":["strict","stern","exacting"],"option":["fastidious","exaltation"],"correct":1},{"quiz":["flower","daffodil","spring"],"option":["conspirator","azalea"],"correct":2},{"quiz":["landscape","fall","harvest"],"option":["immunize","autumnal"],"correct":2},{"quiz":["rock","stone","gigantic"],"option":["outlast","monolith"],"correct":2},{"quiz":["foresight","destiny","prophecy"],"option":["foreknowledge","rapt"],"correct":1},{"quiz":["depravity","back","behind"],"option":["sear","degeneracy"],"correct":2},{"quiz":["live","survive","outlive"],"option":["outlast","urbane"],"correct":1},{"quiz":["secret","covert","sneak"],"option":["infomercial","furtive"],"correct":2}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"},
			"10" : {"area":"sat","level":10,"quizlist":[{"quiz":["world","universe","cosmos"],"option":["macrocosm","headfirst"],"correct":1},{"quiz":["stoop","patronize","yield"],"option":["vocalize","condescend"],"correct":2},{"quiz":["reserved","shy","timid"],"option":["diffident","redundance"],"correct":1},{"quiz":["clairvoyance","horoscope","foresight"],"option":["poach","prescience"],"correct":2},{"quiz":["cash","mortgage","payment"],"option":["requital","undiscerning"],"correct":1},{"quiz":["friendly","kind","obliging"],"option":["complaisant","magistracy"],"correct":1},{"quiz":["influence","effect","interference"],"option":["penstock","militate"],"correct":2},{"quiz":["scared","fearful","frightened"],"option":["debauch","timorous"],"correct":2},{"quiz":["god","praise","idealize"],"option":["bruit","deify"],"correct":2},{"quiz":["rebuke","berate","scold"],"option":["gambol","upbraid"],"correct":2}],"version":"7.0.7","author":"twinword inc.","email":"help@twinword.com","result_code":"200","result_msg":"Success"}
		}
		setWords(stub[choosenLevel])

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
				<h1>Vocabulary Quiz Game</h1>
				<p>Select a level to start</p>
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
				<button onClick={() => { setChoosenLevel(''); setCorrectAnswers([]); setWrongAnswers([]); }}>Go Back</button>
			</div>}
		</div>
	);
}

export default App;
