package com.example.gameapp.controller;

import com.example.gameapp.model.Game;
import com.example.gameapp.repository.GameRepository;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GameController {

    //private final GameService gameService;@Autowired
    private final GameRepository gameRepository;

    public GameController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @GetMapping("/game")
    public List<Game> getGames(@RequestParam int Players, @RequestParam String platform){
        return gameRepository.findByPlayersAndPlatform(Players, platform);
    }
}
