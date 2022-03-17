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
// let cfScore = 0;
let oppScore = 0;
let m2xHandicap = 0;
let oppHandicap = 0;

let m2xScratchTotal = 0;
let oppScratchTotal = 0;

m2x.addEventListener('click', ubachangeTeam);
cf.addEventListener('click', fedchangeTeam);
uba.addEventListener('click', backFunctionUBA);
fed.addEventListener('click', backFunctionFed);
ubaScratch.addEventListener('click', ubaCalcScr);
ubaHandicap1.addEventListener('click', ubaCalcHandi1);
ubaHandicap2.addEventListener('click', ubaCalcHandi2);
fedScratch.addEventListener('click', fedCalcScr);
fedHybrid.addEventListener('click', fedCalcHybrid);
fedHandicap.addEventListener('click', fedCalcHandicap);

function ubachangeTeam() {
	// console.log('Team Change');
	selection.style.display = 'none';
	ubaScores.style.display = 'flex';
}

function fedchangeTeam() {
	// console.log('Team Change');
	selection.style.display = 'none';
	fedScores.style.display = 'flex';
}

function backFunctionUBA() {
	// console.log('Clicked Back Button');
	selection.style.display = 'flex';
	ubaScores.style.display = 'none';
}

function backFunctionFed() {
	// console.log('Clicked Back Button');
	selection.style.display = 'flex';
	fedScores.style.display = 'none';
}

function ubaCalcScr() {
	console.log('Uba Scratch');
	m2xScore = document.getElementById('m2xScratchScore').value;
	console.log(m2xScore);
	oppScore = document.getElementById('oppScratchScore').value;
	console.log(oppScore);
}

function ubaCalcHandi1() {
	console.log('Uba Handicap 1');
	m2xScore = document.getElementById('m2xHand1Score').value;
	console.log(m2xScore);
	m2xHandicap = document.getElementById('m2xHand1Cap').value;
	console.log(m2xHandicap);
	oppScore = document.getElementById('oppHand1Score').value;
	console.log(oppScore);
	oppHandicap = document.getElementById('oppHand1Cap').value;
	console.log(oppHandicap);
}

function ubaCalcHandi2() {
	console.log('Uba handicap 2');
	m2xScore = document.getElementById('m2xHand2Score').value;
	console.log(m2xScore);
	m2xHandicap = document.getElementById('m2xHand2Cap').value;
	console.log(m2xHandicap);
	oppScore = document.getElementById('oppHand2Score').value;
	console.log(oppScore);
	oppHandicap = document.getElementById('oppHand2Cap').value;
	console.log(oppHandicap);
}

function fedCalcScr() {
	console.log('Fed Scratch');
}

function fedCalcHybrid() {
	console.log('Fed Hybrid');
}

function fedCalcHandicap() {
	console.log('Fed Handicap');
}
