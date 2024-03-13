document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const minPlayers = document.getElementById('minPlayers').value;
    const maxPlayers = document.getElementById('maxPlayers').value;
    const platform = document.getElementById('platform').value;

    fetch(`/api/game?minPlayers=${minPlayers}&maxPlayers=${maxPlayers}&platform=${platform}`)
    .then(response => response.json())
    .then(data => {

        const suggestions = document.getElementById('gameSuggestions');
        const gameCount = document.getElementById('gameCount');
        suggestions.innerHTML = ''; 

        if (data && Array.isArray(data) && data.length > 0) {
            gameCount.textContent = `Found ${data.length} game(s)`;

            data.forEach(game => {
                const div = document.createElement('div');
                div.textContent = game.name; 
                suggestions.appendChild(div); 
            });
        } else {
            gameCount.textContent = 'No games found'; 
        }
    })
    .catch(error => {
        const errorContainer = document.getElementById('errorContainer');
        errorContainer.textContent = `Error: ${error.message}`; 
        errorContainer.style.color = 'red'; 
    });



});
