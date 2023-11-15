'use strict';

// Funzioni

const board = document.querySelector('.board');

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement('div');
  cell.append(i);
  cell.classList.add('cell');
  console.log(cell);

  board.append(cell);
}
