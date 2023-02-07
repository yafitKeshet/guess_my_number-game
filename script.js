'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const highScoreEl = document.querySelector('.highscore');

const checkButtonEl = document.querySelector('.check');
checkButtonEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    messageEl.textContent = 'no number :(';
  } else if (guess === secretNumber) {
    messageEl.textContent = 'correct number :)';
    numberEl.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    if (Number(highScoreEl.textContent) < Number(scoreEl.textContent)) {
      highScoreEl.textContent = scoreEl.textContent;
    }
  } else {
    if (Number(scoreEl.textContent) > 1) {
      messageEl.textContent = guess > secretNumber ? 'too high' : 'too low';
      scoreEl.textContent--;
    } else {
      messageEl.textContent = 'you lost the game!';
      scoreEl.textContent = 0;
    }
  }
});

const againButtonEl = document.querySelector('.again');
againButtonEl.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageEl.textContent = 'start guessing...';
  scoreEl.textContent = '20';
  guessEl.value = '';
  numberEl.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
