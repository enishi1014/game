package com.example.gameapp.controller;

import com.example.gameapp.model.Game;
import com.example.gameapp.service.GameService;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GameController {

    private final GameService gameService;

    //@Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/games")
    public List<Game> getGames(@RequestParam int minPlayers, @RequestParam int maxPlayers, @RequestParam String platform) {
        return gameService.findGamesByPlayersAndPlatform(minPlayers, maxPlayers, platform);
    }
}
