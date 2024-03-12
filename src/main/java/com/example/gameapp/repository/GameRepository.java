package com.example.gameapp.repository;

import com.example.gameapp.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface GameRepository extends JpaRepository<Game, Long> {
    
    @Query("SELECT g FROM Game g WHERE g.minPlayers <= :minPlayers AND g.maxPlayers >= :maxPlayers AND g.platform = :platform")
    List<Game> findByPlayersAndPlatform(@Param("minPlayers") int minPlayers, @Param("maxPlayers") int maxPlayers, @Param("platform") String platform);
}
