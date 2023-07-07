package ggb.morning_routine.board.mapper;

import ggb.morning_routine.board.model.BoardVo;
import ggb.morning_routine.cmmn.model.CmmnVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

    /* 게시글 목록 조회 */
    List<BoardVo> selectBoardList(CmmnVo cmmnVo);
}
