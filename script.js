const m2x = document.getElementById('M2X');
const cf = document.getElementById('CF');
const ubaScores = document.getElementById('ubaScores');
const fedScores = document.getElementById('fedScores');
const uba = document.getElementById('backButtonUBA');
const fed = document.getElementById('backButtonFED');
const selection = document.getElementById('teamSelect');

m2x.addEventListener('click', ubachangeTeam);
cf.addEventListener('click', fedchangeTeam);
uba.addEventListener('click', backFunctionUBA);
fed.addEventListener('click', backFunctionFed);

function ubachangeTeam() {
	console.log('Team Change');
	selection.style.display = 'none';
	ubaScores.style.display = 'flex';
}

function fedchangeTeam() {
	console.log('Team Change');
	selection.style.display = 'none';
	fedScores.style.display = 'flex';
}

function backFunctionUBA() {
	console.log('Clicked Back Button');
	selection.style.display = 'flex';
	ubaScores.style.display = 'none';
}

function backFunctionFed() {
	console.log('Clicked Back Button');
	selection.style.display = 'flex';
	fedScores.style.display = 'none';
}
