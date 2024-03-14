package com.example.gameapp.repository;

import com.example.gameapp.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface GameRepository extends JpaRepository<Game, Long> {
    
    @Query("SELECT g FROM Game g WHERE g.minPlayers <= :Players AND g.maxPlayers >= :Players AND g.platform = :platform")
    List<Game> findByPlayersAndPlatform(@Param("Players") int Players, @Param("platform") String platform);
}
