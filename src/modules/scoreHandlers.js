// Retrieve the game ID from localStorage or set it manually
const gameId = localStorage.getItem('gameId') || 'cubtuwZUF1WDalbuocz5'; // Replace 'your_game_id_here' with the actual game ID

// Function to add a score using the API
export const addScore = async (name, score) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name, score: Number(score) }),
    });
    const data = await response.json();
    if (data.result) {
      await refreshScores(); // Refresh scores upon successful addition
    }
    return data;
  } catch (error) {
    console.error('Error adding score:', error);
  }
};

// Function to refresh scores using the API
export const refreshScores = async () => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    const data = await response.json();
    const scoresList = document.getElementById('scores-list');
    scoresList.innerHTML = ''; // Clear the list before appending new scores

    data.result.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${score.user}: ${score.score}`;
      scoresList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching scores:', error);
  }
};
