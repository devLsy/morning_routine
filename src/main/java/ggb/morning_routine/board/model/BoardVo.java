package ggb.morning_routine.board.model;

import ggb.morning_routine.cmmn.model.CmmnVo;
import lombok.Data;

@Data
public class BoardVo extends CmmnVo {

    private int MORNING_ROUTINE_SNO;                //순번(시퀀스: MORNING_ROUTINE_SNO_SEQ)
    private String RECORD_DATE;                     //기록날짜
    private String BEDTIME;                         //전날 취침시간
    private String WAKE_UP_TIME;                    //기상 예정 시간
    private String WALK_YN;                         //기상시간
    private String SUCCESS_FAILURE_YN;              //산책여부
    private String NOTE;                            //비고
    private String GRATITUDE_JOURNAL;               //감사일기

}
