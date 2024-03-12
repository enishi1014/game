package com.example.gameapp.service;

import com.example.gameapp.model.Game;
import com.example.gameapp.repository.GameRepository;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;

    //@Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> findGamesByPlayersAndPlatform(int minPlayers, int maxPlayers, String platform) {
        return gameRepository.findByPlayersAndPlatform(minPlayers, maxPlayers, platform);
    }
}
