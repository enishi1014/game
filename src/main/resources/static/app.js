document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const minPlayers = document.getElementById('minPlayers').value;
    const maxPlayers = document.getElementById('maxPlayers').value;
    const platform = document.getElementById('platform').value;

    fetch(`/game?minPlayers=${minPlayers}&maxPlayers=${maxPlayers}&platform=${platform}`)
        .then(response => response.json())
        .then(games => {
            const suggestions = document.getElementById('gameSuggestions');
            suggestions.innerHTML = ''; 
            games.forEach(game => {
                const div = document.createElement('div');
                div.textContent = game.name;
                suggestions.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
});
