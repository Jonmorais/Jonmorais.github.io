// Desafio 1

function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let maximum = Math.max.apply(null, numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (maximum === numbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1Mouse = Math.abs(cat1 - mouse);
  let distanceCat2Mouse = Math.abs(cat2 - mouse);
  if (distanceCat1Mouse < distanceCat2Mouse) {
    return 'cat1';
  }
  if (distanceCat1Mouse === distanceCat2Mouse) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8

function ifElseFizz(numbersArray) {
  let getString = '';
  if (numbersArray % 3 === 0 && numbersArray % 5 === 0) {
    getString = 'fizzBuzz';
  } else if (numbersArray % 3 === 0) {
    getString = 'fizz';
  } else if (numbersArray % 5 === 0) {
    getString = 'buzz';
  } else {
    getString = 'bug!';
  }
  return getString;
}

function fizzBuzz(numbersList) {
  let getFizz = [];
  for (let index = 0; index < numbersList.length; index += 1) {
    getFizz.push(ifElseFizz(numbersList[index]));
  }
  return getFizz;
}

// Desafio 9

function encode(str) {
  let table = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let encodedString = '';
  for (let index = 0; index < str.length; index += 1) {
    if (table[str[index]] === undefined) {
      encodedString += str[index];
    } else {
      encodedString += table[str[index]];
    }
  }
  return encodedString;
}

function decode(str) {
  let table = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  for (let index = 0; index < str.length; index += 1) {
    if (table[str[index]] === undefined) {
      decodedString += str[index];
    } else {
      decodedString += table[str[index]];
    }
  }
  return decodedString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
