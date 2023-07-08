package ggb.morning_routine.board.service;

import ggb.morning_routine.board.mapper.BoardMapper;
import ggb.morning_routine.board.model.BoardVo;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
class BoardServiceTest {

    @Autowired
    private BoardMapper boardMapper;

    @Test
    @DisplayName("게시글등록")
    @Commit
    public void 게시글등록() throws Exception {
        //givin
        BoardVo boardVo = new BoardVo();
        boardVo.setRecordDate("20230621");
        boardVo.setBedtime("20230620 22:40");
        boardVo.setWakeUpTime("20230621 05:00");
        //when

        //then
    }

}