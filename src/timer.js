const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

const calculateTime = (time) => {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`;
}
function calculateTimeFraction() {
    return timeLeft / TIME_LIMIT;
  }
  const FULL_DASH_ARRAY = 2826
  // Update the dasharray value as time passes, starting with 283
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
const startTimer = () => {
    timerInterval = setInterval(() => {
      
      // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
      
      // The time left label is updated
      document.getElementById("base-timer-label").innerHTML = calculateTime(timeLeft);
      setCircleDasharray();
    }, 1000);
  }

// start timer
startTimer();
let remainingPathColor = "green"

`<div class="base-timer">
				<svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<g class="base-timer__circle">
						<circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
						<path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class={'base-timer__path-remaining ' + remainingPathColor}
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
					</g>
				</svg>
				<span id="base-timer-label" class="base-timer__label">
					{calculateTime(timeLeft)}
				</span>
			</div>`

      console.log(req.query);
      res.json({ "area": "sat", "author": "twinwordinc.", "email": "help@twinword.com", "level": 3, "quizlist": [{ "correct": 2, "option": ["jury", "assess"], "quiz": ["value", "estimate", "evaluate"] }, { "correct": 2, "option": ["trace", "adjacent"], "quiz": ["close", "near", "next"] }, { "correct": 2, "option": ["mad", "exotic"], "quiz": ["foreign", "national", "ethnic"] }, { "correct": 1, "option": ["forecast", "sustainable"], "quiz": ["assume", "insight", "weather"] }, { "correct": 2, "option": ["charity", "rapid"], "quiz": ["fast", "quick", "prompt"] }, { "correct": 2, "option": ["par", "intermediate"], "quiz": ["center", "middle", "average"] }, { "correct": 1, "option": ["vendor", "adjust"], "quiz": ["seller", "employee", "merchant"] }, { "correct": 2, "option": ["banking", "thesis"], "quiz": ["college", "degree", "learning"] }, { "correct": 2, "option": ["compile", "bass"], "quiz": ["fishing", "guitar", "sea"] }, { "correct": 1, "option": ["transparent", "differently"], "quiz": ["clear", "liquid", "plain"] }], "result_code": "200", "result_msg": "Success", "version": "4.0.0" }
      );