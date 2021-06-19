const colorPalett = document.getElementsByClassName('color');

const black = document.getElementsByClassName('color')[0];
const aqua = document.getElementsByClassName('color')[1];
const green = document.getElementsByClassName('color')[2];
const purple = document.getElementsByClassName('color')[3];

const selectedPalett = document.querySelectorAll('.color');
const selectedPixel = document.querySelectorAll('.pixel');

function colorForPalett() {
  const colorList = [
    black.style.backgroundColor = 'black',
    aqua.style.backgroundColor = 'aqua',
    green.style.backgroundColor = 'green',
    purple.style.backgroundColor = 'purple',
  ];
  for (let c = 0; c < colorPalett.length; c += 1) {
    colorPalett[c] = colorList[c];
  }
}

function removeAddSelect(eventoDeOrigem) {
  for (let z = 0; z < selectedPalett.length; z += 1) {
    selectedPalett[z].classList.remove('selected');
  }
  const selected = eventoDeOrigem.target;
  selected.classList.add('selected');
}

function eventSelect() {
  for (let j = 0; j < selectedPalett.length; j += 1) {
    selectedPalett[j].addEventListener('click', removeAddSelect);
  }
}

function colorTrigger(eventColored) {
  const getColor = document.querySelector('.selected');
  const bgColor = getComputedStyle(getColor).backgroundColor;
  const event = eventColored;
  event.target.style.backgroundColor = bgColor;
}

for (let z = 0; z < selectedPixel.length; z += 1) {
  selectedPixel[z].addEventListener('click', colorTrigger);
}

eventSelect();
colorForPalett();
