import { addScore, refreshScores } from './modules/scoreHandlers.js';

const form = document.getElementById('score-form');
const refreshButton = document.getElementById('refresh');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  addScore(name, score);
});

refreshButton.addEventListener('click', () => {
  refreshScores();
});
