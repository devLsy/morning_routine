package ggb.morning_routine.board.model;

import ggb.morning_routine.cmmn.model.CmmnVo;
import lombok.Data;

@Data
public class BoardVo extends CmmnVo {

    private int morningRoutineSno;                //순번(시퀀스: MORNING_ROUTINE_SNO_SEQ)
    private String recordDate;                    //기록날짜
    private String bedtime;                       //전날 취침시간
    private String scheduledWakeUpTime;           //기상 예전 시간
    private String wakeUpTime;                    //기상 시간
    private String walkYn;                        //산책 여부
    private String successFailureYn;              //성공 여부
    private String note;                          //비고
    private String gratitudeJournal;              //감사일기

}
