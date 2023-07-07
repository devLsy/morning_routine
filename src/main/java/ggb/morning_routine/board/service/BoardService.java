package ggb.morning_routine.board.service;

import ggb.morning_routine.board.mapper.BoardMapper;
import ggb.morning_routine.board.model.BoardVo;
import ggb.morning_routine.cmmn.model.CmmnVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class BoardService {

    private final BoardMapper boardMapper;

    /**
     * 게시글 목록 조회
     * @param cmmnVo
     * @return
     */
    public ResponseEntity selectBoardList(CmmnVo cmmnVo) throws Exception{
        Map<String, Object> resultMap = new HashMap<>();
        //게시글 조회
        List<BoardVo> boardList = boardMapper.selectBoardList(cmmnVo);
        resultMap.put("list", (boardList != null && boardList.size() > 0) ? boardList : "");
        return new ResponseEntity(resultMap, HttpStatus.OK);
    }
}
