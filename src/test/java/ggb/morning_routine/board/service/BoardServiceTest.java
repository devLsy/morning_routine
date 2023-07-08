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
        boardVo.setScheduledWakeUpTime("20230621 05:00");
        boardVo.setWakeUpTime("20230621 08:14");
        boardVo.setWalkYn("N");
        boardVo.setSuccessFailureYn("N");
        boardVo.setNote("05시에 일어났으나 알람 6시로 맞추고 다시 6시에 일어나서 알람 07시로 맞추고 이짓을 반복하다 결국 8시14분에 기상함");
        boardMapper.insertBoard(boardVo);
        //when

        //then
    }

}