const input = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function createMemeText() {
  const getInput = input.value;
  memeText.textContent = getInput;
}

input.addEventListener('keyup', createMemeText);
