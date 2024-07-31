import './style.css';
import { addScore, refreshScores } from './modules/scoreHandlers.js';

const form = document.getElementById('score-form');
const refreshButton = document.getElementById('refresh');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  await addScore(name, score); // Add the score using the async function
  form.reset(); // Reset the form fields
});

refreshButton.addEventListener('click', async () => {
  await refreshScores(); // Refresh scores using the async function
});