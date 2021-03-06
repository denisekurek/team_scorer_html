const m2x = document.getElementById('M2X');
const cf = document.getElementById('CF');
const ubaScores = document.getElementById('ubaScores');
const fedScores = document.getElementById('fedScores');
const uba = document.getElementById('backButtonUBA');
const fed = document.getElementById('backButtonFED');
const selection = document.getElementById('teamSelect');
const ubaScratch = document.getElementById('ubaScratch');
const ubaHandicap1 = document.getElementById('ubaHandi1');
const ubaHandicap2 = document.getElementById('ubaHandi2');
const fedScratch = document.getElementById('fedScratch');
const fedHybrid = document.getElementById('fedHybrid');
const fedHandicap = document.getElementById('fedHandicap');
let m2xScore = 0;
let cfScore = 0;
let oppScore = 0;
let winner = 0;
let m2xHandicap = 0;
// let cfHandicap = 0;
let oppHandicap = 0;
// let ubaScoreCount = 2;
// let fedScoreCount = 1;
let pair1Game = 1;
// let pair2Game = 1;
// let pair3Game = 1;
let pair1Total = 0;
// let pair2Total = 0;
// let pair3Total = 0;
let pair1TotalOpp = 0;
// let pair2TotalOpp = 0;
// let pair3TotalOpp = 0;

m2x.addEventListener('click', ubachangeTeam);
cf.addEventListener('click', fedchangeTeam);
uba.addEventListener('click', backFunctionUBA);
fed.addEventListener('click', backFunctionFed);
ubaScratch.addEventListener('click', ubaCalcScr);
// ubaHandicap1.addEventListener('click', ubaCalcHandi1);
// ubaHandicap2.addEventListener('click', ubaCalcHandi2);
// fedScratch.addEventListener('click', fedCalcScr);
// fedHybrid.addEventListener('click', fedCalcHybrid);
// fedHandicap.addEventListener('click', fedCalcHandicap);

function ubachangeTeam() {
	// console.log('Team Change');
	selection.style.display = 'none';
	ubaScores.style.display = 'flex';
	m2xScore = 0;
	cfScore = 0;
	oppScore = 0;
	m2xHandicap = 0;
	cfHandicap = 0;
	oppHandicap = 0;
}

function fedchangeTeam() {
	// console.log('Team Change');
	selection.style.display = 'none';
	fedScores.style.display = 'flex';
	m2xScore = 0;
	cfScore = 0;
	oppScore = 0;
	m2xHandicap = 0;
	cfHandicap = 0;
	oppHandicap = 0;
}

function backFunctionUBA() {
	// console.log('Clicked Back Button');
	selection.style.display = 'flex';
	ubaScores.style.display = 'none';
	m2xScore = 0;
	cfScore = 0;
	oppScore = 0;
	m2xHandicap = 0;
	cfHandicap = 0;
	oppHandicap = 0;
}

function backFunctionFed() {
	// console.log('Clicked Back Button');
	selection.style.display = 'flex';
	fedScores.style.display = 'none';
	m2xScore = 0;
	cfScore = 0;
	oppScore = 0;
	m2xHandicap = 0;
	cfHandicap = 0;
	oppHandicap = 0;
}

function CalculateUBAScores(
	motionScore,
	motionHandicap,
	oppScore,
	oppHandicap
) {
	//Return winner and total scores
	if (motionScore + motionHandicap > oppScore + oppHandicap) {
		console.log('M2X Wins Game');
		return '1';
	} else if (oppScore + oppHandicap > motionScore + motionHandicap) {
		console.log('Opp Wins Game');
		return '-1';
	} else {
		console.log('Draw');
		return '0';
	}
}

function ubaCalcScr() {
	// Get value for each teams scores
	m2xScore = parseInt(document.getElementById('m2xScratchScore').value);
	oppScore = parseInt(document.getElementById('oppScratchScoreUBA').value);

	//Calculating who won the game with scores
	//mx2 = 1, opp = -1, draw = 0
	winner = CalculateUBAScores(m2xScore, m2xHandicap, oppScore, oppHandicap);

	//Update Points won and Team Totals and change page elements to reflect new totals
	pair1Total += m2xScore;
	pair1TotalOpp += oppScore;
	console.log('M2X total: ' + pair1Total);
	console.log('Opp Total: ' + pair1TotalOpp);

	//Update Game being displayed - complete
	let game = document.getElementById('ubaScratchGame');
	console.log('Game:' + pair1Game);
	pair1Game++;
	game.innerHTML = pair1Game.toString();

	//Remove scores from previous game
}

// function ubaCalcHandi1() {
// 	console.log('Uba Handicap 1');
// 	m2xScore = document.getElementById('m2xHand1Score').value;
// 	console.log(m2xScore);
// 	m2xHandicap = document.getElementById('m2xHand1Cap').value;
// 	console.log(m2xHandicap);
// 	oppScore = document.getElementById('oppHand1ScoreUBA').value;
// 	console.log(oppScore);
// 	oppHandicap = document.getElementById('oppHand1CapUBA').value;
// 	console.log(oppHandicap);
// }

// function ubaCalcHandi2() {
// 	console.log('Uba handicap 2');
// 	m2xScore = document.getElementById('m2xHand2Score').value;
// 	console.log(m2xScore);
// 	m2xHandicap = document.getElementById('m2xHand2Cap').value;
// 	console.log(m2xHandicap);
// 	oppScore = document.getElementById('oppHand2ScoreUBA').value;
// 	console.log(oppScore);
// 	oppHandicap = document.getElementById('oppHand2CapUBA').value;
// 	console.log(oppHandicap);
// }

// function fedCalcScr() {
// 	console.log('Fed Scratch');
// 	cfScore = document.getElementById('cfScratchScore').value;
// 	console.log(cfScore);
// 	oppScore = document.getElementById('oppScratchScoreFed').value;
// 	console.log(oppScore);
// }

// function fedCalcHybrid() {
// 	console.log('Fed Hybrid');
// 	cfScore = document.getElementById('cfHybridScratchScore').value;
// 	console.log(cfScore);
// 	cfHandicap = document.getElementById('cfHybridCap').value;
// 	console.log(cfHandicap);
// 	oppScore = document.getElementById('oppHybridScratchScoreFed').value;
// 	console.log(oppScore);
// 	oppHandicap = document.getElementById('oppHybridCapFed').value;
// 	console.log(oppHandicap);
// }

// function fedCalcHandicap() {
// 	console.log('Fed Handicap');
// 	m2xScore = document.getElementById('cfHandScore').value;
// 	console.log(m2xScore);
// 	m2xHandicap = document.getElementById('cfHandCap').value;
// 	console.log(m2xHandicap);
// 	oppScore = document.getElementById('oppHandScoreFed').value;
// 	console.log(oppScore);
// 	oppHandicap = document.getElementById('oppHandCapFed').value;
// 	console.log(oppHandicap);
// }
