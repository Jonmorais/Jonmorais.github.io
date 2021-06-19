const colorText = document.querySelector('#rgb-color');
const ballPick = document.getElementsByClassName('ball');
const score = document.getElementById('score');
let scoreNumber = 0;
score.innerHTML = scoreNumber;

let randomColor = 0;
function rgbRandomGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

rgbRandomGenerator();
const ballsContainer = document.querySelector('#balls-container');
const textParent = document.getElementById('answer');
const text = document.createElement('h2');
text.innerText = 'Escolha uma cor';
textParent.appendChild(text);

for (let i = 0; i < 6; i += 1) {
  const ball = document.createElement('div');
  ball.style.backgroundColor = rgbRandomGenerator();
  ball.className = 'ball';
  ballsContainer.appendChild(ball);
}

function selectRightColor() {
  const index = Math.floor(Math.random() * ballPick.length);
  randomColor = ballPick[index].style.backgroundColor;
}

selectRightColor();

colorText.innerHTML = randomColor;

function rightOrNot(event) {
  if (event.target.className === 'ball') {
    if (event.target.style.backgroundColor !== randomColor) {
      text.innerText = 'Errou! Tente novamente!';
    } else {
      text.innerText = 'Acertou!';
      scoreNumber += 3;
      score.innerHTML = scoreNumber 
      localStorage.setItem('scoreValue', score.innerHTML);
    }
  }
}

const saved = localStorage.getItem('scoreValue');
if (saved) {
  score.innerHTML = saved;
}


document.addEventListener('click', rightOrNot);

const resetButton = document.getElementById('reset-game');

function reset() {
  document.location.reload();
}

resetButton.addEventListener('click', reset);
