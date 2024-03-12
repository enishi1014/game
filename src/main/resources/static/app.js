document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const minPlayers = document.getElementById('minPlayers').value;
    const maxPlayers = document.getElementById('maxPlayers').value;
    const platform = document.getElementById('platform').value;

    fetch(`/games?minPlayers=${minPlayers}&maxPlayers=${maxPlayers}&platform=${platform}`)
        .then(response => response.json())
        .then(games => {
            const suggestions = document.getElementById('gameSuggestions');
            suggestions.innerHTML = ''; // 以前の結果をクリア
            games.forEach(game => {
                const div = document.createElement('div');
                div.textContent = game.name;
                suggestions.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
});
