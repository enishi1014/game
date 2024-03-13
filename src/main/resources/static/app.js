document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const minPlayers = document.getElementById('minPlayers').value;
    const maxPlayers = document.getElementById('maxPlayers').value;
    const platform = document.getElementById('platform').value;

    fetch(`/api/game?minPlayers=${minPlayers}&maxPlayers=${maxPlayers}&platform=${platform}`)
    .then(response => response.json())
    .then(data => {
        // デバッグ情報を表示
        const debugInfo = document.getElementById('debugInfo');
        debugInfo.textContent = JSON.stringify(data, null, 2); // データ構造を整形して表示

        // データの処理
        const suggestions = document.getElementById('gameSuggestions');
        const gameCount = document.getElementById('gameCount');
        suggestions.innerHTML = ''; // 既存の提案をクリア

        if (data && Array.isArray(data) && data.length > 0) {
            gameCount.textContent = `Found ${data.length} game(s)`; // 見つかったゲームの数を表示

            data.forEach(game => {
                const div = document.createElement('div');
                div.textContent = game.name; // ゲーム名を設定
                suggestions.appendChild(div); // 提案リストに追加
            });
        } else {
            gameCount.textContent = 'No games found'; // ゲームが見つからない場合のメッセージ
        }
    })
    .catch(error => {
        const errorContainer = document.getElementById('errorContainer');
        errorContainer.textContent = `Error: ${error.message}`; // Web上にエラーを表示
        errorContainer.style.color = 'red'; // エラーメッセージの色を赤に設定
    });



});
