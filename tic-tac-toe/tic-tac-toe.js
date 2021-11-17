
// constants

let board;

let turn = 'x';

let grid = document.querySelector('.board');
const squares = Array.from(grid.querySelectorAll('div'));

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// event listeners
document.querySelector('.board').addEventListener('click', takeTurn);

// functions

function draw() {
  board.forEach((mark, index) => {
    squares[index].textContent = mark;
  });
}

function getWinner() {

  const populateValues = winningCombos.map(combo => {
    combo.forEach((element, index, array) => {
      array[index] = board[element];
    });
    // add every() here
    return combo;
  });
  console.log(populateValues);
}

function tie() {
  const tieboard = board.every(square => square.length > 0);
  if (tieboard) {
    alert('the game is a tie');
    return;
  }
}

function takeTurn(event) {
  const index = squares.findIndex(square => square === event.target);
  if (board[index].length > 0) {
    alert('pick another space that one is taken');
    return;
  }
  board[index] = turn;
  if (turn === 'x') {
    turn = 'o';
  } else {
    turn = 'x';
  }
  draw();
  tie();
  getWinner();
}

function start() {
  board = ['', '', '', '', '', '', '', '', ''];
}


start();
