// Create a new game and get the game ID
const createGame = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Your Game Name', // Replace with your desired game name
      }),
    });
    const data = await response.json();
    const gameId = data.result.split(' ')[3]; // Extract game ID from the response message
    localStorage.setItem('gameId', gameId); // Save game ID to localStorage for future use
    return gameId;
  };
  
  // Uncomment the line below to create a new game and log the game ID
  // createGame().then((gameId) => console.log(`Game ID: ${gameId}`));
  