export const addScore = (name, score) => {
  const scoresList = document.getElementById('scores-list');
  const listItem = document.createElement('li');
  listItem.textContent = `${name}: ${score}`;
  scoresList.appendChild(listItem);
};

export const refreshScores = () => {
  const scoresList = document.getElementById('scores-list');
  while (scoresList.firstChild) {
    scoresList.removeChild(scoresList.firstChild);
  }
  const scores = [
    { name: 'Name', score: 100 },
    { name: 'Name', score: 20 },
    { name: 'Name', score: 50 },
    { name: 'Name', score: 78 },
    { name: 'Name', score: 125 },
    { name: 'Name', score: 77 },
    { name: 'Name', score: 42 },
  ];
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.name}: ${score.score}`;
    scoresList.appendChild(listItem);
  });
};
