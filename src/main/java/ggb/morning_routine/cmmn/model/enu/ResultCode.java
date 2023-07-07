package ggb.morning_routine.cmmn.model.enu;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum ResultCode {

    SUCCESS("1", "성공"),
    FAIL("2", "실패"),
    DUPLICATE("3", "데이터가 중복됩니다."),
    NO_INIT_DATA("4", "초기 데이터가 없습니다."),
    NOT_EXIST("5", "데이터가 존재하지 않습니다.");

    private final String code;
    private final String msg;

    /**
     * parameter로 넘어온 코드와 매핑되는 msg를 출력한다.
     * @param code
     * @return
     */
    public static String getResultMsg(String code) {

        String returnMsg = "";

        if (code != null) {
            for(ResultCode resultCode: values()) {
                if (code.equals(resultCode.getCode())) {
                    returnMsg = resultCode.getMsg();
                    break;
                }
            }
        }

        return returnMsg;
    }

}
