// Global variables and DOM objects.

const ol = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
let li = document.createElement('li');
const buttonClear = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const input = document.getElementById('texto-tarefa');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
const buttonRemoveSelected = document.getElementById('remover-selecionado');

// Function that add an text from input to my list.

function createItem() {
  const getInput = input.value;
  if (getInput.length >= 1) {
    li = document.createElement('li');
    ol.appendChild(li);
    li.appendChild(document.createTextNode(getInput));
  }
  input.value = '';
}

button.addEventListener('click', createItem);

// Enable 'enter' to add text to the list

function enter(e) {
  if (e.keyCode === 13) {
    createItem();
  }
}

input.addEventListener('keypress', enter);

// Highlight the selected item with the color gray.

function changeItemColor(eventoColor) {
  if (eventoColor.target.tagName === 'LI') {
    const selectedListItem = document.querySelector('.selected');
    if (selectedListItem == null) {
      eventoColor.target.classList.add('selected');
    } else if (selectedListItem !== eventoColor.target) {
      selectedListItem.classList.remove('selected');
      eventoColor.target.classList.add('selected');
    }
  }
}

ol.addEventListener('click', changeItemColor);

// Risk the completed item after double click.

function riskItem(eventoCompleted) {
  if (eventoCompleted.target.tagName === 'LI') {
    eventoCompleted.target.classList.toggle('completed');
  }
}

ol.addEventListener('dblclick', riskItem);

// Clear the entire list.

function clearList() {
  ol.textContent = ''; // Works, and it is the faster option.
  // ol.innerHTML = ''; Works, but is slower
  // ol.removeChild(ol.childNodes[0]); Works, but remove one by one.
}

buttonClear.addEventListener('click', clearList);

// Remove the completed (risked) item.

function removeCompletedItem() {
  const listItemDone = document.querySelectorAll('.completed');
  for (let i = 0; i < listItemDone.length; i += 1) {
    listItemDone[i].remove();
  }
}

buttonRemoveCompleted.addEventListener('click', removeCompletedItem);

// Save the list into the local storage.

function setLocalStorage() {
  const savedArray = []; // Creates an array so i can save my list itens in order
  const savedClassArray = [];
  for (let j = 0; j < ol.children.length; j += 1) {
    savedArray.push(ol.children[j].textContent);
    savedClassArray.push(ol.children[j].className); // To save the class .completed
  } // Does the job saving every list item into his respective order.
  const stringifyArray = JSON.stringify(savedArray); // It is converted as JSON, but i let the program know that it was a string before.
  const stringifyClassArray = JSON.stringify(savedClassArray);
  localStorage.setItem('liText', stringifyArray); // stringfyArray is my ol.textContent, just in array form, if it was not this way, it would put every single list item into the same line.
  localStorage.setItem('liClass', stringifyClassArray);
}

saveButton.addEventListener('click', setLocalStorage);

// Get the saved list itens from local storage.

const saved = JSON.parse(localStorage.getItem('liText'));
const savedClass = JSON.parse(localStorage.getItem('liClass'));

if (saved) {
  for (let k = 0; k < saved.length; k += 1) {
    li = document.createElement('li');
    li.className = savedClass[k];
    li.innerHTML = saved[k];
    ol.appendChild(li);
  }
}

function goUp() {
  const selectedLi = document.querySelector('.selected');
  if (selectedLi !== null && selectedLi.previousElementSibling !== null) {
    const previousLi = selectedLi.previousElementSibling;
    previousLi.insertAdjacentElement('beforebegin', selectedLi);
  }
}

buttonUp.addEventListener('click', goUp);

function goDown() {
  const selectedLi = document.querySelector('.selected');
  if (selectedLi !== null && selectedLi.nextElementSibling !== null) {
    const nextLi = selectedLi.nextElementSibling;
    nextLi.insertAdjacentElement('afterend', selectedLi);
  }
}

buttonDown.addEventListener('click', goDown);

function removeSelected() {
  const selectedLi = document.querySelector('.selected');
  if (selectedLi !== null) {
    ol.removeChild(selectedLi);
  }
}
buttonRemoveSelected.addEventListener('click', removeSelected);
