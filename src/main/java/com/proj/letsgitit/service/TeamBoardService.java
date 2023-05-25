package com.proj.letsgitit.service;

import com.proj.letsgitit.entity.TeamBoard;
import com.proj.letsgitit.repository.TeamBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamBoardService {
    @Autowired
    UserService userService;
    @Autowired
    TeamBoardRepository tbRepository;

    public TeamBoard createTB(TeamBoard tb) {
        TeamBoard newTB = tbRepository.save(tb);
        return newTB;
    }

    public TeamBoard getTB(int tbIdx) {
        TeamBoard getTB = tbRepository.findTeamBoardByTbId(tbIdx);
        return getTB;
    }

    public List<TeamBoard> getTBs() {
        return tbRepository.findAll();
    }

    public int deleteTB(int tbIdx) {
        try {
            tbRepository.delete(getTB(tbIdx));
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
        return 1;
    }

    public int updateTB(TeamBoard tb) {
        TeamBoard getTB = tbRepository.findTeamBoardByTbId(tb.getTbId());
        getTB.setTitle(tb.getTitle());
        getTB.setContent(tb.getContent());
        getTB.setWebCount(tb.getWebCount());
        getTB.setIosCount(tb.getIosCount());
        getTB.setAndroidCount(tb.getAndroidCount());
        getTB.setServerCount(tb.getServerCount());
        getTB.setLanguage(tb.getLanguage());
        getTB.setPeriod(tb.getPeriod());
        getTB.setMeetingType(tb.getMeetingType());
        getTB.setRegion(tb.getRegion());
        try {
            tbRepository.save(getTB);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
        return 1;
    }
}
