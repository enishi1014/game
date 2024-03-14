document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const players = document.getElementById('Players').value;


    const platform = document.querySelector('input[name="platform"]:checked').value;

    fetch(`/api/game?Players=${players}&platform=${platform}`)
    .then(response => response.json())
    .then(data => {

        const suggestions = document.getElementById('gameSuggestions');
        const gameCount = document.getElementById('gameCount');
        suggestions.innerHTML = ''; 

        if (data && Array.isArray(data) && data.length > 0) {
            gameCount.textContent = `Found ${data.length} game(s)`;

            data.forEach(game => {
                
                const card = document.createElement('div');
                card.className = 'game-card';
            
                const name = document.createElement('div');
                name.className = 'game-name';
                name.textContent = game.name;
            
                const minPlayers = document.createElement('div');
                minPlayers.className = 'game-info';
                minPlayers.textContent = `Min players: ${game.minPlayers}`;
            
                const maxPlayers = document.createElement('div');
                maxPlayers.className = 'game-info';
                maxPlayers.textContent = `Max players: ${game.maxPlayers}`;
            
                const platform = document.createElement('div');
                platform.className = 'game-info';
                platform.textContent = `Platform: ${game.platform}`;
            
                card.appendChild(name);
                card.appendChild(minPlayers);
                card.appendChild(maxPlayers);
                card.appendChild(platform);
            
                suggestions.appendChild(card);
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

function updatePlayersValue(value) {
    document.getElementById('playersValue').textContent = value;
}
