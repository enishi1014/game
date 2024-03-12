package com.example.gameapp;

import com.example.gameapp.model.Game;
import com.example.gameapp.repository.GameRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GameApplication {

    public static void main(String[] args) {
        SpringApplication.run(GameApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(GameRepository repository) {
        return args -> {
            repository.save(new Game("Example Game 1", 1, 4, "PC"));
            repository.save(new Game("Example Game 2", 2, 6, "Console"));
            // ここに他のサンプルデータを挿入するコードを追加できます
        };
    }
}
