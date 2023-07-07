package ggb.morning_routine.board.web;

import ggb.morning_routine.board.service.BoardService;
import ggb.morning_routine.cmmn.model.CmmnVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/board")
public class BoardRestController {

    private final BoardService boardService;

    /**
     * 게시글 조회
     * @param cmmnVo
     * @return
     */
    @GetMapping("")
    public ResponseEntity selectBoardList(CmmnVo cmmnVo) throws Exception {
        return boardService.selectBoardList(cmmnVo);
    }
}
