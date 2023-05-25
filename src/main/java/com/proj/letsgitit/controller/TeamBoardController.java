package com.proj.letsgitit.controller;

import com.proj.letsgitit.entity.TeamBoard;
import com.proj.letsgitit.service.TeamBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/team")
public class TeamBoardController {
    @Autowired
    TeamBoardService tbService;

    @ResponseBody
    @GetMapping("/{tbIdx}")
    public ResponseEntity<Object> getTB(@PathVariable("tbIdx") int tbIdx) {
        return ResponseEntity.ok().body(tbService.getTB(tbIdx));
    }

    @ResponseBody
    @PostMapping("")
    public ResponseEntity<Object> postTB(@RequestBody TeamBoard tb) {
        TeamBoard newTB = tbService.createTB(tb);
        return ResponseEntity.ok().body(newTB);
    }

    @ResponseBody
    @GetMapping("")
    public ResponseEntity<Object> getTBs() {
        return ResponseEntity.ok().body(tbService.getTBs());
    }

    @ResponseBody
    @DeleteMapping ("/{tbIdx}")
    public ResponseEntity<Object> deleteTB(@PathVariable("tbIdx") int tbIdx) {
        return ResponseEntity.ok().body(tbService.deleteTB(tbIdx));
    }

    @ResponseBody
    @PutMapping("/{tbIdx}")
    public ResponseEntity<Object> updateTB(@RequestBody TeamBoard tb) {
        return ResponseEntity.ok().body(tbService.updateTB(tb));
    }

}
