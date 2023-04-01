const form = document.getElementById('form');
const petSelect = document.getElementById('pet-select');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (petSelect.value === '') {
		alert('Please select a pet');
	} else {
		localStorage.setItem('pet', petSelect.value);
		window.location.href = 'page2.html';
	}
});

const hungryBar = document.getElementById('hungry-bar');
const thirstBar = document.getElementById('thirst-bar');
const funBar = document.getElementById('fun-bar');
const healthyBar = document.getElementById('healthy-bar');

let hungryValue = 50;
let thirstValue = 50;
let funValue = 50;
let healthyValue = 50;

hungryBar.style.width = `${hungryValue}%`;
thirstBar.style.width = `${thirstValue}%`;
funBar.style.width = `${funValue}%`;
healthyBar.style.width = `${healthyValue}%`;

const eatBtn = document.getElementById('eat-btn');
const drinkBtn = document.getElementById('drink-btn');
const playBtn = document.getElementById('play-btn');
const talkBtn = document.getElementById('talk-btn');
const jumpBtn = document.getElementById('jump-btn');

eatBtn.addEventListener('click', () => {
	if (hungryValue < 100) {
		hungryValue += 10;
		hungryBar.style.width = `${hungryValue}%`;
	}
});

drinkBtn.addEventListener('click', () => {
	if (thirstValue < 100) {
		thirstValue += 10;
		thirstBar.style.width = `${thirstValue}%`;
	}
});

playBtn.addEventListener('click', () => {
	if (funValue < 100) {
		funValue += 10;
		funBar.style.width = `${funValue}%`;
	}
});

talkBtn.addEventListener('click', () => {
	// Placeholder for talk button functionality
});

jumpBtn.addEventListener('click', () => {
	// Placeholder for jump button functionality
});

function updateHealthyBar() {
	healthyValue = Math.floor((hungryValue + thirstValue + funValue) / 3);
	healthyBar.style.width = `${healthyValue}%`;
}

setInterval(updateHealthyBar, 1000);

