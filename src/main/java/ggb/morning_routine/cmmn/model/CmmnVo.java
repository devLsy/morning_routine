package ggb.morning_routine.cmmn.model;

import lombok.Data;

@Data
public class CmmnVo {

    /* rownum */
    private int no;

    /* 페이지네이션 필드 */
    private int currentPage = 1;      //현재 페이지
    private int totalCount;       //전체 건수
    private int firstRecordIndex; // 첫번째 게시물 인덱스
    private int lastRecordIndex;  // 마지막 게시물 인덱스

    /* 테이블 공통 필드 */
    private String regDate;                //등록일시
    private String modDate;                //수정일시
}
