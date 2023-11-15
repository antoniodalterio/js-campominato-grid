'use strict';

/* 
Funzioni
*/

// Funzione Creazione elementi nel document

function cellFunction(tag, className, content) {
  const element = document.createElement(tag);
  element.append(content);
  element.classList.add(className);
  return element;
}

/* 
Funzioni
*/

const board = document.querySelector('.board');
let cell = '';

for (let i = 1; i <= 100; i++) {
  cell = cellFunction('div', 'cell', i);
  board.append(cell);
  console.log(cell);
}

const btnPlay = document.getElementById('bottone-play');

btnPlay.addEventListener('click', function (e) {
  board.classList.toggle('d-none');
});
