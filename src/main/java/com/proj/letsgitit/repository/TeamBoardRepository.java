package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.TeamBoard;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TeamBoardRepository extends CrudRepository<TeamBoard, Integer> {
    public TeamBoard findTeamBoardByTbId(int tbId);
    public List<TeamBoard> findAll();
}
